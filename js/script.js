// Global variables
var score = 0;
var timeLeft = 200;
var questions = ["What does CSS do?", "What does HTML do?"];
var answersChoices = [
  ["It adds styles.", "It creates a base structure"],
  ["It animates the webpage", "bla bla"],
]; // made of arrays of strings
var correctAnswer = []; // made of strings
var currentQuestion = 0;

// All of our selectors (document.)
var questionE1 = document.querySelector("#question");

// function
function start() {
  // triggered when they pressed button (event listener)
  // starts the timer
  // > set interval
  // > once timer hits 0, call endGame function
  // hide the start button
  // reveal the options, questions
}

function nextQuestion(event) {
  // triggered when the user selects any answer
  // guess what answer the user choose
  // guess if the answer is right or wrong
  // > if it's wrong, reduce the time, then show message "Wrong!"
  // > if it's right, then show message "Correct!" (time left at the end is the user's score)
  // increment the currect question by 1
  // change the question
  // change the choices
}

function endGame() {
  // triggered either when timeLeft becomes 0 or when the user finishes all questions
  // prompts the user for initials, displays the score
  // hide the question
  // if the user finishes before timer runs out, stop the timer from running
}

function submitInitials() {
  // triggered when the user submitted their initials
  // save scores and initials to the local storage
  // > save the existing score to the variable
  // > add the new scores to the end of the new array
  // > overwrite the scores with the new array
  // take the usr to the highScore.html page
}
