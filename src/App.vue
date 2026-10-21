<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0d2326;
}

</style>