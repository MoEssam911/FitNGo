<template>
        <div
          class="flex flex-col justify-between items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full">
          <img class="rounded-t-lg" :src="exercise.gifUrl" />
          <div>
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 font-Manrope text-center">
              {{ exercise.name }}
            </h5>
            <p
              class="mb-3 text-center font-medium text-medium text-gray-700 font-Manrope">
              Target Muscle(s): {{ exercise.target }}
            </p>
          </div>

          <div class="p-5">
            <RouterLink
              :to="`workouts/${exercise.id}`"
              class="inline-flex items-center px-3 py-2 text-sm font-Manrope font-medium text-center text-white bg-primary rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
              Show Exercise
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </RouterLink>
          </div>
        </div>
</template>

<script>
export default {
  props: ['exercise']
}
</script>