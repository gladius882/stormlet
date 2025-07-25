import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  watchOptions: {
    pollIntervalMs: 1000,
  },
  webpack: (config, {isServer}) => {
    if(!isServer) {
      config.externals.push({
        'dockerode': 'commonjs dockerode',
        'ssh2': 'commonjs ssh2',
      });
    }
  }
};

export default nextConfig;
