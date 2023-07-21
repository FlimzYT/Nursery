const dropDownButton = document.querySelector('.pages > li');
const dropDownMenu = document.querySelector('.dropdown')
const arrow = document.querySelector('.pages > li > a > span')

dropDownButton.addEventListener('click', () => {

    dropDownMenu.classList.toggle('hidden')
    arrow.classList.toggle('flipped-y')

})