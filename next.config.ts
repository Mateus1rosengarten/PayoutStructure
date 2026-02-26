import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true, // se você usa @emotion/react
  },
};

export default nextConfig;
