

var response = prompt("You walk into an old decrepit house. The plaster is falling off of the wall and there is an unusual stench that permeats the air. There is a hallway in front of you and stairs to your right. Tpe 'hallway' to go down the hallway, type 'stairs' to go up the stairs");

if(response === "hallway") {
  response = prompt("You inch down the hallway, aware of the hollow sound of your footsteps. The silence is so pervasive you can hear a spider scrambling on te wall beside you. You soon come across a door to your left and right. Type 'left' to go into the left door, type 'right' to go into the right door");

if(response === "left") {
  response = prompt("You turn the knob on the left door. You do it slowly, as you expect it to creak, but you are surprised when it swings open, soundlessly. The room is bare, save for an antique crib in the corner. There is a baby blanket on the floor next to the crib and you creep closer to look at it. The blanket looks white but seems to be stained with a dark substance. Your eyes flit to the crib and notice that it, also, is covered in the dark substance. You begin to shiver in revulsion when you realize that the substance you are looking at is blood. You turn and bolt from the room seeking an exit, immediately. You intend to bolt back down the hallway but you see a woman in tattered clothes leaning against the wall. If you approach the woman type 'Approach', if you run further down the hall type 'run', if you decide to go in the door on the right type 'right'");

if(response === "approach") {
  response = prompt("Although, you are shaking and your heart is beating furiously against your rib-cage you stride purposely towards the woman. She looks up as she hears your footsteps and you are frozen solid by the milky whites of her eyes. Your mouth opens in a soundless scream and the woman begans to stagger slowly towards you. Just as you finally begin to mobilize the woman reaches for you with a load moan. To push her away type 'push', to side-step her and run back towards the door type 'door'");

} else if(response === "run") {
    response = prompt("You turn and run back deeper down the hall until you pass the two doors and enter into what seems to be a foyer. The design of the house confuses you but you don't linger on the fact. You look around frantically for something you can use as a weapon. There is a small wooden table with a vase of long dead flowers in front of you. You could use the vase but it would be wholly ineffective in the long run. There is an archway to your right and you can see a glimpse of a stove and counter. Do you grab the 'vase' as a weapon or do you head into the 'kitchen' for something better?");


} else if (response === "stairs") {
  response = prompt("You head slowly up the stairs, each step creaking ominously beneath your feet. Every step you take brings up a cloud of dust from the oriental design of the carpet beneath your feet. You get the feeling you are the first person to be in here in ages. At the top of the stairs there are two hallways winding to the left and the right. Type 'left' to go down the left hallway, type 'right' to go down the right hallway");

} else {
  alert("Please type in a valid input! Refresh the page to try again.");
}}}}
