<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Sparkles, ArrowRight, Palette, Leaf, Droplets, Star, Heart, Instagram, Phone, Facebook } from 'lucide-vue-next'

const links = ['Home', 'Menu', 'Galeria', 'Contactanos']
const menuOpen = ref(false)
const scrolled = ref(false)
const HERO_IMG =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-hero-cake-TVgPdNFYCxmmfmgZuFFebD.webp";
const VANILLA_IMG =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-vanilla-cake-Lja5yRBaCh4u9CK7ywjhi4.webp";
const STRAWBERRY_IMG =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-strawberry-cake-Z6KR22LeguVPFanfXwGejs.webp";
const CARAMEL_IMG =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-caramel-cake-VgNT9XNbVwKWqtwZt5udUv.webp";

const flavors = [
    {
        id: 1,
        label: "Vanilla Bean",
        description: "Elegancia clásica con auténticas notas de vainilla.",
        img: VANILLA_IMG,
        accent: "oklch(0.97 0.02 80)",
        tag: "Mejor vendido",
    },
    {
        id: 2,
        label: "Strawberry",
        description: "Dulzura de bayas frescas en cada capa.",
        img: STRAWBERRY_IMG,
        accent: "oklch(0.95 0.04 15)",
        tag: "Favorito de los fans",
    },
    {
        id: 3,
        label: "Caramelo salado",
        description: "Caramelo dorado intenso con un toque de sal marina.",
        img: CARAMEL_IMG,
        accent: "oklch(0.95 0.04 60)",
        tag: "Estacional",
    },
];

const LAVENDER_IMG =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-lavender-cake-7PtWrBzDejL4sCmUD4tZeU.webp";

const features = [
    { icon: "Leaf", label: "Lavanda fresca", desc: "Procedente de granjas locales" },
    { icon: "Droplets", label: "Crema de limón", desc: "Elaborada diariamente en casa" },
    { icon: "Star", label: "Edición limitada", desc: "Solo para la temporada de primavera" },
];

const onScroll = () => {
    scrolled.value = window.scrollY > 30
}

const steps = [
    { emoji: "🎂", title: "Elegir base", desc: "Elige el tamaño de tu pastel y el bizcocho." },
    { emoji: "🍓", title: "Seleccionar sabores", desc: "Mezcla y combina rellenos" },
    { emoji: "🎨", title: "Diseñarlo", desc: "Decoraciones personalizadas y mensaje" },
    { emoji: "🚚", title: "Entregado fresco", desc: "Directamente a tu puerta" },
];

const reviews = [
    {
        user: "Sarah M.",
        avatar: "SM",
        rating: 5,
        comment:
            "¡Los mejores pasteles de la ciudad! La de chocolate y frambuesa estaba absolutamente deliciosa. Cada capa estaba perfectamente húmeda y la ganache, suave como la seda.",
        occasion: "Cumpleaños",
        color: "oklch(0.93 0.04 15)",
    },
    {
        user: "Emily R.",
        avatar: "ER",
        rating: 5,
        comment:
            "Delicioso y precioso. El pastel de limón y lavanda fue la sensación de mi fiesta en el jardín. ¡Todos me preguntaron dónde lo había comprado!",
        occasion: "Celebración de fiesta en el jardín",
        color: "oklch(0.95 0.04 80)",
    },
    {
        user: "Jessica T.",
        avatar: "JT",
        rating: 5,
        comment:
            "El proceso de personalización fue muy sencillo y el resultado superó todas mis expectativas. El pastel de cumpleaños de mi hija fue mágico.",
        occasion: "Cumpleaños",
        color: "oklch(0.95 0.04 15)",
    },
    {
        user: "Amanda K.",
        avatar: "AK",
        rating: 5,
        comment:
            "Pedimos el de caramelo salado para nuestro aniversario. Llegó perfectamente empaquetado y sabía incluso mejor de lo que parecía.",
        occasion: "Celebración de aniversario",
        color: "oklch(0.95 0.04 60)",
    },
];

onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <header :class="['app-header', { 'app-header--scrolled': scrolled }]">
        <div class="container">
            <nav class="nav-wrapper">
                <a href="#" class="logo">Fabisweet</a>

                <ul class="desktop-links">
                    <li v-for="link in links" :key="link">
                        <a href="#" class="nav-link">
                            {{ link }}
                            <span class="nav-link-underline"></span>
                        </a>
                    </li>
                </ul>

                <div class="cta-desktop">
                    <a href="#" class="btn-primary">Ordena Ahora</a>
                </div>

                <button class="mobile-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
                    <component :is="menuOpen ? X : Menu" :size="22" />
                </button>
            </nav>

            <div v-if="menuOpen" class="mobile-menu">
                <a v-for="link in links" :key="link" href="#" class="mobile-link" @click="menuOpen = false">
                    {{ link }}
                </a>
                <a href="#" class="btn-primary mobile-order">Ordena Ahora</a>
            </div>
        </div>
    </header>
    <!-- Hero section -->
    <section class="hero-section">
        <div class="hero-bg blob-1"></div>
        <div class="hero-bg blob-2"></div>

        <div class="hero-dot dot-1"></div>
        <div class="hero-dot dot-2"></div>
        <div class="hero-dot dot-3"></div>

        <div class="container relative z-10">
            <div class="hero-grid">
                <div class="hero-left">
                    <div class="hero-badge">
                        <span class="hero-badge-pill">
                            <Sparkles size="12" />
                            Pasteles Artesanales
                        </span>
                    </div>

                    <h1 class="hero-heading">
                        Deléitate con el Exquisito Chocolate de
                        <span class="hero-highlight">Fabisweet</span><br />
                    </h1>

                    <p class="hero-subtitle">
                        Pasteles personalizadas elaboradas con los mejores ingredientes para tus momentos de
                        celebración. Cada rebanada cuenta una historia.
                    </p>

                    <div class="hero-actions">
                        <a href="#" class="btn-primary">
                            Ordene Ahora
                            <ArrowRight size="16" />
                        </a>
                        <a href="#" class="btn-outline">Explora los sabores</a>
                    </div>

                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-value">50+</span>
                            <span class="stat-label">Pasteles Entregados</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-value">4.9★</span>
                            <span class="stat-label">Puntuación Promedio</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="stat">
                            <span class="stat-value">20+</span>
                            <span class="stat-label">Variedades de Sabores</span>
                        </div>
                    </div>
                </div>

                <div class="hero-right">
                    <div class="hero-blob-bg"></div>
                    <div class="hero-blob-secondary"></div>

                    <div class="hero-image-wrap">
                        <img :src="HERO_IMG" alt="Dakingo Chocolate Raspberry Cake" class="hero-image" />

                        <div class="hero-image-badge">
                            <span class="hero-image-emoji">🍫</span>
                            <div>
                                <p class="hero-image-label">Pastel de autor</p>
                                <p class="hero-image-subtitle">Chocolate Raspberry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- featured flavors -->
    <section class="featured-flavors-section">
        <div class="top-wave">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="w-full h-full">
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="oklch(0.98 0.015 20)" />
            </svg>
        </div>

        <div class="container relative z-10">
            <div class="section-header text-center mb-16">
                <span class="section-badge">Nuestro Menu</span>
                <h2 class="section-title">Sabores Destacados</h2>
                <p class="section-subtitle">
                    Cada sabor se elabora con ingredientes de primera calidad y se hornea al momento de realizar el
                    pedido.
                </p>
            </div>

            <div class="flavors-grid">
                <div v-for="(flavor, i) in flavors" :key="flavor.id"
                    :class="['flavor-card', `reveal reveal-delay-${i + 1}`]" :style="{ background: flavor.accent }">
                    <div class="flavor-badge">
                        <span class="flavor-tag">{{ flavor.tag }}</span>
                    </div>

                    <div class="flavor-image-frame">
                        <img :src="flavor.img" :alt="flavor.label" class="flavor-image" />
                    </div>

                    <div class="flavor-text">
                        <h3 class="flavor-title">{{ flavor.label }}</h3>
                        <p class="flavor-description">{{ flavor.description }}</p>
                        <a href="#" class="flavor-link">
                            Ordene este sabor
                            <ArrowRight size="14" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Seasonal Specials -->
    <section class="seasonal-specials-section">
        <div class="seasonal-bg" aria-hidden="true"></div>
        <div class="container relative z-10">
            <div class="seasonal-grid">
                <div class="seasonal-image-column">
                    <div class="seasonal-blob"></div>
                    <div class="seasonal-ring"></div>
                    <div class="seasonal-image-wrap">
                        <img :src="LAVENDER_IMG" alt="Spring Lemon Lavender Cake" class="seasonal-image" />
                        <div class="seasonal-badge">
                            <span class="seasonal-badge-title">Primavera</span>
                            <span class="seasonal-badge-icon">🌸</span>
                            <span class="seasonal-badge-subtitle">Especial</span>
                        </div>
                    </div>
                </div>

                <div class="seasonal-text-column">
                    <span class="seasonal-tag">OFERTAS DE TEMPORADA</span>
                    <h2 class="seasonal-title">Limón y lavanda de primavera</h2>
                    <p class="seasonal-description">
                        Disfruta de la refrescante combinación de notas cítricas y florales en nuestra creación
                        primaveral estrella. Cada pastel lleva capas de crema de limón casera, crema de mantequilla de
                        lavanda fresca y está decorado con flores comestibles: una auténtica celebración de la
                        temporada.
                    </p>

                    <div class="seasonal-features">
                        <div v-for="feature in features" :key="feature.label" class="seasonal-feature">
                            <div class="seasonal-feature-icon">
                                <component :is="feature.icon" size="16" class="seasonal-feature-svg" />
                            </div>
                            <div>
                                <p class="seasonal-feature-label">{{ feature.label }}</p>
                                <p class="seasonal-feature-desc">{{ feature.desc }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="seasonal-cta">
                        <a href="#" class="btn-primary">
                            Descubrir
                            <ArrowRight size="16" />
                        </a>
                        <span class="seasonal-note">Disponible hasta el 31 de mayo.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Customization CTA -->
    <section class="customization-cta-section">
        <div class="customization-dot customization-dot--a"></div>
        <div class="customization-dot customization-dot--b"></div>
        <div class="customization-dot customization-dot--c"></div>
        <div class="customization-dot customization-dot--d"></div>

        <div class="container relative z-10">
            <div class="customization-header text-center mb-16">
                <div class="customization-type">
                    <Palette size="20" class="customization-icon" />
                    <span class="customization-label">PERSONALIZACIÓN</span>
                </div>
                <h2 class="customization-title">Crea tu propio pastel</h2>
                <p class="customization-subtitle">
                    Cada celebración merece un pastel tan único como tú. Diseña el pastel de tus sueños desde cero;
                    nosotros nos encargamos del resto.
                </p>
            </div>

            <div class="customization-steps">
                <div v-for="(step, i) in steps" :key="step.title" class="customization-step">
                    <div class="customization-step-icon">{{ step.emoji }}</div>
                    <h3 class="customization-step-title">{{ step.title }}</h3>
                    <p class="customization-step-desc">{{ step.desc }}</p>
                </div>
            </div>

            <div class="customization-actions">
                <a href="#" class="button-primary">Crea tu propio pastel
                    <ArrowRight size="16" />
                </a>
                <a href="#" class="button-secondary">Ver galería</a>
            </div>
        </div>
    </section>
    <!-- Customer Reviews -->
    <section class="customer-reviews-section">
        <div class="customer-wave-top" aria-hidden="true">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="wave-svg">
                <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="oklch(0.3 0.15 15)" />
            </svg>
        </div>

        <div class="container">
            <div class="section-header text-center mb-16">
                <span class="section-badge">Testimonios</span>
                <h2 class="section-title">Amor de clientes</h2>
                <p class="section-subtitle">
                    Historias reales de nuestros clientes felices que hicieron sus momentos más dulces.
                </p>
            </div>

            <div class="reviews-grid">
                <article v-for="(review, i) in reviews" :key="review.user"
                    class="review-card reveal reveal-delay-{{ i + 1 }}">
                    <div class="review-stars">
                        <Star v-for="star in 5" :key="star" size="18"
                            :fill="star <= review.rating ? 'oklch(0.75 0.18 60)' : 'transparent'"
                            :stroke="star <= review.rating ? 'oklch(0.75 0.18 60)' : 'oklch(0.55 0.04 25)'" />
                    </div>

                    <p class="review-comment">"{{ review.comment }}"</p>

                    <div class="review-user">
                        <div class="review-avatar" :style="{ background: review.color }">{{ review.avatar }}</div>
                        <div>
                            <p class="review-name">{{ review.user }}</p>
                            <p class="review-occasion">{{ review.occasion }}</p>
                        </div>
                    </div>
                </article>
            </div>

            <section class="review-summary">
                <p class="summary-score">4.9</p>
                <div class="summary-stars">
                    <Star v-for="star in 5" :key="star" size="20" fill="oklch(0.75 0.18 60)" />
                </div>
                <p class="summary-text">Basado en 200 reseñas verificadas</p>
            </section>
        </div>
    </section>
    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3 class="footer-title">Fabisweet</h3>
                    <p class="footer-text">
                        Elaboramos exquisitos pasteles personalizados para los momentos más especiales de la vida.
                        Hechos con amor y los mejores ingredientes.
                    </p>
                </div>

                <div>
                    <h4 class="footer-subtitle">ENLACES RÁPIDOS</h4>
                    <ul class="footer-list">
                        <li v-for="link in ['Home', 'Pasteles', 'Ocasiones', 'Pedidos Personalizados', 'Contacto']"
                            :key="link">
                            <a href="#" class="footer-link">{{ link }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="footer-subtitle">PONTE EN CONTACTO</h4>
                    <p class="footer-text">
                        <a href="https://www.instagram.com/fabisweett/" target="_blank" rel="noopener noreferrer">
                            <Instagram size="16" /> 𝐅𝐚𝐛𝐢𝐒𝐰𝐞𝐞𝐭🍒
                        </a>
                    </p>
                    <p class="footer-text">
                        <a href="https://www.facebook.com/fabisweett/" target="_blank" rel="noopener noreferrer">
                            <Facebook size="16" /> 𝐅𝐚𝐛𝐢𝐒𝐰𝐞𝐞𝐭🍒
                        </a>
                    </p>
                    <p class="footer-text">
                        <Phone size="16" />  
                        2361025304
                    </p>
                    <a href="#" class="footer-button">Order Now</a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© 2026 Fabisweet. Todos los derechos reservados.</p>
                <p>
                    Echo con
                    <Heart size="12" class="footer-heart" /> para endulzar tus momentos especiales.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
body {
    margin: 0 !important;
}

.app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    transition: all 0.5s;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
}

.app-header--scrolled {
    background: rgba(255, 240, 240, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 1px 24px rgba(196, 30, 30, 0.08);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    font-family: 'Cormorant Garamond', Georgia, serif;
    color: oklch(0.42 0.19 25);
    text-decoration: none;
}

.desktop-links {
    display: none;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.desktop-links li {
    list-style: none;
}

.nav-link {
    position: relative;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color 0.2s;
    color: oklch(0.28 0.08 25);
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
}

.nav-link:hover {
    color: oklch(0.42 0.19 25);
}

.nav-link-underline {
    position: absolute;
    bottom: -0.125rem;
    left: 50%;
    transform: translateX(-50%);
    height: 0.125rem;
    width: 0;
    border-radius: 999px;
    background: oklch(0.42 0.19 25);
    transition: all 0.3s;
}

.nav-link:hover .nav-link-underline {
    width: 100%;
}

.cta-desktop {
    display: none;
}

.btn-primary {
    background-color: oklch(0.42 0.19 25);
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 0.875rem;
}

.mobile-toggle {
    display: block;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: none;
    color: oklch(0.42 0.19 25);
}

.mobile-menu {
    padding: 0.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid oklch(0.9 0.03 20);
}

.mobile-link {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    color: oklch(0.28 0.08 25);
}

.mobile-order {
    width: fit-content;
    margin-top: 0.5rem;
}

/* Hero section */
.hero-section {
    position: relative;
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-top: 6rem;
    padding-bottom: 4rem;
    background: oklch(0.98 0.015 20);
}

.hero-bg {
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
}

.hero-bg.blob-1 {
    top: -8rem;
    right: -8rem;
    width: 37.5rem;
    height: 37.5rem;
    opacity: 0.3;
    background: radial-gradient(circle, oklch(0.9 0.05 10) 0%, transparent 70%);
}

.hero-bg.blob-2 {
    bottom: -6rem;
    left: -6rem;
    width: 25rem;
    height: 25rem;
    opacity: 0.2;
    background: radial-gradient(circle, oklch(0.93 0.04 15) 0%, transparent 70%);
}

.hero-dot {
    position: absolute;
    border-radius: 50%;
    animation: hero-bounce 3s infinite ease-in-out;
}

.hero-dot.dot-1 {
    top: 33%;
    left: 8%;
    width: 0.75rem;
    height: 0.75rem;
    opacity: 0.6;
    background: oklch(0.42 0.19 25);
    animation-duration: 3s;
    animation-delay: 0s;
}

.hero-dot.dot-2 {
    top: 25%;
    left: 15%;
    width: 0.5rem;
    height: 0.5rem;
    opacity: 0.4;
    background: oklch(0.9 0.05 10);
    animation-duration: 4s;
    animation-delay: 1s;
}

.hero-dot.dot-3 {
    bottom: 33%;
    right: 12%;
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
    background: oklch(0.93 0.04 15);
    animation-duration: 3.5s;
    animation-delay: 0.5s;
}

@keyframes hero-bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

.hero-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.hero-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 1rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    background: oklch(0.93 0.04 15);
    color: oklch(0.42 0.19 25);
}

.hero-heading {
    font-size: clamp(2.8rem, 5.5vw, 4.5rem);
    line-height: 1.08;
    color: oklch(0.28 0.08 25);
}

.hero-highlight {
    color: oklch(0.42 0.19 25);
    font-style: italic;
}

.hero-subtitle {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    max-width: 42rem;
    color: oklch(0.45 0.07 25);
    font-family: 'Nunito', sans-serif;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.btn-outline {
    border: 1px solid oklch(0.42 0.19 25);
    color: oklch(0.42 0.19 25);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-size: 0.875rem;
}

.hero-stats {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    padding-top: 1rem;
    margin-top: 0.5rem;
    border-top: 1px solid oklch(0.88 0.04 20);
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: oklch(0.42 0.19 25);
    font-family: 'Cormorant Garamond', serif;
}

.stat-label {
    font-size: 0.75rem;
    color: oklch(0.55 0.06 25);
    font-family: 'Nunito', sans-serif;
}

.stat-divider {
    width: 1px;
    height: 2.5rem;
    background: oklch(0.9 0.03 20);
}

.hero-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
}

.hero-blob-bg,
.hero-blob-secondary {
    position: absolute;
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
}

.hero-blob-bg {
    inset: 0;
    background: radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.93 0.04 15 / 0.7) 0%, oklch(0.9 0.05 10 / 0.4) 50%, transparent 80%);
    filter: blur(2px);
}

