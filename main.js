document.getElementsByClassName("scoreStateCSS")[0].innerHTML = 0;
document.getElementsByClassName("scoreStateCSS")[1].innerHTML = 0;
document.getElementsByClassName("scoreStateCSS")[2].innerHTML = 0;
document.getElementsByClassName("scoreStateCSS")[3].innerHTML = 0;
var totalScore1 = document.getElementsByClassName("totalScore1");
var totalScore2 = document.getElementsByClassName("totalScore2");
var totalScore3 = document.getElementsByClassName("totalScore3");
var totalScore4 = document.getElementsByClassName("totalScore4");
function update() {
  var enterScoreP1 = document.getElementsByClassName("enterScore1");
  var enterScoreP2 = document.getElementsByClassName("enterScore2");
  var enterScoreP3 = document.getElementsByClassName("enterScore3");
  var enterScoreP4 = document.getElementsByClassName("enterScore4");

  if (enterScoreP1[0].value == "") {
    enterScoreP1[0].value = 0;
  }
  if (enterScoreP2[0].value == "") {
    enterScoreP2[0].value = 0;
  }
  if (enterScoreP3[0].value == "") {
    enterScoreP3[0].value = 0;
  }
  if (enterScoreP4[0].value == "") {
    enterScoreP4[0].value = 0;
  }
  totalScore1[0].value =
    parseInt(totalScore1[0].value) + parseInt(enterScoreP1[0].value);
  totalScore2[0].value =
    parseInt(totalScore2[0].value) + parseInt(enterScoreP2[0].value);
  totalScore3[0].value =
    parseInt(totalScore3[0].value) + parseInt(enterScoreP3[0].value);
  totalScore4[0].value =
    parseInt(totalScore4[0].value) + parseInt(enterScoreP4[0].value);

  let lastCore = {
    player1: {
      name: document.querySelector(".name1").value,
      score: totalScore1[0].value,
    },
    player2: {
      name: document.querySelector(".name2").value,
      score: totalScore2[0].value,
    },
    player3: {
      name: document.querySelector(".name3").value,
      score: totalScore2[0].value,
    },
    player4: {
      name: document.querySelector(".name4").value,
      score: totalScore4[0].value,
    },
  };
  saveData(lastCore);

  var tag1 = document.createElement("h2");
  var value1 = document.createTextNode(totalScore1[0].value);
  tag1.appendChild(value1);
  var element1 = document.getElementsByClassName("span1")[0];
  element1.appendChild(tag1);

  var tag2 = document.createElement("h2");
  var value2 = document.createTextNode(totalScore2[0].value);
  tag2.appendChild(value2);
  var element2 = document.getElementsByClassName("span2")[0];
  element2.appendChild(tag2);

  var tag3 = document.createElement("h2");
  var value3 = document.createTextNode(totalScore3[0].value);
  tag3.appendChild(value3);
  var element3 = document.getElementsByClassName("span3")[0];
  element3.appendChild(tag3);

  var tag4 = document.createElement("h2");
  var value4 = document.createTextNode(totalScore4[0].value);
  tag4.appendChild(value4);
  var element4 = document.getElementsByClassName("span4")[0];
  element4.appendChild(tag4);

  enterScoreP1[0].value = "";
  enterScoreP2[0].value = "";
  enterScoreP3[0].value = "";
  enterScoreP4[0].value = "";
  autoScroll();
}

const checkData = () => {
  let dataScore = getData("score-of-card-game");
  console.log("Dataaa", dataScore);
  if (dataScore) {
    setDataToUI(dataScore);
  }
};

const setDataToUI = (data) => {
  document.querySelector(".name1").value = data.player1.name;
  document.querySelector(".name2").value = data.player2.name;
  document.querySelector(".name3").value = data.player3.name;
  document.querySelector(".name4").value = data.player4.name;

  document.getElementsByClassName("scoreStateCSS")[0].innerHTML =
    data.player1.score;
  document.getElementsByClassName("scoreStateCSS")[1].innerHTML =
    data.player2.score;
  document.getElementsByClassName("scoreStateCSS")[2].innerHTML =
    data.player3.score;
  document.getElementsByClassName("scoreStateCSS")[3].innerHTML =
    data.player4.score;

  totalScore1[0].value = data.player1.score;
  totalScore2[0].value = data.player2.score;
  totalScore3[0].value = data.player3.score;
  totalScore4[0].value = data.player4.score;
};
const saveData = (dataObject) => {
  // Convert the object to a string using JSON.stringify()
  const jsonString = JSON.stringify(dataObject);

  // Save the string representation in local storage
  localStorage.setItem("score-of-card-game", jsonString);
};
const getData = (key) => {
  // Retrieve the string representation from local storage
  const storedJsonString = localStorage.getItem(key);

  // Convert the string back to an object using JSON.parse()
  const storedObject = JSON.parse(storedJsonString);
  return storedObject;
};
const updateData = () => {};
const removeData = () => {
  localStorage.removeItem("score-of-card-game");
  checkData();
  location.reload();
};
const autoScroll = () => {
  const element = document.querySelector(".content");
  element.scrollTop = element.scrollHeight;
};
checkData();
