import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Container({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto w-[min(calc(100%-2rem),75ch)] rounded-md px-6 py-8 shadow",
        props.className,
      )}
    >
      {children}
    </div>
  );
}