.hero-blob-secondary {
    top: 0;
    right: 0;
    width: 7rem;
    height: 7rem;
    background: oklch(0.9 0.05 10);
    border-radius: 70% 30% 60% 40% / 40% 70% 30% 60%;
    opacity: 0.5;
}

.hero-image-wrap {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 28.75rem;
    filter: drop-shadow(0 24px 48px rgba(196, 30, 30, 0.18));
}

.hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1.5rem;
    aspect-ratio: 1/1;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(196, 30, 30, 0.1);
}

.hero-image-badge {
    position: absolute;
    left: 1rem;
    bottom: -1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.hero-image-emoji {
    font-size: 1.25rem;
}

.hero-image-label {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.2;
    font-family: 'Nunito', sans-serif;
    color: oklch(0.28 0.08 25);
}

.hero-image-subtitle {
    font-size: 0.75rem;
    color: oklch(0.55 0.06 25);
}

/* Featured flavors section */
.featured-flavors-section {
    padding: 6rem 0;
    position: relative;
    overflow: hidden;
    background: oklch(1 0 0);
}

.top-wave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    overflow: hidden;
    z-index: 1;
}

.top-wave svg {
    width: 100%;
    height: 100%;
}

.section-header .section-badge {
    display: inline-block;
    padding: 0.25rem 1rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    background: oklch(0.93 0.04 15);
    color: oklch(0.42 0.19 25);
    font-family: 'Nunito', sans-serif;
    margin-bottom: 0.75rem;
}

