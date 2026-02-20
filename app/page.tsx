"use client";

import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PageShell } from "@/components/public/page-shell";
import { seedBlogs, seedTestimonials } from "@/lib/data";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const testimonial = seedTestimonials[index % seedTestimonials.length];

  return (
    <PageShell>
      <section className="gradient-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-600">Private Psychological Care</p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900">Compassionate therapy that feels clinically grounded and personally safe.</h1>
            <p className="mt-4 text-slate-600">Dr. Kainat supports adults, couples, and professionals navigating anxiety, burnout, trauma, and relationship stress.</p>
            <Link href="/book-appointment" className="mt-8 inline-block rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white">Book Your Session</Link>
          </div>
          <Card>
            <h3 className="text-xl font-semibold">Why patients choose this clinic</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Evidence-based treatment plans with measurable goals.</li>
              <li>Confidential online and in-clinic sessions.</li>
              <li>Calm, non-judgmental therapeutic environment.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Individual Therapy",
            "Couples Counseling",
            "Burnout & Stress Recovery",
            "Trauma-Informed Therapy",
            "Anxiety Management",
            "Mindfulness Coaching"
          ].map((service) => (
            <Card key={service} className="text-sm font-medium text-slate-700">{service}</Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="gradient-surface">
          <h2 className="text-2xl font-bold">Patient Voices</h2>
          <p className="mt-4 text-slate-700">“{testimonial.feedback}”</p>
          <p className="mt-3 text-sm font-semibold text-slate-600">{testimonial.name} · {testimonial.role}</p>
          <button className="mt-5 text-sm font-semibold text-brand-600" onClick={() => setIndex((prev) => prev + 1)}>Next testimonial →</button>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Latest Insights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {seedBlogs.slice(0, 3).map((post) => (
            <Card key={post.id}>
              <p className="text-xs text-slate-500">{post.publishedAt}</p>
              <h3 className="mt-2 font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-600">Read article</Link>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
