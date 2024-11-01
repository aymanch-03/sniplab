"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { LANGUAGES } from "@/lib/languages";
import { useControlsStore } from "@/lib/store";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import EditorFrame from "./EditorFrame";
import ResizableFrame from "./ResizableFrame";

export function CodeFrame() {
  const [code, setCode] = useState("");
  const debouncedQuery = useDebounce(code, 500);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const [isLoadingLanguage, setIsLoadingLanguage] = useState<boolean>(false);
  const { language, theme, padding, highlighter } = useControlsStore();
  // useEffect(() => {
  //   console.log({ language, theme, padding });
  // }, [language, theme, padding]);

  useEffect(() => {
    const generateHighlightedHtml = async () => {
      if (!highlighter || !language || language === LANGUAGES.plaintext) {
        return code.replace(
          /[\u00A0-\u9999<>\&]/g,
          (i) => `&#${i.charCodeAt(0)};`,
        );
      }

      const loadedLanguages = highlighter.getLoadedLanguages() || [];
      const hasLoadedLanguage = loadedLanguages.includes(
        language.name.toLowerCase(),
      );

      if (!hasLoadedLanguage && language.src) {
        setIsLoadingLanguage(true);
        await highlighter.loadLanguage(language.src);
        setIsLoadingLanguage(false);
      }

      let lang = language.name.toLowerCase();
      if (lang === "typescript") {
        lang = "tsx";
      }

      return highlighter.codeToHtml(code, {
        lang: lang,
        theme: theme,
        // transformers: [
        //   {
        //     line(node, line) {
        //       node.properties["data-line"] = line;
        //       if (highlightedLines.includes(line))
        //         this.addClassToHast(node, "highlighted-line");
        //     },
        //   },
        // ],
      });
    };

    generateHighlightedHtml().then((newHtml) => {
      setHighlightedHtml(newHtml);
    });
  }, [
    code,
    language,
    highlighter,
    setIsLoadingLanguage,
    setHighlightedHtml,
    theme,
  ]);

  // useEffect(() => {
  //   console.log(debouncedQuery);
  //   console.log(highlightedHtml);
  // }, [debouncedQuery]);

  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (event) => {
      setCode(event.target.value);
    },
    [setCode],
  );

  return (
    <section className="mx-auto flex w-full flex-1 items-center justify-center overflow-x-auto p-4">
      <ResizableFrame>
        <EditorFrame>
          <textarea
            name="code"
            className="w-full resize-y border-none bg-transparent font-mono text-sm text-foreground focus:outline-none focus:ring-0"
            onChange={handleChange}
            id="code"
          ></textarea>
        </EditorFrame>
      </ResizableFrame>
    </section>
  );
}
