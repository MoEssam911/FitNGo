<template>
  <LoginNSignup
    class="fixed z-20 top-5 left-2/4 -translate-x-1/2 w-10/12 mx-auto border border-black bg-white"
    v-if="isLoggedIn"
  ></LoginNSignup>
  <div
    class="fixed z-10 bg-[#000000ee] w-full h-screen top-0"
    @click="closeLogin"
<<<<<<< HEAD
    v-if="isLoggedIn"
  ></div>
  <main class="w-full relative">
    <Navbar class="fixed top-0 z-50 w-full"></Navbar>
    <RouterView class="mt-20" />
    <!-- <AboutView></AboutView>
    <Card></Card>
    <CheckOut></CheckOut>
    <TrainerStatsData></TrainerStatsData>
    <ShopView></ShopView> -->
    <!-- <shop></shop> -->
    <!-- <trainerAccount></trainerAccount> -->
    <Footer></Footer>
  </main>
</template>

//
<script setup>
// import { computed } from 'vue'
// import { useFavicon, usePreferredDark } from '@vueuse/core'
// const isDark = usePreferredDark();
// const favicon = computed(() =>
//   {return isDark.value ? 'Logo-Fit&go version 2-white.png' : 'Logo-Fit&go version 2.png'})

// useFavicon(favicon, {
//   baseUrl: '/public/',
//   rel: 'icon',
// }) 
//
=======
    v-if="isLoggedIn"></div>
    <Navbar />
  <main class="w-full h-screen relative">

    <Navbar class="fixed top-0 z-50 w-full"></Navbar>

    <RouterView  class="mt-20"/>
    <!-- <UserSideBar></UserSideBar> -->

    <!-- <TrainerAccount></TrainerAccount> -->
    <!-- <AboutView></AboutView> -->
    <!-- <Card></Card>
    <shop></shop>
    <TrainerSideBar></TrainerSideBar> -->
    <!-- <CheckOut></CheckOut> -->

  <!-- <TrainerStatsData></TrainerStatsData> -->
  <!-- <LiftingBanner /> -->
  <!-- <MacroCalc /> -->
  <!-- <Tools /> -->
  <!-- <HomeBanner /> -->
    <Footer></Footer> 
    <!-- <ShopView></ShopView> --> 

  </main>
</template>

<!-- <script setup>

import LiftingBanner from './components/HomeBanner/LiftingBanner.vue';
import shopBanner from './components/HomeBanner/shopBanner.vue';
import ToolsBanner from './components/HomeBanner/ToolsBanner.vue';
import Tools from './components/ToolsPage.vue'
import HomeBanner from './components/HomeBanner.vue'
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script> -->

<script setup>
import TrainerSideBar from "./components/Tools/TrainerSideBar.vue";

>>>>>>> b326da241ae7f01393d8ecf8b4b269a620d53f31
</script>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/utilities/Navbar.vue";
import Footer from "./components/utilities/Footer.vue";
import Cart from "./components/Cart.vue";
import ToolsPage from "./components/ToolsPage.vue";
import Card from "./components/Card.vue";
<<<<<<< HEAD
import MacroCalculator from "./components/Tools/MacroCalculator.vue";
import UserSideBar from "./components/Tools/UserSideBar.vue";
=======
import LoginNSignup from "./components/LoginAndSignup/LoginNSignup.vue";
>>>>>>> b326da241ae7f01393d8ecf8b4b269a620d53f31
import ShopView from "./views/ShopView.vue";
import AboutView from "./views/AboutView.vue";
import CheckOut from "./views/CheckOut.vue";
import TrainerAccount from "./views/TrainerAccount.vue";
<<<<<<< HEAD
import Shop from "./components/shop.vue";
import LoginNSignup from "./components/LoginAndSignup/LoginNSignup.vue";
=======
>>>>>>> b326da241ae7f01393d8ecf8b4b269a620d53f31

// import TrainerStatsData from "/components/TrainerStats&Data.vue";

export default {
  components: {
    Navbar,
    Footer,
    Cart,
    LoginNSignup,
    // Card,
    ShopView,
    AboutView,
    CheckOut,
    TrainerAccount,
    ToolsPage,
  
    // TrainerStatsData,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    apperLogin() {
      this.isLoggedIn = true;
    },
    closeLogin() {
      this.isLoggedIn = false;
    },
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      apperLogin: this.apperLogin,
    };
  },
};
</script>

<style lang="scss">
.login {
  position: fixed;
}
</style>
