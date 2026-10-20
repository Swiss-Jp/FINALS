<template>
  <div class="about-page">
    <header class="about-header">
      <h1>About the College of Computer Studies</h1>
      <p>Discover our history, mission, vision, and commitment to academic excellence in computing.</p>
    </header>

    <div class="about-content">
      <section class="section-block">
        <h2>College Background</h2>
        <p>The Central Philippine University College of Computer Studies (CPU CCS) has been at the forefront of providing quality computing education, fostering technological innovation, and producing industry-ready professionals in the region.</p>
      </section>

      <section class="grid-block">
        <div class="card">
          <h3>Our Mission</h3>
          <p>To provide Christian-based quality education that equips students with cutting-edge technical skills, ethical foundations, and research capabilities in computing and information sciences.</p>
        </div>
        <div class="card">
          <h3>Our Vision</h3>
          <p>To be a center of excellence in computer studies, recognized nationally and globally for academic rigor, innovation, and community impact.</p>
        </div>
      </section>

      <section class="section-block">
        <h2>College Objectives</h2>
        <ul>
          <li>Deliver robust curricula aligned with current industry standards and technological advancements.</li>
          <li>Encourage faculty and student research that addresses real-world societal problems.</li>
          <li>Foster values of integrity, leadership, and social responsibility among students.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.about-header {
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}
.about-header h1 {
  color: #003366;
  margin-bottom: 0.5rem;
}
.about-header p {
  color: #555;
  font-size: 1.1rem;
}
.section-block {
  margin-bottom: 2rem;
}
.section-block h2 {
  color: #003366;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  border-left: 4px solid #ffcc00;
  padding-left: 0.5rem;
}
.grid-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 6px;
  border-top: 4px solid #003366;
}
.card h3 {
  color: #003366;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #444;
}
li {
  margin-bottom: 0.4rem;
}
</style>