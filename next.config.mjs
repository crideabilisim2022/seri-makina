/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/tr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tr/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;