let apiUrl = "https://opentdb.com/api.php?amount=50";

let correctAnswer = ""
let questions = [];
let questionIndex = 0;
// let userAnswer = ""; // is not currently used

axios.get(apiUrl).then(showQuestion);

//created a function to (1) recieve API information (2) Include info in HTml (3) Make answer options random

function showQuestion(response) {
  let questions = response.data.results;
  console.log(questions);
  console.log(questions[questionIndex]);

  // console.log(questions[questionIndex].question);
  let questionPart = document.querySelector("#question");
  questionPart.innerHTML = questions[questionIndex].question;
  let categoryPart = document.querySelector("#category");
  categoryPart.innerHTML = questions[questionIndex].category;

  correctAnswer = questions[questionIndex].correct_answer;
  let answers = questions[questionIndex].incorrect_answers;
  // console.log(answers)
  answers.push(correctAnswer)
  // console.log(answers)

  // console.log(correctAnswer);

  let shuffledAnswers = shuffleAnswers(answers)
  console.log(shuffledAnswers)

  let answerOne = document.querySelector("#firstAnswer");
  answerOne.innerHTML = shuffledAnswers[0];
  let answerTwo = document.querySelector("#secondAnswer");
  answerTwo.innerHTML = shuffledAnswers[1];
  let answerThree = document.querySelector("#thirdAnswer");
  answerThree.innerHTML = shuffledAnswers[2];
  let answerFour = document.querySelector("#fourthAnswer");
  answerFour.innerHTML = shuffledAnswers[3];
}

function checkAnswer() {
  alert(correctAnswer);
}

let showAnswer = document.querySelector("#answerButton");
showAnswer.addEventListener("click", checkAnswer);

function nextQuestion() {
  axios.get(apiUrl).then(showQuestion);
}

let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", nextQuestion);

function shuffleAnswers(answersArray) {
  let answersInRandomOrder = []
  for (let i = 0, l = answersArray.length; i < l; i++) {
    // console.log(i)
    let randomIndex = Math.floor(Math.random() * answersArray.length)
    // console.log(randomIndex)
    let item = answersArray.splice(randomIndex, 1)
    // console.log(item)
    answersInRandomOrder = answersInRandomOrder.concat(item)
    // console.log(answersInRandomOrder)
    // delete answersArray[randomIndex]
  }
  return answersInRandomOrder
}