import { PageShell } from "@/components/public/page-shell";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">About Dr. Kainat</h1>
        <p className="mt-4 text-slate-600">Dr. Kainat is a Clinical Psychologist focused on anxiety care, trauma recovery, and emotionally sustainable performance for professionals and families.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card><h3 className="font-semibold">Therapeutic Style</h3><p className="mt-2 text-sm text-slate-600">Warm, structured, and evidence-informed. Each session balances empathy with practical tools.</p></Card>
          <Card><h3 className="font-semibold">Clinical Promise</h3><p className="mt-2 text-sm text-slate-600">Confidentiality, measurable progress, and a calm space where healing feels safe.</p></Card>
        </div>
      </section>
    </PageShell>
  );
}
