<template>
    <RouterLink tag="div" to="/UserProfile" class="flex justify-center lg:col-span-3 md:row-span-2 col-span-12 row-span-1 md:col-span-6  rounded-[40px] bg-[url(/src/assets/Images/HomeTools/2.jpg)] object-cover bg-center bg-cover opacity-80 hover:opacity-100 hover:text-primary hover:cursor-pointer group transition-all duration-500 ease-in">
      <div class="my-gradient self-center w-full h-full rounded-[40px]"></div>
      <div class="self-center absolute flex flex-col">
        <svg width="190" height="195" viewBox="0 0 230 218" fill="white" class="w-1/2 h-1/2 self-center md:w-3/4 md:h-3/4 group-hover:fill-primary transition-all duration-200 ease-in" xmlns="http://www.w3.org/2000/svg">
      <path d="M112.001 108.536L123.846 35.4085C119.93 34.8263 115.973 34.5157 112.008 34.4791C68.6605 34.4791 33.5352 67.6375 33.5352 108.536C33.5352 149.441 68.6677 182.593 112.001 182.593C155.335 182.593 190.467 149.434 190.467 108.536C190.467 106.799 190.323 105.097 190.194 103.38L112.001 108.536ZM139.702 21.7734L127.857 94.9008L206.042 89.7453C204.799 72.9916 197.554 57.1355 185.497 44.7829C173.441 32.4303 157.291 24.3159 139.702 21.7734Z"/>
      </svg>
        <p class="self-center relative text-white font-Manrope text-xl font-bold group-hover:text-primary transition-all duration-200 ease-in">Macro Calculator</p>
      </div>
    </RouterLink>
</template>


<style scoped>
.my-gradient {
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))
}
</style>