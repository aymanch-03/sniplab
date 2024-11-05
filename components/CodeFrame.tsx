"use client";
import { useHighlightCode } from "@/hooks/useHighlightCode";
import {
  handleBracketClose,
  handleEnter,
  handleTab,
} from "@/lib/editorHelpers";
import formatCode from "@/lib/formatCode";
import { LANGUAGES } from "@/lib/languages";
import { useControlsStore } from "@/lib/store";
import React, { useCallback, useEffect, useRef } from "react";
import EditorFrame from "./EditorFrame";
import ResizableFrame from "./ResizableFrame";

export const CodeFrame = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightedDivRef = useRef<HTMLDivElement>(null);
  const code = useControlsStore((state) => state.code);
  const setCode = useControlsStore((state) => state.setCode);
  const formatting = useControlsStore((state) => state.formatting);
  const { highlightedHtml, highlightCode } = useHighlightCode();

  const handleChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newCode = event.target.value;
    setCode(newCode);
    await highlightCode(newCode);
  };

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    const highlightedDiv = highlightedDivRef.current;

    if (textarea && highlightedDiv) {
      textarea.style.height = "auto";
      highlightedDiv.style.height = "auto";

      const maxHeight = Math.max(
        textarea.scrollHeight,
        highlightedDiv.scrollHeight,
      );

      textarea.style.height = `${maxHeight}px`;
      highlightedDiv.style.height = `${maxHeight}px`;
    }
  }, []);

  useEffect(() => {
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [code, adjustHeight, formatting]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const textarea = event.currentTarget;

      if (event.key === "Tab") {
        event.preventDefault();
        handleTab(textarea, event.shiftKey);
      } else if (event.key === "Enter") {
        event.preventDefault();
        handleEnter(textarea);
      } else if (event.key === "}") {
        event.preventDefault();
        handleBracketClose(textarea);
      }

      setCode(textarea.value);
    },
    [],
  );

  useEffect(() => {
    textareaRef.current?.focus();
    if (!code.trim()) {
      setCode(`interface CodeSnippetProps { 
  title: string; 
  language: string; 
  code: string; 
  description?: string;
}`);
    }
  }, []);

  return (
    <section className="mx-auto flex w-full flex-1 items-center justify-center overflow-hidden p-4 md:overflow-auto">
      <ResizableFrame>
        <EditorFrame className="no-scrollbar relative">
          <div
            ref={highlightedDivRef}
            className="no-scrollbar absolute top-11 z-0 w-full max-w-full whitespace-pre-wrap bg-transparent p-3 pt-0 font-mono text-sm leading-7 [&pre]:bg-transparent"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
          <textarea
            name="code"
            className="no-scrollbar relative z-[2] min-h-[60px] w-[-webkit-fill-available] select-none resize-none border-none bg-transparent px-3 pb-3 font-mono text-sm leading-7 text-transparent caret-white focus:outline-none focus:ring-0"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={textareaRef}
            value={code}
            id="code"
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
          />
        </EditorFrame>
      </ResizableFrame>
    </section>
  );
};
