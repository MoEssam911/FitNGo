<template>
  <main class="container relative">
    <div class="flex gap-2 mt-28 pb-6 items-center cursor-pointer">
      <h1 class="font-Manrope font-bold text-lg">My Account</h1>
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.125 11.1562L18.8125 5.90625L20.5625 4.15625C21.0417 3.67708 21.6304 3.4375 22.3288 3.4375C23.0271 3.4375 23.6154 3.67708 24.0938 4.15625L25.8438 5.90625C26.3229 6.38542 26.5729 6.96375 26.5938 7.64125C26.6146 8.31875 26.3854 8.89667 25.9062 9.375L24.125 11.1562ZM22.3125 13L9.0625 26.25H3.75V20.9375L17 7.6875L22.3125 13Z"
            fill="black" />
        </svg>
      </div>
    </div>
    <div class="flex gap-9">
      <aside class="w-3/12">
        <UserSideBar class="w-full"></UserSideBar>
      </aside>
      <section class="grid grid-cols-12 gap-3 w-full">
        <!-- Tools Icons -->
        <BmrIcon
          @click="bmrHandler"
          class="col-span-3 hidden lg:block"
          :toggleBmrClass="toggleBmrClass"></BmrIcon>
        <MacroIcon
          @click="macroHandler"
          class="col-span-3 hidden lg:block"
          :toggleMacroClass="toggleMacroClass"></MacroIcon>
        <BodyFatIcon
          @click="bodyFatHandler"
          class="col-span-3 hidden lg:block"
          :toggleFatClass="toggleFatClass"></BodyFatIcon>
        <DeitIcon
          @click="deitHandler"
          class="col-span-3 hidden lg:block"
          :toggleDeitClass="toggleDeitClass"></DeitIcon>

        <!-- Tools Components -->
        <BmrTool v-if="toggleTool === 'bmr'" class="col-span-12"></BmrTool>
        <MacroTool
          v-else-if="toggleTool === 'macro'"
          class="col-span-12"></MacroTool>
        <BodyFatTool
          v-else-if="toggleTool === 'bodyFat'"
          class="col-span-12"></BodyFatTool>
        <DietPlanTool
          v-else-if="toggleTool === 'deit'"
          class="col-span-12"></DietPlanTool>
      </section>
    </div>
    <div class="mini-icons flex">
      <div class="hover:fill-white rounded-full p-4 bg-primary inline">
        <svg
          width="25"
          height="25"
          viewBox="0 0 129 129"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M112.662 59.3797H91.7001C91.3294 59.3293 90.9536 59.3293 90.5829 59.3797H89.6784C89.4004 59.5383 89.1338 59.7161 88.8804 59.9117C88.5842 60.1073 88.2999 60.3205 88.0292 60.5501C87.8516 60.7677 87.6915 60.9989 87.5504 61.2418C87.3066 61.5769 87.0929 61.933 86.9119 62.3058L78.3997 85.7679L56.2145 25.6496C55.8417 24.6225 55.1617 23.7352 54.267 23.1081C53.3722 22.4809 52.3061 22.1445 51.2135 22.1445C50.1209 22.1445 49.0547 22.4809 48.16 23.1081C47.2653 23.7352 46.5853 24.6225 46.2125 25.6496L33.9229 59.3797H16.8983C15.4873 59.3797 14.1341 59.9402 13.1364 60.9379C12.1386 61.9357 11.5781 63.2889 11.5781 64.6999C11.5781 66.1109 12.1386 67.4641 13.1364 68.4618C14.1341 69.4596 15.4873 70.0201 16.8983 70.0201H39.7751C40.0775 69.8745 40.363 69.6961 40.6263 69.4881C40.9226 69.2924 41.2068 69.0793 41.4776 68.8496L41.9564 68.158C42.21 67.8294 42.4242 67.4723 42.5948 67.094L51.2135 42.9935L73.3455 103.75C73.7172 104.778 74.3967 105.667 75.2916 106.295C76.1864 106.924 77.2531 107.261 78.3464 107.261C79.4398 107.261 80.5065 106.924 81.4013 106.295C82.2962 105.667 82.9757 104.778 83.3474 103.75L95.5838 70.0201H112.662C114.073 70.0201 115.426 69.4596 116.424 68.4618C117.421 67.4641 117.982 66.1109 117.982 64.6999C117.982 63.2889 117.421 61.9357 116.424 60.9379C115.426 59.9402 114.073 59.3797 112.662 59.3797Z" />
        </svg>
      </div>
      <div>
        <svg
          width="25"
          height="25"
          viewBox="0 0 145 145"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M70.4129 72.3274L77.8268 23.8314C75.3754 23.4453 72.899 23.2393 70.4174 23.2151C43.2859 23.2151 21.3008 45.2048 21.3008 72.3274C21.3008 99.4545 43.2904 121.44 70.4129 121.44C97.5355 121.44 119.525 99.45 119.525 72.3274C119.525 71.1757 119.435 70.0466 119.354 68.9084L70.4129 72.3274ZM87.7509 14.7891L80.337 63.285L129.274 59.866C128.495 48.7555 123.961 38.2402 116.415 30.0483C108.869 21.8564 98.7603 16.4752 87.7509 14.7891Z" />
        </svg>
      </div>
      <div></div>
      <div></div>
    </div>
  </main>
</template>

<script>
import UserSideBar from "../components/Tools/UserSideBar.vue";
import BmrIcon from "../components/Tools/BmrIcon.vue";
import MacroIcon from "../components/Tools/MacroIcon.vue";
import BodyFatIcon from "../components/Tools/BodyFatIcon.vue";
import DeitIcon from "../components/Tools/DeitIcon.vue";
import MacroTool from "../components/Tools/MacroTool.vue";
import BmrTool from "../components/Tools/BmrTool.vue";
import DietPlanTool from "../components/Tools/DietPlanTool.vue";
import BodyFatTool from "../components/Tools/BodyFatTool.vue";

export default {
  name: "Tools",
  data() {
    return {
      toggleTool: "bmr",
      toggleBmrClass: true,
      toggleMacroClass: false,
      toggleFatClass: false,
      toggleDeitClass: false,
    };
  },

  methods: {
    bmrHandler() {
      this.toggleTool = "bmr";
      this.toggleBmrClass = true;
      this.toggleMacroClass = false;
      this.toggleFatClass = false;
      this.toggleDeitClass = false;
    },
    macroHandler() {
      this.toggleTool = "macro";
      this.toggleBmrClass = false;
      this.toggleMacroClass = true;
      this.toggleFatClass = false;
      this.toggleDeitClass = false;
    },
    bodyFatHandler() {
      this.toggleTool = "bodyFat";
      this.toggleBmrClass = false;
      this.toggleMacroClass = false;
      this.toggleFatClass = true;
      this.toggleDeitClass = false;
    },
    deitHandler() {
      this.toggleTool = "deit";
      this.toggleBmrClass = false;
      this.toggleMacroClass = false;
      this.toggleFatClass = false;
      this.toggleDeitClass = true;
    },
  },

  
  // provide() {
  //   return {
  //     toggleBmrClass: this.toggleBmrClass,
  //     toggleMacroClass: this.toggleMacroClass,
  //     toggleFatClass: this.toggleFatClass,
  //     toggleDeitClass: this.toggleDeitClass,
  //   };
  // },

  components: {
    UserSideBar,
    BmrIcon,
    MacroIcon,
    BodyFatIcon,
    DeitIcon,
    MacroTool,
    DietPlanTool,
    BodyFatTool,
    BmrTool,
  },
};
</script>

<style scoped></style>
