var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ name: "Grzegorz", surname: "Sierocki" });
});

module.exports = router;
