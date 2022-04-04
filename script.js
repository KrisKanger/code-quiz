// Amount of time for the quiz
const totalTime = 2;
let time = totalTime * 60;



// Declaring elements from HTML
const timerEl = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const questionEl = document.getElementById('questions');
const answerbuttonEl = document.getElementById('answer-buttons');

// Event listeners
startButton.addEventListener('click', startTime);


// Setting the page to countdown the timer every second
setInterval(startTime, 1000);

// Creating the timer function
function startTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

// Function that responds to the start button event listener and begins the quiz
function startQuiz() {
    console.log('Started')
    currentQuestionsIndex = 0
    nextQuestion()
}

function nextQuestion() {
    showQuestion([currentQuestionsIndex])
}

function showQuestion() {
    questionEl.innerText = questions.question
}
    
function answerResult() {

}

// Adding array for questions
let questions = [
    {
        question: 'What is JavaScript?',
        answers: [
            { text: 'A text-based programming language', correct: true },
            { text: 'An extremely hot cup of coffee', correct: false },
            { text: 'An foreign language used on Mars', correct: false },
            { text: 'C++', correct: false }
        ]
    }
]