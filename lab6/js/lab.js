/*
  Author: Jacqueline Castro
  Created: 04/23/2022
  Lab 6: Task 2
*/

//Make an Array
var myTransport = ["Bus","Car","Walking"];

//Make an Object
var myMainRide = {
  make: "Kia",
  model: "Seltos",
  color: "Steel Gray",
  year: 2020,
  carAge: function() {
    return 2022 - year;
  }
}

document.writeln("Transportations I Use: "+ myTransport +"<br>");
document.writeln("<br>");
document.writeln("Main Mode of Transportation: <pre>",
  JSON.stringify(myMainRide,null,'\t'), "</pre>");
