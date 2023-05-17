const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/places/:path*",
        destination: "https://maps.googleapis.com/maps/api/place/:path*",
      },
    ];
  },
  async serverMiddleware() {
    this.app.use(
      "/api/places",
      createProxyMiddleware({
        target: "https://maps.googleapis.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api/places": "/maps/api/place",
        },
      })
    );
  },
};
