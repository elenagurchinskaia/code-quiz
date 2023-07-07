var scoreBoxEl = document.querySelector("#score-box");
var scoreEl = localStorage.getItem("score");
var initialsEl = localStorage.getItem("initials");

scoreBoxEl.textContent = initialsEl + " " + scoreEl;
