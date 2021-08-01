const rp = require("request-promise");
const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
  qs: {
    symbol: "BTC,ETH,XRP",
    convert: "EUR",
  },
  headers: {
    "X-CMC_PRO_API_KEY": "2939acfd-64b5-49f0-9993-3b8bd3c056f5",
  },
  json: true,
  gzip: true,
};

module.exports = rp(requestOptions);
