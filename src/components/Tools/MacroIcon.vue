<template>
  <div>
    <div
      class="group transition duration-300  bg-secondary bg-opacity-50 rounded-3xl hover:bg-primary hover:cursor-pointer flex flex-col justify-center items-center py-4"
      :class="toggleMacroClass ? 'active-tool' : 'inactive-tool'">
      <div class="group-hover:fill-white">
        <svg
          width="100"
          height="100"
          viewBox="0 0 145 145"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M70.4129 72.3274L77.8268 23.8314C75.3754 23.4453 72.899 23.2393 70.4174 23.2151C43.2859 23.2151 21.3008 45.2048 21.3008 72.3274C21.3008 99.4545 43.2904 121.44 70.4129 121.44C97.5355 121.44 119.525 99.45 119.525 72.3274C119.525 71.1757 119.435 70.0466 119.354 68.9084L70.4129 72.3274ZM87.7509 14.7891L80.337 63.285L129.274 59.866C128.495 48.7555 123.961 38.2402 116.415 30.0483C108.869 21.8564 98.7603 16.4752 87.7509 14.7891Z" />
        </svg>
      </div>
      <p class="font-Manrope font-bold group-hover:text-white">
        Macro Calculator
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    toggleMacroClass: Boolean,
  },
};
</script>

<style scoped>


</style>
