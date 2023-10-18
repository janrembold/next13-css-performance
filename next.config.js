/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "_static",
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
