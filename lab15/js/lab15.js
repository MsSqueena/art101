/*
Author: Jacqueline Castro
Created:  05/25/2022
Lab 15: AJAX
*/

//--------------MAIN TASK-----------------------------------------------------//
function getAjax(){
  $.ajax({
    url: endpoint,
    type: "GET",
  })

  .done(function(data){
    console.log("Pokemon Thing Worked!");
    var output = "";
    output += ("Pokemon Id: "+ data.id +"<br>");
    output += ("Pokemon Name: "+ data.name +"<br>");
    output += ("Pokemon Height: "+ data.height +"<br>");
    output += ("Pokemon Weight: "+ data.weight +"<br>");
    output += ("Pokemon Order: "+ data.order +"<br>");
    $("#output").html(output);
  })

  .fail(function(data){
    $("#output").html("Something Isn't Working");
  })
}
var endpoint = "https://pokeapi.co/api/v2/pokemon/";
var buttonEl = $("#activate");
var nasaButton = $("#nasaButton");

buttonEl.click(function(){
  var inputEl = $("#pokemon").val();
  endpoint += inputEl;
  console.log(endpoint);
  getAjax();
  endpoint = "https://pokeapi.co/api/v2/pokemon/";
})
//-----------BONUS TASK X-----------------------------------------------------//
function getNasaAjax(){
  $.ajax({
    url: nasaEndpoint,
    type: "GET",
    data: {
      api_key: "0JpHHNGBd500KLTVOjR6w3nq4AOVP3kSsvzZtgxK",
      count: 1
    }
  })

  .done(function(data){
    console.log("NASA's Thing Worked!");

    var Apod = data[0];
    console.log(Apod);

    var title = Apod.title;
    var description = Apod.explanation;
    var imgUrl = Apod.url;
    console.log(title, description, imgUrl);

    $("#nasaOutput").html("<h2>"+title+"</h2>");
    $("#nasaOutput").append("<img src="+imgUrl+">");
    $("#nasaOutput").append("<p>"+ description +"</p>");
  })
  .fail(function(data){
    $("nasaOutput").html("Something Fucked Up.");
  })
}
var nasaEndpoint = "https://api.nasa.gov/planetary/apod";

nasaButton.click(function(){
  getNasaAjax();
})
