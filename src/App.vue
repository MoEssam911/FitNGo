<template>

  <LoginNSignup
    class="fixed z-20 top-5 left-2/4 -translate-x-1/2 w-10/12 mx-auto border border-black bg-white"
    v-if="isLoggedIn"
  ></LoginNSignup>
  <div
    class="fixed z-10 bg-[#000000ee] w-full h-screen top-0"
    @click="closeLogin"
    v-if="isLoggedIn"></div>
    <Navbar />
  <main class="w-full h-screen relative">
    <RouterView  class="mt-20"/>


    <Footer />
  </main>
  
</template>

<script setup>
import { computed } from 'vue'
import { useFavicon, usePreferredDark } from '@vueuse/core'
const isDark = usePreferredDark();
const favicon = computed(() =>
  {return isDark.value ? 'Logo-Fit&go version 2-white.png' : 'Logo-Fit&go version 2.png'})

useFavicon(favicon, {
  baseUrl: '/public/',
  rel: 'icon',
})
</script>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/utilities/Navbar.vue";
import Footer from "./components/utilities/Footer.vue";
import LoginNSignup from "./components/LoginAndSignup/LoginNSignup.vue";

export default {
  components: {
    Navbar,
    Footer,
    LoginNSignup,
  },
  data() {
    return {
      isLoggedIn: false,
      user:{},
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
      user:this.user,
    };
  },
};
</script>

<style lang="scss">
.login {
  position: fixed;
}
</style>
