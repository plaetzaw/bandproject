const express = require("express");
const app = express();

//public
app.use(express.static("public"));

//views
app.set("view engine", "ejs");
//index.ejs
//speakers.ejs

//set routes
app.use(require("./controllers/index"));
app.use(require("./controllers/albums"));
//index.js
//speakers

app.listen(3000, () => {
  console.log("listening on port 3000");
});
