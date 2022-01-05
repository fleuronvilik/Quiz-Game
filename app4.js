let apiUrl = " https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;

axios.get(apiUrl).then(function (response) {
  let questions = response.data.results;
  console.log(questions);
  console.log(questions[questionIndex]);
  console.log(questions[questionIndex].question);
  let questionPART = document.querySelector("#question");
  questionPART.innerHTML = questions[questionIndex].question;
  let categoryPart = document.querySelector("#category");
  categoryPart.innerHTML = questions[questionIndex].category;
});
