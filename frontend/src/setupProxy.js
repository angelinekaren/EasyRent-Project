const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/", {
      target: "https://easyrent-node-backend.herokuapp.com/",
      changeOrigin: true,
    })
  );
  app.use(
    "/face-match-liveness",
    createProxyMiddleware({
      target: "https://api.cloud.nodeflux.io/v1/analytics/face-match-liveness",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/ocr-ktp", {
      target: "https://api.cloud.nodeflux.io/v1/analytics",
      changeOrigin: true,
      headers: {
        Authorization: `NODEFLUX-HMAC-SHA256 Credential=${process.env.NODEFLUX_ACCESS_KEY}/${process.env.NODEFLUX_DATE}/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=${process.env.NODEFLUX_TOKEN}`,
        "x-nodeflux-timestamp": `${process.env.X_NODEFLUX_TIMESTAMP}`,
        "Content-Type": "application/json",
      },
    })
  );
};
