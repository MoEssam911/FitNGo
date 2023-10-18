<template>
  <!-- <main class="container">
    <div class="mt-28 flex gap-9">
      <aside class="w-3/12">
        <UserSideBar class="w-full"></UserSideBar>
      </aside>
      <section class="flex gap-3 w-full">
        <BmrIcon class="w-full"></BmrIcon>
        <MacroIcon class="w-full"></MacroIcon>
        <BodyFatIcon class="w-full"></BodyFatIcon>
        <DeitIcon class="w-full"></DeitIcon>
      </section>
    </div>
  </main> -->
  <main class="container">
    <div class="mt-28 flex gap-9">
      <aside class="w-3/12">
        <UserSideBar class="w-full"></UserSideBar>
      </aside>
      <section class="grid grid-cols-12 gap-3 w-full">
        <!-- Tools Icons -->
        <BmrIcon @click="toggleTool = 'bmr'" class="col-span-3"></BmrIcon>
        <MacroIcon
          @click="toggleTool = 'macro'"
          class="col-span-3"
          :class="{
            'active-tool': toggleTool === 'macro',
            'inactive-tool': toggleTool !== 'macro'
          }"></MacroIcon>
        <BodyFatIcon
          @click="toggleTool = 'bodyFat'"
          class="col-span-3"></BodyFatIcon>
        <DeitIcon @click="toggleTool = 'deit'" class="col-span-3"></DeitIcon>

        <!-- Tools Components -->
        <BmrTool v-if="toggleTool === 'bmr'" class="col-span-12"></BmrTool>
        <MacroCalculatorTool
          v-else-if="toggleTool === 'macro'"
          class="col-span-12"></MacroCalculatorTool>
        <BodyFatTool
          v-else-if="toggleTool === 'bodyFat'"
          class="col-span-12"></BodyFatTool>
        <DietPlanTool
          v-else-if="toggleTool === 'deit'"
          class="col-span-12"></DietPlanTool>
      </section>
    </div>
  </main>
</template>

<script>
import UserSideBar from "../components/Tools/UserSideBar.vue";
import BmrIcon from "../components/Tools/BmrIcon.vue";
import MacroIcon from "../components/Tools/MacroIcon.vue";
import BodyFatIcon from "../components/Tools/BodyFatIcon.vue";
import DeitIcon from "../components/Tools/DeitIcon.vue";
import MacroCalculatorTool from "../components/Tools/MacroCalculatorTool.vue";
import BmrTool from "../components/Tools/BmrTool.vue";
import DietPlanTool from "../components/Tools/DietPlanTool.vue";
import BodyFatTool from "../components/Tools/BodyFatTool.vue";

export default {
  name: "Tools",
  data() {
    return {
      toggleTool: "macro",
    };
  },
  methods: {
    loog() {
      console.log(this.toggleTool);
    },
  },
  components: {
    UserSideBar,
    BmrIcon,
    MacroIcon,
    BodyFatIcon,
    DeitIcon,
    MacroCalculatorTool,
    DietPlanTool,
    BodyFatTool,
    BmrTool,
  },
};
</script>

<style scoped>
  .active-tool {
    background-color: red;
    color: white;
  }
  .inactive-tool {
    background-color: green;
  }
</style>
