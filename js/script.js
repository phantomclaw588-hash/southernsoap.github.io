const heroScroll = document.getElementById('heroScroll');
const title = document.querySelector('.hero-title');
const soapColumns = document.querySelectorAll('.soap-column');

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function updateHero() {
    const rect = heroScroll.getBoundingClientRect();
    const scrollRange = heroScroll.offsetHeight - window.innerHeight;
    const scrolled = clamp(-rect.top, 0, scrollRange);
    const progress = scrollRange > 0 ? scrolled / scrollRange : 0;

    const titleFade = clamp(1 - progress * 2.2, 0, 1);
    title.style.opacity = titleFade;
    title.style.transform = `translateY(${progress * -50}px)`;

    soapColumns.forEach((el) => {
        const isLeft = el.classList.contains('left');
        const baseOffset = isLeft ? -70 : 70;

        const fadeIn = clamp((progress - 0.12) / 0.38, 0, 1);
        el.style.opacity = fadeIn;
        el.style.transform = `translateX(${baseOffset * (1 - fadeIn)}px)`;
    });
}

window.addEventListener('scroll', updateHero, { passive: true });
window.addEventListener('resize', updateHero);
window.addEventListener('load', updateHero);
