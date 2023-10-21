<template>
  <div class="relative">
    <main class="container ">
      <div class="flex gap-2 mt-28 pb-6 items-center cursor-pointer">
        <div class="md:hidden">
          <MenuIcon @click="toggleUserSideHandler"></MenuIcon>
        </div>
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
        <!-- User side bar -->
        <aside
          class="w-6/12 sm:w-5/12 md:w-4/12 transition-all duration-1000"
          :class="toggleUserSide ? 'show-user-sidebar' : 'hide-user-sidebar'">
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
  
      <!-- Small and medium screens icons -->
      <div
        class="arrow-icon fixed right-[5%] top-1/2 lg:hidden border hover:text-white hover:bg-primary rounded-full p-3 bg-secondary cursor-pointer transition duration-300 w-12 h-12 scale-110 text-center"
        @click="toggleIconsHandler">
        <i
          class="fa-solid fa-arrow-down transition-all"
          :class="toggleIcons ? 'arrow-class' : ''"></i>
      </div>
      <div
        class="mini-icons flex flex-col gap-2 fixed right-[5%] top-[60%] lg:hidden"
        :class="[toggleIcons ? '' : 'hide-icons']">
        <div
          class="border hover:fill-white hover:bg-primary rounded-full p-3 bg-secondary cursor-pointer transition duration-300 w-12 h-12"
          :class="[
            toggleBmrClass ? 'active-tool' : 'inactive-tool',
            toggleBmrClass ? 'stritch-icon' : '',
          ]"
          @click="bmrHandler">
          <svg
            width="25"
            height="25"
            viewBox="0 0 129 129"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M112.662 59.3797H91.7001C91.3294 59.3293 90.9536 59.3293 90.5829 59.3797H89.6784C89.4004 59.5383 89.1338 59.7161 88.8804 59.9117C88.5842 60.1073 88.2999 60.3205 88.0292 60.5501C87.8516 60.7677 87.6915 60.9989 87.5504 61.2418C87.3066 61.5769 87.0929 61.933 86.9119 62.3058L78.3997 85.7679L56.2145 25.6496C55.8417 24.6225 55.1617 23.7352 54.267 23.1081C53.3722 22.4809 52.3061 22.1445 51.2135 22.1445C50.1209 22.1445 49.0547 22.4809 48.16 23.1081C47.2653 23.7352 46.5853 24.6225 46.2125 25.6496L33.9229 59.3797H16.8983C15.4873 59.3797 14.1341 59.9402 13.1364 60.9379C12.1386 61.9357 11.5781 63.2889 11.5781 64.6999C11.5781 66.1109 12.1386 67.4641 13.1364 68.4618C14.1341 69.4596 15.4873 70.0201 16.8983 70.0201H39.7751C40.0775 69.8745 40.363 69.6961 40.6263 69.4881C40.9226 69.2924 41.2068 69.0793 41.4776 68.8496L41.9564 68.158C42.21 67.8294 42.4242 67.4723 42.5948 67.094L51.2135 42.9935L73.3455 103.75C73.7172 104.778 74.3967 105.667 75.2916 106.295C76.1864 106.924 77.2531 107.261 78.3464 107.261C79.4398 107.261 80.5065 106.924 81.4013 106.295C82.2962 105.667 82.9757 104.778 83.3474 103.75L95.5838 70.0201H112.662C114.073 70.0201 115.426 69.4596 116.424 68.4618C117.421 67.4641 117.982 66.1109 117.982 64.6999C117.982 63.2889 117.421 61.9357 116.424 60.9379C115.426 59.9402 114.073 59.3797 112.662 59.3797Z" />
          </svg>
        </div>
        <div
          class="border hover:fill-white hover:bg-primary rounded-full p-3 bg-secondary cursor-pointer transition duration-300 w-12 h-12"
          :class="[
            toggleMacroClass ? 'active-tool' : 'inactive-tool',
            toggleMacroClass ? 'stritch-icon' : '',
          ]"
          @click="macroHandler">
          <svg
            width="25"
            height="25"
            viewBox="0 0 145 145"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M70.4129 72.3274L77.8268 23.8314C75.3754 23.4453 72.899 23.2393 70.4174 23.2151C43.2859 23.2151 21.3008 45.2048 21.3008 72.3274C21.3008 99.4545 43.2904 121.44 70.4129 121.44C97.5355 121.44 119.525 99.45 119.525 72.3274C119.525 71.1757 119.435 70.0466 119.354 68.9084L70.4129 72.3274ZM87.7509 14.7891L80.337 63.285L129.274 59.866C128.495 48.7555 123.961 38.2402 116.415 30.0483C108.869 21.8564 98.7603 16.4752 87.7509 14.7891Z" />
          </svg>
        </div>
        <div
          class="border hover:fill-white hover:bg-primary rounded-full p-3 bg-secondary cursor-pointer transition duration-300 w-12 h-12"
          :class="[
            toggleFatClass ? 'active-tool' : 'inactive-tool',
            toggleFatClass ? 'stritch-icon' : '',
          ]"
          @click="bodyFatHandler">
          <svg
            width="25"
            height="25"
            viewBox="0 0 111 111"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_502_26567)">
              <path
                d="M55.2908 24.7224C61.9451 24.7224 67.3395 19.328 67.3395 12.6737C67.3395 6.01938 61.9451 0.625 55.2908 0.625C48.6366 0.625 43.2422 6.01938 43.2422 12.6737C43.2422 19.328 48.6366 24.7224 55.2908 24.7224Z" />
              <path
                d="M94.2342 28.1627H16.3482C14.8075 28.1627 13.33 28.7747 12.2405 29.8642C11.1511 30.9536 10.5391 32.4312 10.5391 33.9719C10.5391 35.5126 11.1511 36.9902 12.2405 38.0796C13.33 39.169 14.8075 39.7811 16.3482 39.7811H38.2682C39.7549 39.7811 41.4955 40.4459 42.4809 43.0084C43.632 45.984 43.0683 51.7308 42.3583 56.1824L41.4288 61.4429C41.4305 61.4566 41.4291 61.4705 41.4246 61.4836C41.4202 61.4966 41.4128 61.5085 41.403 61.5182L33.9586 103.863C33.6887 105.4 34.0385 106.981 34.9316 108.261C35.8248 109.541 37.1884 110.415 38.7243 110.692C39.4836 110.826 40.2621 110.808 41.0144 110.639C41.7668 110.47 42.4781 110.154 43.107 109.707C43.736 109.261 44.27 108.694 44.6781 108.04C45.0862 107.386 45.3603 106.657 45.4845 105.896L50.6288 76.4629C50.6288 76.4629 52.279 69.4725 55.2912 69.4725C58.3529 69.4725 59.9687 76.4629 59.9687 76.4629L65.113 105.922C65.2375 106.69 65.5135 107.425 65.925 108.085C66.3365 108.745 66.8752 109.317 67.5098 109.766C68.1444 110.216 68.8622 110.535 69.6213 110.704C70.3804 110.874 71.1656 110.89 71.9312 110.753C72.6968 110.616 73.4275 110.328 74.0806 109.906C74.7338 109.484 75.2963 108.935 75.7355 108.294C76.1746 107.652 76.4816 106.929 76.6386 106.167C76.7955 105.405 76.7993 104.62 76.6496 103.856L69.2031 61.5117C69.2047 61.4982 69.2034 61.4846 69.1993 61.4716C69.1952 61.4586 69.1884 61.4466 69.1794 61.4364L68.2478 56.1759C67.5378 51.7243 66.9741 45.9776 68.1252 43.002C69.1063 40.4459 70.9028 39.7746 72.2734 39.7746H94.2342C95.7749 39.7746 97.2525 39.1626 98.3419 38.0732C99.4313 36.9837 100.043 35.5061 100.043 33.9654C100.043 32.4247 99.4313 30.9472 98.3419 29.8577C97.2525 28.7683 95.7749 28.1562 94.2342 28.1562V28.1627Z" />
            </g>
            <defs>
              <clipPath id="clip0_502_26567">
                <rect
                  width="110.159"
                  height="110.159"
                  transform="translate(0.207031 0.625)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          class="border hover:fill-white hover:bg-primary rounded-full p-3 bg-secondary cursor-pointer transition duration-300 w-12 h-12"
          :class="[
            toggleDeitClass ? 'active-tool' : 'inactive-tool',
            toggleDeitClass ? 'stritch-icon' : '',
          ]"
          @click="deitHandler">
          <svg
            width="25"
            height="25"
            viewBox="0 0 109 109"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_502_26558)">
              <path
                d="M20.4367 7.65606H13.9185V108.531H94.6602V7.65606H88.0368V0.875H81.3084V7.65606H67.7463V0.875H61.0178V7.65606H47.4557V0.875H40.7273V7.65606H27.1652V0.875H20.4367V7.65606ZM20.647 101.802V14.3845H87.9317V101.802H20.647ZM34.1039 27.8415V34.57H74.4748V27.8415H34.1039ZM74.4748 88.4505V81.722H34.1039V88.4505H74.4748ZM74.4748 61.484V54.7555H34.1039V61.484H74.4748Z" />
            </g>
            <defs>
              <clipPath id="clip0_502_26558">
                <rect
                  width="107.655"
                  height="107.656"
                  transform="matrix(-1 0 0 1 108.121 0.875)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MenuIcon from "../components/Tools/MenuIcon.vue";
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
      toggleUserSide: false,
      toggleIcons: true,
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
    toggleIconsHandler() {
      this.toggleIcons = !this.toggleIcons;
    },
    toggleUserSideHandler() {
      this.toggleUserSide = !this.toggleUserSide;
    },
  },

  watch: {
    bmrHandler() {
      if (this.toggleTool === "bmr") {
        this.toggleBmrClass = true;
      } else {
        this.toggleBmrClass = false;
      }
    },
  },

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
    MenuIcon,
  },
};
</script>

<style>
.active-tool {
  background-color: rgb(230, 0, 0) !important;
  color: white;
  fill: white;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.55);
}
.inactive-tool {
  background-color: rgba(238, 238, 238, 0.5);
}
.stritch-icon {
  transform: scale(1.1);
  transform-origin: center;
}
.mini-icons {
  transition: 1s;
}
.hide-icons {
  transition: 1s;
  top: 50%;
  z-index: -1;
}
.hide-icons div {
  transform: rotate(360deg);
  position: fixed;
  top: 50%;
  right: 5%;
}
.arrow-class {
  transform: rotate(180deg);
}
@media (max-width: 768px) {
  .hide-user-sidebar {
    position: absolute;
    left: -60%;
    z-index: 10;
  }
  .show-user-sidebar {
    position: absolute;
    left: 0;
    z-index: 10;
    /* box-shadow: 1rem 0px 5px 0px black; */
  }
}
</style>
