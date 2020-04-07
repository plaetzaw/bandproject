const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.get("/socket", (req, res) => {
  res.render("socket", {});
});
