import Link from "next/link";
import { PageShell } from "@/components/public/page-shell";
import { Card } from "@/components/ui/card";
import { seedBlogs } from "@/lib/data";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Mental Health Insights</h1>
        <div className="mt-8 space-y-4">
          {seedBlogs.map((post) => (
            <Card key={post.id}>
              <p className="text-xs text-slate-500">{post.publishedAt}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-slate-600">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-600">Read full article</Link>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
