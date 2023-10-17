<template>
  <LoginNSignup
    class="fixed z-20 top-5 left-2/4 -translate-x-1/2 w-10/12 mx-auto border border-black bg-white"
    v-if="isLoggedIn"></LoginNSignup>
  <div
    class="fixed z-10 bg-[#000000ee] w-full h-screen top-0"
    @click="closeLogin"
    v-if="isLoggedIn"></div>
  <main class="w-full relative">

    <!-- <Navbar class="fixed top-0 z-50 w-full"></Navbar> -->
    <!-- <RouterView /> -->
    <UserSideBar></UserSideBar>
    <!-- <TrainerAccount></TrainerAccount> -->
    <!-- <AboutView></AboutView> -->
    <!-- <Card></Card> -->
    <!-- <CheckOut></CheckOut> -->
    <!-- <TrainerStatsData></TrainerStatsData> -->
    <!-- <Footer></Footer> -->
    <!-- <ShopView></ShopView> -->
  </main>

</template>

<script setup>
import HomeBanner from "./components/HomeBanner.vue";
import { RouterView } from "vue-router";
import Navbar from "./components/utilities/Navbar.vue";
import Footer from "./components/utilities/Footer.vue";
</script>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/utilities/Navbar.vue";
import Footer from "./components/utilities/Footer.vue";
import Cart from "./components/Cart.vue";
import ToolsPage from "./components/ToolsPage.vue";
import Card from "./components/Card.vue";

import MacroCalculator from "./components/Tools/MacroCalculator.vue";
import UserSideBar from "./components/Tools/UserSideBar.vue";

import LoginNSignup from "./components/LoginAndSignup/LoginNSignup.vue";

import ShopView from "./views/ShopView.vue";
import AboutView from "./views/AboutView.vue";
import CheckOut from "./views/CheckOut.vue";
import TrainerAccount from "./views/TrainerAccount.vue";
import LoginNSignup from "./components/LoginAndSignup/LoginNSignup.vue";

// import TrainerStatsData from "/components/TrainerStats&Data.vue";
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
    TrainerAccount,
    MacroCalculator,
    ToolsPage,
    UserSideBar,
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
