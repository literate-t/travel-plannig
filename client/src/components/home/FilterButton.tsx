import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

interface Props {
  active: boolean;
}

export default function FilterButton({
  className,
  children,
  active,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      className={cn(
        "text-20 border-b-3 p-14",
        {
          "border-b-main text-main tefont-semibold": active,
          "border-b-transparent text-gray-300 font-medium": !active,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
