"use client";

import { FormEvent, useState } from "react";
import { PageShell } from "@/components/public/page-shell";
import { Toast } from "@/components/ui/toast";
import { useApp } from "@/components/providers/app-provider";
import { Button } from "@/components/ui/button";

export default function BookAppointmentPage() {
  const { submitBooking } = useApp();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    submitBooking({
      fullName: String(formData.get("fullName")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      sessionType: formData.get("sessionType") as "Online" | "In-Clinic",
      date: String(formData.get("date")),
      time: String(formData.get("time"))
    });
    e.currentTarget.reset();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Book Appointment</h1>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <input required name="fullName" placeholder="Full Name" className="rounded-xl border p-3" />
          <input required name="email" type="email" placeholder="Email" className="rounded-xl border p-3" />
          <input required name="phone" placeholder="Phone" className="rounded-xl border p-3" />
          <select name="sessionType" className="rounded-xl border p-3"><option>Online</option><option>In-Clinic</option></select>
          <input required name="date" type="date" className="rounded-xl border p-3" />
          <select name="time" className="rounded-xl border p-3"><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>2:00 PM</option><option>4:00 PM</option></select>
          <input name="proof" type="file" className="rounded-xl border p-3" />
          <Button type="submit">Submit Appointment Request</Button>
        </form>
      </section>
      {success && <Toast message="Appointment request submitted successfully." />}
    </PageShell>
  );
}
