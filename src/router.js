import { createRouter, createWebHistory } from 'vue-router';

import home from './components/home.vue'
import about from './components/about.vue'
import contact from './components/contact.vue'


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
  
  // { 
  //   path: '/hooks', 
  //   name: 'hook',
  //   component: hooks 
  // },
  // { 
  //   path: '/methods', 
  //   name: 'medhods',
  //   component: methods 
  // }
    
  ]
  
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(process.env.Base_URL),
    routes: routes, // short for `routes: routes`
  
  })

  export default router