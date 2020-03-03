let data = require("./data.json");

let releaseDates = [];

data.albums.forEach(albumObj => {
  releaseDates = releaseDates.concat(albumObj.releasedate);
  console.log(albumObj.summary);
});

console.log(releaseDates);

if (releaseDates.length > 0);

for (let i = 0; i < releaseDates.length; i++) {
  releaseDates[i];
}
