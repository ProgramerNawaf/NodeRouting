const path = require("path");

const express = require("express");

const router = express.Router();

const root = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(root, "views", "users.html"));
});

module.exports = router;
