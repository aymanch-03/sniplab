"use client";
import { useControlsStore } from "@/lib/store";
import { domToBlob } from "modern-screenshot";
import { useCallback, useEffect, useRef, useState } from "react";

export enum ExportState {
  Idle = "idle",
  PreparingToDownload = "preparing",
  JustDownloaded = "downloaded",
}

export function useDownloadPNG() {
  const [exportState, setExportState] = useState<ExportState>(ExportState.Idle);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const downloadPNG = useCallback(async () => {
    const frame = document.querySelector<HTMLDivElement>("[data-editor-frame]");
    if (!frame) {
      console.error("No editor frame found");
      return;
    }

    setExportState(ExportState.PreparingToDownload);

    await new Promise((resolve) => setTimeout(resolve, 0));

    try {
      const blob = await domToBlob(frame, {
        scale: 4,
        width: frame.offsetWidth,
        height: frame.offsetHeight,
      });

      if (!blob) {
        console.error("No Blob generated");
        return;
      }

      const url = URL.createObjectURL(blob);
      console.log(url);
      const link = document.createElement("a");
      link.href = url;
      link.download = "snippet.png";
      link.click();

      URL.revokeObjectURL(url);

      setExportState(ExportState.JustDownloaded);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setExportState(ExportState.Idle);
      }, 1000);
    } catch (error) {
      console.error("Error downloading PNG:", error);
      setExportState(ExportState.Idle);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    downloadPNG,
    exportState,
  };
}
