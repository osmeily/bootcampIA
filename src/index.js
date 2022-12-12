const burgerMenu = document.querySelector('#menu')
const menuIcon = document.querySelector('#menu-icon')

const questionsbtn = document.querySelector('#questions-btn')
const questions = document.querySelector('#questions')
const frecuentQuestions = document.querySelectorAll('.preguntas')

const toTopBtn = document.querySelector('#to-top')

menuIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('flex')
    burgerMenu.classList.toggle('hidden')})

questionsbtn.addEventListener('click', () => { 
    questions.classList.toggle('flex')
    questions.classList.toggle('hidden')}
)

frecuentQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        questions.classList.toggle('flex')
        questions.classList.toggle('hidden')}
    )
})

toTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

