<script setup>
const GALLERY = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-hero-cake-TVgPdNFYCxmmfmgZuFFebD.webp",
    alt: "Pastel de chocolate y frambuesa",
    title: "Chocolate Raspberry",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-vanilla-cake-Lja5yRBaCh4u9CK7ywjhi4.webp",
    alt: "Pastel de vainilla",
    title: "Vanilla Bean",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-strawberry-cake-Z6KR22LeguVPFanfXwGejs.webp",
    alt: "Pastel de fresa",
    title: "Strawberry",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-caramel-cake-VgNT9XNbVwKWqtwZt5udUv.webp",
    alt: "Pastel de caramelo salado",
    title: "Caramelo Salado",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-lavender-cake-7PtWrBzDejL4sCmUD4tZeU.webp",
    alt: "Pastel de limón y lavanda",
    title: "Limón y Lavanda",
  },
]
</script>

<template>
  <section class="gallery-view">
    <div class="gallery-hero">
      <div class="container">
        <h1 class="gallery-title">Galería</h1>
        <p class="gallery-subtitle">Nuestras creaciones más recientes</p>
      </div>
    </div>

    <div class="container">
      <div class="gallery-grid">
        <article v-for="item in GALLERY" :key="item.title" class="gallery-card">
          <div class="gallery-image-wrap">
            <img :src="item.src" :alt="item.alt" class="gallery-image" />
          </div>
          <div class="gallery-info">
            <h3 class="gallery-item-title">{{ item.title }}</h3>
            <span class="gallery-cta">Ver más →</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-hero {
  padding: 8rem 0 4rem;
  background: oklch(0.98 0.015 20);
  text-align: center;
}

.gallery-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: oklch(0.28 0.08 25);
  margin: 0 0 0.5rem;
}

.gallery-subtitle {
  font-size: 1.1rem;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
  margin: 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 4rem 0;
}

.gallery-card {
  border-radius: 1.25rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(196, 30, 30, 0.15);
}

.gallery-image-wrap {
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-info {
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery-item-title {
  margin: 0;
  font-size: 1.1rem;
  color: oklch(0.28 0.08 25);
}

.gallery-cta {
  color: oklch(0.42 0.19 25);
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
