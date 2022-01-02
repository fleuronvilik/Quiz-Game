let apiUrl = " https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;

axios.get(apiUrl).then(showQuestion);

function showQuestion(response) {
  let questions = response.data.results;
  console.log(response);
  questions.forEach(function (result) {
    console.log(result.question);
    questions = result.question;
    let category = document.querySelector("#category");
    category.innerHTML = result.category;
    let questionDisplay = document.querySelector("#question");
    questionDisplay.innerHTML = result.question;
    console.log(result.incorrect_answers);
    let answerOne = document.querySelector("#firstAnswer");
    answerOne.innerHTML = result.incorrect_answers[0];
    let answerTwo = document.querySelector("#secondAnswer");
    answerTwo.innerHTML = result.incorrect_answers[1];
    let answerCorrect = document.querySelector("#correctAnswer");
    answerCorrect.innerHTML = result.correct_answer;
    let answerThree = document.querySelector("#thirdAnswer");
    answerThree.innerHTML = result.incorrect_answers[2];
  });
}

function nextQuestion() {
  questionIndex++;
  axios.get(apiUrl).then(showQuestion);
}

let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", nextQuestion);

let answerButton = document.querySelector("#answerButton");
answerButton.addEventListener("click", revealAnswer);
