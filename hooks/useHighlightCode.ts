import { useControlsStore } from "@/lib/store";
import { allThemes } from "@/lib/themes";
import { useCallback, useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { useShallow } from "zustand/shallow";

export const useHighlightCode = () => {
  const { language, theme, code, formatting } = useControlsStore(
    useShallow((state) => {
      return {
        language: state.language,
        theme: state.theme,
        code: state.code,
        formatting: state.formatting,
      };
    }),
  );
  const [highlightedHtml, setHighlightedHtml] = useState("");

  const highlightCode = useCallback(
    async (codeToHighlight: string) => {
      if (!codeToHighlight) {
        setHighlightedHtml("");
        return;
      }

      try {
        const html = await codeToHtml(codeToHighlight, {
          lang: language.value,
          theme: allThemes.find((t) => t.displayName === theme)!,
        });
        setHighlightedHtml(html);
      } catch (error) {
        console.error("Error highlighting code: ", error);
      }
    },
    [language, theme],
  );

  useEffect(() => {
    if (code) {
      highlightCode(code);
    }
  }, [code, theme, highlightCode, formatting]);

  return { highlightCode, highlightedHtml };
};
