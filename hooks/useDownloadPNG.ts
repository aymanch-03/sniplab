"use client";
import { domToBlob } from "modern-screenshot";
import { useCallback, useEffect, useRef, useState } from "react";

// Define export state enum if not already defined
export enum ExportState {
  Idle = "idle",
  PreparingToDownload = "preparing",
  JustDownloaded = "downloaded",
}

export function useDownloadPNG() {
  const [exportState, setExportState] = useState<ExportState>(ExportState.Idle);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const downloadPNG = useCallback(async () => {
    // Find the editor frame
    const frame = document.querySelector<HTMLDivElement>("[data-editor-frame]");
    if (!frame) {
      console.error("No editor frame found");
      return;
    }

    // Update export state
    setExportState(ExportState.PreparingToDownload);

    // Wait for next render cycle
    await new Promise((resolve) => setTimeout(resolve, 0));

    try {
      // Generate blob from DOM
      const blob = await domToBlob(frame, {
        scale: 4,
        width: frame.offsetWidth,
        height: frame.offsetHeight,
      });

      if (!blob) {
        console.error("No Blob generated");
        return;
      }

      // Create and trigger download
      const url = URL.createObjectURL(blob);
      console.log(url);
      const link = document.createElement("a");
      link.href = url;
      link.download = "code-snippets.png";
      link.click();

      // Cleanup URL
      URL.revokeObjectURL(url);

      // Update state
      setExportState(ExportState.JustDownloaded);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Reset state after delay
      timeoutRef.current = setTimeout(() => {
        setExportState(ExportState.Idle);
      }, 1000);
    } catch (error) {
      console.error("Error downloading PNG:", error);
      setExportState(ExportState.Idle);
    }
  }, []);

  // Cleanup timeout on unmount
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
