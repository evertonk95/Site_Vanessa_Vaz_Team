/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Projetos',
    images: {
        unoptimized: true,
    },
    // Security Headers for Next.js are typically handled in middleware or next.config.js (headers key)
    // However, 'output: export' does not support 'headers' key for static files directly served by GH Pages without extra config.
    // We will rely on meta tags for CSP where possible, or blocking instructions in README for host config.
    // Although minimal headers can be simulated with <meta> tags in Layout.
};

export default nextConfig;
