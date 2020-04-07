const express = require("express");
const app = express();
const http = require("http").Server(app);
// const io = require("socket.io")(http);

//public
app.use(express.static("public"));

//views
app.set("view engine", "ejs");
//index.ejs
//speakers.ejs

//set routes
app.use(require("./controllers/index"));
app.use(require("./controllers/albums"));
app.use(require("./controllers/feedback"));
app.use(require("./controllers/api"));
// app.use(require("./controllers/socket"));

//index.js
//speakers
// io.on("connection", socket => {
//   console.log("user is connected");
//   socket.on("chatMessage", msg => {});
//   io.emit("chat message", "hello");
// });

// http.listen(3000, () => {
//   console.log("listening on port 3000");
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
