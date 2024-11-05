import { useControlsStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const EditorFrame = (props: PropsWithChildren & { className?: string }) => {
  const fileName = useControlsStore((state) => state.fileName);
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden rounded-xl border bg-background/75 shadow-2xl backdrop-blur",
        props.className,
      )}
    >
      <header className="grid grid-cols-[0.5fr_1fr_0.5fr] p-3">
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ff5f57]"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ffbe45]"></div>
          <div className="h-3 w-3 rounded-full bg-[#00c94d]"></div>
        </div>
        <input
          spellCheck="false"
          autoCapitalize="off"
          defaultValue={fileName}
          placeholder="example.tsx"
          className="size-fit justify-self-center border-0 border-none bg-transparent p-0 text-center text-sm font-medium shadow-none outline-none focus:outline-none focus:ring-0 focus:placeholder:text-transparent"
        />
      </header>
      <div>{props.children}</div>
    </div>
  );
};

export default EditorFrame;
