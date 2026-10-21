<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Import your logos
import ccsLogo from '@/assets/CCS.png'
import itsoLogo from '@/assets/IT.png'
import csLogo from '@/assets/CS.png'
import midasLogo from '@/assets/midas.png'
import lissoLogo from '@/assets/lis.png'

const route = useRoute()
const router = useRouter()

// Computed logo based on current route
const currentLogo = computed(() => {
  switch (route.path) {
    case '/programs/bsit': return itsoLogo
    case '/programs/bscs': return csLogo
    case '/programs/bsdmia': return midasLogo
    case '/programs/blis': return lissoLogo
    default: return ccsLogo
  }
})

// Scroll to section handler
const navigateToSection = (sectionId) => {
  if (route.path === '/') {

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {

    router.push({ path: '/', hash: `#${sectionId}` }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  }
}

const scrollToTop = () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand" @click="scrollToTop">
      <img :src="currentLogo" alt="CCS Logo" class="logo" />
      <span class="brand-title">College of Computer Studies</span>
    </div>
    
    <ul class="nav-links">
      <li><a href="#" @click.prevent="scrollToTop">Home</a></li>
      
      
      <!-- Academic Programs Dropdown -->
      <li class="dropdown">
        <span class="drop-trigger">Programs ▾</span>
        <div class="dropdown-menu">
          <router-link to="/programs/bsit">BSIT</router-link>
          <router-link to="/programs/bscs">BSCS</router-link>
          <router-link to="/programs/bsdmia">BSDMIA</router-link>
          <router-link to="/programs/blis">BLIS</router-link>
        </div>
      </li>

      <li><a href="#" @click.prevent="navigateToSection('faculty')">Faculty & Staff</a></li>
      <li><a href="#" @click.prevent="navigateToSection('about')">About</a></li>
      <li><a href="#" @click.prevent="navigateToSection('news')">News & Events</a></li>
      <li><a href="#" @click.prevent="navigateToSection('contact')">Contact Us</a></li>
      
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #081d22; 
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.logo {
  height: 60px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.brand-title {
  color: white;
  font-weight: 800;
  font-size: 1.25rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.55rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  color: rgb(247, 247, 247);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
  cursor: pointer;
}

.nav-links a:hover {
  color: #f59e0b; 
}

.dropdown {
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0;
}

.drop-trigger {
  color: white;
  font-weight: 500;
  transition: color 0.2s;
}

.dropdown:hover .drop-trigger {
  color: #f59e0b;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0b282e;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 5px;
  flex-direction: column;
  min-width: 140px;
  padding: 0.5rem 0;
  z-index: 1001;
}

.dropdown-menu a {
  color: #e2e8f0;
  padding: 0.6rem 1rem;
  display: block;
}

.dropdown-menu a:hover {
  background-color: #f59e0b;
  color: #081d22;
  font-weight: bold;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}
</style>