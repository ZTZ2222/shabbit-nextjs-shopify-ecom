import { cn } from "@/lib/utils";
import React from "react";

type SeparatorProps = {
  className?: string;
};

const Separator = ({ className }: SeparatorProps = {}) => {
  return (
    <hr
      className={cn(
        "h-[1px] w-full self-center border-none bg-[#0000001F]",
        className,
      )}
    />
  );
};

export default Separator;
