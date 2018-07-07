

  <!--
  // 1. Create an API to MOVIE site
  // 2. Get input from user using form
  // 3. Save data from from to creat unique url request to the server - returns unique data
  // 4. Input data into trivia questions. USE KEY KEYWORD to acesss the value..assign the value
  //   to a button. If user click that button. correct ++ else .. wrong++

  //year released
  //Rated PG?
  //Runtime






-->

var favMovie = prompt("TRIVA TIME! What's your favorite movie?");
var correct = 0;
var wrong = 0;

console.log(favMovie);

var urlQuery = "https://www.omdbapi.com/?t=" + favMovie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: urlQuery,
  medthod: "GET"
}).then(function(response){
  console.log(response);
  var posterURL = response.Poster;
  var img = $('<img />',
             { src: posterURL,
               width: 300
             })
              .appendTo($('.poster'));

run();

question1(response);
question2(response);
question3(response);
});

var number = 30;

var intervalId;

function decrement() {

  number--;

  $("#show-number").html("<h2>" + number + "</h2>");

  if (number === 0) {

    stop();

    alert("Time Up!");
  }
}

function run() {
  intervalId = setInterval(decrement, 1000);
}



function question1(response){


  $("#show-question").html("<h2>" + "what year was "+ favMovie + " released?" + "</h2>");

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
    $("#" + buttonID).val(randomYear);
    $("#" + buttonID).html(randomYear);


  }
  var correctButton = $('#' + buttonIDs[randomID]).val(movieYear);
  var correctAnswer = $(correctButton).val();


  console.log($('#Option1').val());
  console.log($('#Option2').val());
  console.log($('#Option3').val());
  console.log($('#Option4').val());
  console.log(randomID);
  console.log($("#" + buttonIDs[randomID]).val(movieYear));

  $('.button').click(function(){
    console.log(this);
    var selectedButton = this;
    var userAnswer = $(selectedButton).val();
    console.log("userAnswer:" + userAnswer);
    console.log("correctAnswer:"+ correctAnswer);

    if (userAnswer === correctAnswer){
      correct++;
    }else{
      wrong++;
    }
  })
}


//------Question 2-----------------


function question2(response){

  $("#show-question").html("<h2>" + "what was "+ favMovie + " rated?" + "</h2>");
  var buttonIDs = ["Option1", "Option2", "Option3","Option4"];

  var ratings = ["G","PG","PG-13","R"];

  var randomID = Math.floor(Math.random() * (4 - 0) + 0);

  var movieRating = response.Rated;
  console.log(movieRating);

  for (var i = 0; i < ratings.length; i++){
    var rating = ratings[i];
    $("#" + buttonIDs[i]).val(rating);
    $("#" + buttonIDs[i]).html(rating);


  }
  var correctButton = $('#' + buttonIDs[randomID]).val(movieRating);
  var correctAnswer = $(correctButton).val();


  console.log($('#Option1').val());
  console.log($('#Option2').val());
  console.log($('#Option3').val());
  console.log($('#Option4').val());
  console.log(randomID);
  console.log($("#" + buttonIDs[randomID]).val(movieRating));

  $('.button').click(function(){
    console.log(this);
    var selectedButton = this;
    var userAnswer = $(selectedButton).val();
    console.log("userAnswer:" + userAnswer);
    console.log("correctAnswer:"+ correctAnswer);

    if (userAnswer === correctAnswer){
      correct++;
    }else{
      wrong++;
    }
  })
}


//---------------question 3---------
function question3(response){

  $("#show-question").html("<h2>" + "what  was "+ favMovie +"'s" + " runtime?" + "</h2>");
  var buttonIDs = ["Option1", "Option2", "Option3","Option4"];



  var randomID = Math.floor(Math.random() * (4 - 0) + 0);

  var movieRunTime = response.Runtime;
  console.log(movieRunTime);

  for (var i = 0; i < buttonIDs.length; i++){
    var randomRunTime = Math.floor(Math.random() * (146 - 87) + 87);
    var buttonID = buttonIDs[i];
    $("#" + buttonID).val("" + randomRunTime + " min");
    $("#" + buttonID).html("" + randomRunTime + " min");

  }
  var correctButton = $('#' + buttonIDs[randomID]).val(movieRunTime);
  $(correctButton).html(movieRunTime);
  var correctAnswer = $(correctButton).val();


  console.log($('#Option1').val());
  console.log($('#Option2').val());
  console.log($('#Option3').val());
  console.log($('#Option4').val());
  console.log(randomID);
  console.log($("#" + buttonIDs[randomID]).val(movieRunTime));

  $('.button').click(function(){
    console.log(this);
    var selectedButton = this;
    var userAnswer = $(selectedButton).val();
    console.log("userAnswer:" + userAnswer);
    console.log("correctAnswer:"+ correctAnswer);

    if (userAnswer === correctAnswer){
      correct++;
    }else{
      wrong++;
    }
    showScore();
  })

}


function showScore(){
  alert("# of Correct Answers:" + correct + "   # of Wrong Answers:" + wrong);
  location.reload();
}



//Creat time tha counts down.. when counts down ends the game by Creating Alert.
//
