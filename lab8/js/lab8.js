/*
Author:   Jacqueline Castro
Created:  04/30/2022
Lab 8: Anon Functions & Callbacks
*/

//FUNCTIONS//
function multiply(x){   //Multiply the numbers by 3
  return x * 3;
}

//Give a couple of example for what our function does
console.log("Let's multiply a couple things by 3!");
console.log("2 x 3 = "+multiply(2));
console.log("8 x 3 = "+multiply(8));

//apply that function to an array
console.log("How about we multiply a whole array by 3!");
var nums = [24, 10, 38, 2, 300, 50];
console.log("My Array: "+nums);

//store the multiplied arry in "multi" and print it out
var multi = nums.map(multiply);
console.log("When we multiply it: "+multi);

//now use the other form of the function but to divide it by 2
var results = nums.map(function(x){
  return x/2;
})
console.log("How about when we divide it by 2?");
console.log("We get: "+results);

var evenOut = nums.map(function(x){
  return (x % 2 == 0);
})
console.log("Can we check if our numbers are even?");
console.log("Yes: "+evenOut);
console.log("Well, I guess I accidently made them all even numbers then...");
