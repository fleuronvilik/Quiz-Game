let apiUrl = " https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;

axios.get(apiUrl).then(showQuestion);

function showQuestion(response) {
  let questions = response.data.results;
  console.log(questions);
  console.log(questions[questionIndex]);
  console.log(questions[questionIndex].question);
  let questionPART = document.querySelector("#question");
  questionPART.innerHTML = questions[questionIndex].question;
  let categoryPart = document.querySelector("#category");
  categoryPart.innerHTML = questions[questionIndex].category;
  console.log(questions[questionIndex].correct_answer);
  let correctAnswer = questions[questionIndex].correct_answer;

  function revealAnswer() {
    alert(`The correct answer is ${correctAnswer}!`);
  }
  let answer = document.getElementById("answerButton");
  answer.addEventListener("click", revealAnswer);
}

function nextQuestion() {
  axios.get(apiUrl).then(showQuestion);
}

let next = document.getElementById("next");
next.addEventListener("click", nextQuestion);
