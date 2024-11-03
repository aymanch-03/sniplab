import { useToast } from "@/hooks/use-toast";
import { useHighlightCode } from "@/hooks/useHighlightCode";
import formatCode from "@/lib/formatCode";
import { useControlsStore } from "@/lib/store";
import { Button } from "@/ui/button";
import { Loader2, WandSparkles } from "lucide-react";
import React, { useCallback } from "react";
import { useShallow } from "zustand/shallow";

export const FormatButton = () => {
  const { toast } = useToast();
  const { highlightCode } = useHighlightCode();

  const { code, language, formatting, setCode, setFormatting } =
    useControlsStore(
      useShallow((state) => {
        return {
          code: state.code,
          language: state.language,
          formatting: state.formatting,
          setCode: state.setCode,
          setFormatting: state.setFormatting,
        };
      }),
    );

  const handleFormat = useCallback(async () => {
    if (formatting || !code.trim()) {
      throw Error("Error formatting code");
    }

    try {
      console.log("Currently formatting code...");
      setFormatting(true);
      const formattedCode = await formatCode(code, language);
      setCode(formattedCode);

      await highlightCode(formattedCode);

      toast({
        title: "Code formatted successfully",
      });
    } catch (error) {
      toast({
        title: "Error formatting code",
        description: "Please try again or check your code syntax",
      });
    } finally {
      setFormatting(false);
    }
  }, [
    code,
    language,
    formatting,
    setFormatting,
    setCode,
    highlightCode,
    toast,
  ]);

  return (
    <Button
      onClick={handleFormat}
      disabled={formatting || !code.trim()}
      className="flex items-center justify-center gap-2 border-red-400 bg-red-600/20 font-bold text-red-400 shadow-[inset_0_0_0_1px_#991b1baa] hover:bg-red-600/25 hover:ring-red-800"
    >
      {formatting ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <WandSparkles size={16} />
      )}
      <span>{formatting ? "Formatting..." : "Format code"}</span>
    </Button>
  );
};
