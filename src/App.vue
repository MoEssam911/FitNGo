<template>
  <main>
    <!-- <Navbar></Navbar>
    <RouterView />
    <Footer></Footer>
    <ShopView></ShopView> -->

    <AboutView></AboutView>
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
import Card from "./components/Card.vue";
import ShopView from "./views/ShopView.vue";
import AboutView from "./views/AboutView.vue";
export default {
  components: {
    Navbar,
    Footer,
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
