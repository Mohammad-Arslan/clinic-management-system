"use client";

import { FormEvent, useState } from "react";
import { useApp } from "@/components/providers/app-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlogPost } from "@/types";

const emptyPost: BlogPost = {
  id: "",
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  author: "Dr. Kainat",
  publishedAt: new Date().toISOString().slice(0, 10),
  coverImage: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1000&q=80",
  tags: ["Mental Health"]
};

export default function BlogAdminPage() {
  const { blogs, saveBlog, deleteBlog } = useApp();
  const [editing, setEditing] = useState<BlogPost | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    saveBlog({
      ...(editing ?? emptyPost),
      title: String(form.get("title")),
      slug: String(form.get("slug")),
      excerpt: String(form.get("excerpt")),
      content: String(form.get("content"))
    });
    setEditing(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Button onClick={() => setEditing(emptyPost)}>Add Post</Button>
      </div>
      <div className="grid gap-4">
        {blogs.map((post) => (
          <Card key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{post.excerpt}</p>
            <div className="mt-3 flex gap-3 text-sm">
              <button className="text-brand-600" onClick={() => setEditing(post)}>Edit</button>
              <button className="text-rose-600" onClick={() => deleteBlog(post.id)}>Delete</button>
            </div>
          </Card>
        ))}
      </div>
      {editing && (
        <div className="fixed inset-0 grid place-items-center bg-slate-900/40 p-4">
          <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-3 rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold">{editing.id ? "Edit Post" : "Add Post"}</h2>
            <input name="title" defaultValue={editing.title} required placeholder="Title" className="w-full rounded-xl border p-2" />
            <input name="slug" defaultValue={editing.slug} required placeholder="Slug" className="w-full rounded-xl border p-2" />
            <input name="excerpt" defaultValue={editing.excerpt} required placeholder="Excerpt" className="w-full rounded-xl border p-2" />
            <textarea name="content" defaultValue={editing.content} required placeholder="Content" className="h-40 w-full rounded-xl border p-2" />
            <div className="flex gap-2">
              <Button type="submit">Save</Button>
              <Button type="button" className="bg-slate-200 text-slate-800 hover:bg-slate-300" onClick={() => setEditing(null)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
