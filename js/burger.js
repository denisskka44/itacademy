const burgerButton = document.querySelector(".burgerIcon");
const closeButton = document.querySelector(".bclose");
const burgerLinks = document.querySelectorAll(".bLink");
const burger = document.querySelector(".bPage");

function showBurger() {
  burger.classList.remove("pHidden");
};

function hideBurger() {
  burger.classList.add("pHidden");
};

burgerButton.addEventListener("click", () => {
  showBurger();
}); 

closeButton.addEventListener("click", () => {
  hideBurger();
});

burgerLinks.forEach(burgerLink => {
  burgerLink.addEventListener("click", () => {
    hideBurger();
  });
});