const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");
const select = document.querySelectorAll("select");

const section_2 = document.querySelector("#vm");

const toTop = document.querySelector(".toTop");
input.forEach((i) =>
  i.addEventListener("click", function () {
    this.previousElementSibling.classList.add("active");
  })
);

select.forEach((s) => {
  s.addEventListener("click", function () {
    this.previousElementSibling.classList.add("active");
  });
});

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
  });
});

// TYPING EFFECT
const typedText = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["TECHNOVA"];

let charIndex = 0;
let textArrayIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } else {
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1500);
});
