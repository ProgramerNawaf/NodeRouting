const path = require("path");

const express = require("express");

const router = express.Router();

const root = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = router;
