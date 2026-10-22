<script setup>
import itsoLogoImg from '@/assets/ITbig.png'
</script>

<template>
  <div class="program-page">
    <!-- Hero Section with Left Content & Centered ITSO Badge -->
    <section class="hero-section">
      <div class="hero-content">        
        <h1 class="hero-main-title">
          Information<br>
          Technology
        </h1>

        <p class="hero-description">
          The <strong class="highlight">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSIT)</strong> program is designed to bridge the gap between computer science and management information systems.
        </p>
      </div>

      <!-- Hero Card Area displaying ITSO Logo -->
      <div class="hero-logo-area">
        <div class="itso-badge-card">
          <img :src="itsoLogoImg" alt="ITSO Emblem" class="badge-image" />
        </div>
      </div>
    </section>

    <!-- Dark Gold-Glow Content Section (Side-by-Side Grid) -->
    <div class="program-body">
      <div class="cards-grid">
        <section class="content-card">
          <h2>PROGRAM EDUCATIONAL OBJECTIVES</h2>
          <ul class="highlight-list">
            <li>Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.</li>
            <li>Exhibit high standard of professionalism who are effective members of multi-discipline development teams</li>
            <li>Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society</li>
            <li>Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.</li>
            <li>Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.</li>
          </ul>
        </section>

<section class="content-card">
          <h2>CURRICULUM DESCRIPTION</h2>
          <ul class="highlight-list">
            <li>The BSIT curriculum includes basic and advanced courses on planning, development, integration, and management of information technology infrastructure that provide computing solutions to address the needs of organizations.</li>
            <li>The curriculum should include courses that cover Knowledge Areas as recommended in ACM Information Technology Curricula 2008.</li>
            <li>
              Defines eleven (11) Knowledge Areas:
              <ul class="sub-list">
                <li>Information Technology Fundamentals</li>
                <li>Human Computer Interaction</li>
                <li>Information Assurance and Security</li>
                <li>Information Management</li>
                <li>Integrative Programming and Technologies</li>
                <li>Networking</li>
                <li>Platform Technologies</li>
                <li>Systems Administration and Maintenance</li>
                <li>Systems Integration and Architecture</li>
                <li>Social and Professional Issues</li>
                <li>Web Systems and Technologies</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
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
  padding: 3.5rem 6%; /* Tightened vertical padding */
  background-color: #0d2326;
  background-image: 
    radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
    linear-gradient(to right, rgba(13, 35, 38, 0.95) 45%, rgba(13, 35, 38, 0.6) 100%);
  background-size: cover;
  background-position: center;
  gap: 3rem;
  border-bottom: 2px solid #f59e0b;
}

.hero-content {
  max-width: 620px;
  z-index: 2;
}

.hero-main-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 4.2rem; /* Made larger */
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
}

.hero-description {
  color: #cbd5e1;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.highlight {
  color: #f59e0b;
  font-weight: bold;
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
  box-shadow: 0 0 40px rgba(245, 158, 11, 0.4), inset 0 0 15px rgba(245, 158, 11, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  width: 440px; /* Made larger */
  height: 440px; /* Made larger */
}

.badge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.4));
}

.program-body {
  max-width: 1350px; /* Expanded max-width for side-by-side layout */
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Side-by-side grid layout for cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  font-size: 1.35rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.highlight-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #cbd5e1;
  line-height: 1.7;
  font-size: 0.98rem;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr; /* Stack on smaller screens */
  }

  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .itso-badge-card {
    width: 320px;
    height: 320px;
  }
}
</style>