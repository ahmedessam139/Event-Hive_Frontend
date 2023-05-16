const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://34.125.23.115:8000/api/:path*', // Replace with your backend URL
      },
    ];
  },
  async serverMiddleware() {
    const proxy = createProxyMiddleware('/api', {
      target: 'http://34.125.23.115:8000', // Replace with your backend URL
      changeOrigin: true,
      secure: false,
    });

    return {
      '/api': proxy,
    };
  },
};
