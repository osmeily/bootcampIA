let animationActive = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateCard(element) {
    element.classList.add('scale-110');
    element.classList.add('border');

    setTimeout(() => {
        element.classList.remove('scale-110');
        element.classList.remove('border');
    }, 1000)
}

window.addEventListener('DOMContentLoaded', () => {
    const stepCard = document.querySelector('#step-1');
    const parent = stepCard.parentNode;
    let counter = 0;

    document.addEventListener('scroll', () => {
        if (isInViewport(stepCard) && !animationActive) {
            animationActive = true;
            setInterval(() => {
                animateCard(parent.children[counter]);
                if(counter < 3) {
                    counter++;
                } else {
                    counter = 0;
                }
            }, 1000);
        } else {
            const cards = parent.children;
            cards.forEach(card => {
                card.classList.remove('scale-110');
                card.classList.remove('border');
            });
        }
    });
});
