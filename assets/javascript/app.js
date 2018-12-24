$(document).ready(function(){

  var correct = 0;


 $("#questions-display").hide();
 $("#submit-button").hide();

 function submitAnswers(){


  var q1 = document.forms["questions-form"]["question1"].value;
  var q2 = document.forms["questions-form"]["question2"].value;
  var q3 = document.forms["questions-form"]["question3"].value;
  var q4 = document.forms["questions-form"]["question4"].value;
  var q5 = document.forms["questions-form"]["question5"].value;

var correctAnswer = ["b", "a", "c", "b", "d"];


if ( q1 == correctAnswer[0]){
correct++;
}
if ( q2 == correctAnswer[1]){
correct++;
}
if ( q3 == correctAnswer[2]){
correct++;
}
if ( q4 == correctAnswer[3]){
correct++;
}
if ( q5 == correctAnswer[4]){
correct++;

} 

}

var seconds = 30;
var interval;

    function runTimer() {
      clearInterval(interval);
      interval = setInterval(decrement, 1000);
     
    }

   
    function decrement() {
      seconds--;
      $("#count-down").html("<h2>" + seconds + " seconds left </h2>");
      if (seconds === 0) {
        $("#questions-display").hide();
        $("#submit-button").hide();
        stop();
        submitAnswers();
        displayResults();
      }
    }


$("#start").on("click", start);  

function start(){

 $("#questions-display").show();
 $("#submit-button").show();

  runTimer();

  document.getElementById("questions-display").reset();
 
}

   
    function stop() {
      clearInterval(interval);
      $("#questions-display").hide();
      $("#submit-button").hide();

    }    


$("#submit-button").on("click", submit);  

function submit(){

 $("#questions-display").hide();
 $("#submit-button").hide();
 submitAnswers();
 displayResults();
stop();
}

function displayResults(){
$("#results").text("You answered " + correct + " questions correctly out of 5.");
}


function reset(){
  var correct = 0;
  $("#questions-display").hide();
  $("#submit-button").hide();
  $("#results").hide();
}

});
