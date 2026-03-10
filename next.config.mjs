/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nba.randomnbaplayergenerator.net",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
