<script setup>
import { Phone, Instagram, Facebook } from 'lucide-vue-next'
</script>

<template>
  <section class="contact-view">
    <div class="contact-hero">
      <div class="container">
        <h1 class="contact-title">Contáctanos</h1>
        <p class="contact-subtitle">Estamos aquí para ayudarte a crear el pastel perfecto</p>
      </div>
    </div>

    <div class="container">
      <div class="contact-grid">

        <div class="contact-info-col">
          <h2 class="contact-form-title">Información de Contacto</h2>

          <div class="contact-info-card">
            <div class="contact-info-item">
              <Phone size="20" class="contact-icon" />
              <div>
                <h3 class="contact-info-label">Teléfono</h3>
                <p class="contact-info-value">2361025304</p>
              </div>
            </div>

            <div class="contact-info-item">
              <Instagram size="20" class="contact-icon" />
              <div>
                <h3 class="contact-info-label">Instagram</h3>
                <a href="https://www.instagram.com/fabisweett/" target="_blank" rel="noopener noreferrer" class="contact-info-link">
                  @fabisweett
                </a>
              </div>
            </div>

            <div class="contact-info-item">
              <Facebook size="20" class="contact-icon" />
              <div>
                <h3 class="contact-info-label">Facebook</h3>
                <a href="https://www.facebook.com/fabisweett/" target="_blank" rel="noopener noreferrer" class="contact-info-link">
                  𝐅𝐚𝐛𝐢𝐒𝐰𝐞𝐞𝐭🍒
                </a>
              </div>
            </div>
          </div>

          <div class="contact-hours">
            <h3 class="contact-hours-title">Horario de Atención</h3>
            <p class="contact-hours-text">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p class="contact-hours-text">Sábados: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-hero {
  padding: 8rem 0 4rem;
  background: oklch(0.98 0.015 20);
  text-align: center;
}

.contact-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: oklch(0.28 0.08 25);
  margin: 0 0 0.5rem;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
  margin: 0;
}

.contact-grid {
  /* display: grid; */
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding: 4rem 0;
}

.contact-form-title {
  font-size: 1.5rem;
  color: oklch(0.28 0.08 25);
  margin: 0 0 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: oklch(0.28 0.08 25);
  font-family: 'Nunito', sans-serif;
}

.form-input,
.form-textarea {
  padding: 0.75rem 1rem;
  border: 1px solid oklch(0.88 0.04 20);
  border-radius: 0.75rem;
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
  color: oklch(0.28 0.08 25);
  background: white;
  transition: border-color 0.2s;
  outline: none;
}

.form-input:focus,
.form-textarea:focus {
  border-color: oklch(0.42 0.19 25);
}

.form-textarea {
  resize: vertical;
}

.form-submit {
  padding: 0.75rem 2rem;
  border-radius: 999px;
  background: oklch(0.42 0.19 25);
  color: white;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
}

.form-submit:hover {
  background: oklch(0.35 0.18 20);
}

.contact-info-card {
  background: oklch(0.98 0.015 20);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  color: oklch(0.42 0.19 25);
  flex-shrink: 0;
}

.contact-info-label {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
}

.contact-info-value {
  margin: 0.15rem 0 0;
  color: oklch(0.28 0.08 25);
  font-weight: 600;
}

.contact-info-link {
  color: oklch(0.42 0.19 25);
  text-decoration: none;
  font-weight: 600;
}

.contact-info-link:hover {
  text-decoration: underline;
}

.contact-hours {
  background: oklch(0.98 0.015 20);
  border-radius: 1rem;
  padding: 1.5rem;
}

.contact-hours-title {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  color: oklch(0.28 0.08 25);
}

.contact-hours-text {
  margin: 0.25rem 0;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>
