const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:5500',
      changeOrigin: true,
      router: {
        'http://localhost:5500': 'http://localhost:3000',
      },
    })
  );
  // app.use(
  //   '/auth/facebook',
  //   createProxyMiddleware({
  //     target: 'http://localhost:5500',
  //     changeOrigin: true,
  //   })
  // );
};
