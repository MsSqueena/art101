/*
Author: Jacqueline Castro
Created: 05/10/2022
Lab 11: Libraries & JQuery
*/

//1. Find the Section you want to add the button to
challengeEl = $("#challenge");
problemsEl = $("#problems");
resultsEl = $("#results");

//Create the Button
challengeEl.append("<button id='chaButton' class='defButton'>Pick me!</button>");
problemsEl.append("<button id='proButton' class='defButton'>Pick me!</button>");
resultsEl.append("<button id='resButton' class='defButton'>Pick me!</button>");

//define buttons
chaButtonEl = $("#chaButton");
proButtonEl = $("#proButton");
resButtonEl = $("#resButton");

//------------------------------------------//

//When the CHALLENGE button is pressed:
chaButtonEl.hover(function(){
  chaButtonEl.toggleClass("hoverOne");
})
chaButtonEl.click(function(){
  challengeEl.toggleClass("changeOne");
  chaButtonEl.toggleClass("buttonOne");
})

//When the PROBLEM button is pressed:
proButtonEl.hover(function(){
  proButtonEl.toggleClass("hoverTwo");
})
proButtonEl.click(function(){
  problemsEl.toggleClass("changeTwo");
  proButtonEl.toggleClass("buttonTwo");
})

//When the RESULTS button is pressed:
resButtonEl.hover(function(){
  resButtonEl.toggleClass("hoverThree");
})
resButtonEl.click(function(){
  resultsEl.toggleClass("changeThree");
  resButtonEl.toggleClass("buttonThree");
})

//BONUS TASK
