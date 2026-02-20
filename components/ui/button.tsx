import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Button = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      "rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-500 disabled:opacity-50",
      className
    )}
    {...props}
  />
);
