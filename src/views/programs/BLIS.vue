<script setup>
import lissoLogoImg from '@/assets/LISSO.png'
</script>

<template>
  <div class="program-page">
    <section class="hero-section">
      <div class="hero-content">
        
        <h1 class="hero-main-title">
          LIBRARY<br>
          INFORMATION<br>
          SCIENCE<br>
    
        </h1>
        
        <p class="hero-description">
          The Degree of<strong class="highlight">BACHELOR OF LIBRARY AND INFORMATION SCIENCE (BLIS)</strong> is a four year program that prepares students in development.
        </p>
        
        <p class="hero-tagline">BLISS</p>
      </div>

      <div class="hero-logo-area">
        <div class="lisso-badge-card">
          <img :src="lissoLogoImg" alt="LISSO Emblem" class="badge-image" />
        </div>
      </div>
    </section>

    <!-- Dark Emerald-Glow Side-by-Side Content Section -->
    <div class="program-body">
      <div class="cards-grid">
        <section class="content-card">
          <h2>Program Objectives</h2>
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
            <P>
              The LIS curriculum is designed to equip the professional with the composite knowledge, skills, attitudes, and 
              tools to enable him/her to be responsive to the changing information needs of society.
            </P>
        </section>
      </div>
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
  padding: 3.5rem 6%;
  background-color: #081d22;
  background-image: 
    radial-gradient(circle at 75% 50%, rgba(16, 185, 129, 0.18) 0%, transparent 50%),
    linear-gradient(to right, rgba(8, 29, 34, 0.95) 45%, rgba(8, 29, 34, 0.6) 100%);
  background-size: cover;
  background-position: center;
  gap: 3rem;
  border-bottom: 2px solid #10b981;
}

.hero-content {
  max-width: 620px;
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
  font-size: 3.8rem;
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
  margin-bottom: 1rem;
}

.highlight {
  color: #10b981;
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
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(16, 185, 129, 0.4), radial 0 0 15px rgba(16, 185, 129, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  width: 300px;
  height: 300px;
}

.badge-image {
  width: 200%;
  height: 200%;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.4));
}

.program-body {
  max-width: 1350px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.content-card {
  background: rgba(8, 29, 34, 0.85);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 4px solid #10b981;
  padding: 2.25rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.15);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #34d399;
  font-size: 1.35rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.content-card p {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.98rem;
  margin: 0;
}

.highlight-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #cbd5e1;
  line-height: 1.7;
  font-size: 0.98rem;
}

.highlight-list li {
  margin-bottom: 0.5rem;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }

  .lisso-badge-card {
    width: 320px;
    height: 320px;
  }
}
</style>