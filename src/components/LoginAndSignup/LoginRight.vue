<template>
  <div class="flex justify-center items-center parent h-full">
    <div class="w-8/12 mx-auto text-center my-20">
      <div>
        <i class="fa-solid fa-dumbbell rotate-[60deg] text-2xl text-white md:block hidden"></i>
      </div>
      <h2 class="text-3xl font-bold text-center my-6 text-white md:block hidden">Welcome back, champ!</h2>
      <p class=" text-white my-6 md:block hidden text-justify">
        Don’t give up on your fitness goals. Consistency will help you overcome any obstacle and achieve any challenge.
      </p>
      <button
        class="border border-white rounded-xl bg-primary text-white py-2 w-full block mx-auto hover:bg-white hover:text-black mt-4"
        @click="change">
        Sign up
      </button>
  </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "LoginRight",
  inject: ["test", "change"],
};
</script>

<style scoped>
.parent{
  min-height: 635px;
}
</style>
