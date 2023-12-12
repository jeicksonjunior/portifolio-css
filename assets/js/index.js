document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    const line = document.querySelector('.line');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');

            line.style.width = `${tab.offsetWidth}px`;
            line.style.transform = `translateX(${tab.offsetLeft}px)`;
        });
    });
});