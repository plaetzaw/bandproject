const express = require("express");
const router = express.Router();
let data = require("../data/data.json");

router.get("/albums/:albumid", (req, res) => {
  let pageTitle = [];
  let pageShortName = [];
  let pageSummary = [];
  let pageReleaseDate = [];
  let pageCertification = [];
  let pageSales = [];
  let pageTracklist = [];
  let pageArt = [];

  data.albums.forEach(albumObj => {
    if ((albumObj.shortname = req.param("albumid"))) {
      pageTitle.push(albumObj.title);
      pageShortName.push(albumObj).shortname;
      pageSummary.push(albumObj.summary);
      pageSales.push(albumObj.sales);
      pageReleaseDate.push(albumObj.releasedate);
      pageTracklist.push(albumObj.tracklist);
      pageArt = pageArt.concat(albumObj.artwork);
      pageCertification = pageCertification.concat(albumObj.certifications);
    }
  });
  res.render("albums", {
    pageTitle: pageTitle,
    pageShortName: pageShortName,
    pageSummary: pageSummary,
    pageReleaseDate: pageReleaseDate,
    pageSales: pageSales,
    pageArt: pageArt,
    pageCertification: pageCertification,
    pageTracklist: pageTracklist
  });
  console.log(pageSales);
  console.log(pageReleaseDate);
  console.log(pageArt);
  console.log(pageCertification);
  console.log(pageTracklist);
});

module.exports = router;
