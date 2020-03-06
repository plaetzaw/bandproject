//find form

let form = document.querySelector(".feedback-form");
//attach  event listeniner

form.addEventListener("submit", e => {
  //prevents form from submittting normally
  e.preventDefault();

  //make api call to server
  let name = document.querySelector("#feedback-form-name");
  let title = document.querySelector("#feedback-form-title");
  let message = document.querySelector("#feedback-form-message");

  //makes a javasccript object
  let data = {
    name: name.value,
    title: title.value,
    message: message.value
  };

  fetch("/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    //body holds data after being setnt. JSOn stringify because the data being sent is a JS object, so we need to convert it to a JSON
    body: JSON.stringify(data)
  })
    //takes reponse from the request
    .then(response => {
      //converts response back to js object with reponse.json()
      return response.json();
    })
    .then(feedbackData => {
      //array of objects
      console.log(feedbackData);
      updateFeedback(feedbackData);
      // [{}, {}, {}]
    });
});

let setUp = () => {
  fetch("/api")
    .then(response => {
      return response.json();
    })
    .then(feedbackData => {
      updateFeedback(feedbackData);
    });
};
let updateFeedback = feedbackData => {
  let output = "";
  feedbackData.forEach((item, key) => {
    output += '     <div class="feedback-item item-list media-list">';
    output += '       <div class="feedback-item media">';
    output +=
      '       <div class="media-left"><button width="100px" height="400px" class="feedback-delete btn btn-xs btn-danger"><span id="' +
      key +
      '" class="glyphicon glyphicon-remove"></span></button></div>';
    output += '         <div class="feedback-info media-body">';
    output += '           <div class="feedback-head">';
    output +=
      '             <div class="feedback-title">' +
      item.title +
      ' <small class="feedback-name label label-info">' +
      item.name +
      "</small></div>";
    output += "           </div>";
    output +=
      '           <div class="feedback-message">' + item.message + "</div>";
    output += "         </div>";
    output += "       </div>";
    output += "     </div>";
  });
  let updateCodeBlock = document.querySelector(".feedback-messages");
  updateCodeBlock.innerHTML = output;
};

document.querySelector(".feedback-messages").addEventListener("click", e => {
  console.log(e.target.querySelector("span"));
  if (
    e.target.querySelector("span").className == "glyphicon glyphicon-remove"
  ) {
    //fetch with delete method
    //api/0  //api/1
    fetch("/api/" + e.target.querySelector("span").id, {
      method: "DELETE"
    })
      .then(response => {
        return response.json();
      })
      .then(feedBackData => {
        updateFeedback(feedBackData);
      });
  }
});

setUp();