.section-header .section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: oklch(0.28 0.08 25);
    margin: 0.5rem 0;
}

.section-header .section-subtitle {
    max-width: 42rem;
    margin: 0 auto;
    color: oklch(0.55 0.06 25);
    font-family: 'Nunito', sans-serif;
}

.flavors-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.flavor-card {
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.flavor-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 48px rgba(196, 30, 30, 0.15);
}

.flavor-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
}

.flavor-tag {
    background: white;
    color: oklch(0.42 0.19 25);
    font-family: 'Nunito', sans-serif;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
}

.flavor-image-frame {
    position: relative;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    justify-content: center;
}

.flavor-image {
    width: 12rem;
    height: 12rem;
    border-radius: 999px;
    object-fit: cover;
    transition: transform 0.7s ease;
}

.flavor-card:hover .flavor-image {
    transform: scale(1.07);
}

.flavor-text {
    padding: 1.5rem 1.25rem 1.5rem;
    text-align: center;
}

.flavor-title {
    margin-bottom: 0.25rem;
    color: oklch(0.28 0.08 25);
    font-size: 1.125rem;
    font-weight: 700;
}

.flavor-description {
    color: oklch(0.45 0.07 25);
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.flavor-link {
    color: oklch(0.42 0.19 25);
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    transition: gap 0.2s ease;
}

.flavor-card:hover .flavor-link {
    gap: 0.5rem;
}

@media (min-width: 768px) {
    .flavors-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .hero-grid {
        grid-template-columns: 55% 45%;
        gap: 2rem;
    }
}

/* Seasonal Specials */
.seasonal-specials-section {
    position: relative;
    padding: 6rem 0;
    overflow: hidden;
    background: oklch(0.98 0.015 20);
}

.seasonal-bg {
    position: absolute;
    top: -4rem;
    right: -4rem;
    width: 30rem;
    height: 30rem;
    background: radial-gradient(circle, oklch(0.9 0.05 10) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(30%, -30%);
    opacity: 0.3;
    pointer-events: none;
}

.seasonal-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
}

.seasonal-image-column {
    position: relative;
    display: flex;
    justify-content: center;
}

.seasonal-blob {
    position: absolute;
    inset: 0;
    margin: -1.5rem;
    background: radial-gradient(ellipse 85% 85% at 50% 50%, oklch(0.93 0.04 15 / 0.6) 0%, transparent 75%);
    border-radius: 45% 55% 60% 40% / 55% 45% 55% 45%;
}

.seasonal-ring {
    position: absolute;
    width: 110%;
    height: 110%;
    border-radius: 50%;
    opacity: 0.2;
    border: 2px dashed oklch(0.42 0.19 25);
}

.seasonal-image-wrap {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 25rem;
    filter: drop-shadow(0 20px 40px rgba(196, 30, 30, 0.15));
}

.seasonal-image {
    width: 100%;
    height: auto;
    border-radius: 1.5rem;
    object-fit: cover;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
    aspect-ratio: 4 / 3;
}

.seasonal-badge {
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: oklch(0.42 0.19 25);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    font-family: 'Nunito', sans-serif;
}

.seasonal-badge-title,
.seasonal-badge-subtitle {
    font-size: 0.65rem;
    font-weight: 700;
    line-height: 1;
}

.seasonal-badge-icon {
    font-size: 1rem;
}

.seasonal-text-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.seasonal-tag {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: oklch(0.42 0.19 25);
    font-family: 'Nunito', sans-serif;
}

.seasonal-title {
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    color: oklch(0.28 0.08 25);
    margin: 0;
}

.seasonal-description {
    font-size: 1rem;
    color: oklch(0.45 0.07 25);
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
    max-width: 40rem;
}

.seasonal-features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.seasonal-feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.seasonal-feature-icon {
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: oklch(0.93 0.04 15);
}

.seasonal-feature-label {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    color: oklch(0.28 0.08 25);
    margin: 0;
}

.seasonal-feature-desc {
    font-family: 'Nunito', sans-serif;
    color: oklch(0.55 0.06 25);
    margin: 0;
    font-size: 0.875rem;
}

.seasonal-cta {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.seasonal-note {
    font-size: 0.875rem;
    color: oklch(0.55 0.06 25);
    font-family: 'Nunito', sans-serif;
}

/* CustomizationCTA */
.customization-cta-section {
    position: relative;
    overflow: hidden;
    padding: 6rem 0;
    background: linear-gradient(135deg, oklch(0.42 0.19 25) 0%, oklch(0.35 0.18 20) 60%, oklch(0.3 0.15 15) 100%);
}

.customization-dot {
    position: absolute;
    border-radius: 50%;
    background: white;
    opacity: 0.1;
    pointer-events: none;
}

.customization-dot--a {
    top: 0;
    left: 0;
    width: 20rem;
    height: 20rem;
    transform: translate(-40%, -40%);
}

.customization-dot--b {
    bottom: 0;
    right: 0;
    width: 24rem;
    height: 24rem;
    transform: translate(40%, 40%);
}

.customization-dot--c {
    top: 20%;
    left: 10%;
    width: 0.5rem;
    height: 0.5rem;
    opacity: 0.3;
    animation: hero-bounce 3s infinite ease-in-out;
}

.customization-dot--d {
    top: 70%;
    left: 5%;
    width: 0.3125rem;
    height: 0.3125rem;
    opacity: 0.3;
    animation: hero-bounce 3s 1s infinite ease-in-out;
}

.customization-header {
    color: white;
}

.customization-type {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    justify-content: center;
}

.customization-label {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    color: oklch(0.93 0.04 15);
}

.customization-title {
    margin: 0.25rem 0;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
}

.customization-subtitle {
    color: rgba(255, 255, 255, 0.75);
    max-width: 42rem;
    margin: 0 auto;
    font-family: 'Nunito', sans-serif;
}

.customization-steps {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
}

.customization-step {
    text-align: center;
    color: white;
}

.customization-step-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    display: grid;
    place-items: center;
    margin: 0 auto 0.75rem;
    font-size: 1.25rem;
}

.customization-step-title {
    font-weight: 700;
    margin: 0 0 0.25rem;
    font-size: 0.9rem;
}

.customization-step-desc {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
}

.customization-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.button-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    background: white;
    color: oklch(0.42 0.19 25);
    font-weight: 700;
    text-decoration: none;
}

