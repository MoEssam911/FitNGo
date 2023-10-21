<template>
  <SingleWorkoutDetails :exercise="exercise" />
</template>

<script setup>
import SingleWorkoutDetails from "../components/WorkoutsView/SingleWorkoutDetails.vue";

import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const Route = useRoute();
let exercise = ref({});
let id = Route.params.id;

const options = {
  method: "GET",
  url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
  headers: {
    'X-RapidAPI-Key': '0daf7c767cmsh4df62db306d693cp121d48jsne1b23e6b766aa',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

async function fetchAPI() {
  try {
    const response = await axios.request(options);
    exercise.value = response.data;
    console.log(exercise);
    console.log(id);
    console.log(Route)
  } catch (error) {
    console.error(error);
  }
}

fetchAPI();
</script>

<style scoped></style>
