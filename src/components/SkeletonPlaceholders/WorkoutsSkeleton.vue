<template>
  <div class="container flex flex-col mt-20">

    <div class="m-5 flex gap-1">
      <BaseSkeleton class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-14 rounded-l-lg "/>
    <div class="relative w-full">
      <BaseSkeleton class="block p-2.5 w-full z-20 rounded-r-lg"/>
        <div class="absolute top-0 right-0 p-2.5 h-full rounded-r-lg animate-pulse">
        <svg
          class="w-4 h-4 opacity-30"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>

      </div>
    </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      <template v-for="i in 12">
        <div
          class="flex flex-col justify-between items-center max-w-sm rounded-lg shadow h-full">
          <div class="flex items-center justify-center h-52 w-5/6 m-4 bg-slate-300 rounded animate-pulse">
            <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.   org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            </svg>
          </div>

            <BaseSkeleton class="mb-2 w-3/4 rounded-lg h-4"/>
            <BaseSkeleton class="mb-2 w-2/4 rounded-lg h-4"/>
            <BaseSkeleton class="mb-2 w-3/4 rounded-lg h-3 opacity-40"/>
          
            <BaseSkeleton class="rounded-2xl w-4/6 h-8 m-4"/>

        </div>
      </template>
    </div>

  </div>
</template>









<script setup>
import BaseSkeleton from './BaseSkeleton.vue'
</script>