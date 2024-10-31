import { PanelRightOpen } from "lucide-react";
import React from "react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type Props = {
  toggleSidebar: () => void;
};

export const SidebarTrigger = ({ toggleSidebar }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleSidebar}
            className="w-fit border-zinc-400 bg-zinc-600/20 p-2 text-zinc-400 shadow-[inset_0_0_0_1px_rgb(82,82,91)] hover:bg-zinc-600/25 hover:ring-zinc-800"
          >
            <PanelRightOpen size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          sideOffset={15}
          side="right"
          className="border-zinc-400 bg-zinc-600/20 font-bold text-zinc-400 shadow-[inset_0_0_0_1px_rgb(82,82,91)]"
        >
          <p>Toggle sidebar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
