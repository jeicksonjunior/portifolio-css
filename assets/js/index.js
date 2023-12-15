document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  const line = document.querySelector(".line");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach((content) => content.classList.remove("active"));
      contents[index].classList.add("active");

      line.style.width = `${tab.offsetWidth}px`;
      line.style.transform = `translateX(${tab.offsetLeft}px)`;
    });
  });
});

const burgerBtn = document.getElementById("burger-btn");
const mobileNavList = document.querySelector(".mobile-nav-list");

burgerBtn.addEventListener("click", () => {
  mobileNavList.classList.toggle("active");
});

// Fechar o menu ao clicar em um item
mobileNavList.addEventListener("click", () => {
  mobileNavList.classList.remove("active");
});

function abrirNovaAba(nomeSite) {
  var url;

  if (nomeSite === "linkedin") {
    url = "https://www.linkedin.com";
  } else if (nomeSite === "github") {
    url = "https://www.github.com";
  }

  if (url) {
    window.open(url, "_blank");
  }
}
