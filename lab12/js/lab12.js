/*
Author: Jacqueline Castro
Created: 05/16/2022
Lab 12: Conditionals
*/
function mod(x){
  var length = x.length;
  var value = length % 4;
  console.log(value);
  return value;
}
function sortingHat(x){
  //BONUST TASK X.2
  var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  return houses[x];
}

var buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", function(){
  var nameInput = document.getElementById("name").value;
  var outputEl = document.getElementById("output");
  var value = mod(nameInput);

  outputEl.innerHTML = ("The Sorting Hat has sorted you into "+ sortingHat(value) + "!<br>");
  outputEl.insertAdjacentHTML("beforeend","<h3>DESCRIPTION</h3>");
  outputEl.append(description(value));

})

function description(x){
  var houseOne = ("Gryffindor house is where you would find the pluciest and most daring students (there's a reason the house symbol is the brave lion). "+
                  "The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall."+
                  "If the Sorting Hat placed you herem you would have demonstrated qualities like courage, bravery, and determination."+
                  "Some of the wizarding world's best and brightest belonged to this house - Harry Pottor and Albus Dumbledore are just a couple that spring to mind!"+
                  "If you are lucky enough to end up in Gryffindor, we imagine you're the type of person who likes to stand up for the little guy, "+
                  "challenges authority, has a tendency to act first and think later, is known as a class clown and takes board games very seriously.");

  var houseTwo = ("If you are looking for the brainiest students - you would find them in Ravenclaw (with a couple of notable exceptions like Hermione Granger)."+
                  "The Ravenclaw colours are blue and bronze, the emblem is an eagle, the Head of House is Professor filius Flitwick and the common room sits at the top of "+
                  "Ravenclaw Tower behind an enchanted knocker.The Sorting Hat would only put you in this house if you demonstrated excellent wisdom, wit and a skill for learning."+
                  "Ravenclaws are often knownf or being quite eccventric and most of the great wizarding inventors and innovators have come from this house." +
                  "We can imagine that you would get to sit up in Ravenclaw Tower, while surveying the exvellent views, if you're the type of person who analyses everything, is an "+
                  "overachiever, can be described as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts.");

  var houseThr = ("Slytherin house has an unfortuante repuation. While it is true that a lot of dark witches and wizards were sorted into Slytherin, not all who belong to this house are bad. "+
                  "In fact, there are a lot of excellent qualities the Sorting Hat looks for in potential Slytherins and Merlin himself even belonged to this misunderstood house!"+
                  "The house colours for Slytherin are silver and emerald green adn the emblem is a serpent. The Head of House is Professor Severus Snape, and the common room can be found down in "+
                  "the dungeons under the lake (whcih only adds to the Slytherin air of mystery). If the Sorting Hat placed you in this noble house, then you are most likely ambitiuous, shrewd "+
                  "and possibly destined for greatness. We can imagine you're the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes "+
                  "pride in their apperance adn doesn't let anyone see their soft side.");

  var houseFour= ("Hufflepyff is where you will find the most trustworthy and hardworking students. In fact, out of all the houses Hufflepuff has a produced the least number of dark witches and wizards."+
                  "The badger is the symbol of this house, the colours are yellow and black, and the Head of House is Professor Pomona Sprout and the common room can be foudn near the kitchens in Hogwards."+
                  "There is an idea that Hufflepuffs are the least clever of all Hogwards students - but that is not true. Hufflepuffs are just the most humble of all the houses and don't feel the need to "+
                  " Shout about their achievements in the same way as the others. If you are lucky enought ot be sorted into htis house, we can imagine you're the type of person who has a strong moral compass"+
                  ", always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks.");

  if (x == 0){
    return houseOne;
  }else if (x == 1){
    return houseTwo;
  }else if (x == 2){
    return houseThr;
  }else {
    return houseFour;
  }

}

/* THE ORIGINAL IF ELSE STATMENT FOR THE FUNCTION sortingHat
      if (value == 0){
        return "Gryffindor";
      } else if (value == 1){
        return "Ravenclaw";
      } else if (value == 2){
        return "Slytherin";
      } else {
        return "Hufflepuff";
      }
*/
