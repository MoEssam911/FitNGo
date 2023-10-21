<template>
  <div>
  <div class="flex relative">
    <img
      class="w-full h-32 object-cover"
      src="../assets//Images/workoutsBanner.jpg" />
    <p
      class="absolute inset-0 flex items-center justify-center font-Manrope text-white text-6xl font-extrabold">
      Workouts
    </p>
  </div>

  <div class="container flex flex-col">
    <div class="m-5 flex">
      <select
        v-model="bodyPart"
        id="small"
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:border-primary"
        placeholder="All Exercises">
        <option value="" selected disabled hidden>All Exercises</option>
        <option value="back">Back</option>
        <option value="chest">Chest</option>
        <option value="upper arms">Upper Arms</option>
        <option value="lower arms">Lower Arms</option>
        <option value="upper legs">Upper Legs</option>
        <option value="lower legs">Lower Legs</option>
        <option value="cardio">Cardio</option>
      </select>
      <div class="relative w-full">
        <input
          v-model="searchQuery"
          type="search"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary"
          placeholder="Search by Exercise name ..." />
        <button
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      <div v-for="(exercise, index) in exercises" :key="index">
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
      </div>
      
    </div>

    <button
      @click="loadMore"
      class="btn-more-to-explore w-40 h-12 self-center m-5">
      More To Explore
    </button>
  </div>
  </div>
</template>

<script setup>

  import axios from 'axios'
  import { ref, computed } from 'vue'

  let exerciseDb = ref([]);
  let searchQuery = ref('');
  let bodyPart = ref('');

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: { limit: "1300" },
  headers: {

    'X-RapidAPI-Key': '0daf7c767cmsh4df62db306d693cp121d48jsne1b23e6b766aa',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

async function fetchAPI() {
  try {
    const response = await axios.request(options);
    exerciseDb.value = response.data;
    console.log(exerciseDb);
  } catch (error) {
    console.error(error);
  }
}

fetchAPI();

let currentIndex = ref(0);
let exercises = computed(() => {
  return exerciseDb.value
    .filter((exercise) =>
      exercise.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    .filter(
      (exercise) =>
        bodyPart.value === "" ||
        exercise.bodyPart.toLowerCase() === bodyPart.value.toLowerCase()
    )
    .slice(0, currentIndex.value + 12);
});

const loadMore = () => {
  currentIndex.value += 12;
};
</script>

<style scoped></style>
