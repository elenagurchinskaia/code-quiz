// pseudocode created in a group session
var startBtn = document.querySelector("#start-quiz-button");
var questionEl = document.querySelector("#question");
var startEl = document.querySelector("#start-container");
var quizEl = document.querySelector("#quiz-container");
// Global variables
var score = 0;
var timeLeft = 200;
var questions = [
  "What is the proper term for group of kittens?",
  "All cats are born with what color eyes?",
  "What percentage of a cat's bones are in its tail?",
  "How many different sounds can a cat make?",
  "How many breeds of a domestic cat are there worldwide?",
  "What is the normal body temperature of a cat?",
  "What breed of a cat has a reputation for being cross-eyed?",
];
var answersChoices = [
  ["KABOODLE", "KINDLE", "KINE", "KETTLE"],
  ["BLUE", "PINK", "GREEN", "BLACK"],
  ["20%", "2%", "10%", "THERE ARE NO BONES IN A CAT"],
  ["27", "100", "150", "10"],
  ["210", "140", "280", "70"],
  ["102 FAHRENHEIT", "98 FAHRENHEIT", "94 FAHRENHEIT", "106 FAHRENHEIT"],
  ["EGYPTIAN MAU", "SIAMESE", "HIMALAYAN", "PERSIAN"],
]; // made of arrays of strings
var correctAnswer = ["1", "0", "2", "1", "3", "0", "1"]; // made of strings
var currentQuestion = 0;
// All of our selectors (document.)

// function
function start() {
  // triggered when they pressed button (event listener)
  // starts the timer
  // > set interval
  // > once timer hits 0, call endQuiz function
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

function endQuiz() {
  // triggered either when timeLeft becomes 0 or when the user finishes all questions
  // prompts the user for initials, displays the score
  // hide the question
  // if the user finishes before timer runs out, stop the timer from running
}

function submitInitials() {
  submitInitials.addEventListener("");
  // triggered when the user submitted their initials
  // save scores and initials to the local storage
  // > save the existing score to the variable
  // > add the new scores to the end of the new array
  // > overwrite the scores with the new array
  // take the user to the highScore.html page
}

// event listener to trigger start function

startBtn.addEventListener("click", function () {
  startEl.style.display = "none";
  quizEl.style.display = "block";
  questionEl.textContent = questions[0];
  answersChoices.textContent = answersChoices[0];
});
