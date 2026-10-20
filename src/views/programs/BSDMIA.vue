<script setup>
import midasLogoImg from '@/assets/MIDAS.png'
</script>

<template>
  <div class="program-page">
    <!-- Hero Section with Enlarged MIDAS Branding -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Enlarged Logo Row - Now more prominent -->
        <div class="hero-header-row logo-emphasis">
          <div class="hero-logo-center">
            <img :src="midasLogoImg" alt="MIDAS Logo" class="midas-logo-img" />
          </div>

          <h1 class="hero-main-title">
            REMEMBER<br>
            CONNECT<br>
            ENGAGE<br>
            BUILD<br>
            SHARE
          </h1>
        </div>

        <!-- Center Description Text -->
        <div class="hero-description-block">
          <p class="hero-description">
            the <strong class="highlight">DIGITAL MEDIA AND INTERACTIVE ARTS (BSDMIA)</strong> program is designed to bridge the gap between computer science, multimedia arts, and intelligent systems[cite: 2, 7].
          </p>
          <p class="hero-tagline">DIFFERENT PEOPLE, ONE GOAL</p>
        </div>
      </div>
    </section>

    <!-- Dark Gold Card Section -->
    <div class="program-body">
      <section class="content-card">
        <h2>Program Objectives</h2>
        <p>
          Prepare students to become multi-disciplinary professionals (computer scientists, multimedia artists, intelligent systems engineers) capable of designing, analyzing, and implementing intelligent, creative computing solutions and immersive interactive experiences across diverse platforms[cite: 7].
        </p>
      </section>

      <section class="content-card">
        <h2>Areas of Study & Course Highlights</h2>
        <div class="highlight-grid">
          <ul>
            <li>Artificial Intelligence and Machine Learning[cite: 7]</li>
            <li>Multimedia Design & Interactive Arts[cite: 7]</li>
            <li>Algorithms and Advanced Computing[cite: 7]</li>
            <li>Human-Computer Interaction & UX Design[cite: 7]</li>
          </ul>
          <ul>
            <li>System Architecture and Software Engineering[cite: 7]</li>
            <li>Data Science and Pattern Recognition[cite: 7]</li>
            <li>Game Development & Creative Technologies[cite: 7]</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.program-page {
  width: 100%;
  background-color: #060e12;
  color: #e2e8f0;
  min-height: 100vh;
}

.hero-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background-color: #0a181c;
  
  /* Retaining the Rich Golden Background Light Rays Overlay */
  background-image: 
    radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.18) 0%, transparent 60%),
    linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, transparent 40%),
    linear-gradient(225deg, rgba(245, 158, 11, 0.22) 0%, transparent 40%);
  
  min-height: 85vh; /* Increased slightly for bigger logo presence */
  border-bottom: 2px solid #f59e0b;
}

.hero-container {
  max-width: 1100px; /* Increased max-width to accommodate larger elements */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.hero-header-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem; /* Increased gap */
  margin-bottom: 3.5rem; /* Increased margin */
  width: 100%;
}

/* Specific class to handle logo emphasis layout */
.logo-emphasis {
  flex-direction: row-reverse; /* Flip logo/text order for centered emphasis */
}

.hero-main-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 3rem; /* Increased font size */
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 2px;
  text-align: left;
}

.hero-logo-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* CHANGED: Significantly increased max-width for the logo */
.midas-logo-img {
  max-width: 480px; /* Was 260px - significantly increased for impact */
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 35px rgba(245, 158, 11, 0.7)); /* Enhanced glow for size */
}

.hero-description-block {
  max-width: 850px; /* Increased max-width to match new layout scale */
}

.hero-description {
  color: #e2e8f0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.15rem; /* Slightly increased font size */
  line-height: 1.6;
  margin-bottom: 1rem;
}

.highlight {
  color: #fbbf24;
  font-weight: bold;
}

.hero-tagline {
  color: #f59e0b; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.2rem; /* Slightly increased font size */
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
}

.program-body {
  max-width: 950px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-card {
  background: rgba(10, 24, 28, 0.85);
  border: 2px solid #f59e0b;
  border-radius: 12px;
  padding: 2rem 2.5rem;
  box-shadow: 0 0 25px rgba(245, 158, 11, 0.25);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #fbbf24;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.content-card p {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1.05rem;
  margin: 0;
}

.highlight-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.highlight-grid ul {
  margin: 0;
  padding-left: 1.25rem;
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .midas-logo-img {
    max-width: 380px; /* Responsive adjustment for medium screens */
  }
}

@media (max-width: 768px) {
  .hero-header-row {
    flex-direction: column-reverse; /* Standard vertical stack on mobile */
    text-align: center;
    gap: 2rem;
  }
  
  .hero-main-title {
    text-align: center;
    font-size: 2.5rem;
  }
  
  .midas-logo-img {
    max-width: 300px; /* Standard mobile size */
  }
  
  .highlight-grid {
    grid-template-columns: 1fr;
  }
}
</style>