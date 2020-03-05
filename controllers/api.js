const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
//data is brought into the file
let feedbackData = require("../data/feedback.json");
const fs = require("fs");

router.get("/api", (req, res) => {
  res.json(feedbackData);
});
//grabs form data from header (json)
router.use(bodyParser.urlencoded({ extended: false }));
//converts header string into a js object
router.use(bodyParser.json());

router.get("/api", (req, res) => {
  res.send("json data");
});

//PURPOSE: posting data from clientside form
router.post("/api", (req, res) => {
  console.log(req.body);
  //take data from file
  feedbackData.unshift(req.body);
  fs.writeFile(
    //writing to feedback.json
    "/data/feedback.json",
    //taking js to make it into a JSON (string) file
    JSON.stringify(feedbackData),
    "utf8",
    //error check
    err => {
      if (err) {
        console.log(err);
      }
      //feedbackData is js object, must be converted to json string
      //sends the result in json back to the clientside
      res.json(feedbackData);
      console.log(feedbackData);
    }
  );
});

//[{}, {}, {}]

router.delete("/api/:id", (req, res) => {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile(
    "data/feedback.json",
    JSON.stringify(feedbackData),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
      res.json(feedbackData);
    }
  );
});

module.exports = router;
