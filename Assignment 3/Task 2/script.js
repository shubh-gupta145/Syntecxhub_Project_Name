const questions = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "Server"],
    answer: 1
  },
  {
    question: "What is CSS used for?",
    options: ["Logic", "Styling", "Database", "API"],
    answer: 1
  },
  {
    question: "Which language is used for web logic?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: 2
  }
];

let currentIndex = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const progress = document.getElementById("progress");

function loadQuestion() {
  const q = questions[currentIndex];
  questionEl.innerText = q.question;

  progress.innerText = `Question ${currentIndex + 1} / ${questions.length}`;

  optionBtns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.classList.remove("selected");

    btn.onclick = () => {
      selected = index;
      optionBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };
  });
}

nextBtn.onclick = () => {
  if (selected === null) {
    alert("Please select an option!");
    return;
  }

  if (selected === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;
  selected = null;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  selected = null;

  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  loadQuestion();
}

loadQuestion();