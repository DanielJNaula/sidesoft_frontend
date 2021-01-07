<template>
  <v-app>
  
    <Navbar></Navbar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer>
      <Footer></Footer>
    </v-footer>
  </v-app >
  
</template>

<script>

import Navbar from './components/plantilla/Navbar.vue';
import Footer from './components/plantilla/Footer.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

};
</script>