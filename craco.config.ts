/* eslint-disable import/no-anonymous-default-export */
export default {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          url: false,
          zlib: false,
          https: false,
          http: false,
          stream: false,
          crypto: false,
          path: false,
        },
      },
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
};
