const hero = document.getElementById('heroScroll');
const title = document.querySelector('.hero-title');
const columns = document.querySelectorAll('.soap-column');

function clamp(n, min, max) {
    return Math.max(min, Math.min(n, max));
}

function updateHero() {
    const rect = hero.getBoundingClientRect();
    const heroHeight = hero.offsetHeight;
    const viewHeight = window.innerHeight;
    const totalScroll = heroHeight - viewHeight;

    const currentScroll = clamp(-rect.top, 0, totalScroll);
    const progress = totalScroll > 0 ? currentScroll / totalScroll : 0;

    title.style.opacity = String(clamp(1 - progress * 2.0, 0, 1));
    title.style.transform = `translateY(${progress * -40}px)`;

    columns.forEach((column) => {
        const isLeft = column.classList.contains('left');
        const baseX = isLeft ? -180 : 180;
        const fade = clamp((progress - 0.12) / 0.38, 0, 1);

        column.style.opacity = String(fade);
        column.style.transform = `translateX(${baseX * (1 - fade)}px)`;
    });
}

window.addEventListener('scroll', updateHero, { passive: true });
window.addEventListener('resize', updateHero);
window.addEventListener('load', updateHero);
