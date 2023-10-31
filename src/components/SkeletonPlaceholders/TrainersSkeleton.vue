<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10 container">
    <template v-for="i in 12">
      <div
        class="flex flex-col justify-between items-center max-w-sm rounded-3xl shadow h-fit w-52">
        <div class="flex items-center justify-center h-64 w-5/6 m-4 bg-slate-300 rounded animate-pulse">
          <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.   org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0   .936-.57   .9   .632l   .541   .883   .879   .031Z"/>
              <path d="M5   .13   .879   .13Z"/>
          </svg>
        </div>

          <BaseSkeleton class="mb-2 w-3/4 rounded-lg h-4"/>
          <BaseSkeleton class="mb-2 w-2/4 rounded-lg h-4"/>
        
          <BaseSkeleton class="rounded-md w-5/12 h-8 m-4"/>

      </div>
    </template>
  </div>
</template>

<script setup>
import BaseSkeleton from "./BaseSkeleton.vue";
</script>
