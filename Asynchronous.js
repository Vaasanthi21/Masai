function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}


function displayResult(msg) {
  console.log(msg);
}

timer(2000, displayResult); 
