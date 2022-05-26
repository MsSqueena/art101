 /*
Author: Jacqueline Castro
Created: 05/10/2022
Lab 11: Libraries & JQuery
*/

//1. Find the Section you want to add the button to
challengeEl = $("#challenge");
problemsEl = $("#problems");
resultsEl = $("#results");

//2. Create the Button
challengeEl.append("<button id='chaButton' class='defButton'>Pick me!</button>");
problemsEl.append("<button id='proButton' class='defButton'>Pick me!</button>");
resultsEl.append("<button id='resButton' class='defButton'>Pick me!</button>");

//3. Define buttons
chaButtonEl = $("#chaButton");
proButtonEl = $("#proButton");
resButtonEl = $("#resButton");

//------------------------------------------//
//When the CHALLENGE button is pressed:
chaButtonEl.hover(function(){                   //When the mouse is hovering over, change color
  chaButtonEl.toggleClass("hoverOne");
})
chaButtonEl.click(function(){                   //When you click the button, changed the box css
  challengeEl.toggleClass("changeOne");
  chaButtonEl.toggleClass("buttonOne");
})

//When the PROBLEM button is pressed:
proButtonEl.hover(function(){                   //When the mouse is hovering over, change color
  proButtonEl.toggleClass("hoverTwo");
})
proButtonEl.click(function(){                   //When you click the button, changed the box css
  problemsEl.toggleClass("changeTwo");
  proButtonEl.toggleClass("buttonTwo");
})

//When the RESULTS button is pressed:
resButtonEl.hover(function(){                    //When the mouse is hovering over, change color
  resButtonEl.toggleClass("hoverThree");
})
resButtonEl.click(function(){                    //When you click the button, changed the box css
  resultsEl.toggleClass("changeThree");
  resButtonEl.toggleClass("buttonThree");
})

//------------------------------------------//
//BONUS TASK X: A button that effects other buttons
outputEl = $("#output");                         //Define the output where it will go
//Add the buttons to OUTPUT
outputEl.append("<button id='bonButtonOne' class='defButtonTwo'>Pick me!</button>");
outputEl.append("<button id='bonButtonTwo' class='defButtonTwo'>Pick me!</button>");
outputEl.append("<button id='bonButtonThree' class='defButtonTwo'>Pick me!</button>");
//define the buttons
oneButtonEl = $("#bonButtonOne");
twoButtonEl = $("#bonButtonTwo");
threeButtonEl = $("#bonButtonThree");
//------------------------------------------//
//This Button makes everything look like CHALLENGE
oneButtonEl.hover(function(){
  oneButtonEl.toggleClass("hoverOne");
})
oneButtonEl.click(function(){
  $(":button").toggleClass("buttonOne");
  $(".box").toggleClass("changeOne");
})
//This button makes everything look like PROBLEM
twoButtonEl.hover(function(){
  twoButtonEl.toggleClass("hoverTwo");
})
twoButtonEl.click(function(){
  $(":button").toggleClass("buttonTwo");
  $(".box").toggleClass("changeTwo");
})
//This Button makes everything look like RESULTS
threeButtonEl.hover(function(){
  threeButtonEl.toggleClass("hoverThree");
})
threeButtonEl.click(function(){
  $(":button").toggleClass("buttonThree");
  $(".box").toggleClass("changeThree");
})
