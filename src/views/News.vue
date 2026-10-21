<template>
  <div class="news-page">
    <header class="news-header">
      <h1>News, Events, and Announcements</h1>
      <p>Stay updated with the latest happenings, academic activities, and events at the CPU College of Computer Studies.</p>
    </header>

    <div class="news-grid">
      <div class="news-card" v-for="item in newsList" :key="item.id">
        <div class="news-date">{{ item.date }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.snippet }}</p>
        <button class="read-more">Read More →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newsList = ref([
  {
    id: 1,
    date: 'October 15, 2026',
    title: 'CCS Holds Annual Web Systems Hackathon',
    snippet: 'Students from BSIT, BSCS, BSDMIA, and BLIS collaborated to build innovative web and mobile solutions during the 24-hour coding challenge.'
  },
  {
    id: 2,
    date: 'October 02, 2026',
    title: 'New Partnership Announced with Tech Industries',
    snippet: 'CPU CCS secures new internship pipelines for senior students specializing in software engineering and cloud infrastructure.'
  },
  {
    id: 3,
    date: 'September 20, 2026',
    title: 'Enrollment and Orientation for Incoming Freshmen',
    snippet: 'The college welcomes new compute studies aspirants with an interactive orientation program highlighting modern computing labs.'
  }
])
</script>

<style scoped>
.news-page {
  background: white;
  padding: 10rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  
}
.news-header {
  border-bottom: 2px solid #f59e0b;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  text-align: center; /* Center aligns header text */
}

.news-header h1 {
  color: #003366;
  margin-bottom: 0.5rem;}
.news-header p {
  color: #555;
  font-size: 1.1rem;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.news-card {
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-date {
  font-size: 0.8rem;
  color: #888;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.news-card h3 {
  color: #003366;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}
.news-card p {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex: 1;
}
.read-more {
  background: none;
  border: none;
  color: #003366;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  text-align: left;
}
.read-more:hover {
  color: #ffcc00;
}
</style>