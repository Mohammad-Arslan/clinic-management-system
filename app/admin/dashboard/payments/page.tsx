"use client";

import { useApp } from "@/components/providers/app-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { currency } from "@/lib/utils";

export default function PaymentsPage() {
  const { payments, verifyPayment } = useApp();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Payment Tracking</h1>
      <Card className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead><tr className="border-b text-left text-slate-500"><th className="py-2">Patient</th><th>Amount</th><th>Date</th><th>Status</th><th/></tr></thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b">
                <td className="py-2 font-medium">{payment.patientName}</td>
                <td>{currency(payment.amount)}</td>
                <td>{payment.date}</td>
                <td>{payment.status === "Verified" ? <Badge label="Verified" tone="green" /> : <Badge label="Pending" tone="amber" />}</td>
                <td>{payment.status === "Pending" && <Button onClick={() => verifyPayment(payment.id)}>Verify</Button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
