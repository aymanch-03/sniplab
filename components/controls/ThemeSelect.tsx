"use client";

import {
  CaretSortIcon,
  CheckIcon,
  ColorWheelIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useControlsStore } from "@/lib/store";
import { themeNames } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ThemeSelect() {
  const [open, setOpen] = useState(false);
  const themeName = useControlsStore((state) => state.theme);
  const setValue = useControlsStore((state) => state.setTheme);

  return (
    <div className="flex flex-col gap-1">
      <h1 className="flex items-center gap-1.5 pl-1 text-sm font-medium">
        <ColorWheelIcon className="text-indigo-300" />
        <span>Theme</span>
      </h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {themeName
              ? themeNames.find((theme) => theme.name === themeName)?.name
              : "Select theme..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[206px] p-0">
          <Command className="bg-background">
            <CommandInput placeholder="Search theme..." className="h-9" />
            <CommandList>
              <CommandEmpty>No theme found.</CommandEmpty>
              <CommandGroup>
                {themeNames.map((theme) => (
                  <CommandItem
                    key={theme.name}
                    value={theme.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                  >
                    {theme.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        themeName === theme.name ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
