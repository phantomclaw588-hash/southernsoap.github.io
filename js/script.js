const heroScroll = document.getElementById('heroScroll');
const title = document.querySelector('.hero-title');
const soapColumns = document.querySelectorAll('.soap-column');

function updateHero() {
    const rect = heroScroll.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

    title.style.opacity = 1 - progress * 1.35;
    title.style.transform = `translateY(${progress * -28}px)`;

    soapColumns.forEach(el => {
        const offset = el.classList.contains('left') ? -60 : 60;
        const fadeStart = 0.18;
        const fadeProgress = Math.min(Math.max((progress - fadeStart) / 0.55, 0), 1);

        el.style.opacity = fadeProgress;
        el.style.transform = `translateX(${offset * (1 - fadeProgress)}px)`;
    });
}

window.addEventListener('scroll', updateHero);
window.addEventListener('load', updateHero);
