"use client";

import { useApp } from "@/components/providers/app-provider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function AppointmentsPage() {
  const { appointments, updateAppointment } = useApp();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Appointments</h1>
      <Card className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead><tr className="border-b text-left text-slate-500"><th className="py-2">Patient</th><th>Date</th><th>Status</th><th>Meet Link</th><th>Payment</th></tr></thead>
          <tbody>
            {appointments.map((item) => (
              <tr key={item.id} className="border-b align-top">
                <td className="py-2 font-medium">{item.patientName}</td>
                <td>{item.date} {item.time}</td>
                <td>
                  <select className="rounded-lg border p-1" value={item.status} onChange={(e) => updateAppointment(item.id, { status: e.target.value as typeof item.status })}>
                    <option>Pending</option><option>Confirmed</option><option>Completed</option>
                  </select>
                </td>
                <td>
                  <input className="rounded-lg border p-1" value={item.meetLink ?? ""} placeholder="Add link" onChange={(e) => updateAppointment(item.id, { meetLink: e.target.value })} />
                </td>
                <td>
                  <button className="text-xs" onClick={() => updateAppointment(item.id, { paymentVerified: !item.paymentVerified })}>
                    {item.paymentVerified ? <Badge label="Verified" tone="green" /> : <Badge label="Pending" tone="amber" />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
