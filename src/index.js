import './style.css'

// const app = document.getElementById('app')
// // tambahkan kelas "scrolled" ke elemen "nav" saat di-scroll

// app.innerHTML = `

// `

// Get elements
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timeRemaining = document.querySelector('.time-remaining');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const resetButton = document.querySelector('#reset-button');

// Set initial time
let time = 0;

// Set interval ID to null
let intervalID = null;

// Display time remaining
const displayTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeRemaining.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Start timer
const startTimer = () => {
    if (intervalID) {
        return;
    }
    time = minutesInput.value * 60 + secondsInput.value * 1;
    if (time <= 0) {
        return;
    }
    intervalID = setInterval(() => {
        time--;
        if (time < 0) {
            clearInterval(intervalID);
            timeRemaining.innerHTML = 'Time\'s up!';
            return;
        }
        displayTime();
    }, 1000);
}

// Stop timer
const stopTimer = () => {
    clearInterval(intervalID);
    intervalID = null;
}

// Reset timer
const resetTimer = () => {
    stopTimer();
    time = 0;
    minutesInput.value = '';
    secondsInput.value = '';
    displayTime();
}

// Add event listeners to buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Display initial time
displayTime();

