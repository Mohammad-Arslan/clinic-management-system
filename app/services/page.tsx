import { PageShell } from "@/components/public/page-shell";
import { Card } from "@/components/ui/card";

const services = [
  "Individual Adult Therapy",
  "Couples & Relationship Therapy",
  "Anxiety & Panic Treatment",
  "Trauma-Informed Counseling",
  "Burnout Recovery Programs",
  "Online Therapy Sessions"
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Clinical Services</h1>
        <p className="mt-3 text-slate-600">Designed to support emotional clarity, resilience, and healthier relationships.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service}><h3 className="font-semibold">{service}</h3><p className="mt-2 text-sm text-slate-600">Tailored sessions with treatment goals, progress tracking, and practical coping tools.</p></Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
