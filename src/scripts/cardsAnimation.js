let isAnimationActive = false;

function isInViewport(card) {
    const rect = card.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateCard(card) {
    card.classList.add('animate-bounce');

    setTimeout(() => {
        card.classList.remove('animate-bounce');
    }, 1500)
}

window.addEventListener('DOMContentLoaded', () => {
    let card1 = document.querySelector('#card-1');
    let cardParent = card1.parentNode;

    let counter = 0;

    document.addEventListener('scroll', () => {
        if (isInViewport(card1) && !isAnimationActive) {
            isAnimationActive = true;
            setInterval(() => {
                animateCard(cardParent.children[counter]);
                if(counter < 4) {
                    counter++;
                } else {
                    counter = 0;
                }
            }, 1500);
        } 
    });
});



