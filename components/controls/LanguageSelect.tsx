"use client";

import { CaretSortIcon, CheckIcon, CodeIcon } from "@radix-ui/react-icons";
import * as React from "react";

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
import { LANGUAGES } from "@/lib/languages";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(LANGUAGES["typescript"].name);

  return (
    <div className="flex flex-col gap-2">
      <legend className="flex items-center gap-1.5 pl-1 text-sm font-medium">
        <CodeIcon className="text-indigo-300" />
        <span>Language</span>
      </legend>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? Object.values(LANGUAGES).find((lang) => lang.name === value)
                  ?.name
              : "Select language..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[206px] p-0">
          <Command className="bg-background">
            <CommandInput placeholder="Search language..." className="h-9" />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {Object.values(LANGUAGES).map((lang) => (
                  <CommandItem
                    key={lang.name}
                    value={lang.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {lang.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === lang.name ? "opacity-100" : "opacity-0",
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
