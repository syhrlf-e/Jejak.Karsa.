function serviceSection() {
  const aboutUsSection = document.getElementById("service-section");
  const offset = window.innerHeight / 2.5;
  const elementPosition = aboutUsSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function aboutSection() {
  const aboutUsSection = document.getElementById("about");
  const offset = window.innerHeight / 3;
  const elementPosition = aboutUsSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function blogSection() {
  const aboutUsSection = document.getElementById("blog");
  const offset = window.innerHeight / 5;
  const elementPosition = aboutUsSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

document.querySelector(".button-nav").addEventListener("click", function () {
  const popup = document.querySelector(".popupwarp");
  popup.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  const popup = document.querySelector(".popupwarp");
  const button = document.querySelector(".button-nav");
  if (!popup.contains(e.target) && !button.contains(e.target)) {
    popup.classList.remove("show");
  }
});

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Toggle 'active' class on navbar
});
