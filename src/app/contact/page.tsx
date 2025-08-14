export default function ContactPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <ul className="text-sm text-foreground/80 space-y-2">
        <li>
          Email: <a className="underline" href="mailto:hey@vivekr.dev">hey@vivekr.dev</a>
        </li>
        <li>
          GitHub: <a className="underline" href="https://github.com/123vivekr" target="_blank" rel="noreferrer">@123vivekr</a>
        </li>
        <li>
          Twitter: <a className="underline" href="https://twitter.com/theroyalkonkani" target="_blank" rel="noreferrer">@theroyalkonkani</a>
        </li>
        <li>
          LinkedIn: <a className="underline" href="https://www.linkedin.com/in/123vivekr/" target="_blank" rel="noreferrer">in/123vivekr</a>
        </li>
      </ul>
    </section>
  );
}
