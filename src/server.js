const app = require("./configs/app");

//Fetch API CMC and update DB
require("./utils/fetch_crypto_and_update")(); //* Check if it has updated today
require("./utils/fetch_crypto_scheduled")(); //* Program the schedule > everyday at midnight

//Server
require("./configs/server")(app);
