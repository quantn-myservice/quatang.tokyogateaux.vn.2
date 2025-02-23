document.addEventListener("DOMContentLoaded", function () {
  // Set the end date for the countdown
  const endDate = new Date("March 5, 2025 23:59:59").getTime();

  // Update the countdown every second
  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the elements with ids "days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Hết thời gian!";
    }
  }, 1000);
});
