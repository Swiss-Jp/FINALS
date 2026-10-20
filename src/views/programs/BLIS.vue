<script setup>
// Make sure your LISSO emblem is saved as src/assets/LISSO.png
import lissoLogoImg from '@/assets/lis.png'
</script>

<template>
  <div class="program-page">
    <!-- Hero Section with Left Content & Centered LISSO Badge -->
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
          the <strong class="highlight">LIBRARY AND INFORMATION SCIENCE (BLIS)</strong> program provides knowledge and skills in managing information resources, digital archiving, database curation, and information technology applications[cite: 2].
        </p>
        
        <p class="hero-tagline">DIFFERENT PEOPLE, ONE GOAL</p>
      </div>

      <!-- Hero Card Area displaying LISSO Logo -->
      <div class="hero-logo-area">
        <div class="lisso-badge-card">
          <img :src="lissoLogoImg" alt="LISSO Emblem" class="badge-image" />
        </div>
      </div>
    </section>

    <!-- Dark Emerald-Glow Content Section -->
    <div class="program-body">
      <section class="content-card">
        <h2>Program Objectives</h2>
        <p>
          Prepare students to become information professionals, digital archivists, and knowledge managers capable of organizing, preserving, retrieving, and disseminating information effectively using modern library technologies and digital systems.
        </p>
      </section>

      <section class="content-card">
        <h2>Areas of Study & Course Highlights</h2>
        <ul class="highlight-list">
          <li>Information Organization, Indexing & Abstracting</li>
          <li>Digital Libraries, Archiving & Preservation Systems</li>
          <li>Database Management & Information Architecture</li>
          <li>Library Automation, Analytics & Web Technologies</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.program-page {
  width: 100%;
  background-color: #040f12;
  color: #e2e8f0;
  min-height: 100vh;
}

.hero-section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8%;
  background-color: #081d22;
  /* Dark teal gradient overlay with emerald highlights matching the LISSO logo */
  background-image: 
    radial-gradient(circle at 75% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
    linear-gradient(to right, rgba(8, 29, 34, 0.95) 45%, rgba(8, 29, 34, 0.6) 100%);
  background-size: cover;
  background-position: center;
  min-height: 85vh;
  gap: 3rem;
  border-bottom: 2px solid #10b981;
}

.hero-content {
  max-width: 580px;
  z-index: 2;
}

.hero-sub {
  color: #6ee7b7;
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
  color: #10b981; /* Emerald green accent matching the LISSO logo */
  font-weight: bold;
}

.hero-tagline {
  color: #34d399; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}   

/* Card Area with LISSO Emerald Glow */
.hero-logo-area {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.lisso-badge-card {
  background: rgba(8, 29, 34, 0.9);
  padding: 2.5rem;
  border-radius: 50%; /* Rounded circular card matching the LISSO emblem shape */
  border: 3px solid #10b981;
  box-shadow: 0 0 35px rgba(16, 185, 129, 0.35), inset 0 0 15px rgba(16, 185, 129, 0.15);
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
  filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.4));
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
  background: rgba(8, 29, 34, 0.85);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-bottom: 4px solid #10b981;
  padding: 2.25rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.15);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #34d399;
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

  .lisso-badge-card {
    width: 280px;
    height: 280px;
  }
}
</style>