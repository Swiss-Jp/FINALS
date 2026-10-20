import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BSIT from '../views/programs/BSIT.vue'
import BSCS from '../views/programs/BSCS.vue'
import BSDMIA from '../views/programs/BSDMIA.vue'
import BLIS from '../views/programs/BLIS.vue'
import Faculty from '../views/Faculty.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/programs/bsit', name: 'BSIT', component: BSIT },
  { path: '/programs/bscs', name: 'BSCS', component: BSCS },
  { path: '/programs/bsdmia', name: 'BSDMIA', component: BSDMIA },
  { path: '/programs/blis', name: 'BLIS', component: BLIS },
  { path: '/faculty', name: 'Faculty', component: Faculty },
  { path: '/news', name: 'News', component: News },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when switching pages
    return { top: 0 }
  }
})

export default router