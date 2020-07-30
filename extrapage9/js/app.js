var i = document.querySelector("#img");
i.classList = "pre";

document.links[0].addEventListener("click", function () {
  i.classList = "next";
});

document.links[1].addEventListener("click", function () {
  i.classList = "pre";
});
