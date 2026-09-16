/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root; a stray lockfile in the home directory otherwise
  // makes Turbopack treat all of ~ as the project and watch it
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["gsap", "@gsap/react"],
  },
};

export default nextConfig;
