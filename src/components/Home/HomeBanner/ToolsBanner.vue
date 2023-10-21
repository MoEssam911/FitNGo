<template>

  <div class="relative font-Manrope">

    <div class="mt-[80px]" style="height: calc(100vh - 80px);">
    <img class="w-full h-full object-center object-coverz" src="../../../assets/Images/HomeBanner/tools-banner.jpg" >
    </div>

    <div style="transition-delay:1s; opacity:0;" class="absolute inset-0 flex  justify-center animate-fade-in flex-col mt-52  bg-black bg-opacity-25 h-2/4">
      <div class="ml-20">
        <h1 class="text-3xl font-bold uppercase text-white">
        Gain more. New sizes, New prices.
      </h1>
      <h3 class="text-white text-lg text-left mt-1">
        Life gets easier with teh right tools.
      </h3>
      <div class="flex gap-3 mt-3">
        <button class="bg-primary rounded-lg px-3 py-1 text-center text-white hover:bg-red-800 text-sm font-medium">Start Now</button>
      </div>
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