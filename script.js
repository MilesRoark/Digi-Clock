function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";

  // to make clock display in stadard 12hour format
  //   hours = hours % 12;
  //   hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTime, 100);

updateTime();

function updateDate() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  console.log(today);

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  document.getElementById("day").textContent = day;
  document.getElementById("month").textContent = month;
  document.getElementById("year").textContent = year;
}

setInterval(updateDate, 86400);

updateDate();

function nameDay() {
  const weekDay = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[weekDay.getDay()];

  document.getElementById("name").textContent = dayOfWeek;
}

nameDay();
setInterval(nameDay, 86400);

const tellie = document.getElementById("telluride");
const playButton = document.getElementById("music");

telluride.loop = "true";

let tellPlaying = "false";
playButton.innerText = "Listen";

playButton.addEventListener("click", () => {
  if (tellPlaying) {
    telluride.pause();
    playButton.innerText = "Listen";
  } else {
    telluride.play();
    playButton.innerText = "Quiet";
  }

  tellPlaying = !tellPlaying;
});
