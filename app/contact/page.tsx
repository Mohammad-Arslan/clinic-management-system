import { PageShell } from "@/components/public/page-shell";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Contact</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card><h3 className="font-semibold">Clinic</h3><p className="mt-2 text-sm text-slate-600">Gulberg III, Lahore<br/>Mon-Sat, 10:00 AM - 7:00 PM</p></Card>
          <Card><h3 className="font-semibold">Reach Out</h3><p className="mt-2 text-sm text-slate-600">+92 300 1000000<br/>hello@kainatclinic.com</p></Card>
        </div>
      </section>
    </PageShell>
  );
}
