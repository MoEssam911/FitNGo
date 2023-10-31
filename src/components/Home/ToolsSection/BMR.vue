<template>
      <RouterLink tag="div" to="/UserProfile" class="flex justify-center lg:col-span-3 md:row-span-2 col-span-12 row-span-1 md:col-span-6 rounded-[40px] object-cover bg-center bg-cover opacity-80 hover:opacity-100 hover:text-primary hover:cursor-pointer group transition-all duration-500 ease-in bg-[url(/src/assets/Images/HomeTools/1.jpg)]">
        <div class="my-gradient self-center w-full h-full rounded-[40px]"></div>
        <div class="self-center absolute flex flex-col  ">
          <svg fill="white" class="w-1/2 h-1/2 self-center md:w-3/4 md:h-3/4 group-hover:fill-primary transition-all duration-200 ease-in" width="204" height="193" viewBox="0 0 204 193" xmlns="http://www.w3.org/2000/svg">
            <path d="M178.5 88.4127H145.01C144.418 88.3368 143.817 88.3368 143.225 88.4127H141.78C141.336 88.652 140.91 88.9201 140.505 89.215C140.032 89.51 139.578 89.8314 139.145 90.1777C138.861 90.5057 138.605 90.8544 138.38 91.2206C137.991 91.7259 137.649 92.2629 137.36 92.8251L123.76 128.204L88.315 37.551C87.7194 36.0022 86.6331 34.6641 85.2035 33.7185C83.774 32.7729 82.0707 32.2656 80.325 32.2656C78.5793 32.2656 76.876 32.7729 75.4465 33.7185C74.0169 34.6641 72.9306 36.0022 72.335 37.551L52.7 88.4127H25.5C23.2457 88.4127 21.0837 89.258 19.4896 90.7624C17.8955 92.2669 17 94.3074 17 96.4351C17 98.5628 17.8955 100.603 19.4896 102.108C21.0837 103.612 23.2457 104.457 25.5 104.457H62.05C62.5331 104.238 62.9892 103.969 63.41 103.655C63.8833 103.36 64.3375 103.039 64.77 102.693L65.535 101.65C65.9401 101.154 66.2825 100.616 66.555 100.045L80.325 63.7039L115.685 155.319C116.279 156.87 117.365 158.21 118.794 159.157C120.224 160.105 121.928 160.613 123.675 160.614C125.422 160.613 127.126 160.105 128.556 159.157C129.985 158.21 131.071 156.87 131.665 155.319L151.215 104.457H178.5C180.754 104.457 182.916 103.612 184.51 102.108C186.104 100.603 187 98.5628 187 96.4351C187 94.3074 186.104 92.2669 184.51 90.7624C182.916 89.258 180.754 88.4127 178.5 88.4127Z"/>
          </svg>
          <p class="self-center relative text-white font-Manrope text-xl font-bold group-hover:text-primary transition-all duration-200 ease-in">BMR Calculator</p>
        </div>
      </RouterLink>
</template>

<style scoped>
.my-gradient {
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))
}
</style>