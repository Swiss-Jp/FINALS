<script setup lang="ts">
import Hero from '@/views/Hero.vue';
import Faculty from '@/views/Faculty.vue';
import News from '@/views/News.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';

</script>

<template>
  <div class="home-container">
    <div id="home"><Hero /></div>
    <div id="faculty"><Faculty /></div>
    <div id="news"><News /></div>
    <div id="contact"><Contact /></div>
    <div id="about"><About /></div>
  </div>
</template>

