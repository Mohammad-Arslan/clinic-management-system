import { cn } from "@/lib/utils";

export const Badge = ({ label, tone = "slate" }: { label: string; tone?: "green" | "amber" | "blue" | "slate" }) => {
  const color = {
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
    slate: "bg-slate-100 text-slate-700"
  }[tone];
  return <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", color)}>{label}</span>;
};
