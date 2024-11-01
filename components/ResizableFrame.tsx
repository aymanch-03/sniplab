import { useControlsStore } from "@/lib/store";
import { ReactNode, useState } from "react";
import { Rnd, RndResizeCallback } from "react-rnd";

interface ResizableFrameProps {
  children: ReactNode;
}
const MIN_WIDTH = 520;
const MAX_WIDTH = 900;

const ResizableFrame: React.FC<ResizableFrameProps> = ({ children }) => {
  const [width, setWidth] = useState(MIN_WIDTH);
  const padding = useControlsStore((state) => state.padding);
  const centeredPositionX = `calc(50% - ${width / 2}px)`;

  const handleResize: RndResizeCallback = (
    e,
    direction,
    ref,
    delta,
    position,
  ) => {
    setWidth(ref.offsetWidth);
  };

  return (
    <Rnd
      data-editor-frame
      size={{ width, height: "auto" }}
      position={{ x: parseFloat(centeredPositionX), y: 0 }}
      bounds="parent"
      minWidth={MIN_WIDTH}
      maxWidth={MAX_WIDTH}
      disableDragging={true}
      onResize={handleResize}
      enableResizing={{
        top: false,
        right: true,
        bottom: false,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      style={{
        position: "relative",
        padding: padding + "px",
        height: "fit-content",
      }}
      className="border bg-background bg-gradient-to-br from-[#a68efb] to-[#e9bff8] transition-[padding] duration-300 max-sm:scale-75"
    >
      {children}
    </Rnd>
  );
};

export default ResizableFrame;
