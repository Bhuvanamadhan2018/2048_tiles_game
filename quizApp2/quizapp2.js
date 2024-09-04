const quizContainer = document.querySelector('.quiz-container');
const questionContainer = document.querySelector('.question-container');
const options = document.querySelectorAll('.options li');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const submitButton = document.querySelector('.submit');

let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: 'Define HTML?',
    options: ["hypertext marking language", "hypertext markup language", "hightext make link","height of text make language"],
    correctAnswer: 1
  },
  {
    question: "What is CSS?",
    options: ['cascading style Sheet', 'Copy Style Sheet', 'Cascading Sheet Style', 'Cascading style show'],
    correctAnswer:0
  },
  {
    question:"which is Programing language?",
    options:["javascript","CSS","HTML","None"],
    correctAnswer:0
  },
  {
    question:"what is javascript?",
    options:["javascript is used for functionality to webpage","opps language","dynamic programming","None"],
    correctAnswer:0
  }
  
];

function displayQuestion() {
  const question = questions[currentQuestion];
  questionContainer.querySelector('.question').textContent = question.question;
  options.forEach((option, index) => {
    option.querySelector('label').textContent = question.options[index];
    
    option.querySelector('input').checked = false;
  });
}

function OptionSelect() {
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedOption = option.querySelector('input');
      if (selectedOption.checked) {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        if (selectedOption.value === correctAnswer.toString()) {
          score++;
        }
      }
    });
  });
}

function PreviousButton() {
  previousButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      displayQuestion();
    }
  });
}

function NextButton() {
  nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    }
  });
}

function SubmitButton() {
  submitButton.addEventListener('click', () => {
    alert(`Your score is ${score} out of ${questions.length}`);
  });
}

displayQuestion();
OptionSelect();
PreviousButton();
NextButton();
SubmitButton();
