<template>
  <template v-if="flag === true">
    <div class="container flex lg:flex-wrap justify-center items-center">
      <div class="lg:w-6/12 md:w-full sm:w-full">
        <img
          src="../assets/Images/trainercards/trainer-banner-redcircle.png"
          alt=""
        />
      </div>
      <div class="lg:w-6/12 md:w-12/12 sm:w-full">
        <h2 class="text-2xl font-bold">
          HERE IS AN OPPORTUNITY TO GET IN SHAPE WITH THE BEST TRAINERS IN EGYPT
        </h2>
        <h2 class="text-lg">Choose Your Trainer And Start Now</h2>
        <button
          class="w-36 h-9 btn-primary-hover text-white transition duration-150 mt-7"
        >
          Start Now
        </button>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex container justify-center items-center">
      <div
        class="flex items-center justify-center h-80 w-80 m-4 bg-slate-300 animate-pulse rounded-full"
      >
        <svg
          class="w-40 h-40 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.   org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path
            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0   .936-.57   .9   .632l   .541   .883   .879   .031Z"
          />
          <path d="M5   .13   .879   .13Z" />
        </svg>
      </div>
      <div class="flex flex-col flex-grow gap-3">
        <BaseSkeleton class="rounded-xl w-5/6 h-6" />
        <BaseSkeleton class="rounded-xl w-5/6 h-6" />
        <BaseSkeleton class="rounded-xl w-2/12 h-6" />
        <BaseSkeleton class="rounded-xl w-3/6 h-4 opacity-60" />

        <div
          class="w-36 h-9 bg-slate-300 rounded-xl mt-7"
        >
      </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";
import BaseSkeleton from "./SkeletonPlaceholders/BaseSkeleton.vue";

const flag = ref(false);
setTimeout(() => {
  flag.value = true;
}, 1000);
</script>
