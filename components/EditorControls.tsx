"use client";
import { BackgroundControl } from "@/components/controls/BackgroundSelect";
import { LanguageSelect } from "@/components/controls/LanguageSelect";
import { PaddingSelect } from "@/components/controls/PaddingSelect";
import { ThemeSelect } from "@/components/controls/ThemeSelect";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Github } from "lucide-react";
import { AnimatedLinks } from "./AnimatedLinks";

export function EditorControls() {
  return (
    <Sidebar variant="floating" className="z-40">
      <SidebarContent className="flex flex-col gap-6 p-4">
        <h1 className="bg-gradient-to-r from-indigo-600 via-indigo-200 to-indigo-600 bg-clip-text text-center text-2xl font-extrabold text-transparent">
          SnipLab
        </h1>
        <LanguageSelect />
        <ThemeSelect />
        <BackgroundControl />
        <PaddingSelect />
      </SidebarContent>
      <SidebarFooter className="group flex items-center justify-center p-4">
        <AnimatedLinks />
      </SidebarFooter>
    </Sidebar>
  );
}
