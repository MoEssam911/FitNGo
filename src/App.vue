<template>
  <main>
    <Navbar></Navbar>
    <RouterView />
    <Footer></Footer>

  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss">
.our-container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

/* Small */

@media (min-width: 768px) {
  .our-container {
    width: 750px;
  }
}

/* Medium */

@media (min-width: 992px) {
  .our-container {
    width: 970px;
  }
}

/* Large */

@media (min-width: 1200px) {
  .our-container {
    width: 1170px;
  }
}
main{
  min-height: 100vh;
}
</style>