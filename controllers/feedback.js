const express = require("express");
const router = express.Router();

//feedback.json
//feedback.js

router.get("/feedback", (req, res) => {
  res.render("feedback", {
    pageTitle: "Feedback",
    pageID: "feedback"
  });
});

module.exports = router;
