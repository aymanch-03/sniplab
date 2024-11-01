import type { Highlighter } from "shiki";
import { create } from "zustand";
import { Language, LANGUAGES } from "./languages";
import { PADDING_OPTIONS } from "./padding";
import { themeNames } from "./themes";

type ControlsStore = {
  language: Language;
  padding: number;
  theme: string;
  fileName: string;
  highlighter: Highlighter | null;
  setLanguage: (language: string) => void;
  setPadding: (padding: number) => void;
  setTheme: (themeName: string) => void;
  setFileName: (fileName: string) => void;
};

export const useControlsStore = create<ControlsStore>()((set) => ({
  language: LANGUAGES["shell"],
  setLanguage: (language) => set({ language: LANGUAGES[language] }),
  padding: PADDING_OPTIONS[4].value,
  setPadding: (padding: number) => set({ padding }),
  theme: themeNames[0].name,
  setTheme: (themeName: string) => set({ theme: themeName }),
  fileName: "example.tsx",
  setFileName: (fileName: string) => set({ fileName }),
  highlighter: null,
}));
