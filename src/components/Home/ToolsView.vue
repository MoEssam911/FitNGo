<template>
  <section class="container mt-12">
    <h1 class="text-primary text-3xl font-Manrope font-bold">Tools</h1>

    <div class=" grid grid-cols-12 grid-rows-4 w-full h-[40rem] gap-4 p-4">


      <MainBanner />
      <BMR />
      <Macro />
      <DietPlan />
      <BodyFat />

    </div>
  </section>

</template>

<script setup>
import MainBanner from './ToolsSection/MainBanner.vue'
import BMR from './ToolsSection/BMR.vue'
import BodyFat from './ToolsSection/BodyFat.vue'
import DietPlan from './ToolsSection/DietPlan.vue'
import Macro from './ToolsSection/Macro.vue'
</script>

<style  scoped>
.my-gradient {
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))
}
</style>