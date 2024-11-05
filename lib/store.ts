import type { Highlighter } from "shiki";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Background, BackgroundEntry, Backgrounds } from "./backgrounds";
import { Language, LANGUAGES } from "./languages";
import { PADDING_OPTIONS } from "./padding";
import { themeNames } from "./themes";

type ControlsStore = {
  language: Language;
  padding: number;
  theme: string;
  fileName: string;
  code: string;
  background: BackgroundEntry;
  highlighter: Highlighter | null;
  formatting: boolean;
  setLanguage: (language: Language) => void;
  setPadding: (padding: number) => void;
  setTheme: (themeName: string) => void;
  setFileName: (fileName: string) => void;
  setCode: (code: string) => void;
  setFormatting: (formatting: boolean) => void;
  setBackground: (background: BackgroundEntry) => void;
};

export const useControlsStore = create<ControlsStore>()(
  persist(
    (set) => ({
      language: LANGUAGES["typescript"],
      padding: PADDING_OPTIONS[4].value,
      theme: themeNames[0].name,
      fileName: "example.tsx",
      highlighter: null,
      code: "",
      background: Object.values(Backgrounds)[0],
      formatting: false,
      setLanguage: (language) => set({ language }),
      setPadding: (padding) => set({ padding }),
      setTheme: (themeName) => set({ theme: themeName }),
      setFileName: (fileName) => set({ fileName }),
      setCode: (code) => set({ code }),
      setFormatting: (formatting) => set({ formatting }),
      setBackground: (background) => set({ background }),
    }),
    {
      name: "code-snippet",
    },
  ),
);
