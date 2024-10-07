import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['plus.unsplash.com', 'images.unsplash.com'],
    },
};

export default withNextIntl(nextConfig);
