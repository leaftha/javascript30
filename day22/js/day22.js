const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function highlightlink() {
  const linkCoors = this.getBoundingClientRect();
  console.log(linkCoors);
  const coords = {
    width: linkCoors.width,
    height: linkCoors.height,
    top: linkCoors.top + window.scrollY,
    left: linkCoors.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightlink));
