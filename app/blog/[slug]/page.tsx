import { notFound } from "next/navigation";
import { PageShell } from "@/components/public/page-shell";
import { seedBlogs } from "@/lib/data";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = seedBlogs.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">{post.publishedAt} · {post.author}</p>
        <h1 className="mt-3 text-3xl font-bold">{post.title}</h1>
        <p className="mt-6 leading-7 text-slate-700">{post.content}</p>
      </article>
    </PageShell>
  );
}
