/*
Author:   Jacqueline Castro
Created:  04/30/2022
Lab 8: Anon Functions & Callbacks
*/

//FUNCTIONS//
function multiply(x){   //Multiply the numbers by 3
  return x * 3;
}
//Create an ARRAY that will hold all the String lines that are printed out
//in the console so we can print it out.
var mapResult = [];

//Give a couple of example for what our function does
console.log("Let's multiply a couple things by 3!");
mapResult[0] = ("Let's multiply a couple things by 3!");
//Provide some examples
console.log("2 x 3 = "+multiply(2));
mapResult[1] = ("<br>2 x 3 = 6");
//provide some examples
console.log("8 x 3 = "+multiply(8));
mapResult[2] = ("<br>8 x 3 = 24");

//-------------------------------//
//APPLY THAT FUNCTION TO AN ARRAY
console.log("How about we multiply a whole array by 3!");
mapResult[3] = ("<br>How about we multiply a whole array by 3!");
//Provide the array and print out the array
var nums = [24, 10, 38, 2, 300, 50];
console.log("My Array: "+nums);
mapResult[4] = ("<br>My Array: 24, 10, 38, 2, 300, 50");

//-------------------------------//
//store the multiplied arry in "multi" and print it out
var multi = nums.map(multiply);
console.log("When we multiply it: "+multi);
mapResult[5] = ("<br>When we multiply it: 72, 30, 114, 6, 900, 150");

//-------------------------------//
//now use the other form of the function but to divide it by 2
var results = nums.map(function(x){
  return x/2;
})
console.log("How about when we divide it by 2?");
mapResult[6] = ("<br>How about when we divide it by 2?");
//print out our results
console.log("We get: "+results);
mapResult[7] = ("<br>We get: 12, 5, 19, 1, 150, 25");

//-------------------------------//
//check if our numbers are even, that's what the '%' does
var evenOut = nums.map(function(x){
  return (x % 2 == 0);
})
console.log("Can we check if our numbers are even?");
mapResult[8] = ("<br>Can we check if our numbers are even?");
//shows the results of which are even or odd
console.log("Yes: "+evenOut);
mapResult[9] = ("<br>Yes: true,true,true,true,true,true");
//Add an extra comment about the results
console.log("Well, I guess I accidently made them all even numbers then...");
mapResult[10] = ("<br>Well, I guess I accidently made them all even numbers then...");

//-------------------------------//
//These lines of code insert it into our index.html
var outputEl = document.getElementById("output");
outputEl.innerHTML = mapResult;
