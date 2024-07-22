const header = document.querySelector(".header");
const navbutton = document.querySelectorAll(".nav-item");
const slides = document.querySelectorAll(".slide");
const scrollHeader = () => {
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

const changeline = (filter) => {
  navbutton.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("underline");
    } else {
      button.classList.remove("underline");
    }
  });
};
const changeClass = (button) => {
  const filter = button.target.dataset.filter;
  changeline(filter);
};
navbutton.forEach((button) => {
  button.addEventListener("click", changeClass);
});
const loadingHandler = () => {
  const container = document.querySelector(".container");
  container.classList.add("container-visible");
};
window.addEventListener("load", loadingHandler);

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeCurrentActives();
    slide.classList.add("active");
  });
});
const removeCurrentActives = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const navbarHeight = document.querySelector(".navigation").offsetHeight;
  if (element) {
    const more = 60;
    const elementPosition = element.offsetTop - navbarHeight - more;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

// document.addEventListener("DOMContentLoaded", function () {
//   const navItems = document.querySelectorAll(".nav-item");
//   const mains = document.querySelectorAll("main");

//   navItems.forEach((link) => {
//     link.addEventListener("click", function () {
//       const targetId = link.getAttribute("data-target");
//       const targetMain = document.getElementById(targetId);
//       window.scrollTo({
//         top: targetMain.offsetTop,
//         behavior: "smooth",
//       });
//     });
//   });
// });
// console.log(window);
