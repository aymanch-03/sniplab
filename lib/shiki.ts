import { chalkistThemes, portedThemes, shikiThemes } from "@/lib/themes";
import { useEffect, useState } from "react";
import {
  type HighlighterCore,
  createHighlighterCore,
  createOnigurumaEngine,
} from "shiki";

// Create engine outside of hook to ensure it's only created once
const engine = createOnigurumaEngine(import("shiki/wasm"));

// Combine themes
const themes = [
  ...chalkistThemes,
  ...portedThemes,
  ...shikiThemes.map((theme) => theme.import),
];

// Create a singleton instance to avoid multiple initializations
let shikiInstance: HighlighterCore | null = null;

export function useShiki() {
  const [shiki, setShiki] = useState<HighlighterCore | null>(null);

  useEffect(() => {
    // Initialize shiki if not already done
    const initShiki = async () => {
      if (!shikiInstance) {
        shikiInstance = await createHighlighterCore({
          engine,
          themes,
        });
      }
      setShiki(shikiInstance);
    };

    initShiki().catch(console.error);

    // No cleanup needed as we want to keep the singleton instance
  }, []); // Empty dependency array as we only want to run this once

  return shiki;
}

// Optional: Add a type guard helper
export function isShikiInitialized(
  shiki: HighlighterCore | null,
): shiki is HighlighterCore {
  return shiki !== null;
}
