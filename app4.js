let apiUrl = "https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;

axios.get(apiUrl).then(showQuestion);

//created a function to (1) recieve API information (2) Include info in HTml (3) Make answer options random

function showQuestion(response) {
  let questions = response.data.results;
  console.log(questions);
  console.log(questions[questionIndex]);

  console.log(questions[questionIndex].question);
  let questionPart = document.querySelector("#question");
  questionPart.innerHTML = questions[questionIndex].question;
  let categoryPart = document.querySelector("#category");
  categoryPart.innerHTML = questions[questionIndex].category;

  let correctAnswer = questions[questionIndex].correct_answer;

  console.log(correctAnswer);
  console.log(questions[questionIndex].incorrect_answers[0]);
  let incorrectAnswer = questions[questionIndex].incorrect_answers;

  let answerOne = document.querySelector("#firstAnswer");
  answerOne.innerHTML = correctAnswer;
  let answerTwo = document.querySelector("#secondAnswer");
  answerTwo.innerHTML = questions[questionIndex].incorrect_answers[0];
  let answerThree = document.querySelector("#thirdAnswer");
  answerThree.innerHTML = questions[questionIndex].incorrect_answers[1];
  let answerFour = document.querySelector("#fourthAnswer");
  answerFour.innerHTML = questions[questionIndex].incorrect_answers[2];
}
function checkAnswer() {
  alert("answerOne");
}

let showAnswer = document.querySelector("#answerButton");
showAnswer.addEventListener("click", checkAnswer);

function nextQuestion() {
  axios.get(apiUrl).then(showQuestion);
}

let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", nextQuestion);
