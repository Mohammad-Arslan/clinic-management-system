import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-2xl border border-slate-100 bg-white p-6 shadow-soft", className)}>{children}</div>
);
