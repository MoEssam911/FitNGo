<template>
  <main>
    <Navbar></Navbar>
    <RouterView />
    <!-- <LoginNSignup></LoginNSignup> -->
    <!-- <AboutView></AboutView> -->
    <!-- <Card></Card> -->
      <CheckOut></CheckOut>
    <Footer></Footer>
    <!-- <ShopView></ShopView> -->
    

  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script> 


<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Cart from "./components/Cart.vue";
import LoginNSignup from "./components/LoginAndSignup/LoginNSignup.vue";
import Card from "./components/Card.vue";
import ShopView from "./views/ShopView.vue";
import AboutView from "./views/AboutView.vue";
import CheckOut from './views/CheckOut.vue';
export default {
  components: {
    Navbar,
    Footer,
    Cart,
    LoginNSignup,
    Cart,
    Card,
    ShopView,
    AboutView,
     CheckOut,
  },
};
</script>

<style lang="scss">
main {
  min-height: 100vh;
}
</style>

