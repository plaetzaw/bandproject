const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

let feedbackData = require("../data/feedback.json");
const fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/api", (req, res) => {
  res.send("json data");
});

router.post("/api", (req, res) => {
  //take data from file

  feedbackData.unshift(req.body);
  fs.writeFile(
    "/data/feedback.json",
    JSON.stringify(feedbackData),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
      res.json(feedbackData);
      console.log(feedbackData);
    }
  );

  res.json({
    testing: "json data"
  });
});

module.exports = router;
