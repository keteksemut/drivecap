/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              memo: true,
            }
          }
        ],
        as: '*.js',
      },
      '*.LICENSE': { loaders: [] },
      '*.txt': { loaders: [] },
    },
  },
};
export default nextConfig;
