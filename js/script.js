document.getElementById('start-button').addEventListener('click', function() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('question-screen').classList.remove('hidden');
  nextQuestion();
});

let currentQuestionIndex = 0;
let lives = 3;

const questions = [
  { question: "Where does the water hyacinth originate?", answers: ["South America", "Africa", "Asia", "Europe"], correct: 0 },
  { question: "What is one method to control water hyacinths?", answers: ["Chemicals", "Physical removal", "Introducing predators", "All of the above"], correct: 3 }
];

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    question.answers.forEach((answer, index) => {
      const answerDiv = document.createElement('div');
      answerDiv.textContent = answer;
      answerDiv.onclick = function() { answerQuestion(index); };
      answersDiv.appendChild(answerDiv);
    });
  } else {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('win-screen').classList.remove('hidden');
  }
}

function answerQuestion(selectedIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (selectedIndex === correctAnswer) {
    currentQuestionIndex++;
    nextQuestion();
  } else {
    lives--;
    updateLivesDisplay();
    if (lives <= 0) {
      document.getElementById('question-screen').classList.add('hidden');
      document.getElementById('game-over-screen').classList.remove('hidden');
    }
  }
}

function updateLivesDisplay() {
  const livesElement = document.getElementById('lives');
  livesElement.textContent = '❤️'.repeat(lives);
}

document.getElementById('restart-button').addEventListener('click', function() {
  lives = 3;
  currentQuestionIndex = 0;
  updateLivesDisplay();
  document.getElementById('game-over-screen').classList.add('hidden');
  document.getElementById('win-screen').classList.add('hidden');
  document.getElementById('question-screen').classList.remove('hidden');
  nextQuestion();
});
