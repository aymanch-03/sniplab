"use client";
import { LanguageSelect } from "@/components/controls/LanguageSelect";
import { ThemeSelect } from "@/components/controls/ThemeSelect";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { PaddingSelect } from "./controls/PaddingSelect";

export function EditorControls() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="p-4">
        <h1 className="text-center text-base font-semibold">Settings</h1>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-6 p-4">
        <LanguageSelect />
        <ThemeSelect />
        <PaddingSelect />
      </SidebarContent>
    </Sidebar>
  );
}
