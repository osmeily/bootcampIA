// Steps data
const stepTemplate = document.getElementById('step-template').content
const stepContainer = document.getElementById('steps-container')

const steps = [
    {
        id: 1,
        title: '01',
        content: 'Primero debes conectar con nosotros para que podamos conocerte y saber que necesitas.',
        border: 'border-darkPurple',
        background: 'bg-darkPurple',
        src: '../src/assets/icono4.png',
    },
    {
        id: 2,
        title: '02',
        content: 'Accede a nuestro formulario de contacto, diligéncialo y envíanos tus datos.',
        border: 'border-grayBlue',
        background: 'bg-grayBlue',
        src: '../src/assets/icono3.png'
    },
    {
        id: 3,
        title: '03',
        content: 'Mantente atento a tu celular, te llegarán mensajes de texto con información importante.',
        border: 'border-amber-500',
        background: 'bg-amber-500',
        src: '../src/assets/icono2.png'
    },
    {
        id: 4,
        title: '04',
        content: '¡Bienvenido a la familia!, comparte la noticia con tus amigos.',
        border: 'border-purple-600',
        background: 'bg-purple-600',
        src: '../src/assets/icono1.png'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    setSteps()

    setInterval(() => {
        next()
    }, 6000)
})

const setSteps = () => {
    steps.forEach(step => {
        const stepClone = stepTemplate.cloneNode(true)
        const stepTitle = stepClone.querySelector('#step-title')
        const stepContent = stepClone.querySelector('#step-content')
        const stepCircle = stepClone.querySelector('#step-circle')
        const stepIcon = stepClone.querySelector('#step-icon')
        const topLine = stepClone.querySelector('#top-line')
        const bottomLine = stepClone.querySelector('#bottom-line')

        stepTitle.textContent = step.title
        stepTitle.classList.add(step.background)
        stepContent.textContent = step.content
        stepCircle.classList.add(step.border)
        stepIcon.src = step.src
        topLine.classList.add(step.background)
        bottomLine.classList.add(step.background)

        stepContainer.appendChild(stepClone)
    })
}
