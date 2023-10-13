<template>
  <main>
    <Navbar></Navbar>
    <LoginNSignup></LoginNSignup>
    <!-- <RouterView /> -->
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
import LoginNSignup from './components/LoginAndSignup/LoginNSignup.vue'
export default {
  components:{
    Navbar,
    Footer,
    LoginNSignup,
  }
}
</script>

<style lang="scss">
main{
  min-height: 100vh;
}
</style>