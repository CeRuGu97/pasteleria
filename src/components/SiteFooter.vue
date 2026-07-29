<script setup>
import { Heart, Instagram, Phone, Facebook } from 'lucide-vue-next'
</script>

<template>
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
            <li v-for="link in ['Home', 'Pasteles', 'Ocasiones', 'Pedidos Personalizados', 'Contacto']" :key="link">
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
