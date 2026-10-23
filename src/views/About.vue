<template>
  <div class="about-page">
    <header class="about-header">
      <h1>About the College of Computer Studies</h1>
    </header>

    <div class="about-content">
      <section class="section-block center-block">
        <p>The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) program under the College of Commerce. The first batch of students was composed of two sections with about 100 students. Prof. Mary O’ T. Penetrante was appointed to be the faculty-in-charge of the new program..</p>
      </section>

      <section class="grid-block">
        <div class="card">
          <h3>The Mission</h3>
          <p>A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.</p>
        </div>
        <div class="card">
          <h3>The Vision</h3>
          <p>The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  background: rgb(255, 255, 255);
  padding: 5rem 2rem;
  border-radius: 0px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  max-width: 1100px;
  margin: 2rem auto;
}

.about-header {
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  text-align: center; 
}

.about-header h1 {
  color: #f59e0b;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}

.section-block {
  margin-bottom: 2.5rem;
}

.center-block {
  text-align: center;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}


.grid-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.card {
  background: #f9f9f9;
  padding: 1.75rem;
  border-radius: 6px;
  border-top: 4px solid #003366;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}



</style>