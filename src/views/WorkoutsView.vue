<template>
  <template v-if="exerciseDb.length === 0">
      <WorkoutsSkeleton/>
  </template>
  <template v-else>
  <!-- <WorkoutsBanner /> -->
  <div class="container flex flex-col mt-20">
    <FilterSearch :data="searchValues" @update="handleUpdate"/>
    <WorkoutsList :exercises="exercises"/>
    <LoadMoreBtn :load-more="loadMore" @click="loadMore"/>
  </div>
  </template>
</template>

<script setup>
  import WorkoutsBanner from '../components/WorkoutsView/WorkoutsBanner.vue'
  import FilterSearch from '../components/WorkoutsView/FilterSearch.vue'
  import WorkoutsList from '../components/WorkoutsView/WorkoutsList.vue'
  import LoadMoreBtn from '../components/WorkoutsView/LoadMoreBtn.vue'

  import WorkoutsSkeleton from '../components/SkeletonPlaceholders/WorkoutsSkeleton.vue'

  import axios from 'axios'
  import { ref, computed } from 'vue'

  let exerciseDb = ref([]);
  const searchValues = ref({
      bodyPart: "",
      searchQuery: "",
    })

    const handleUpdate = (newValues) => {
      searchValues.value = newValues;
      console.log(searchValues.value)
    }

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: { limit: "1300" },
  headers: {

    'X-RapidAPI-Key': '0daf7c767cmsh4df62db306d693cp121d48jsne1b23e6b766a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

async function fetchAPI() {
  try {
    const response = await axios.request(options);
    exerciseDb.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

setTimeout(fetchAPI, 1000)
let currentIndex = ref(0);
let exercises = computed(() => {
  return exerciseDb.value
    .filter((exercise) =>
      exercise.name.toLowerCase().includes(searchValues.value.searchQuery.toLowerCase())
    )
    .filter(
      (exercise) =>
      searchValues.value.bodyPart === "" ||
        exercise.bodyPart.toLowerCase() === searchValues.value.bodyPart.toLowerCase()
    )
    .slice(0, currentIndex.value + 12);
});

const loadMore = () => {
  currentIndex.value += 12;
};

</script>

<style scoped></style>
