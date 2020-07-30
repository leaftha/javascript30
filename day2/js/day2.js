const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const senconds = now.getSeconds();
  const sencondDegress = (senconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${sencondDegress}deg)`;
  console.log(sencondDegress);

  const min = now.getUTCMinutes();
  const minDegress = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegress}deg)`;

  const hour = now.getHours();
  const hourDegress = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegress}deg)`;
}

setInterval(setDate, 1000);
