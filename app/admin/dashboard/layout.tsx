"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/sidebar";
import { useApp } from "@/components/providers/app-provider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isAdminLoggedIn } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!isAdminLoggedIn) router.push("/admin/login");
  }, [isAdminLoggedIn, router]);

  if (!isAdminLoggedIn) return null;

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="min-h-screen flex-1 p-6">{children}</main>
    </div>
  );
}
