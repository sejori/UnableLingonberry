function navSlide() {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", toggleBurger, false);
}
const toggleBurger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
}
function closeAllDropdowns(currentIndex) {
  const dropDowns = document.querySelectorAll(".sub-menu");
  dropDowns?.forEach(dropdown);
}
function dropdown(item, index) {
  if (currentIndex !== index) {
    item.classList.remove("show");
  }
}

window.onClick = function (event) {
  console.log("window");
  console.log(event.target);
  if (!event.target.matches("#navItem")) {
    closeAllDropdowns();
  }
};
function toggleDropDown(a, index) {
  console.log("myfun", a.parentNode);
  closeAllDropdowns(index);
  a.parentNode
    .getElementsByClassName("sub-menu")
    [index].classList.toggle("show");
  a.parentNode
    .getElementsByClassName("up-arrow")
    [index].classList.toggle("show");
  a.parentNode
    .getElementsByClassName("down-arrow")
    [index].classList.toggle("show");
}
navSlide();
