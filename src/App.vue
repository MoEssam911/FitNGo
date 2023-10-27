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

  <Navbar />

  <main class="w-full h-screen relative">
    <RouterView class="mt-20" v-slot="{ Component }">

      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <Footer />
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

export default {
  components: {
    Navbar,
    Footer,
    LoginNSignup,
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


<!-- <BaseModal :modalActive="modalActive" @close="toggleModal">

  Modal content is placed here

  <h1 class="text-2xl text-black">Our Modal</h1>

</BaseModal>  -->
<!--In script, declare the modalActive variable and make the toggleModal function-->