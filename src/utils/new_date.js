const { format } = require("date-fns");

module.exports = () => {
  return format(new Date(), "yyyy-MM-dd");
};
