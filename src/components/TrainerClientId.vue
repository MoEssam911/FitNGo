<template>
  <div
    class="flex flex-col  bg-secondary m-4 rounded-xl w-8/12 md:w-9/12 lg:w-9/12"
  >
    <div class="text-black flex justify-between">
      <h1 class="text-l font-bold p-2 float-left">Selim Mohamed</h1>
      <div class="flex flex-col p-2">
      <div class="text-sm font-bold hover:text-primary transition-all duration-200 cursor-pointer" @click="ClientWPlan">Client Workouts Plans</div>
      <div class="text-sm font-bold hover:text-primary transition-all duration-200 cursor-pointer" @click="ClientDPlan">Client Diet Plans</div>
    </div>
    </div>

    <div class="w-full flex flex-col justify-center items-center">
      <img
        src="../assets/Images/selim.jpeg"
        class="md:ml-44 lg:ml-96 w-52 h-52 rounded-full object-cover"
      />
      <h1 class="text-center text-xl mt font-bold text-primary">Selim Mohamed</h1>
    </div>

   
  </div>
</template>

<script>
export default {
  name: "TrainerClientSpecfic",
  inject:['ClientWPlan',"ClientDPlan"],

};
</script>

<style lang="scss" scoped></style>