.button-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    font-weight: 700;
    text-decoration: none;
}

@media (min-width: 768px) {
    .flavors-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .desktop-links {
        display: flex;
    }

    .cta-desktop {
        display: block;
    }

    .mobile-toggle,
    .mobile-menu {
        display: none;
    }
}

/* Customer Reviews */
.customer-reviews-section {
    position: relative;
    padding: 7rem 0 6rem;
    background: oklch(1 0 0);
    color: oklch(0.55 0.06 25);
}

.customer-wave-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    overflow: hidden;
}

.wave-svg {
    width: 100%;
    height: 100%;
    display: block;
}

.customer-reviews-section .section-header {
    margin-bottom: 2rem;
}

.reviews-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
}

.review-card {
    background: white;
    border: 1px solid oklch(0.92 0.02 20);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
    padding: 1.25rem;
}

.review-stars {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
}

.review-comment {
    margin: 0 0 1rem;
    font-family: 'Nunito', sans-serif;
    color: oklch(0.35 0.07 25);
    line-height: 1.6;
}

.review-user {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.review-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    color: oklch(0.28 0.08 25);
}

.review-name {
    margin: 0;
    font-weight: 700;
}

.review-occasion {
    margin: 0;
    font-size: 0.75rem;
    color: oklch(0.55 0.06 25);
}

