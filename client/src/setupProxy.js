const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/v2",
    createProxyMiddleware({
      target: "http://whalsght.synology.me:8080",
      changeOrigin: true,
    })
  );
};
