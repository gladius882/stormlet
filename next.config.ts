import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  watchOptions: {
    pollIntervalMs: 1000,
  },
  webpack: (config, context) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    });
    return config;
  },
};

export default nextConfig;
