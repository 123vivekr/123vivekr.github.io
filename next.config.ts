import type { NextConfig } from "next";

// Next.js config for static export suitable for GitHub Pages user site
// - output: 'export' generates a static site into `out/`
// - images.unoptimized avoids the Image Optimization server (required for export)
// - reactStrictMode enabled for better DX
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
