import Link from "next/link";
import Image from "next/image";
import { blogPosts, projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">I’m Vivek!</h1>
            <div className="space-y-3">
              <h2 className="text-lg font-medium tracking-tight">I’m currently</h2>
              <ul className="list-disc pl-5 text-base/7 text-foreground/80 space-y-1">
                <li>
                  building <a href="https://asterisk.so/" target="_blank" rel="noreferrer" className="underline hover:no-underline">Asterisk</a> - on-prem coding and security agents
                </li>
                <li>
                  live coding with <a href="https://strudel.cc/" target="_blank" rel="noreferrer" className="underline hover:no-underline">strudel</a>
                </li>
                <li>other projects underway... (updating soon)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-medium tracking-tight">I’m excited about</h2>
              <ul className="list-disc pl-5 text-base/7 text-foreground/80 space-y-1">
                <li>making music</li>
                <li>drones (FPV and autonomous)</li>
                <li>nutrition science</li>
                <li>neuromechanics</li>
                <li>cats</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/vivek_landing_600.jpg"
              alt="Vivek portrait"
              width={600}
              height={600}
              className="rounded-lg border border-accent/30 w-auto h-auto max-w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Blog</h2>
          <Link href="/blog" className="text-sm">View all →</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {blogPosts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border border-accent/30 p-4 hover:bg-muted transition">
              <div className="text-sm text-foreground/60">{new Date(p.date).toLocaleDateString()}</div>
              <div className="font-medium mt-1">{p.title}</div>
              <p className="text-sm text-foreground/70 mt-1 line-clamp-3">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <Link href="/projects" className="text-sm">View all →</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {projects.slice(0, 3).map((proj) => (
            <a key={proj.name} href={proj.url} target="_blank" rel="noreferrer" className="rounded-lg border border-accent/30 p-4 hover:bg-muted transition block">
              <div className="font-medium">{proj.name}</div>
              <p className="text-sm text-foreground/70 mt-1 line-clamp-3">{proj.description}</p>
            </a>
          ))}
        </div>
      </section>

      
    </div>
  );
}
