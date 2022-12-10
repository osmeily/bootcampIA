const burgerMenu = document.querySelector('#menu')
const menuIcon = document.querySelector('#menu-icon')

menuIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('flex')
    burgerMenu.classList.toggle('hidden')})

