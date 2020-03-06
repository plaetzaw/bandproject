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
  let pageBandMembers = [];
  let pageBandPics = [];

  data.albums.forEach(albumObj => {
    if (albumObj.shortname == req.param("albumid")) {
      pageTitle.push(albumObj.title);
      pageShortName.push(albumObj).shortname;
      pageSummary.push(albumObj.summary);
      pageSales.push(albumObj.sales);
      pageReleaseDate.push(albumObj.releasedate);
      pageTracklist.push(albumObj.tracklist);
      pageBandMembers = pageBandMembers.concat(albumObj.bandpics);
      pageArt = pageArt.concat(albumObj.artwork);
      pageBandPics = pageBandPics.concat(albumObj.bandpics);
      // pageCertification = pageCertification.concat(albumObj.certifications);
    }
  });

  res.render("albums", {
    pageTitle: pageTitle,
    pageShortName: pageShortName,
    pageSummary: pageSummary,
    pageReleaseDate: pageReleaseDate,
    pageSales: pageSales,
    pageArt: pageArt,
    // pageCertification: pageCertification,
    pageTracklist: pageTracklist,
    pageBandPics: pageBandPics,
    pageBandMembers: pageBandMembers
  });
  console.log(pageTitle);
  console.log(pageCertification);
  console.log(pageTracklist);
  console.log(pageBandMembers);
});

module.exports = router;
