// Set the date we're counting down to in UTC using ISO 8601 format
const countDownDate = new Date("2024-04-22T13:59:31Z").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
   // Get the current date and time in UTC
   const now = new Date().getTime();
   
   // Calculate the remaining time
   const distance = countDownDate - now;

   // Calculate days, hours, minutes, and seconds
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the countdown
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   // If the countdown is over, display the message
   if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "COUNTDOWN EXPIRED";
   }
}, 1000);
