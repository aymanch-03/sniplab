import { AnimatedTooltip } from "@/ui/animated-tooltip";
import React from "react";

export const AnimatedLinks = () => {
  return (
    <div className="flex gap-6">
      <AnimatedTooltip
        label="Github"
        className="text-sm font-medium transition-colors duration-300 ease-out"
        icon={"/icons/github-logo.svg"}
        href="https://github.com/aymanch-03/code-snippets"
        rotate={-3}
      />
      <AnimatedTooltip
        label="LinkedIn"
        icon={"/icons/linkedin-logo.svg"}
        className="text-sm font-medium transition-colors duration-300 ease-out"
        href="https://www.linkedin.com/in/ayman-echakar/"
        rotate={3}
      />
      <AnimatedTooltip
        label="Twitter"
        icon={"/icons/twitter-logo.svg"}
        className="text-sm font-medium transition-colors duration-300 ease-out"
        href="https://x.com/devvayman"
        rotate={-3}
      />
    </div>
  );
};
