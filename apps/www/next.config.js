/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@gds/ui', '@gds/seo', '@gds/content', '@gds/analytics'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
