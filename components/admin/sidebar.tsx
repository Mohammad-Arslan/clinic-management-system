"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Calendar, CreditCard, LayoutDashboard, LogOut, NotebookPen, Users } from "lucide-react";
import { useApp } from "@/components/providers/app-provider";

const nav = [
  { href: "/admin/dashboard/overview", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/dashboard/patients", label: "Patients", icon: Users },
  { href: "/admin/dashboard/appointments", label: "Appointments", icon: Calendar },
  { href: "/admin/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/dashboard/blog", label: "Blog", icon: NotebookPen }
];

export const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useApp();

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white p-4">
      <p className="mb-8 px-2 text-lg font-bold text-brand-900">Kainat Admin</p>
      <nav className="space-y-2">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium ${active ? "bg-brand-100 text-brand-900" : "text-slate-600 hover:bg-slate-100"}`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button
        className="mt-auto flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-500 hover:bg-slate-100"
        onClick={() => {
          logout();
          router.push("/admin/login");
        }}
      >
        <LogOut className="h-4 w-4" /> Logout
      </button>
    </aside>
  );
};
