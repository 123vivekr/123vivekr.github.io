import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <div className="grid gap-3">
        {projects.map((proj) => (
          <a key={proj.name} href={proj.url} target="_blank" rel="noreferrer" className="rounded-lg border border-accent/30 p-4 hover:bg-muted transition block">
            <div className="font-medium">{proj.name}</div>
            <p className="text-sm text-foreground/70 mt-1">{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
