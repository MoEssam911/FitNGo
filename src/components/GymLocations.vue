<script setup>
import LocationafterScan from "../components/LocationafterScan.vue";
import LocationbeforeScan from "../components/LocationbeforeScan.vue";
</script>

<template>
  <div>
    <section class="container mt-12">
      <h2 class="text-2xl text-primary font-bold ml-3 my-5">Gym Locations</h2>
      <div class="flex flex-wrap md:justify-center h-72 gap-2">
        <div class="bg-gray-200 rounded-xl lg:w-5/12 sm:w-12/12 flex justify-center pl-2 gap-2 relative">
          <transition name="fade">
            <LocationbeforeScan v-if="flag" class="absolute"></LocationbeforeScan>
          </transition>
          <transition name="fade">
            <LocationafterScan></LocationafterScan>
          </transition>
        </div>
        <div class="rounded-xl lg:w-5/12 sm:w-screen overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55232.573724676055!2d31.28317274840803!3d30.093159373884422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815ffff5781b9%3A0xe0e11c2fc9fbbd93!2sHussein%20Kamel%2C%20Almazah%2C%20El%20Nozha%2C%20Cairo%20Governorate%204471001!5e0!3m2!1sen!2seg!4v1697211539352!5m2!1sen!2seg"
            width="100%"
            height="100%"
            frameborder="0"
            style="border: 0; filter: invert(100%)"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            class="d-block m-auto"
          ></iframe>
        </div>
        <div class="lg:w-6/12 sm:w-full">
        <button
          class="rounded-xl bg-primary text-white px-10 py-2 block mx-auto mt-6"
          @click="flag = !flag"
        >
          Scan your map
        </button>
      </div>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  name: "GymLocations",

  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
