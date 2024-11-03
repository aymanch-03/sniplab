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
  code: string;
  highlighter: Highlighter | null;
  formatting: boolean;
  setLanguage: (language: Language) => void;
  setPadding: (padding: number) => void;
  setTheme: (themeName: string) => void;
  setFileName: (fileName: string) => void;
  setCode: (code: string) => void;
  setFormatting: (formatting: boolean) => void;
};

export const useControlsStore = create<ControlsStore>()((set) => ({
  language: LANGUAGES["typescript"],
  padding: PADDING_OPTIONS[4].value,
  theme: themeNames[0].name,
  fileName: "example.tsx",
  highlighter: null,
  code: "",
  formatting: false,
  setLanguage: (language: Language) => set({ language }),
  setPadding: (padding: number) => set({ padding }),
  setTheme: (themeName: string) => set({ theme: themeName }),
  setFileName: (fileName: string) => set({ fileName }),
  setCode: (code: string) => set({ code }),
  setFormatting: (formatting: boolean) => set({ formatting }),
}));
