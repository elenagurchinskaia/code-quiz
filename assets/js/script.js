var startBtn = document.querySelector("#start-quiz-button");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer-choices");
var startEl = document.querySelector("#start-container");
var quizEl = document.querySelector("#quiz-container");
var timerEl = document.querySelector("#timer");
var answersArr = document.querySelectorAll(".answer-button");
var scoreEl = document.querySelector("#score");
var submitForm = document.querySelector("#submit-form");
var allDoneContainer = document.querySelector("#all-done-container");

var timerInterval;
var score = 0;
var timeLeft = 60;
var questions = [
  "What is the proper term for group of kittens?",
  "All cats are born with what color eyes?",
  "What percentage of a cat's bones are in its tail?",
  "How many different sounds can a cat make?",
  "How many breeds of a domestic cat are there worldwide?",
  "What is the normal body temperature of a cat?",
  "What breed of a cat has a reputation for being cross-eyed?",
];

// var made of arrays of strings
var answersChoices = [
  ["KABOODLE", "KINDLE", "KINE", "KETTLE"],
  ["BLUE", "PINK", "GREEN", "BLACK"],
  ["20%", "2%", "10%", "THERE ARE NO BONES IN A CAT"],
  ["27", "100", "150", "10"],
  ["210", "140", "280", "70"],
  ["102 FAHRENHEIT", "98 FAHRENHEIT", "94 FAHRENHEIT", "106 FAHRENHEIT"],
  ["EGYPTIAN MAU", "SIAMESE", "HIMALAYAN", "PERSIAN"],
];
var correctAnswer = ["1", "0", "2", "1", "3", "0", "1"];
var currentQuestion = 0;

// triggered when pressed button (event listener)
// starts the timer
// > set interval
// > once timer hits 0, call endQuiz function
// hide the start button
// reveal the options, questions
function startTimer() {
  console.log("quiz-started");
  timeLeft = 60;
  // var timerDisplay = document.getElementById("timer");
  timerEl.textContent = "Time: " + timeLeft;
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// changeAnswersChoices();
// triggered when the user selects any answer
// guess what answer the user choose
// guess if the answer is right or wrong
// > if it's wrong, reduce the time by 10"
// > if it's right (time left at the end is the user's score)
// change the question
// change the choices
function nextQuestion(event) {
  var selectedAnswer = event.target.textContent;
  if (currentQuestion > questionEl.length - 1) {
    endQuiz();
    return;
  }
  changeQuestions();
}

function checkAnswer(answer) {
  // if answer is = to correrct answer , then return true
  // if not, return false
  if (answer === correctAnswer) {
    return true;
  } else {
    return false;
  }
}

// increment the currect question by 1
function changeQuestions() {
  if (questions[currentQuestion]) {
    questionEl.textContent = questions[currentQuestion];

    for (var i = 0; i < answersArr.length; i++) {
      answersArr[i].textContent = answersChoices[currentQuestion][i];
    }
    currentQuestion++;
  } else {
    endQuiz();
  }
}

// triggered either when timeLeft becomes 0 or when the user finishes all questions
// var initials = prompt("Please enter your initials:");
// prompts the user for initials, displays the score
// var score = timeLeft;
// alert("Your score is:" + score);
// hide the question
// quizEl = document.getElementById("#quiz-container");
function endQuiz() {
  allDoneContainer.style.display = "block";
  scoreEl.textContent = "Your final score is:" + " " + timeLeft;
  quizEl.innerHTML = " ";
  clearInterval(timerInterval);
  submitForm.addEventListener("submit", submitInitials);
}

// submitInitials();
// if the user finishes before timer runs out, stop the timer from running
// save scores and initials to the local storage
// > save the existing score to the variable
// > add the new scores to the end of the new array
// > overwrite the scores with the new array
// take the user to the highScore.html page
// triggered when the user submitted their initials
function submitInitials(event) {
  event.preventDefault();
  var initialsInput = document.getElementById("submit-input");
  initialsInput.value;
  localStorage.setItem("initials", initialsInput.value);
  localStorage.setItem("score", timeLeft);
  window.location.href = "highScore.html";
}

// event listener to trigger start function
// startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", function () {
  startEl.style.display = "none";
  quizEl.style.display = "block";
  changeQuestions();
  startTimer();
});

// for loop to add event listener to an array of answer elements
for (var i = 0; i < answersArr.length; i++) {
  answersArr[i].addEventListener("click", nextQuestion);
}
answersArr.forEach(function (answersChoices) {
  answersChoices.addEventListener("click", function (event) {
    var selectedAnswer = event.target.textContent;
    var currentQuestion = questionEl;
    if (selectedAnswer === currentQuestion.correctAnswer) {
    } else {
      timeLeft -= 10;
    }
    changeQuestions();
  });
});
