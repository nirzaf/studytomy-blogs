/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle ESM modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'supports-color': require.resolve('supports-color'),
    };

    // Ignore the punycode deprecation warning
    config.ignoreWarnings = [
      {
        module: /node_modules\/punycode/,
      },
    ];

    return config;
  },
};

module.exports = nextConfig;
