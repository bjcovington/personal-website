// 1. Import Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// 2. Import your page components
import HomePage from '../components/HomePage.vue';  // Import HomePage.vue
import AboutPage from '../components/AboutPage.vue';  // Import AboutPage.vue
import ResumePage from '../components/ResumePage.vue';  // Import ResumePage.vue

// 3. Define routes and map them to components
const routes = [
  { path: '/', name: 'Home', component: HomePage },  // Route for HomePage
  { path: '/about', name: 'About', component: AboutPage },  // Route for AboutPage
  { path: '/resume', name: 'Resume', component: ResumePage },  // Route for ResumePage
];

// 4. Create the Vue Router instance
const router = createRouter({
  history: createWebHistory(),  // Use HTML5 history mode
  routes,  // Pass the routes into the router
});

// 5. Export the router so it can be used in main.js
export default router;
