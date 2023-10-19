const navReponsive = document.querySelector(".nav-responsive");

const collapse = document.querySelector(".collapse-div");

const nav = document.querySelector("nav ul");

const close = document.querySelector(".close-div");

const clubData = document.querySelectorAll(".club-data");

const sectionInfo = document.querySelector("#info");

let appended = false;
const hr = document.createElement("hr");
collapse.addEventListener("click", function () {
  close.classList.add("active");
  collapse.classList.add("remove");
  if (!appended) addChildren();
  nav.classList.add("responsive");
});

close.addEventListener("click", function () {
  close.classList.remove("active");
  nav.classList.remove("responsive");
  collapse.classList.remove("remove");
});

window.addEventListener("resize", function () {
  try {
    if (window.visualViewport.width > 900) removeChild();
    else addChildren();
  } catch (error) {}
});

function addChildren() {
  nav.appendChild(hr);
  appended = true;
}

function removeChild() {
  nav.removeChild(hr);
  appended = false;
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) navReponsive.style.opacity = 0.5;
  else navReponsive.style.opacity = 1;
});

// INCREMENTING COUNTER
window.addEventListener("scroll", listenEvent);

function listenEvent() {
  clubData.forEach((club) => {
    club.innerText = "0";
    const getData = () => {
      let target = +club.getAttribute("data-attribute");
      const current = +club.innerText;

      const increment = +target / 40;
      if (current < target) {
        club.innerText = `${Math.ceil(increment) + current}`;
        setTimeout(getData, 50);
      } else {
        if (club.innerText == "8") club.innerText = target;
        else club.innerText = target + "+";
      }
    };
    if (sectionInfo.getBoundingClientRect().top <= 50) {
      getData();
      window.removeEventListener("scroll", listenEvent);
    }
  });
}


try {
  const sliderContainer = document.querySelector(".slider-container");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");

let currentSlide = 0;
let isAnimating = false;

function goToSlide(index) {
  if (isAnimating) return;

  const slides = sliderContainer.querySelectorAll(".slider-image");
  const slideWidth = slides[0].offsetWidth;

  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  isAnimating = true;

  sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`;

  setTimeout(() => {
    currentSlide = index;
    isAnimating = false;
  }, 500);
}

sliderPrev.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

sliderNext.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

sliderContainer.addEventListener("transitionend", () => {
  const slides = sliderContainer.querySelectorAll(".slider-image");

  if (currentSlide === slides.length - 1) {
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = `translateX(0)`;
    setTimeout(() => {
      sliderContainer.style.transition = "";
    }, 10);
    currentSlide = 0;
  } else if (currentSlide === 0) {
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = `translateX(${-slides[slides.length - 1]
      .offsetWidth}px)`;
    setTimeout(() => {
      sliderContainer.style.transition = "";
    }, 10);
    currentSlide = slides.length - 1;
  }
});

  
} catch (error) {
  
}


const lazyImages = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      img.setAttribute('src', src);
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(image => {
  observer.observe(image);
});
