"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/providers/app-provider";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const { login } = useApp();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ok = login(String(formData.get("email")), String(formData.get("password")));
    if (!ok) return setError("Invalid credentials.");
    router.push("/admin/dashboard/overview");
  };

  return (
    <main className="flex min-h-screen items-center justify-center gradient-surface p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="mt-1 text-sm text-slate-500">admin@kainatclinic.com / 123456</p>
        <input name="email" type="email" required placeholder="Email" className="mt-5 w-full rounded-xl border p-3" />
        <input name="password" type="password" required placeholder="Password" className="mt-3 w-full rounded-xl border p-3" />
        {error && <p className="mt-2 text-sm text-rose-600">{error}</p>}
        <Button className="mt-4 w-full" type="submit">Login</Button>
      </form>
    </main>
  );
}
