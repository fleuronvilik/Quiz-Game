let apiUrl = " https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;

axios.get(apiUrl).then(showQuestion);

function showQuestion(response) {
  console.log(response.data.results);
  let results = response.data.results;

  results.forEach(function (result) {
    console.log(result.question);
    questions = result.question;
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

//function revealAnswer() {
//let apiUrl = " https://opentdb.com/api.php?amount=50";
//axios.get(apiUrl).then(showQuestion);
//}

//let answer = document.getElementById("answerButton");
//answer.addEventListener("click", revealAnswer);
