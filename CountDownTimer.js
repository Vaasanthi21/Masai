let seconds = parseInt(prompt("Enter countdown time in seconds:"), 10);


let intervalId;

function startCountdown(duration) {
  let timeLeft = duration;

  intervalId = setInterval(() => {
    console.log("Time left:", timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
    }
  }, 1000);

  
  setTimeout(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "s") {
        clearInterval(intervalId);
        console.log("Countdown stopped by user.");
      }
    });
  }, 1000);
}

startCountdown(seconds);
