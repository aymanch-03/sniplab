"use client";
import { BackgroundControl } from "@/components/controls/BackgroundSelect";
import { LanguageSelect } from "@/components/controls/LanguageSelect";
import { PaddingSelect } from "@/components/controls/PaddingSelect";
import { ThemeSelect } from "@/components/controls/ThemeSelect";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function EditorControls() {
  return (
    <Sidebar variant="floating" className="z-40">
      <SidebarHeader className="p-4">
        <h1 className="text-center text-base font-semibold">Settings</h1>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-6 p-4">
        <LanguageSelect />
        <ThemeSelect />
        <BackgroundControl />
        <PaddingSelect />
      </SidebarContent>
    </Sidebar>
  );
}
