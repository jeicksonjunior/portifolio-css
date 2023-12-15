document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerNav = document.querySelector(".burger-nav");
  const closeBtn = document.querySelector(".close-btn");

  burgerBtn.addEventListener("click", function () {
    burgerNav.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    burgerNav.style.display = "none";
  });

  burgerNav.addEventListener("click", function (event) {
    if (event.target.classList.contains("list-element")) {
      burgerNav.style.display = "none";
    }
  });
});
