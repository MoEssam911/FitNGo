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

main{
  min-height: 100vh;
}
</style>