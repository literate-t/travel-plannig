import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

interface Props {
  variant?: "primary";
}

export default function Button({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      className={cn(
        color[variant],
        "text-16 font-medium rounded-6 py-14",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const color = {
  primary: "bg-black text-white disabled:bg-gray-200",
};