.review-summary {
    margin-top: 2rem;
    text-align: center;
    background: oklch(0.98 0.015 20);
    border-radius: 1rem;
    padding: 1.5rem;
}

.summary-score {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: oklch(0.42 0.19 25);
}

.summary-stars {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
    margin-bottom: 0.5rem;
}

.summary-text {
    margin: 0;
    color: oklch(0.55 0.06 25);
    font-family: 'Nunito', sans-serif;
}

/* Footer */
.site-footer {
    background: oklch(0.28 0.08 25);
    color: rgba(255, 255, 255, 0.85);
    padding: 3rem 0;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.footer-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: oklch(0.93 0.04 15);
    margin-bottom: 0.75rem;
}

.footer-subtitle {
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.75rem;
    color: oklch(0.93 0.04 15);
}

.footer-text {
    margin: 0.3rem 0;
    color: rgba(255, 255, 255, 0.75);
}

.footer-text a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
}

.footer-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    transition: color 0.2s;
}

.footer-link:hover {
    color: white;
}

.footer-button {
    display: inline-block;
    margin-top: 0.75rem;
    padding: 0.6rem 1rem;
    border-radius: 999px;
    background: oklch(0.42 0.19 25);
    color: white;
    text-decoration: none;
    font-weight: 700;
}

.footer-bottom {
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
}

.footer-heart {
    color: oklch(0.42 0.19 25);
}

@media (min-width: 768px) {
    .reviews-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .footer-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}
</style>
