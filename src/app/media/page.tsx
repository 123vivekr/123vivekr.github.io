import { photos } from "@/lib/data";

export default function MediaPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Media</h1>
      <div className="grid gap-3 sm:grid-cols-3">
        {photos.map((ph, i) => (
          <figure key={i} className="overflow-hidden rounded-lg border border-accent/30">
            <img src={ph.src} alt={ph.alt} className="w-full h-48 object-cover" />
            <figcaption className="text-xs text-foreground/60 p-2">{ph.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
