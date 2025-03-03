/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ignora pacotes específicos no lado do cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        "@mapbox/node-pre-gyp": false,
      };
    }
    return config;
  },
};
