var express = require("express");
var router = express.Router();

/* GET home page. */

console.log(require("../public/javascripts/getNews"));

router.get("/", require("../public/javascripts/getNews"));

module.exports = router;
