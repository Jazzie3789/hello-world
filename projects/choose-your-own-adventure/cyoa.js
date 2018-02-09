

var response = prompt("You walk into an old decrepit house. The plaster is falling off of the wall and there is an unusual stench that permeats the air. There is a hallway in front of you and stairs to your right. Tpe 'hallway' to go down the hallway, type 'stairs' to go up the stairs");

if(response === "hallway") {
  response = prompt("You inch down the hallway, aware of the hollow sound of your footsteps. The silence is so pervasive you can hear a spider scrambling on te wall beside you. You soon come across a door to your left and right. Type 'left' to go into the left door, type 'right' to go into the right door");

if(response === "left") {
  response = prompt("You turn the knob on the left door. You do it slowly, as you expect it to creak, but you are surprised when it swings open, soundlessly. ")
}
} else if (response === "stairs") {
  response = prompt("You head slowly up the stairs, each step creaking ominously beneath your feet. Every step you take brings up a cloud of dust from the oriental design of the carpet beneath your feet. You get the feeling you are the first person to be in here in ages. At the top of the stairs there are two hallways winding to the left and the right. Type 'left' to go down the left hallway, type 'right' to go down the right hallway");

} else {
  alert("Please type in a valid input! Refresh the page to try again.");
}
