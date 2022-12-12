const burgerMenu = document.querySelector('#menu')
const menuIcon = document.querySelector('#menu-icon')

const questionsbtn = document.querySelector('#questions-btn')
const questions = document.querySelector('#questions')

menuIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('flex')
    burgerMenu.classList.toggle('hidden')})

questionsbtn.addEventListener('click', () => { 
    questions.classList.toggle('flex')
    questions.classList.toggle('hidden')}
)

