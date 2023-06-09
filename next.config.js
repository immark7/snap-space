/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    unsplash: "Ch4jN_O3kqN0e0uERPA8_lHamJJi3mur_rh7Iz3FR9o",
  },
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
