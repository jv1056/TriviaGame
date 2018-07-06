

  <!--
  // 1. Create an API to MOVIE site
  // 2. Get input from user using form
  // 3. Save data from from to creat unique url request to the server - returns unique data
  // 4. Input data into trivia questions. USE KEY KEYWORD to acesss the value..assign the value
  //   to a button. If user click that button. correct ++ else .. wrong++

  //year released
  //Rated PG?
  //Runtime
  //imdb Rating







-->

var favMovie = prompt("TRIVA TIME! What's your favorite movie?");

console.log(favMovie);

var urlQuery = "https://www.omdbapi.com/?t=" + favMovie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: urlQuery,
  medthod: "GET"
}).then(function(response){
  console.log(response);

var correct = 0;
var wrong = 0;


var buttonIDs = ["Option1", "Option2", "Option3","Option4"];

var randomYear = Math.floor(Math.random() * (2018 - 1960) + 1960);
console.log(randomYear);

var randomID = Math.floor(Math.random() * (4 - 0) + 0);

var movieYear = response.Year;
console.log(movieYear);

for (var i = 0; i < buttonIDs.length; i++){
  var randomYear = Math.floor(Math.random() * (2018 - 1960) + 1960);
  console.log(randomYear);
  var buttonID = buttonIDs[i];

$('#' + buttonID).val(randomYear);


}


  console.log($('#Option1').val());
  console.log($('#Option2').val());
  console.log($('#Option3').val());
  console.log($('#Option4').val());
  console.log(randomID);
  console.log($("#" + buttonIDs[randomID]).val(movieYear));

$('.button').click(function(){
  console.log(this);
  })

});
