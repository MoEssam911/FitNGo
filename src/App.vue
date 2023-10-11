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
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
main{
  min-height: 100vh;
}
</style>