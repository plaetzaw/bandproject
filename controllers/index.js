const express = require("express");
const router = express.Router();
let data = require("../data/data.json");

router.get("/", (req, res) => {
  let shortSums = [];
  let pageArt = [];
  data.albums.forEach(albumObj => {
    shortSums.push(albumObj.shortsummary);
    // console.log(albumObj.shortsummary);
  });
  data.albums.forEach(albumObj => {
    pageArt = pageArt.concat(albumObj.artwork);
    // console.log(albumObj.artwork);
  });
  //   console.log(shortSums[2]);
  //   console.log(pageArt);
  res.render("index", { albumIMG: pageArt, pageSUM: shortSums });
});

module.exports = router;
