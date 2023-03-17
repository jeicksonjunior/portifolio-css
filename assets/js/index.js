const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => { tab.classList.remove("active") });
        tab.classList.add("active");


        allContent[index].classList.add("active");

    })

})
