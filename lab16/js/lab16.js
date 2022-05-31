/*
Author: Jacqueline Castro
Created: 05/26/2022
lab 16: JSON and APIs
*/

//var endpoint = "https://xkcd.com/info.0.json";

function getAjax(endpoint){
  $.ajax({
    url: endpoint,
    type: "GET"
  })
  .done(function(data){
    console.log("It's Working!");
    issueNum = data.num;

    outputEl.html("<h1 class='inOutput'>"+data.title+"</h1>");
    outputEl.append("<img src='"+ data.img +"' class='imgOutput'/>");
    outputEl.append("<p class='inOutput'>"+data.alt+"</p>");
    outputEl.append("<p class='inOutput'>Date: "+data.month+"/"+data.day+"/"+data.year+"</p>");
    outputEl.append("<p class='inOutput'>Issue Number: "+data.num+"</p>");
  })

  .fail(function(data){
    outputEl.html("Sadly, there isn't a newer issue.");
  })
}
var endpoint = "";
var issueNum = 0;

var outputEl = $("#output");

$("#current").click(function(){
  endpoint = "https://xkcd.com/info.0.json";
  getAjax(endpoint);
})

$("#old").click(function(){
  endpoint = "https://xkcd.com/614/info.0.json";
  getAjax(endpoint);
})

$("#previous").click(function(){
  issueNum -= 1;
  endpoint = "https://xkcd.com/"+issueNum+"/info.0.json";
  getAjax(endpoint);
})
$("#next").click(function(){
  issueNum += 1;
  endpoint = "https://xkcd.com/"+issueNum+"/info.0.json";
  getAjax(endpoint);
})

//ALL THE VARIABLES IN THE ARRAAY
// month, num, link, year, news, safe_title, transcript, alt, img, title, day
