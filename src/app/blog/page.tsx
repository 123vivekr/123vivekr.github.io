import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <section className="space-y-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <div className="grid gap-3">
        {blogPosts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border border-accent/30 p-4 hover:bg-muted transition block">
            <div className="text-sm text-foreground/60">{new Date(p.date).toLocaleDateString()}</div>
            <div className="font-medium mt-1">{p.title}</div>
            <p className="text-sm text-foreground/70 mt-1">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
