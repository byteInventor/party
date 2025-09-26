/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    const webpack = require("webpack");

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: require.resolve("react"),
      })
    );

    return config;
  },
};

module.exports = nextConfig;
