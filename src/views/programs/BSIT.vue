<script setup>
// Make sure your ITSO emblem is saved as src/assets/ITSO.png
import itsoLogoImg from '@/assets/IT.png'
</script>

<template>
  <div class="program-page">
    <!-- Hero Section with Left Content & Centered ITSO Badge -->
    <section class="hero-section">
      <div class="hero-content">
        <p class="hero-sub">the CCS core practices that build bridges between gaps</p>
        
        <h1 class="hero-main-title">
          REMEMBER<br>
          CONNECT<br>
          ENGAGE<br>
          BUILD<br>
          SHARE
        </h1>
        
        <p class="hero-description">
          the <strong class="highlight">INFORMATION TECHNOLOGY (BSIT)</strong> program focuses on the installation, customization, operation, management, and administration of computer systems and enterprise networks[cite: 2].
        </p>
        
        <p class="hero-tagline">DIFFERENT PEOPLE, ONE GOAL</p>
      </div>

      <!-- Hero Card Area displaying ITSO Logo -->
      <div class="hero-logo-area">
        <div class="itso-badge-card">
          <img :src="itsoLogoImg" alt="ITSO Emblem" class="badge-image" />
        </div>
      </div>
    </section>

    <!-- Dark Gold-Glow Content Section -->
    <div class="program-body">
      <section class="content-card">
        <h2>Program Objectives</h2>
        <p>
          Prepare students to become IT professionals capable of installing, customizing, operating, managing, and administering computer systems and enterprise networks effectively[cite: 2].
        </p>
      </section>

      <section class="content-card">
        <h2>Areas of Study & Course Highlights</h2>
        <ul class="highlight-list">
          <li>Web Systems and Technologies (Vue.js, Frontend & Backend architectures)</li>
          <li>Network Administration and Security</li>
          <li>System Integration and Database Management</li>
          <li>Enterprise Architecture and IT Project Management</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.program-page {
  width: 100%;
  background-color: #060d14;
  color: #e2e8f0;
  min-height: 100vh;
}

.hero-section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8%;
  background-color: #0d2326;
  /* Dark teal gradient overlay with gold/amber highlights matching the ITSO logo */
  background-image: 
    radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
    linear-gradient(to right, rgba(13, 35, 38, 0.95) 45%, rgba(13, 35, 38, 0.6) 100%);
  background-size: cover;
  background-position: center;
  min-height: 85vh;
  gap: 3rem;
  border-bottom: 2px solid #f59e0b;
}

.hero-content {
  max-width: 580px;
  z-index: 2;
}

.hero-sub {
  color: #94a3b8;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-main-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.hero-description {
  color: #cbd5e1;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #f59e0b; /* Signature accent gold */
  font-weight: bold;
}

.hero-tagline {
  color: #f59e0b; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}   

/* Card Area with ITSO Gold Glow */
.hero-logo-area {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.itso-badge-card {
  background: rgba(13, 35, 38, 0.9);
  padding: 2.5rem;
  border-radius: 16px;
  border: 2px solid #f59e0b;
  box-shadow: 0 0 35px rgba(245, 158, 11, 0.35), inset 0 0 15px rgba(245, 158, 11, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  width: 380px;
  height: 380px;
}

.badge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.4));
}

.program-body {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-card {
  background: rgba(13, 35, 38, 0.85);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-bottom: 4px solid #f59e0b;
  padding: 2.25rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #f59e0b;
  font-size: 1.5rem;
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
  padding-left: 1.5rem;
  color: #cbd5e1;
  line-height: 1.7;
  font-size: 1.05rem;
}

@media (max-width: 900px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .itso-badge-card {
    width: 280px;
    height: 280px;
  }
}
</style>