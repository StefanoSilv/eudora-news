var express = require("express");
var router = express.Router();

/* GET home page. */
const news = require("../public/javascripts/getNews");

router.get("/", function(req, res, next) {
  res.render("index", { news: news });
});

module.exports = router;
