let timerInterval;
let remainingTime = 0;

// Set Timer
document.getElementById("set-timer").addEventListener("click", () => {
  const inputMinutes = parseInt(document.getElementById("time-input").value, 10);

  if (!isNaN(inputMinutes) && inputMinutes > 0) {
    remainingTime = inputMinutes * 60; // Convert to seconds
    updateDisplay();
  } else {
    alert("Please enter a valid number of minutes.");
  }
});

// Start Timer
document.getElementById("start-timer").addEventListener("click", () => {
  if (remainingTime > 0) {
    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(countdown, 1000);
  } else {
    alert("Please set a timer first.");
  }
});

// Reset Timer
document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(timerInterval);
  remainingTime = 0;
  updateDisplay();
});

// Countdown Function
function countdown() {
  if (remainingTime > 0) {
    remainingTime--;
    updateDisplay();
  } else {
    clearInterval(timerInterval);
    alert("Time's up! Take a break.");
  }
}

// Update Timer Display
function updateDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
