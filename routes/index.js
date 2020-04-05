var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", require("../public/javascripts/getNews"));

module.exports = router;
