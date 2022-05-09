/*
Author: Jacqueline Castro
Created: 05/08/2022
Lab 10: JavaScript Events & Forms
*/
//FUNCTIONS-------------------------------------------//
function orderWords(x){ //Rearranges the letters alphabetically
  var split = x.split('');                            //First split the input into an array
  split.sort();                                       //Then sort it by alphabetical order, ignore caps
  var joined = split.join('');                        //Join it back to a single string
  return joined;                                      //Return that String
}

function shuffleCap(x){ //Shuffles the name and properly formats it.
  var split = x.split('');                            //First split the input into an array
  //Shuffle the array
  for (let i = split.length - 1; i > 0; i--){
    var num = Math.floor(Math.random() * (i + 1));

    var value = split[i];
    split[i] = split[num];
    split[num] = value;
  }
  var joined = split.join('');                        //Join the Array into one string
  //return joined with the first letter being capital and the rest of the string lowercase.
  return joined.charAt(0).toUpperCase() + joined.substr(1).toLowerCase();
}

//ALPHABETICALLY REORDER NAME-------------------------//
//Identify the Button
var buttonEl = document.getElementById("myButton");

buttonEl = addEventListener("click", function(){
  //Collect the input and where it will print
  var nameInput = document.getElementById("userName").value;
  var outputEl = document.getElementById("output");
  //And print out the reorded array
  outputEl.innerHTML = (orderWords(nameInput));
})

//SHUFFLE AND PROPERLY CAPITALIZE NAME----------------//
//Identify the Button
var annButtonEl = document.getElementById("annButton");

annButtonEl = addEventListener("click", function(){
  //Collect the input and where it will print
  var newInput = document.getElementById("annName").value;
  var annOutputEl = document.getElementById("annOutput");
  //And print out the shuffled array with proper capitalization
  annOutputEl.innerHTML = (shuffleCap(newInput));
})
