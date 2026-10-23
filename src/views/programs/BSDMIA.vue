<script setup>
import midasLogoImg from '@/assets/MIDASbig.png'
</script>

<template>
  <div class="program-page">
    <section class="hero-section">
      <div class="hero-content">        
        <h1 class="hero-main-title">
          DIGITAL<br>
          MEDIA<br>
          AND<br>
          INTERACTIVE<br>
          ARTS
        </h1>
        
        <p class="hero-description">
          The <strong class="highlight">BACHELOR OF SCIENCE IN DIGITAL MEDIA AND INTERACTIVE ARTS (BSDMIA)</strong> focuses on creative applied arts and digital media technologies.
        </p>
        
        <p class="hero-tagline">MIDAS</p>
      </div>

      <div class="hero-logo-area">
        <img :src="midasLogoImg" alt="MIDAS Logo" class="midas-logo-img" />
      </div>
    </section>

    <div class="program-body">
      <div class="cards-grid">
        <section class="content-card">
          <h2>PROGRAM OBJECTIVES</h2>
          <ul class="highlight-list">
            <li>Exhibit skills, knowledge and leadership to excel in their information technology careers and related discipline.</li>
            <li>Exhibit high standard of professionalism who are effective members of multi-discipline development teams.</li>
            <li> Involved in scholarly activities, research and outreach that contributes to the improvement and transformation of society.</li>
            <li>Demonstrate ethical, professional, spiritual values, and social responsibility associated with their Information Technology careers and related professions.</li>
            <li>Exhibit proficiency in the use of traditional and digital media arts, designing, developing and implementing digital media solutions in fields of entertainment and corporate environments.</li>
          </ul>
        </section>                                                                  

        <section class="content-card">
          <h2>CURRICULUM DESCRIPTION</h2>
          <p class="curriculum-text">
            The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies. 
            It is designed to developing creative talents for a variety of applied arts industries,
            including but not limited to the entertainment, education, advertising and commercials, films and corporate communications sectors.
            The structure of the course enable students from different disciplines to collaborate and work together to produce the best artworks acceptable to the 
            industry standards. Students will undergo training and education to enhance their skills with the talent-centric curriculum for the high-end digital media industry.
          </p>
        </section>
      </div>
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
  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 6%;
  background-color: #0a181c;
  background-image: 
    radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.18) 0%, transparent 50%),
    linear-gradient(to right, rgba(10, 24, 28, 0.95) 45%, rgba(10, 24, 28, 0.6) 100%);
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
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 1.5px;
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
  color: #fbbf24;
  font-weight: bold;
}

.hero-tagline {
  color: #f59e0b; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
}   

.hero-logo-area {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex: 1;
}

.midas-logo-img {
  max-width: 480px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 35px rgba(245, 158, 11, 0.6));
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
  background: rgba(10, 24, 28, 0.85);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-bottom: 4px solid #f59e0b;
  padding: 2.25rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);
  backdrop-filter: blur(8px);
}

.content-card h2 {
  color: #fbbf24;
  font-size: 1.35rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.curriculum-text {
  color: #cbd5e1;
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
}

.highlight-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.95rem;
}

.highlight-list li {
  margin-bottom: 0.75rem;
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

  .midas-logo-img {
    max-width: 360px;
  }
}
</style>