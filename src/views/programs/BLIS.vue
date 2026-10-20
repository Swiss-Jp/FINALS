<script setup>
// Ensure your ITSO logo is placed in src/assets/ITSO.png
import itsoLogoImg from '@/assets/IT.png'
</script>

<template>
  <div class="program-page">
    <!-- Centered Hero Section with Light Ray Effect -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Top Tagline Badge -->
        <span class="program-pill">DEPARTMENT OF INFORMATION TECHNOLOGY</span>

        <!-- Center Logo & Title Grid -->
        <div class="hero-center-block">
          <div class="logo-wrapper">
            <img :src="itsoLogoImg" alt="ITSO Logo" class="itso-main-logo" />
          </div>

          <h1 class="hero-main-title">
            REMEMBER &bull; CONNECT &bull; ENGAGE &bull; BUILD &bull; SHARE
          </h1>
        </div>

        <!-- Description Paragraph -->
        <div class="hero-description-block">
          <p class="hero-description">
            The <strong class="highlight">INFORMATION TECHNOLOGY (BSIT)</strong> program focuses on the installation, customization, operation, management, and administration of computer systems and enterprise networks[cite: 2].
          </p>
          <div class="hero-tagline-bar">
            <span>DIFFERENT PEOPLE, ONE GOAL</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Side-by-Side Content Grid -->
    <div class="program-body">
      <div class="content-grid">
        <section class="content-card">
          <h2>Program Objectives</h2>
          <p>
            Prepare students to become IT professionals capable of installing, customizing, operating, managing, and administering computer systems and enterprise networks effectively[cite: 2].
          </p>
        </section>

        <section class="content-card">
          <h2>Areas of Study & Course Highlights</h2>
          <ul class="highlight-list">
            <li>Web Systems and Technologies (Vue.js, Frontend & Backend architectures)[cite: 2]</li>
            <li>Network Administration and Security[cite: 2]</li>
            <li>System Integration and Database Management[cite: 2]</li>
            <li>Enterprise Architecture and IT Project Management[cite: 2]</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.program-page {
  width: 100%;
  background-color: #050b0e;
  color: #e2e8f0;
  min-height: 100vh;
}

/* Hero Section with Warm Amber Radial Background Glow */
.hero-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background-color: #0b1a1d;
  background-image: 
    radial-gradient(circle at 50% 35%, rgba(245, 158, 11, 0.2) 0%, transparent 65%),
    linear-gradient(to bottom, rgba(11, 26, 29, 0.95), rgba(5, 11, 14, 0.98));
  min-height: 80vh;
  border-bottom: 2px solid #f59e0b;
}

.hero-container {
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.program-pill {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.35);
  padding: 0.4rem 1.25rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 2rem;
}

.hero-center-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.logo-wrapper {
  background: rgba(13, 35, 38, 0.75);
  border: 2px solid #f59e0b;
  border-radius: 20px;
  padding: 1.5rem 2.5rem;
  box-shadow: 0 0 35px rgba(245, 158, 11, 0.35);
  backdrop-filter: blur(10px);
}

.itso-main-logo {
  max-width: 280px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.5));
}

.hero-main-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.3;
  margin: 0;
}

.hero-description-block {
  max-width: 780px;
}

.hero-description {
  color: #cbd5e1;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #f59e0b;
  font-weight: bold;
}

.hero-tagline-bar {
  display: inline-block;
  border-top: 1px solid rgba(245, 158, 11, 0.4);
  border-bottom: 1px solid rgba(245, 158, 11, 0.4);
  padding: 0.5rem 2rem;
}

.hero-tagline-bar span {
  color: #f59e0b; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Two-Column Side-by-Side Content Section */
.program-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.content-card {
  background: rgba(13, 35, 38, 0.7);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-top: 4px solid #f59e0b;
  padding: 2.25rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #f59e0b;
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

.highlight-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .hero-main-title {
    font-size: 1.5rem;
  }

  .itso-main-logo {
    max-width: 200px;
  }
}
</style>