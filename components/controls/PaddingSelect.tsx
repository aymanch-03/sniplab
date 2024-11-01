import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PADDING_OPTIONS } from "@/lib/padding";
import { useControlsStore } from "@/lib/store";
import { PaddingIcon } from "@radix-ui/react-icons";

export function PaddingSelect() {
  const padding = useControlsStore((state) => state.padding);
  const setValue = useControlsStore((state) => state.setPadding);

  return (
    <div className="flex flex-col gap-2">
      <legend className="flex items-center gap-1.5 pl-1 text-sm font-medium">
        <PaddingIcon className="text-indigo-300" />
        <span>Padding</span>
      </legend>
      <RadioGroup
        value={String(padding)}
        onValueChange={(value) => setValue(Number(value))}
        className="grid grid-cols-3 gap-2"
      >
        {PADDING_OPTIONS.map((opt) => (
          <label
            key={opt.name}
            className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input p-2 text-center shadow-sm shadow-black/[.04] ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
          >
            <RadioGroupItem
              id={opt.name}
              value={String(opt.value)}
              className="sr-only after:absolute after:inset-0"
            />
            <p className="text-sm font-medium leading-none text-foreground">
              {opt.name}
            </p>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
}
