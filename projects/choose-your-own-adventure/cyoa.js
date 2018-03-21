







var response = prompt("You walk into an old decrepit house. The plaster is falling off of the wall and there is an unusual stench that permeats the air. There is a hallway in front of you and stairs to your right. Type 'hallway' to go down the hallway, type 'stairs' to go up the stairs");

if(response === "hallway") {
  response = prompt("You inch down the hallway, aware of the hollow sound of your footsteps. The silence is so pervasive you can hear a spider scrambling on the wall beside you. You soon come across a door to your left and right. Type 'left' to go into the left door, type '1right' to go into the right door");
  if(response === "left") {
    response = prompt("You turn the knob on the left door. You do it slowly, as you expect it to creak but you are surprised when it swings open, soundlessly. The room is bare, save for an antique crib in the corner. There is a baby blanket on the floor next to the crib and you creep closer to look at it. The blanket looks white but seems to be stained with a dark substance. Your eyes flit to the crib and notice that it, also, is covered in the dark substance. You begin to shiver in revulsion when you realize that the substance you are looking at is blood. You turn and bolt from the room seeking an exit, immediately. You intend to bolt back down the hallway but you see a woman in tattered clothes leaning against the wall. If you approach the woman type 'approach', if you run further down the hall type 'run', if you decide to go in the door on the right type '2right'");
      if(response === "approach") {
        response = prompt("Although, you are shaking and your heart is beating furiously against your rib-cage you stride purposely towards the woman. She looks up as she hears your footsteps and you are frozen solid by the milky whites of her eyes. Your mouth opens in a soundless scream and the woman begins to stagger slowly towards you. Just as you, finally, begin to mobilize the woman reaches for you with a load moan. To push her away type 'push', to side-step her and run back towards the door type 'door'");
        if(response === "push") {
            response = prompt("Your hands connect with the woman's shoulders and you groan in disgust when you feel how thin and mushy her body is, not to mention the horrid stench. In the split second that you shove her she turns her head sharply and bites down into your wrist. You scream in pain and rip your arm away, tearing your flesh."); {
            alert("You have now been infected and have only 2 hours before turning into a zombie.");
           }
        }
      }
           else if(response === "door") {
             response = prompt("As the woman reaches for you, you quickly side-step her and run around just as she lets out a loud wailing moan of indignation. You run to the front door as if your life depends on it, which it does. After gripping the knob and slinging it open, you practically throw yourself on the front porch and tumble down the small stairs onto the pavement below. After breathing in a couple of mouthfuls of air you realize you're no longer in that demonic dwelling and regain your footing to take off running down the blodk, never to return again."); {
                alert("Congratulations! You have found the only solution out of the story.");
            }
          }

      else if(response === "run") {
              response = prompt("You turn and run back deeper down the hall until you pass the two doors and enter into what seems to be a foyer. The design of the house confuses you but you don't linger on the fact. You look around frantically for something you can use as a weapon. There is a small wooden table with a vase of long dead flowers in front of you. You could use the vase but it would be wholly ineffective in the long run. There is an archway to your right and you can see a glimpse of a stove and counter. Do you grab the 'vase' as a weapon or do you head into the 'kitchen' for something better?");
              if(response === "vase") {
                response = prompt("You grab te vase and shuck the flowers and murky water out of it to use as a weapon. "); {
                  alert("Really? A vase?");
                }
              }
              if (response === "kitchen") {
                response = prompt("You quickly run into the kitchen and search around frantically. You are absolutely dismayed to find that there are no silverware at all, meaning no knives. All the cupboards are bare and there is only a round wooden table in the room with no chairs. You have nothing to defend yourself with."); {
                  alert("You Have Reached An End");
            }
          }
        }

      else if(response === "2right") {
              response = prompt("You try to turn the knob on the door to the right but it seems to be locked. You wiggle the knob frantically while pushing your weight on it in vain. You realize too late that in your panic you were too loud and alerted the woman to your presence. The last thing you see is milky white eyes in a partially decomposed face.")
                alert("You Have Reached A DEAD End.");
          }
        }
      }

  if(response === "1right") {
      response = prompt("You try the knob to your right but it won't open. The door is locked. Try the other door by typing 'left' ");
    }



else if(response === "stairs") {
      response = prompt("You head slowly up the stairs, each step creaking ominously beneath your feet. Every step you take brings up a cloud of dust from the oriental design of the carpet beneath your feet. You get the feeling you are the first person to be in here in ages. At the top of the stairs there are two hallways winding to the left and the right. Type 'lefth' to go down the left hallway, type 'righth' to go down the right hallway");
       if(response === "lefh") {
            response = prompt("You head down the left hall and it is not long before you hear eerie piano music playing faintly.");{
              alert("Beethoven");
            }
          }
       else if(response === "righth") {
            response = prompt("You move towards the right hall and stop abruptly when you see a door up ahead slowly opening. You stand still transfixed by what you're seeing. A little boy closes the door politely behind him before spotting you. Before you have a chance to react he lets out a loud growl and starts running towards you!"); {
              alert("You just got bodied by a 5 year old.");
            }
          }
        }

else {
  alert("Please type in a valid input! Refresh the page to try again.");
}
