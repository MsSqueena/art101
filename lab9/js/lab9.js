/*
Author: Jacqueline Castro
Created: 05/03/2022
Lab 9: JavaScript For The Web
*/

/*TASK TWO: CREATE A JAVASCRIPT FILE
This is adding the main elements and appending them*/

//Find the div "output"
var outputEl = document.getElementById("output");
outputEl.style.backgroundColor = "DarkSeaGreen";
outputEl.style.border = "dashed 3px DarkOliveGreen";

//create a new element, give it text + style
var new1El = document.createElement("p");
new1El.innerHTML = "new1El: Here's some text for our first element.";
new1El.style.color = "DarkRed";
new1El.style.textAlign = "center";
new1El.style.textDecoration = "underline";

//create a new element, give it text + style
var new2El = document.createElement("p");
new2El.innerHTML = "new2El: Here's some text for our second element.";
new2El.style.color = "Indigo";
new2El.style.textAlign = "center";
new2El.style.textDecoration = "underline";

//Add the new elements to the Output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//BONUS TASK X: CAN YOU ADD A NEW ELEMENT TO THE TOP OF AN ELEMENT?
var xBonus = document.createElement("p");
xBonus.innerHTML = "xBonus: Let's add something ontop of the list.";
xBonus.style.color = "Indigo";
xBonus.style.textAlign = "center";
xBonus.style.textDecoration = "underline";
outputEl.insertBefore(xBonus, outputEl.children[0]);
/*we use outputEl.children[0] because by appending the elements you add it to
a list. By doing this you can always make sure it's in the right order. Changing
the value of the number also changes the order without changing any of the strings
*/

//----------------------------------------------------//
//CHANGING THE PAGE'S CSS!

//Get the Div for the main box and change the colors
var homepageEl = document.getElementById("homepage");
homepageEl.style.backgroundColor = "Honeydew";
homepageEl.style.border = "solid 5px DarkOliveGreen";
//Do the same thing for the second box.
var labEightEl = document.getElementById("labEight");
labEightEl.style.backgroundColor = "Honeydew";
labEightEl.style.border = "solid 5px DarkOliveGreen";

//Change the text/color for header 1
var headerOne = document.getElementsByTagName("h1");
headerOne[0].style.color = "Sienna";
headerOne[1].style.color = "Sienna";

//Change the text/color for header 2
var headerTwo = document.getElementsByTagName("h2");
headerTwo[0].style.color = "SeaGreen";
headerTwo[1].style.color = "SeaGreen";

//change the text/color for the paragraphs
var paragraph = document.getElementsByTagName("p");
paragraph[0].style.color = "DarkSeaGreen";
paragraph[1].style.color = "DarkSeaGreen";
paragraph[2].style.color = "DarkSeaGreen";
paragraph[3].style.color = "DarkSeaGreen";
paragraph[4].style.color = "DarkSeaGreen";

//Change the background for the whole page
document.body.style.backgroundColor = "DarkSeaGreen";

/* It took me too long to realize that by using the TagName, it stores the value
into an array so the solution is to make a bunch of the same thing. I'm not sure
how to apply it to all of them but I suppose this works for now (might need a function)
*/
