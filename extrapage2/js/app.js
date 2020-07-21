const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextslide = currentSlide.nextElementSibling;
    if (nextslide) {
      nextslide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

slide();
window.addEventListener("click", () => slide());

// setInterval(slide, 200); //자동으로 넘기기
