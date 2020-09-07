const quizData = [
  {
    question: "what is the most programming language use in 2019?",
    a: "javascript",
    b: "java",
    c: "python",
    d: "rubyonrails",
    correct: "a",
  },
  {
    question: "What is HTML Stands for",
    a: "Hyper Text Module Language",
    b: "Hyper Text Moduling Language",
    c: "Hypertext Markup Language",
    d: "Hypertext Marketing Language",
    correct: "c",
  },
  {
    question: "what is the year was javascript launched?",
    a: 1995,
    b: 1999,
    c: 2000,
    d: "none",
    correct: "a",
  },
  {
    question: "What is CSS Stands for",
    a: "Cascading Style Sreets",
    b: "Cascading Sting Sheets",
    c: "Concating Style Sheets",
    d: "Cascading Style Sheets",
    correct: "d",
  },
  {
    question: "One 1rem is equal to how many piexels",
    a: "16px",
    b: "22px",
    c: "15px",
    d: "18px",
    correct: "a",
  },
];

let currentQuestion = 0;
let score = 0;
const scoreLast = document.getElementById("result");
const allAnswers = document.querySelectorAll(".answer");
// Question
const question = document.querySelector(".question");
// selected ones
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

// submit button-
const submitBtn = document.querySelector("#submitbtn");

// function calling
loadQuiz();

function loadQuiz() {
  deselectPreviousOne();

  const allQuizData = quizData[currentQuestion];

  question.innerText = allQuizData.question;
  a_text.innerText = allQuizData.a;
  b_text.innerText = allQuizData.b;
  c_text.innerText = allQuizData.c;
  d_text.innerText = allQuizData.d;
}

function deselectPreviousOne() {
  allAnswers.forEach((answer) => {
    answer.checked = false;
  });
}

// which one answer is selecting
function selectedOne() {
  let getAnswer = undefined;

  allAnswers.forEach((answer) => {
    if (answer.checked) {
      getAnswer = answer.id;
    }
  });
  return getAnswer;
}

submitBtn.addEventListener("click", function () {
  const selectedAnswer = selectedOne();

  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuestion].correct) {
      score++;
    }

    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuiz();
    } else {
      scoreLast.innerHTML = `<h2 class="resultfinal">Total Correct anwers is ${score}/${quizData.length} questions`;
    }
  }
});
