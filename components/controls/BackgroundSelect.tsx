import { Backgrounds } from "@/lib/backgrounds";
import { useControlsStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import {
  BlendingModeIcon,
  CaretSortIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useShallow } from "zustand/shallow";

export const BackgroundControl = () => {
  const [open, setOpen] = useState(false);
  const { background, setBackground } = useControlsStore(
    useShallow((state) => {
      return {
        background: state.background,
        setBackground: state.setBackground,
      };
    }),
  );

  return (
    <div className="flex flex-col gap-2">
      <legend className="flex items-center gap-1.5 pl-1 text-sm font-medium">
        <BlendingModeIcon className="text-indigo-300" />
        <span>Background</span>
      </legend>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            <div className="flex items-center justify-start gap-2">
              <span
                className={cn(
                  "aspect-square size-4 cursor-pointer rounded-md border",
                )}
                style={{
                  background: background.backgroundStyle.background,
                }}
              />
              <span>
                {Object.keys(Backgrounds).find(
                  (key) =>
                    Backgrounds[key].backgroundStyle.background ===
                    background.backgroundStyle.background,
                )}
              </span>
            </div>

            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[238px] p-0">
          <Command className="bg-background">
            <CommandInput placeholder="Search background..." className="h-9" />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {Object.entries(Backgrounds).map(([key, styles]) => (
                  <CommandItem
                    key={key}
                    value={key}
                    onSelect={(currentValue) => {
                      const selectedBackground = Object.entries(
                        Backgrounds,
                      ).find(([k]) => k === currentValue)![1];
                      setBackground(selectedBackground);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-start gap-2">
                      <span
                        className={cn(
                          "aspect-square size-4 cursor-pointer rounded-md",
                          styles.backgroundStyle.background ===
                            background.backgroundStyle.background &&
                            "ring-2 ring-indigo-500",
                        )}
                        style={{
                          background: styles.backgroundStyle.background,
                        }}
                      />
                      <span>{key}</span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        Object.keys(Backgrounds).find(
                          (key) =>
                            Backgrounds[key].backgroundStyle.background ===
                            background.backgroundStyle.background,
                        ) === key
                          ? "opacity-100"
                          : "opacity-0",
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
};
