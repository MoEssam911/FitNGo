<template>
  <div class="flex justify-center items-center parent">
    <div class="w-8/12 mx-auto text-center my-20">
    <div>
      <i class="fa-solid fa-dumbbell rotate-[60deg] text-2xl text-white"></i>
    </div>
    <h2 class="text-3xl font-bold text-center my-6 text-white">Let's Start</h2>
    <p class="text-left text-white my-6">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      molestias. Impedit voluptate laboriosam vero, dolor provident, voluptates
      amet cupiditate tenetur minima repudiandae eius? Dolores dolor ad error
      assumenda nam repellat!
    </p>
    <button
      class="border border-white rounded-xl bg-primary text-white py-2 w-full block mx-auto hover:bg-white hover:text-black mt-4"
      @click="change">
      Sign up now
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
