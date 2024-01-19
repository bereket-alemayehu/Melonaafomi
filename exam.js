"use strict";
const answers = document.querySelectorAll(".answer");
const subject = document.querySelector(".exam-subject");
const examContainer = document.querySelector(".exam-container");
const questionText = document.querySelector(".question-text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currExam = 0;
let Score = 0;

const ExamData = [
  {
    subject: "SoftWare Enginnering Final Exam ",
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    subject: "Soft Ware Enginnering ",
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    subject: "Soft Ware Enginnering ",
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    subject: "Soft Ware Enginnering ",
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

loadExam();

function loadExam() {
  deselectAnswer();
  const currentExam = ExamData[currExam];

  subject.innerText = currentExam.subject;
  questionText.innerText = currentExam.question;
  a_text.innerText = currentExam.a;
  b_text.innerText = currentExam.b;
  c_text.innerText = currentExam.c;
  d_text.innerText = currentExam.d;
}

function deselectAnswer() {
  answers.forEach((ans) => (ans.checked = false));
}

function getSelected() {
  let answer;
  answers.forEach((ans) => {
    if (ans.checked) answer = ans.id;
  });

  return answer;
}

nextBtn.addEventListener("click", function () {
  const answer = getSelected();

  if (answer) {
    if (answer === ExamData[currExam].correct) {
      Score++;
    }
    currExam++;
    if (currExam < ExamData.length) {
      loadExam();
    }
  }
});

prevBtn.addEventListener("click", function () {
  if (currExam > 0) {
    currExam--;
    loadExam();
  }
});
