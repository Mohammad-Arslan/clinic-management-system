"use client";

import { FormEvent, useState } from "react";
import { useApp } from "@/components/providers/app-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Patient } from "@/types";

export default function PatientsPage() {
  const { patients, addPatient } = useApp();
  const [selected, setSelected] = useState<Patient | null>(null);

  const onAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    addPatient({
      fullName: String(form.get("fullName")),
      age: Number(form.get("age")),
      gender: form.get("gender") as Patient["gender"],
      phone: String(form.get("phone")),
      email: String(form.get("email")),
      concern: String(form.get("concern")),
      lastVisit: new Date().toISOString().slice(0, 10)
    });
    e.currentTarget.reset();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Patient Management</h1>
      <Card>
        <form onSubmit={onAdd} className="grid gap-3 md:grid-cols-4">
          <input required name="fullName" placeholder="Full Name" className="rounded-xl border p-2" />
          <input required name="age" type="number" placeholder="Age" className="rounded-xl border p-2" />
          <select name="gender" className="rounded-xl border p-2"><option>Female</option><option>Male</option><option>Other</option></select>
          <input required name="phone" placeholder="Phone" className="rounded-xl border p-2" />
          <input required name="email" type="email" placeholder="Email" className="rounded-xl border p-2" />
          <input required name="concern" placeholder="Primary Concern" className="rounded-xl border p-2 md:col-span-2" />
          <Button type="submit">Add Patient</Button>
        </form>
      </Card>
      <Card className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead><tr className="border-b text-left text-slate-500"><th className="py-2">Name</th><th>Concern</th><th>Last Visit</th><th/></tr></thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b"><td className="py-2 font-medium">{patient.fullName}</td><td>{patient.concern}</td><td>{patient.lastVisit}</td><td><button className="text-brand-600" onClick={() => setSelected(patient)}>View</button></td></tr>
            ))}
          </tbody>
        </table>
      </Card>
      {selected && (
        <div className="fixed inset-0 grid place-items-center bg-slate-900/40 p-4" onClick={() => setSelected(null)}>
          <Card className="w-full max-w-lg" >
            <h3 className="text-xl font-semibold">{selected.fullName}</h3>
            <p className="mt-2 text-sm text-slate-600">{selected.email} · {selected.phone}</p>
            <p className="mt-2 text-sm">Concern: {selected.concern}</p>
          </Card>
        </div>
      )}
    </div>
  );
}
