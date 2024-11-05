import { useIsMobile } from "@/hooks/useMobile";
import formatCode, { formatterSupportedLanguages } from "@/lib/formatCode";
import { useControlsStore } from "@/lib/store";
import { Button } from "@/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Loader2, WandSparkles } from "lucide-react";
import { toast } from "sonner";

import { useShallow } from "zustand/shallow";

export const FormatButton = () => {
  const isMobile = useIsMobile();
  const {
    code,
    language: selectedLanguage,
    formatting,
    setCode,
    setFormatting,
    setLanguage,
  } = useControlsStore(
    useShallow((state) => {
      return {
        code: state.code,
        language: state.language,
        formatting: state.formatting,
        setCode: state.setCode,
        setFormatting: state.setFormatting,
        setLanguage: state.setLanguage,
      };
    }),
  );

  const handleFormatCode = async () => {
    if (!selectedLanguage) return;

    const { name } = selectedLanguage;
    const isSupportedLanguage = formatterSupportedLanguages.includes(
      name || "",
    );

    if (!isSupportedLanguage) {
      return toast.error("Formatting is not supported for this language");
    }
    if (!code) return;

    setFormatting(true);

    try {
      toast.promise(
        formatCode(code, selectedLanguage).then((formatted) => {
          setCode(formatted);
          setLanguage(selectedLanguage);
        }),
        {
          loading: "Formatting code...",
          success: "Formatted code!",
          error: (data) => (
            <div className="space-y-2 overflow-hidden">
              <p className="flex items-center gap-2 font-medium">
                <Cross1Icon className="text-red-400" />
                <span>Code formatting failed</span>
              </p>
              <pre className="scrollbar-hide w-full overflow-auto rounded bg-gray-100/10 p-2.5 text-xs">
                <code className="w-full">{data.message}</code>
              </pre>
            </div>
          ),
        },
      );
    } catch (error) {
      console.error("Code formatting error:", error);
    } finally {
      setFormatting(false);
    }
  };

  return (
    <Button
      onClick={handleFormatCode}
      disabled={formatting || !code.trim()}
      className="flex items-center justify-center gap-2 border-red-400 bg-red-600/20 font-bold text-red-400 shadow-[inset_0_0_0_1px_#991b1baa] hover:bg-red-600/25 hover:ring-red-800"
    >
      {formatting ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <WandSparkles size={16} />
      )}
      {isMobile ? null : (
        <span>{formatting ? "Formatting..." : "Format code"}</span>
      )}
    </Button>
  );
};
