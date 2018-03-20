


function updateStory() {
  var finalAnswer = storyOutput;
  document.getElementById('story').innerHTML = finalAnswer;
};


var storyOutput = "Hey! This is an interactive story. Do you want to take part? YES or NO?";
updateStory();

document.getElementById('javascriptButton').onclick = function interpretAnswer() {
  var inputResults =
document.getElementById('answerField').value;
  answer = inputResults.toUpperCase();
  checkAnswer();
};

function checkAnswer() {
  if (answer === "YES") {
    storyOutput = "Excellent! All you have to do is read the story and type in one of the choices given at the end of each chapter. Make sure you type it in exactly as it appears. Ready to start?";
  }
    else if (answer === "YES")
    {
      storyOutput = "You walk into an old decrepit house. The plaster is falling off of the wall and there is an unusual stench that permeats the air. There is a hallway in front of you and stairs to your right. Type 'hallway' to go down the hallway, type 'stairs' to go up the stairs";
    }
  else if (answer === "NO"){
    storyOutput = "Aww. Well, that's too bad. If you're too scared to read the story....fine. Pfft!";
  }
  else {
    storyOutput = "Hey! This is an interactive story. Do you want to take part? YES or NO";
  };
  updateStory();
}
