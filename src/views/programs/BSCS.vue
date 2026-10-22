<script setup>
import csLogoImg from '@/assets/CSSbig.png' 
</script>

<template>
  <div class="program-page">
    <section class="hero-section">
      <div class="hero-content">        
        <h1 class="hero-main-title">
          COMPUTER<br>
          SCIENCE
        </h1>
        
        <p class="hero-description">
          The <strong class="highlight">BACHELOR OF SCIENCE IN COMPUTER SCIENCE (CS)</strong> program is designed for students who want to study computing in depth.
        </p>
        
        <p class="hero-tagline">COMPUTER SCIENCE SOCIETY</p>
      </div>

      <div class="hero-logo-area">
        <div class="cs-badge-card">
          <img :src="csLogoImg" alt="Computer Science Logo" class="badge-image" />
        </div>
      </div>
    </section>

    <!-- Side-by-Side Content Cards Section -->
    <div class="program-body">
      <div class="cards-grid">
        <section class="content-card">
          <h2>PROGRAM EDUCATIONAL OBJECTIVES</h2>
          <ul class="highlight-list">
            <li>Exhibit skills, knowledge and leadership to excel in their computer science careers and related discipline.</li>
            <li>Exhibit high standard of professionalism who are effective members of multi-discipline development teams.</li>
            <li>Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society.</li>
            <li>Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Computer Science careers and related professions.</li>
            <li>Exhibit proficiency in computing theory, algorithmic principles, and software design to implement advanced technological solutions.</li>
          </ul>
        </section>

        <section class="content-card">
          <h2>CURRICULUM DESCRIPTION</h2>
          <p class="card-intro">The BSCS curriculum includes foundation and professional courses that cover theory, algorithms, software design and development, and new developments in computing.</p>
          <p class="card-intro-sub">Defines eleven (11) Knowledge Areas recommended in ACM Computer Science Curricula 2013:</p>
          <ul class="highlight-list sub-list">
            <li>Algorithms and Complexity</li>
            <li>Architecture and Organization</li>
            <li>Discrete Structures</li>
            <li>Human Computer Interaction</li>
            <li>Information Assurance and Security</li>
            <li>Networks and Communications</li>
            <li>Operating Systems</li>
            <li>Programming Languages (Design and Implementation)</li>
            <li>Software Development Fundamentals</li>
            <li>Software Engineering</li>
            <li>Social Issues and Professional Practice</li>
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
  padding: 3.5rem 6%;
  background-color: #0e1e2e;
  background-image: 
    radial-gradient(circle at 75% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
    linear-gradient(to right, rgba(14, 30, 46, 0.95) 45%, rgba(14, 30, 46, 0.6) 100%);
  background-size: cover;
  background-position: center;
  gap: 3rem;
  border-bottom: 2px solid #38bdf8;
}

.hero-content {
  max-width: 620px;
  z-index: 2;
}

.hero-main-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 4.2rem;
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
  color: #38bdf8;
  font-weight: bold;
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

/* Centered Hero Card Area with Glow */
.hero-logo-area {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.cs-badge-card {
  background: rgba(14, 30, 46, 0.9);
  padding: 2.5rem;
  border-radius: 16px;
  border: 2px solid #38bdf8;
  box-shadow: 0 0 40px rgba(56, 189, 248, 0.4), inset 0 0 15px rgba(56, 189, 248, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  width: 440px;
  height: 440px;
}

.badge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4));
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
  background: rgba(14, 30, 46, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-bottom: 4px solid #38bdf8;
  padding: 2.25rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #38bdf8;
  font-size: 1.35rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.card-intro {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.98rem;
  margin-bottom: 0.75rem;
}

.card-intro-sub {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.98rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.highlight-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.95rem;
}

.highlight-list li {
  margin-bottom: 0.5rem;
}

.sub-list {
  list-style-type: disc;
}

.sub-list li {
  font-size: 0.92rem;
  color: #94a3b8;
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

  .cs-badge-card {
    width: 320px;
    height: 320px;
  }
}
</style>