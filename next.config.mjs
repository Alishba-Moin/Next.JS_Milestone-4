/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      },
};

export default nextConfig;
