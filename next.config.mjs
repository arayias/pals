/** @type {import('next').NextConfig} */
let nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
};

nextConfig = {
  ...nextConfig,
  ...(process.env.NODE_ENV !== "production" && { cacheMaxMemorySize: 0 }),
};

export default nextConfig;
