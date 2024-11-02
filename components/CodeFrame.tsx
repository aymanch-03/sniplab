"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  handleBracketClose,
  handleEnter,
  handleTab,
} from "@/lib/editorHelpers";
import formatCode from "@/lib/formatCode";
import { useControlsStore } from "@/lib/store";
import { allThemes } from "@/lib/themes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { codeToHtml } from "shiki";
import EditorFrame from "./EditorFrame";
import ResizableFrame from "./ResizableFrame";

export const CodeFrame = () => {
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState("");
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const { language, theme } = useControlsStore();
  const [formatting, setFormatting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const highlightCode = useCallback(
    async (codeToHighlight: string) => {
      if (!codeToHighlight) return;

      try {
        setIsProcessing(true);
        const html = await codeToHtml(codeToHighlight, {
          lang: language.value,
          theme: allThemes.find((t) => t.displayName === theme)!,
        });
        setHighlightedHtml(html);
      } catch (error) {
        console.error("Error highlighting code: ", error);
      } finally {
        setIsProcessing(false);
      }
    },
    [language, theme],
  );

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newCode = event.target.value;
      setCode(newCode);
      await highlightCode(newCode);
    },
    [highlightCode],
  );

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [code, adjustHeight]);

  const handleFormat = async () => {
    if (formatting || !code.trim()) return;
    try {
      setFormatting(true);
      const formattedCode = await formatCode(code, language);
      console.log(formattedCode);
      setCode(formattedCode);

      // Automatically highlight the formatted code
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
  };

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

      // Update code state after any of these operations
      setCode(textarea.value);
    },
    [], // No dependencies needed since we're using the event.currentTarget
  );

  return (
    <section className="mx-auto flex w-full flex-1 items-center justify-center overflow-x-auto p-4">
      <Button
        onClick={handleFormat}
        disabled={formatting || !code.trim() || isProcessing}
        className="mr-4"
      >
        {formatting ? "Formatting..." : "Format code"}
      </Button>
      <ResizableFrame>
        <EditorFrame className="relative">
          <div
            className="absolute top-11 z-0 w-full whitespace-pre-wrap bg-transparent font-mono text-sm leading-7 [&pre]:bg-transparent"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
          <textarea
            name="code"
            className="relative z-[2] min-h-[60px] w-full select-none resize-none border-none bg-transparent font-mono text-sm leading-7 text-transparent caret-white focus:outline-none focus:ring-0"
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
