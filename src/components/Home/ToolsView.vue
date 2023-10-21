<template>
  <section class="container mt-12">
    <h1 class="text-primary text-3xl font-Manrope font-bold">Tools</h1>

    <div class=" grid grid-cols-12 grid-rows-4 w-full h-[40rem] gap-4 p-4">

    <div class="col-span-6 lg:row-span-4 rounded-[40px] hidden lg:block relative">
      <img src="../../assets/Images/HomeTools/0.jpg" alt="treadmill" class="object-cover h-full w-full rounded-[40px]">
      <div class=" my-gradient absolute inset-0 opacity-100 rounded-[40px]"></div>
      <div class="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold font-Manrope text-center whitespace-nowrap">Start Calculating Now</div>
      <div class="absolute top-[31rem] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-opacity-80 text-3xl font-bold font-Manrope text-center mt-4">
        <button class="w-36 h-9 btn-primary-hover">
          Start Now
        </button>
      </div>
    </div>

    <div class="flex justify-center lg:col-span-3 md:row-span-2 col-span-12 row-span-1 md:col-span-6 rounded-[40px] object-cover bg-center bg-cover opacity-80 hover:opacity-100 hover:text-primary hover:cursor-pointer group transition-all duration-500 ease-in bg-[url(/src/assets/Images/HomeTools/1.jpg)]">
      <div class="my-gradient self-center w-full h-full rounded-[40px]"></div>
      <div class="self-center absolute flex flex-col">
        <svg fill="white" class="w-1/2 h-1/2 self-center md:w-3/4 md:h-3/4 group-hover:fill-primary" width="204" height="193" viewBox="0 0 204 193" xmlns="http://www.w3.org/2000/svg">
          <path d="M178.5 88.4127H145.01C144.418 88.3368 143.817 88.3368 143.225 88.4127H141.78C141.336 88.652 140.91 88.9201 140.505 89.215C140.032 89.51 139.578 89.8314 139.145 90.1777C138.861 90.5057 138.605 90.8544 138.38 91.2206C137.991 91.7259 137.649 92.2629 137.36 92.8251L123.76 128.204L88.315 37.551C87.7194 36.0022 86.6331 34.6641 85.2035 33.7185C83.774 32.7729 82.0707 32.2656 80.325 32.2656C78.5793 32.2656 76.876 32.7729 75.4465 33.7185C74.0169 34.6641 72.9306 36.0022 72.335 37.551L52.7 88.4127H25.5C23.2457 88.4127 21.0837 89.258 19.4896 90.7624C17.8955 92.2669 17 94.3074 17 96.4351C17 98.5628 17.8955 100.603 19.4896 102.108C21.0837 103.612 23.2457 104.457 25.5 104.457H62.05C62.5331 104.238 62.9892 103.969 63.41 103.655C63.8833 103.36 64.3375 103.039 64.77 102.693L65.535 101.65C65.9401 101.154 66.2825 100.616 66.555 100.045L80.325 63.7039L115.685 155.319C116.279 156.87 117.365 158.21 118.794 159.157C120.224 160.105 121.928 160.613 123.675 160.614C125.422 160.613 127.126 160.105 128.556 159.157C129.985 158.21 131.071 156.87 131.665 155.319L151.215 104.457H178.5C180.754 104.457 182.916 103.612 184.51 102.108C186.104 100.603 187 98.5628 187 96.4351C187 94.3074 186.104 92.2669 184.51 90.7624C182.916 89.258 180.754 88.4127 178.5 88.4127Z"/>
        </svg>
        <p class="self-center relative text-white font-Manrope text-xl font-bold group-hover:text-primary">BMR Calculator</p>
      </div>
    </div>
   
    <div class="flex justify-center lg:col-span-3 md:row-span-2 col-span-12 row-span-1 md:col-span-6  rounded-[40px] bg-[url(/src/assets/Images/HomeTools/2.jpg)] object-cover bg-center bg-cover opacity-80 hover:opacity-100 hover:text-primary hover:cursor-pointer group transition-all duration-500 ease-in">
      <div class="my-gradient self-center w-full h-full rounded-[40px]"></div>
      <div class="self-center absolute flex flex-col">
        <svg width="190" height="195" viewBox="0 0 230 218" fill="white" class="w-1/2 h-1/2 self-center md:w-3/4 md:h-3/4 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
      <path d="M112.001 108.536L123.846 35.4085C119.93 34.8263 115.973 34.5157 112.008 34.4791C68.6605 34.4791 33.5352 67.6375 33.5352 108.536C33.5352 149.441 68.6677 182.593 112.001 182.593C155.335 182.593 190.467 149.434 190.467 108.536C190.467 106.799 190.323 105.097 190.194 103.38L112.001 108.536ZM139.702 21.7734L127.857 94.9008L206.042 89.7453C204.799 72.9916 197.554 57.1355 185.497 44.7829C173.441 32.4303 157.291 24.3159 139.702 21.7734Z"/>
      </svg>
        <p class="self-center relative text-white font-Manrope text-xl font-bold group-hover:text-primary">Macro Calculator</p>
      </div>
    </div>

    <div class="flex justify-center lg:col-span-3 md:row-span-2 col-span-12 row-span-1 md:col-span-6 rounded-[40px] bg-[url(/src/assets/Images/HomeTools/3.jpg)] object-cover bg-center bg-cover opacity-80 hover:opacity-100 hover:text-primary hover:cursor-pointer group transition-all duration-500 ease-in">
      <div class="my-gradient self-center w-full h-full rounded-[40px]"></div>
      <div class="self-center absolute flex flex-col">  
        <svg fill="white" class="w-1/2 h-1/2 self-center md:w-3/4 md:h-3/4 group-hover: fill-primary" width="172" height="164" viewBox="0 0 172 164" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_639_1156)">
          <path d="M31.9141 11.1627H21.5V163.272H150.5V11.1627H139.918V0.9375H129.168V11.1627H107.5V0.9375H96.75V11.1627H75.082V0.9375H64.332V11.1627H42.6641V0.9375H31.9141V11.1627ZM32.25 153.126V21.3086H139.75V153.126H32.25ZM53.75 41.6005V51.7464H118.25V41.6005H53.75ZM118.25 132.993V122.847H53.75V132.993H118.25ZM118.25 92.3301V82.1842H53.75V92.3301H118.25Z" fill="white" class="group-hover:fill-primary"/>
          </g>
          <defs>
          <clipPath id="clip0_639_1156">
          <rect width="172" height="162.335" fill="white" transform="matrix(-1 0 0 1 172 0.9375)"/>
          </clipPath>
          </defs>
          </svg>
          <p class="self-center relative text-white font-Manrope text-xl font-bold group-hover:text-primary pt-5">Diet Plan</p>
      </div>
    </div>

    <div class=" flex justify-center lg:col-span-3 md:row-span-2 col-span-12 row-span-2 md:col-span-6  rounded-[40px] bg-[url(/src/assets/Images/HomeTools/4.jpg)] object-cover bg-center bg-cover opacity-80 hover:opacity-100 hover:text-primary hover:cursor-pointer group transition-all duration-500 ease-in">
      <div class="my-gradient self-center w-full h-full rounded-[40px]"></div>
      <div class="self-center absolute flex flex-col">
        <svg fill="white" class="w-1/2 h-1/2 self-center md:w-3/4 md:h-3/4 group-hover:fill-primary" width="176" height="167" viewBox="0 0 176 167"  xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_639_2359)">
        <path fill="white" class="group-hover:fill-primary" d="M88 36.3288C98.6315 36.3288 107.25 28.1945 107.25 18.1605C107.25 8.12641 98.6315 -0.0078125 88 -0.0078125C77.3685 -0.0078125 68.75 8.12641 68.75 18.1605C68.75 28.1945 77.3685 36.3288 88 36.3288Z" />
        <path fill="white" class="group-hover:fill-primary" d="M150.219 41.5215H25.7812C23.3197 41.5215 20.959 42.4443 19.2184 44.0871C17.4778 45.7299 16.5 47.9579 16.5 50.2812C16.5 52.6044 17.4778 54.8325 19.2184 56.4752C20.959 58.118 23.3197 59.0409 25.7812 59.0409H60.8025C63.1778 59.0409 65.9588 60.0434 67.5331 63.9074C69.3722 68.3943 68.4716 77.0599 67.3372 83.7725L65.8522 91.7049C65.855 91.7255 65.8527 91.7465 65.8455 91.7662C65.8384 91.7858 65.8265 91.8037 65.8109 91.8184L53.9172 155.67C53.4859 157.988 54.0448 160.373 55.4717 162.303C56.8987 164.232 59.0774 165.55 61.5312 165.968C62.7444 166.17 63.9881 166.143 65.1902 165.888C66.3922 165.634 67.5286 165.156 68.5335 164.483C69.5383 163.81 70.3915 162.956 71.0436 161.969C71.6956 160.983 72.1335 159.884 72.3319 158.736L80.5509 114.354C80.5509 114.354 83.1875 103.813 88 103.813C92.8916 103.813 95.4731 114.354 95.4731 114.354L103.692 158.775C103.891 159.933 104.332 161.042 104.989 162.037C105.647 163.032 106.508 163.894 107.522 164.572C108.535 165.25 109.682 165.731 110.895 165.986C112.108 166.242 113.362 166.267 114.586 166.06C115.809 165.854 116.976 165.419 118.02 164.782C119.063 164.146 119.962 163.319 120.664 162.351C121.365 161.383 121.856 160.293 122.106 159.144C122.357 157.996 122.363 156.811 122.124 155.66L110.227 91.8087C110.229 91.7883 110.227 91.7677 110.221 91.7481C110.214 91.7285 110.203 91.7105 110.189 91.6951L108.701 83.7627C107.566 77.0502 106.666 68.3846 108.505 63.8976C110.072 60.0434 112.942 59.0311 115.132 59.0311H150.219C152.68 59.0311 155.041 58.1082 156.782 56.4655C158.522 54.8227 159.5 52.5946 159.5 50.2714C159.5 47.9482 158.522 45.7201 156.782 44.0774C155.041 42.4346 152.68 41.5117 150.219 41.5117V41.5215Z"/>
        </g>
        <defs>
        <clipPath id="clip0_639_2359">
        <rect width="176" height="166.11" fill="white" class="group-hover:fill-primary" transform="translate(0 -0.0078125)"/>
        </clipPath>
        </defs>
        </svg>
        <p class="self-center relative text-white font-Manrope text-xl font-bold group-hover:text-primary pt-4">Body Fat Calculator</p>
      </div>
    </div>

    </div>
  </section>

</template>

<script setup>

</script>

<style  scoped>
.my-gradient {
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))
}
</style>