const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.querySelector('.question');
const optionsElements = document.querySelectorAll('.option');
const resultElement = document.querySelector('.result');
const nextButton = document.querySelector('.next');

let currentQuestion = 0;
let score = 0;

const questions = [
	{
		question: 'What is the capital of India?',
		options: ['New Delhi', 'Delhi', 'china', 'America'],
		correct: 0
	},
	{
		question: 'What is the largest planet in our solar system?',
		options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
		correct: 2
	},
	{
		question: 'which is the largest organ in the human body?',
		options:['skin','eye','liver','tyroid'],
		correct:0
	}
];

function displayQuestion() {
	questionElement.textContent = questions[currentQuestion].question;
	optionsElements.forEach((option, index) => {
		option.textContent = questions[currentQuestion].options[index];
	});
}

function checkAnswer() {
	const selectedOption = document.querySelector('.option.selected');
	if (selectedOption) {
		const correct = selectedOption.dataset.correct === 'true';
		if (correct) {
			score++;
			resultElement.textContent = `Correct! Your score is ${score} out of ${currentQuestion + 1}`;
		} else {
			resultElement.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].correct]}`;
		}
	}
}

function nextQuestion() {
	currentQuestion++;
	if (currentQuestion >= questions.length) {
		quizContainer.innerHTML = `<h1>Quiz finished! Your final score is ${score} out of ${questions.length}</h1>`;
	} else {
		displayQuestion();
	}
}

optionsElements.forEach(option => {
	option.addEventListener('click', () => {
		option.classList.add('selected');
		checkAnswer();
	});
});

nextButton.addEventListener('click', () => {
	nextQuestion();
});

displayQuestion();
