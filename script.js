let countdown = () => {
  let targetDate = new Date("2024-12-10T22:00:00Z").getTime();

  let timer = setInterval(function () {
    let now = new Date().getTime();
    let difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(timer);
      console.log("Countdown ended");
      return;
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    console.log(days, hours, minutes, seconds, targetDate);

    document.querySelector(".days").innerHTML = days + " " + "Days";
    document.querySelector(".hours").innerHTML = hours + " " + "Hours";
    document.querySelector(".mins").innerHTML = minutes + " " + "Minutes";
    document.querySelector(".secs").innerHTML = seconds + " " + " seconds";
  }, 1000);
};

countdown();
