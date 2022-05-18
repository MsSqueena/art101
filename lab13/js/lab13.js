/*
Author: Jacqueline Castro
Created: 05/17/2022
Lab 13:: Loops
*/
function mod(total, valOne, valTwo, valThr, valFour){
  var a ="Fizz!";
  var b ="Buzz!";
  var c ="Boom!";
  var d ="Bang!";

  var str = "";
  for(let i = 0; i <= total ;i++){
    if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+a+b+c+d+"<br>");

    } else if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valThr == 0)){
      str += (i +" "+a+b+c+"<br>");
    } else if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valFour == 0)){
      str += (i +" "+a+b+d+"<br>");
    } else if ((i % valOne == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+a+c+d+"<br>");
    } else if ((i % valTwo == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+b+c+d+"<br>");

    } else if ((i % valOne == 0)&&(i % valTwo == 0)){
      str += (i +" "+a+b+"<br>");
    } else if ((i % valOne == 0)&&(i % valThr == 0)){
      str += (i +" "+a+c+"<br>");
    } else if ((i % valOne == 0)&&(i % valFour == 0)){
      str += (i +" "+a+d+"<br>");
    } else if ((i % valTwo == 0)&&(i % valThr == 0)){
      str += (i +" "+b+c+"<br>");
    } else if ((i % valTwo == 0)&&(i % valFour == 0)){
      str += (i +" "+b+d+"<br>");
    } else if ((i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+c+d+"<br>");

    } else if (i % valOne == 0){
      str += (i +" "+a+"<br>");
    } else if (i % valTwo == 0){
      str += (i +" "+b+"<br>");
    } else if (i % valThr == 0){
      str += (i +" "+c+"<br>");
    } else if (i % valFour == 0){
      str += (i +" "+d+"<br>");

    } else {
      str += (i+"<br>");
    }
  }
  return str;
}

outputEl = $("#output");
submitEl = $("#submit");

submitEl.click(function(){
  totalEl  = $("#total").val();
  valOneEl = $("#valOne").val();
  valTwoEl = $("#valTwo").val();
  valThrEl = $("#valThr").val();
  valFourEl= $("#valFour").val();

  console.log(totalEl);
  outputEl.html(mod(totalEl, valOneEl, valTwoEl, valThrEl, valFourEl));
})

// function mods(){
//   for(let i = 1; i<=200;i++){
//     if ((i % 3)&&(i % 5 == 0)&&(i % 7 ==0)){
//       console.log(i + " Fizz!Buzz!Boom!");
//       outputEl.append(i + " Fizz!Buzz!Boom!<br>");
//     } else if ((i % 3 == 0)&&(i % 5)){
//       console.log(i + " Fizz!Buzz!");
//       outputEl.append(i + " Fizz!Buzz!<br>");
//     } else if ((i % 3 == 0)&&(i % 7)){
//       console.log(i + " Fizz!Boom!");
//       outputEl.append(i + " Fizz!Boom!<br>");
//     }else if ((i % 5 == 0 )&&(i % 7)){
//       console.log(i + " Buzz!Boom!");
//       outputEl.append(i + " Buzz!Boom!<br>");
//     }else if (i % 3 == 0){
//       console.log(i + " Fizz!");
//       outputEl.append(i + " Fizz!<br>");
//     } else if (i % 5 == 0){
//       console.log(i + " Buzz!");
//       outputEl.append(i + " Buzz!<br>");
//     } else if (i % 7 == 0){
//       console.log(i + " Boom!");
//       outputEl.append(i + " Boom!<br>");
//     } else {
//       console.log(i);
//       outputEl.append(i+"<br>");
//     }
//   }
// }


// function mods(){
//   var oneLongString = "";
//   for(let i = 1; i<=200;i++){
//     if ((i % 3)&&(i % 5 == 0)&&(i % 7 ==0)){
//       console.log(i + " Fizz!Buzz!Boom!");
//       oneLongString += (i + " Fizz!Buzz!Boom!<br>");
//     } else if ((i % 3 == 0)&&(i % 5)){
//       console.log(i + " Fizz!Buzz!");
//       oneLongString += (i + " Fizz!Buzz!<br>");
//     } else if ((i % 3 == 0)&&(i % 7)){
//       console.log(i + " Fizz!Boom!");
//       oneLongString += (i + " Fizz!Boom!<br>");
//     }else if ((i % 5 == 0 )&&(i % 7)){
//       console.log(i + " Buzz!Boom!");
//       oneLongString += (i + " Buzz!Boom!<br>");
//     }else if (i % 3 == 0){
//       console.log(i + " Fizz!");
//       oneLongString += (i + " Fizz!<br>");
//     } else if (i % 5 == 0){
//       console.log(i + " Buzz!");
//       oneLongString += (i + " Buzz!<br>");
//     } else if (i % 7 == 0){
//       console.log(i + " Boom!");
//       oneLongString += (i + " Boom!<br>");
//     } else {
//       console.log(i);
//       oneLongString += (i + "<br>");
//     }
//   }
//   return oneLongString;
// }
