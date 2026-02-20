"use client";

import { Card } from "@/components/ui/card";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { useApp } from "@/components/providers/app-provider";
import { seedRevenue } from "@/lib/data";
import { currency } from "@/lib/utils";

export default function OverviewPage() {
  const { patients, appointments, payments } = useApp();
  const upcoming = appointments.filter((a) => a.status !== "Completed").length;
  const monthlyRevenue = payments.reduce((sum, item) => sum + item.amount, 0);
  const pendingPayments = payments.filter((item) => item.status === "Pending").length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <Card><p className="text-sm text-slate-500">Total Patients</p><p className="mt-2 text-3xl font-bold">{patients.length}</p></Card>
        <Card><p className="text-sm text-slate-500">Upcoming Sessions</p><p className="mt-2 text-3xl font-bold">{upcoming}</p></Card>
        <Card><p className="text-sm text-slate-500">Monthly Revenue</p><p className="mt-2 text-3xl font-bold">{currency(monthlyRevenue)}</p></Card>
        <Card><p className="text-sm text-slate-500">Pending Payments</p><p className="mt-2 text-3xl font-bold">{pendingPayments}</p></Card>
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Revenue Trend</h2>
        <RevenueChart data={seedRevenue} />
      </Card>
    </div>
  );
}
