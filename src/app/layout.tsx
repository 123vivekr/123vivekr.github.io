import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek R | 123vivekr",
  description: "Vivek's home on the internet",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-accent/20">
          <nav className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-center">
            <div className="flex gap-4 text-sm">
              <Link href="/" className="font-semibold tracking-tight">
              ⾕
              </Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/projects" className="hover:underline">Projects</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-10">
          {children}
        </main>
        <footer className="mx-auto max-w-4xl px-4 py-10 text-xs text-accent/80">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Vivek R</span>
            <a
              href="https://github.com/123vivekr"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/123vivekr/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/veev3x"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/vee.v3x"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
