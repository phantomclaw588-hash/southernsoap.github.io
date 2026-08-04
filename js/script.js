* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #f4f1ec;
    color: #1f1f1f;
}

header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(244, 241, 236, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
}

nav {
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
}

nav a {
    text-decoration: none;
    color: #1f1f1f;
    font-weight: 500;
    transition: opacity 0.2s ease;
}

nav a:hover {
    opacity: 0.65;
}

.hero-scroll {
    height: 220vh;
    position: relative;
    background:
        radial-gradient(circle at top, rgba(255,255,255,0.95), rgba(244,241,236,0.85) 35%, rgba(230,226,219,1) 100%);
}

.hero-sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 2rem;
}

.hero-content {
    width: 100%;
    max-width: 1200px;
    text-align: center;
    position: relative;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 6vw, 5.5rem);
    margin: 0 0 1.5rem;
    line-height: 1;
    transition: opacity 0.2s ease, transform 0.2s ease;
    position: relative;
    z-index: 5;
}

.hero-art {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;
}

.center-image {
    position: relative;
    z-index: 3;
}

.center-image img {
    width: min(420px, 72vw);
    height: auto;
    display: block;
    margin: 0 auto;
    filter: drop-shadow(0 24px 50px rgba(0, 0, 0, 0.28));
}

.shop-button {
    position: absolute;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    display: inline-block;
    padding: 0.85rem 1.5rem;
    border-radius: 999px;
    background: #111;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: transform 0.2s ease, background 0.2s ease;
}

.shop-button:hover {
    transform: translateX(-50%) scale(1.03);
    background: #333;
}

.side-images {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 2;
}

.side-images img {
    width: 155px;
    height: 155px;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14);
}

.side-images.left {
    transform: translateX(-40px);
}

.side-images.right {
    transform: translateX(40px);
}

.about {
    max-width: 900px;
    margin: 0 auto;
    padding: 6rem 2rem 7rem;
}

.about h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1rem;
}

.about p {
    font-size: 1.05rem;
    line-height: 1.8;
    max-width: 700px;
}

footer {
    padding: 1.5rem 2rem;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    background: #f4f1ec;
}

@media (max-width: 900px) {
    .hero-art {
        gap: 1rem;
    }

    .side-images img {
        width: 120px;
        height: 120px;
    }

    .center-image img {
        width: min(340px, 78vw);
    }
}

@media (max-width: 720px) {
    header {
        flex-direction: column;
        gap: 0.75rem;
        text-align: center;
    }

    nav {
        justify-content: center;
    }

    .hero-art {
        flex-direction: column;
    }

    .side-images {
        flex-direction: row;
        gap: 0.8rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .side-images.left,
    .side-images.right {
        transform: translateY(20px);
    }

    .side-images img {
        width: 110px;
        height: 110px;
    }

    .hero-scroll {
        height: 250vh;
    }

    .shop-button {
        bottom: 12px;
        padding: 0.75rem 1.2rem;
    }
}
