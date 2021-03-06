const express = require("express");
const router = express.Router();
let data = require("../data/data.json");

// router.get("/socket", (req, res) => {
//   res.render("socket", {});
// });

router.get("/", (req, res) => {
  let shortSums = [];
  let pageArt = [];
  let pageShortName = [];
  let pageSummary = [];
  data.albums.forEach(albumObj => {
    shortSums.push(albumObj.shortsummary);
    pageShortName.push(albumObj.shortname);
    pageSummary.push(albumObj.summary);
  });
  data.albums.forEach(albumObj => {
    pageArt = pageArt.concat(albumObj.artwork);
    // pageCerts = pageCerts.concat(albumObj.certification);
    // console.log(albumObj.artwork);
  });
  //   console.log(shortSums[2]);
  //   console.log(pageArt);
  res.render("index", {
    albumIMG: pageArt,
    pageSUM: shortSums,
    pageShortName: pageShortName,
    pageSummary: pageSummary
    // pageCerts: pageCerts
  });
});

module.exports = router;
