<template>
  <div class="bg-black">
    <transition-group name="fade" appear>

      <LiftingBanner v-show="showFirst" key="first" />

      <ShopBanner v-show="showSecond" key="second" />

      <ToolsBanner v-show="!showFirst && !showSecond" key="third" />

  </transition-group>
  </div>

</template>

<script>
import LiftingBanner from './HomeBanner/LiftingBanner.vue'
import ShopBanner from './HomeBanner/shopBanner.vue'
import ToolsBanner from './HomeBanner/ToolsBanner.vue'

export default {
  components: {
    LiftingBanner,
    ShopBanner,
    ToolsBanner
  },

  data() {
    return {
      showFirst: true,
      showSecond: false,
    };
  },

  mounted() {
    setInterval(() => {
      if (this.showFirst) {
        this.showFirst = false;
        this.showSecond = true;

      }
      else if (this.showSecond) {
         this.showSecond = false; 
          this.showFirst = false;
      }
      else {
        this.showFirst = true;
      }
      
    }, 3000);
  },
};
</script>

<style scoped>

.fade-enter-from {
   opacity: 65%; 
}

.fade-enter-to {
   opacity: 100%; 
} 
.fade-enter-active {
   transition: all 1s ease-in; 
}

 
</style>
