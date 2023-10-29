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
  <!-- <UploadPhoto></UploadPhoto> -->
  
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
import UploadPhoto from "./components/UploadPhoto.vue";
import '../public/Mixins/public'
export default {
  components: {
    Navbar,
    Footer,
    LoginNSignup,
    UploadPhoto
  },
  data() {
    return {
      isLoggedIn: false,
      loggedIN: false,
      // newLog:false,
      user:{
        role:'user'
      },
    };
  },
  created(){
    this.loggedIN = JSON.parse(localStorage.getItem('loggedIn'));
    this.user = JSON.parse(localStorage.getItem('user'));

  },
  updateded(){
    this.loggedIN = JSON.parse(localStorage.getItem('loggedIn'));
    this.user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.user);
  },
  methods: {
    apperLogin() {
      this.isLoggedIn = true;
    },
    closeLogin() {
      this.isLoggedIn = false;
    },
    userLoggedIN(){
      this.loggedIN = !this.loggedIN;
      localStorage.setItem('loggedIn',JSON.stringify(this.loggedIN))
      this.user = JSON.parse(localStorage.getItem('user'));
      // window.location.reload();
      // console.log(this.user);
    },
    updateUser(user){
      this.user = user;
      console.log(user);
    },
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      apperLogin: this.apperLogin,
      closeLogin: this.closeLogin,
      userLoggedIN:this.userLoggedIN,
      updateUser:this.updateUser,
      loggedIN: computed(()=>this.loggedIN),
      user: computed(()=>this.user),

    };
  },
};
</script>

<style lang="scss">
.login {
  position: fixed;
}
</style>
