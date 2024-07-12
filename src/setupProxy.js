const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(`/api/v3/coins/${coinId}`, {
      target: "https://api.coingecko.com",
      changeOrigin: true,
    })
  );

  app.use(
    proxy(`/api/v3/coins/${coinId}/market_chart`, {
      target: "https://api.coingecko.com",
      changeOrigin: true,
    })
  );
};
