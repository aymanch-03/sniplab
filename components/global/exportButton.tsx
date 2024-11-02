"use client";
import { ExportState, useDownloadPNG } from "@/hooks/useDownloadPNG";
import { useControlsStore } from "@/lib/store";
import { Button } from "@/ui/button";
import { Download, Loader2 } from "lucide-react";

const ExportButton: React.FC = () => {
  const { downloadPNG, exportState } = useDownloadPNG();

  return (
    <Button
      onClick={downloadPNG}
      disabled={exportState !== ExportState.Idle}
      className="flex items-center justify-center gap-2 border-indigo-400 bg-indigo-600/20 font-bold text-indigo-400 shadow-[inset_0_0_0_1px_#3730a3] hover:bg-indigo-600/25 hover:ring-indigo-800"
    >
      {exportState === ExportState.PreparingToDownload ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <Download size={16} />
      )}
      <span>
        {exportState === ExportState.PreparingToDownload
          ? "Downloading..."
          : exportState === ExportState.JustDownloaded
            ? "Downloaded"
            : "Download PNG"}
      </span>
    </Button>
  );
};

export default ExportButton;
