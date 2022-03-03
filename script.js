// Amount of time for the quiz
const totalTime = 2;
let time = totalTime * 60;

// Declaring the timer element
const timerEl = document.getElementById('timer');

// Setting the page to countdown the timer every second
setInterval(startTime, 1000);

// Creating the timer function
function startTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
