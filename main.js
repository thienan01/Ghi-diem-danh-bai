document.getElementsByClassName("scoreStateCSS")[0].innerHTML =0;
document.getElementsByClassName("scoreStateCSS")[1].innerHTML =0;
document.getElementsByClassName("scoreStateCSS")[2].innerHTML =0;
document.getElementsByClassName("scoreStateCSS")[3].innerHTML =0;
function update(){
    var totalScore1 = document.getElementsByClassName("totalScore1");
    var totalScore2 = document.getElementsByClassName("totalScore2");
    var totalScore3 = document.getElementsByClassName("totalScore3");
    var totalScore4 = document.getElementsByClassName("totalScore4");

    var enterScoreP1 = document.getElementsByClassName("enterScore1");
    var enterScoreP2 = document.getElementsByClassName("enterScore2");
    var enterScoreP3 = document.getElementsByClassName("enterScore3");
    var enterScoreP4 = document.getElementsByClassName("enterScore4");

    if(enterScoreP1[0].value == ''){
        enterScoreP1[0].value = 0;
    }
    if(enterScoreP2[0].value == ''){
        enterScoreP2[0].value = 0;
    }
    if(enterScoreP3[0].value == ''){
        enterScoreP3[0].value = 0;
    }
    if(enterScoreP4[0].value == ''){
        enterScoreP4[0].value = 0;
    }
    totalScore1[0].value = parseInt(totalScore1[0].value) + parseInt(enterScoreP1[0].value);
    totalScore2[0].value = parseInt(totalScore2[0].value) + parseInt(enterScoreP2[0].value);
    totalScore3[0].value = parseInt(totalScore3[0].value) + parseInt(enterScoreP3[0].value);
    totalScore4[0].value = parseInt(totalScore4[0].value) + parseInt(enterScoreP4[0].value);
    
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

    enterScoreP1[0].value = '';
    enterScoreP2[0].value = '';
    enterScoreP3[0].value = '';
    enterScoreP4[0].value = '';
}