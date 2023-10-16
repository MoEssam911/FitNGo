<template>
  <div class="relative">
    <img class="w-full h-screen object-cover" src="../assets/Images/HomeBanner/lifting-banner.png" alt="" style="height: calc(100vh - 80px);">
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-4xl text-white animate-fade-in" style="transition-delay:800ms;">Hello, world!</h1>
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
  }
</style>
