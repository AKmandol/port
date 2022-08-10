import { createRouter, createWebHistory } from 'vue-router';

import home from './components/home.vue'
import about from './components/about.vue'
import contact from './components/contact.vue'
import skill from './components/skill.vue'


const routes = [
 
  { 
    path: '/', 
    name: 'home',
    component: home
  },
  { 
    path: '/about', 
    name: 'about',
    component: about
  },
  { 
    path: '/contact', 
    name: 'contact',
    component: contact 
  },
  { 
    path: '/skill', 
    name: 'skill',
    component: skill 
  },
    
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes: routes,
  
  })

  export default router