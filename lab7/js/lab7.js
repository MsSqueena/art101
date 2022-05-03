/*
Author: Jacqueline Castro
Created: 04/26/2022
Lab 7: Functions
*/

//For this function, we are going to short the letters in someone's name.
function nameSorter(x){
  //Using the User's input, add a little comment
  document.writeln("<b>"+x+"</b> hu? That's a pretty cool name! <br>");
  document.writeln("I hope you don't mind but I'm going to switch the letters in your name around a bit.<br>");

  //Start by making the name into an array and printing out the result
  var split = x.split('');
  document.writeln("First, we got to split up the letters in your name: <b>"+split+"</b><br>");
  //then we sort the stings in that array and join them
  split.sort();
  var joined = split.join('');

  //then add another little comment and return the value so it can print.
  document.writeln("And then we're going to rearrange them in alphabetical order. . . <br>");
  return joined;
}
//Get the user's input
var userName = window.prompt("What's your name?");
//Call the function and add the user input
document.writeln("And tada! Your name is now <b>"+nameSorter(userName)+"</b><br>");
