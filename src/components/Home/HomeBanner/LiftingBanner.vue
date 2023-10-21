<template>

    <div class="relative font-Manrope">

      <img class="w-full min-h-screen object-cover" src="../../../assets/Images/HomeBanner/lifting-banner.jpg" style="height: calc(100vh - 80px);">
      
      <div style="transition-delay:1s; opacity:0;" class="absolute inset-0 flex  justify-center animate-fade-in flex-col mt-52 ml-20">
      <h1 class="text-3xl font-bold uppercase text-white">
        Here is an opportunity  to get in shape <br>
        with the best trainers in egypt.
      </h1>
      <h3 class="text-white text-lg text-left mt-1">
        Choose your trainer and start now.
      </h3>
      <div class="flex gap-3 mt-3">
        <button class="bg-primary rounded-lg px-3 py-1 text-center text-white hover:bg-red-800 text-sm font-medium">Start Now</button>
        <button class="border-white border-2 px-2 py-1 text-white rounded-lg">Learn More</button>
      </div>
      </div>

    </div>

</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 600ms;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
}
</style>