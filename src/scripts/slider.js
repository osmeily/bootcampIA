// slider data

let currentSlide = 1
const slider = document.getElementById('slider')
const totalSlides = slider.childElementCount

function next() {
    if (currentSlide < totalSlides) {
        currentSlide++
        showSlide()
    }
    if(currentSlide === totalSlides) {
        currentSlide = 0
        next()
    }
}

function prev() {
    if (currentSlide > 1) {
        currentSlide--
        showSlide()
    }
    if(currentSlide === 1) {
        currentSlide = totalSlides + 1
        prev()
    }
}

function showSlide() {
    let slides = document.getElementById('slider').getElementsByTagName('li');
    for (let i = 0; i <= totalSlides; i++) {
        const item = slides[i];
        if (currentSlide === i + 1) {
            item.classList.remove('hidden')
        } else {
            item.classList.add('hidden')
        }
    }
}