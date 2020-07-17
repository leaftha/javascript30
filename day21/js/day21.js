const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.corrds.speed;
    arrow.style.transform = `rotate(${data.corrds.heading}deg)`;
  },
  (err) => {
    console.err(err);
    alert("Hey You Gotta Allow That to happen");
  }
);
