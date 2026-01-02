import cn from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function WideLayout({
  children,
  className,
}: PropsWithChildren<Props>) {
  return <div className={cn("w-full h-full", className)}>{children}</div>;
}
