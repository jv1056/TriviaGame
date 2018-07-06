

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
var correct = 0;
var wrong = 0;

console.log(favMovie);

var urlQuery = "https://www.omdbapi.com/?t=" + favMovie + "&y=&plot=short&apikey=trilogy";

$.ajax({
  url: urlQuery,
  medthod: "GET"
}).then(function(response){
  console.log(response);

  // question1(response);
  // question2(response);
  question3(response);





});
function question1(response){

  //Changes div to contain question. What year was "movie" relased?
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




    alert("# of Correct Answers:" + correct + "   # of Wrong Answers:" + wrong);
  })
}


//------Question 2-----------------


function question2(response){

  //changes div text to "what was this film rated?"
  var buttonIDs = ["Option1", "Option2", "Option3","Option4"];

  var ratings = ["G","PG","PG-13","R"];

  var randomID = Math.floor(Math.random() * (4 - 0) + 0);

  var movieRating = response.Rated;
  console.log(movieRating);

  for (var i = 0; i < ratings.length; i++){
    var rating = ratings[i];
    $("#" + buttonIDs[i]).val(rating);


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




    alert("# of Correct Answers:" + correct + "   # of Wrong Answers:" + wrong);
  })
}


//---------------question 3---------
function question3(response){

  //changes div text to "what was this film rated?"
  var buttonIDs = ["Option1", "Option2", "Option3","Option4"];

  var randomRunTime = Math.floor(Math.random() * (146 - 87) + 87);


  var randomID = Math.floor(Math.random() * (4 - 0) + 0);

  var movieRunTime = response.Runtime;
  console.log(movieRunTime);

  for (var i = 0; i < buttonIDs.length; i++){
    var buttonID = buttonIDs[i];
    $("#" + buttonID).val("" + randomRunTime + " min");


  }
  var correctButton = $('#' + buttonIDs[randomID]).val(movieRunTime);
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




    alert("# of Correct Answers:" + correct + "   # of Wrong Answers:" + wrong);
  })
}




//Creat time tha counts down.. when counts down ends the game by Creating Alert.
