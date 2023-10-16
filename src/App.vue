<template>
  <Navbar></Navbar>

    <!-- <RouterView /> -->
    <!-- <AboutView></AboutView> -->
  <HomeBanner />
      <!-- <LoginNSignup></LoginNSignup> -->
      <!-- <WorkoutsView /> -->
      <!-- <HomeView /> -->
      <!-- <RouterView /> -->
      <!-- <ToolsPage  class="h-max"/> -->

    <!-- <Card></Card> -->
    <!-- <Footer></Footer> -->
    <!-- <ShopView></ShopView> -->


</template>

<script setup>
import HomeBanner from './components/HomeBanner.vue'
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import WorkoutView from './views/WorkoutView.vue'
import HomeView from './views/HomeView.vue'
import ToolsPage from './components/ToolsPage.vue'
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
export default {
  components: {
    Navbar,
    Footer,
    LoginNSignup,
    Cart,
    Card,
    ShopView,
    AboutView,
  },
};
</script>

<style lang="scss">
main {
  min-height: 100vh;
}
</style>

