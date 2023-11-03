<template>

  <LoginNSignup
    class="fixed z-20 top-5 left-2/4 -translate-x-1/2 w-10/12 mx-auto border border-black bg-white"
    v-if="isLoggedIn"
  ></LoginNSignup>
  <div
    class="fixed z-10 bg-[#000000ee] w-full h-screen top-0"
    @click="closeLogin"
    v-if="isLoggedIn"
  ></div>

  <!-- <Navbar v-if="fullData || !loggedIN"/> -->
  <Navbar v-if="['LoginOrSignUp'].indexOf($route.name) && ['DashboardView'].indexOf($route.name) && ['ErrorPage'].indexOf($route.name)"/>


  <main class="w-full mt-20 relative">

    <RouterView class="min-h-screen  " v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <!-- <Checkout></Checkout> -->

    <Footer v-if="['LoginOrSignUp'].indexOf($route.name) && ['DashboardView'].indexOf($route.name) && ['ErrorPage'].indexOf($route.name)"/>
    <!-- <Footer /> -->
  </main>
</template>

<style lang="scss">
.login {
  position: fixed;
}
.page-enter-active,
.page-leave-active {
  transition: 200ms ease-in-out opacity;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>


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
import '../public/Mixins/public'
import Checkout from "./components/Shop/CheckoutUpdated.vue"; 


export default {
  components: {
    Navbar,
    Footer,
    LoginNSignup,
    Checkout,
  },
  data() {
    return {
      isLoggedIn: false,
      loggedIN: false,
      // newLog:false,
      user:{
        role:'user'
      },
      fullData:false
    };
  },
  created(){
    this.loggedIN = JSON.parse(localStorage.getItem('loggedIn'));
    this.user = JSON.parse(localStorage.getItem('user'));
    this.fullData = JSON.parse(localStorage.getItem('fullData'));
    console.log(this.fullData);

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
      fullData: computed(()=>this.fullData),
      user: computed(()=>this.user),

    };
  },
};
</script>


<!-- <BaseModal :modalActive="modalActive" @close="toggleModal">

  Modal content is placed here

  <h1 class="text-2xl text-black">Our Modal</h1>

</BaseModal>  -->
<!--In script, declare the modalActive variable and make the toggleModal function-->