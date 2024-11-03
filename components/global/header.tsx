"use client";
import ExportButton from "@/components/global/exportButton";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/ui/sidebar";
import { SidebarTrigger } from "@/ui/sidebar-trigger";
import { FormatButton } from "./formatButton";

export const Header = () => {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <header className="border-b">
      <div
        className={cn(
          "container mx-auto flex items-center justify-between px-4 py-2.5",
          !isMobile && "justify-end",
        )}
      >
        {isMobile && <SidebarTrigger toggleSidebar={toggleSidebar} />}
        <div className="flex items-center justify-end gap-3">
          <FormatButton />
          <ExportButton />
        </div>
      </div>
    </header>
  );
};
