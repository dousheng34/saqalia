import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    output: 'standalone',
    eslint: {
          ignoreDuringBuilds: true,
    },
    typescript: {
          ignoreBuildErrors: true,
    },
    images: {
          domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
    },
    experimental: {
          optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
};

export default withNextIntl(nextConfig);
