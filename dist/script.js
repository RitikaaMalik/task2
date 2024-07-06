const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyper Transfer Markup Language",
    c: "Hypertext Machine Language",
    d: "Hyperlink and Text Markup Language",
    correct: "a"
  },
  {
    question: "Who is the CEO of Tesla?",
    a: "Jeff Bezos",
    b: "Elon Musk",
    c: "Bill Gates",
    d: "Tony Stark",
    correct: "b"
  },
  {
    question: "The iPhone was created by which company?",
    a: "Apple",
    b: "Intel",
    c: "Amazon",
    d: "Microsoft",
    correct: "a"
  },
  {
    question: "How many Harry Potter books are there?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "c"
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const playAgainBtn = document.getElementById("play-again");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      endQuiz();
    }
  }
});

function endQuiz() {
  quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <p>Congratulations on completing the quiz!</p>
    <button id="play-again">Play Again</button>
  `;
  playAgainBtn.addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentQuiz = 0;
  score = 0;
  loadQuiz();
}