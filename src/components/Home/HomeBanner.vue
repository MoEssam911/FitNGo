<template>
  <div class="bg-black z-50 sticky">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <component :is="currentSlide" />
      </transition>
    </keep-alive>
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
      slides: [
        'LiftingBanner',
        'ShopBanner',
        'ToolsBanner'
      ],
      currentIndex: 0
    }
  },

  computed: {
    currentSlide() {
      return this.slides[this.currentIndex]
    }
  },

  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    }, 4000);
  }
}
</script>

<style scoped>

.fade-enter-active {
   transition: opacity 1s ease-in-out; 
}

.fade-enter-from, .fade-leave-to {
   opacity: 0.8;
}

.fade-enter-to, .fade-leave-from {
   opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
</style>
