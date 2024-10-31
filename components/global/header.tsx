"use client";
import ExportButton from "@/components/global/exportButton";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/ui/sidebar";
import { SidebarTrigger } from "@/ui/sidebar-trigger";
import { useEffect } from "react";

export const Header = () => {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <header className="border-b">
      <div
        data-editor-frame
        className={cn(
          "container mx-auto flex items-center justify-between px-4 py-2.5",
          !isMobile && "justify-end",
        )}
      >
        {isMobile && <SidebarTrigger toggleSidebar={toggleSidebar} />}
        <ExportButton />
      </div>
    </header>
  );
};
