<template>
  <div id="app">
    <header>
      <h1>Personal Website</h1>
      <nav>
        <a href="#" @click="currentPage = 'Home'">Home</a> |
        <a href="#" @click="currentPage = 'About'">About</a> |
        <a href="#" @click="currentPage = 'Resume'">Resume</a>
      </nav>
    </header>

    <!-- Display components based on the current page -->
    <main>
      <HomePage v-if="currentPage === 'Home'" />
      <AboutPage v-if="currentPage === 'About'" />
      <ResumePage v-if="currentPage === 'Resume'" />
    </main>
  </div>
</template>

<script>
// Import your components manually
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ResumePage from './components/ResumePage.vue';
import '@/assets/fancy.css';

export default {
  data() {
    return {
      currentPage: 'Home', // Default to 'Home' page
    };
  },
  components: {
    HomePage,
    AboutPage,
    ResumePage,
  },
};
</script>
