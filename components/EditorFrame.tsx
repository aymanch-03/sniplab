import { useControlsStore } from "@/lib/store";
import React, { PropsWithChildren } from "react";
import { Input } from "./ui/input";

const EditorFrame = (props: PropsWithChildren) => {
  const fileName = useControlsStore((state) => state.fileName);
  return (
    <div className="h-full w-full overflow-hidden rounded-xl border bg-background/75 backdrop-blur">
      <header className="grid grid-cols-[0.5fr_1fr_0.5fr] p-3">
        <div className="flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ff5f57]"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ffbe45]"></div>
          <div className="h-3 w-3 rounded-full bg-[#00c94d]"></div>
        </div>
        <input
          defaultValue={fileName}
          placeholder="example.tsx"
          className="size-fit justify-self-center border-0 border-none bg-transparent p-0 text-center text-sm font-medium shadow-none outline-none focus:outline-none focus:ring-0"
        />
      </header>
      <div className="p-3 pt-0">{props.children}</div>
    </div>
  );
};

export default EditorFrame;
