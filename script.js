const quiz = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Logic",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "##", "**", "%%"],
    correct: 0,
  },
  {
    question: "Which company created JavaScript?",
    answers: ["Microsoft", "Google", "Netscape", "Apple"],
    correct: 2,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Coded Style Syntax",
    ],
    correct: 1,
  },
  {
    question: "Which HTML tag is used to link a CSS file?",
    answers: ["<style>", "<css>", "<link>", "<script>"],
    correct: 2,
  },
];

const quizAns = document.querySelector("#quiz-ans");
let answers = document.querySelectorAll(".answer");
const heading = document.querySelector("#heading");
const nextBtn = document.querySelector("#next-btn");
const textScore = document.querySelector("#score");

let currentQuestion = 0;
let score = 0;
const loadQuestion = () => {
  let q = quiz[currentQuestion];

  heading.textContent = q.question;
//* this part load answers 
  answers.forEach((ans, index) => {
    ans.textContent = q.answers[index];
  });
};


//* ==> this part states if your answer is correct or wrong 



answers.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === quiz[currentQuestion].correct) {
      score++;

      alert("correct");
    } else {
      alert("wrong");
    }

  answers.forEach((p)=>{
p.disabled = true

  })


  });



});




//*this part load next question


nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    heading.textContent = "Good Job!, Your quiz is completed.";
    quizAns.style.display = "none";
    textScore.textContent = `${score} out of 5`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
