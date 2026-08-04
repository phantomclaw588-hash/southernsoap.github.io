document.addEventListener('DOMContentLoaded', () => {
    const heroScroll = document.getElementById('heroScroll');
    const title = document.querySelector('.hero-title');
    const soapColumns = document.querySelectorAll('.soap-column');

    function updateHero() {
        const rect = heroScroll.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const total = viewportHeight;
        const rawProgress = (-rect.top) / total;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        title.style.opacity = String(Math.max(1 - progress * 1.35, 0));
        title.style.transform = `translateY(${progress * -30}px)`;

        soapColumns.forEach((el, index) => {
            const baseOffset = el.classList.contains('left') ? -80 : 80;

            const start = index === 0 ? 0.12 : 0.22;
            const end = index === 0 ? 0.42 : 0.55;

            let local = (progress - start) / (end - start);
            local = Math.min(Math.max(local, 0), 1);

            el.style.opacity = String(local);
            el.style.transform = `translateX(${baseOffset * (1 - local)}px) scale(${0.98 + local * 0.02})`;
        });
    }

    updateHero();
    window.addEventListener('scroll', updateHero, { passive: true });
    window.addEventListener('resize', updateHero);
});
