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
};
