<script setup>
// 1. Import your CS side card image from the assets folder
import csLogoImg from '@/assets/CS.png' 
</script>

<template>
  <div class="program-page">
    <!-- Hero Section with Left Text and Centered CS Card -->
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
          the <strong class="highlight">COMPUTER SCIENCE (CS)</strong> program focuses on the concepts and theories, algorithmic foundations, implementation, and application of computing solutions.
        </p>
        
        <p class="hero-tagline">DIFFERENT PEOPLE, ONE GOAL</p>
      </div>

      <!-- Centered Hero Logo Card -->
      <div class="hero-logo-area">
        <div class="cs-badge-card">
          <img :src="csLogoImg" alt="Computer Science Logo" class="badge-image" />
        </div>
      </div>
    </section>

    <!-- Dark-Themed Content Cards Section -->
    <div class="program-body">
      <section class="content-card">
        <h2>Program Objectives</h2>
        <p>
          Prepare students to become computer scientists and software engineers capable of designing, analyzing, and implementing complex software systems, algorithm architectures, and intelligent computing solutions.
        </p>
      </section>

      <section class="content-card">
        <h2>Areas of Study & Course Highlights</h2>
        <ul class="highlight-list">
          <li>Algorithms & Advanced Data Structures</li>
          <li>Software Engineering & System Architecture</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Database Systems & Operating System Design</li>
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
  justify-content: space-around; /* Distributes items so the card sits perfectly balanced */
  align-items: center;
  padding: 6rem 8%;
  background-color: #0e1e2e;
  background-image: linear-gradient(to right, rgba(14, 30, 46, 0.95) 50%, rgba(14, 30, 46, 0.5) 100%), url('@/assets/cs_background.png');
  background-size: cover;
  background-position: center;
  min-height: 85vh;
  gap: 2rem;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-sub {
  color: #7dd3fc;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-main-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.hero-description {
  color: #cbd5e1;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #38bdf8;
  font-weight: inherit;
}

.hero-tagline {
  color: #38bdf8; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}   

/* Centered Hero Card Area */
.hero-logo-area {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin: 0 auto;
}

.cs-badge-card {
  background: rgba(14, 30, 46, 0.85);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #38bdf8;
  box-shadow: 0 8px 20px rgba(56, 189, 248, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.badge-image {
  max-width: 220px; /* Slightly enlarged for better centered presence */
  width: 100%;
  height: auto;
  object-fit: contain;
}

.program-body {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.content-card {
  background: rgba(14, 30, 46, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-bottom: 4px solid #38bdf8;
  padding: 2.25rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  flex: 1;
}

.content-card h2 {
  color: #38bdf8;
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
</style>