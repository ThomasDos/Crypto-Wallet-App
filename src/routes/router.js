const express = require("express");
const router = express.Router();
//Routes
const testRoute = require("./test_route");
//Router
router.use(testRoute);

module.exports = router;
