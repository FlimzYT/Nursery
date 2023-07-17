const button = document.querySelector('.menu-btn');
const menu = document.querySelector('.pages')

button.addEventListener('click', () => {
    menu.classList.toggle('open')

})