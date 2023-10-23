<template>
  <div
    v-if="exercise"
    class="container grid grid-cols-12 bg-gray-50 text-gray-600 space-y-4">
    <div class="col-span-12 md:col-span-6">
      <img
        class="object-fit object-center h-full aspect-w-16 aspect-h-9"
        :src="exercise.gifUrl" />
    </div>
    <div class="p-4 col-span-12 md:col-span-6">
      <h1 class="font-Manrope text-4xl font-extrabold p-5 text-gray-800">
        {{ exercise.name }}
      </h1>
      <h2 class="font-Manrope text-2xl font-semibold pl-5 space-x-2">
        Target Muscle(s): {{ exercise.target }}
      </h2>
      <h2 class="font-Manrope text-xl font-semibold pl-5 space-x-2">
        Secondary Muscles:
      </h2>

      <template v-for="muscle,index in exercise.secondaryMuscles" :key="index">
        <h3 class="text-lg pl-6">{{ muscle }}</h3>
      </template>

      <h3 class="font-Manrope text-xl font-semibold pl-5 space-x-2">
        Body part: {{ exercise.bodyPart }}
      </h3>
      <h3 class="font-Manrope text-xl font-semibold pl-5 space-x-2">
        Equipment: {{ exercise.equipment }}
      </h3>
    </div>
    <div class="col-span-12">
      <h4 class="font-Manrope text-2xl font-semibold">Instructions:</h4>
      <ol class="p-5 list-decimal list-inside">
        <li
          v-for="(instruction, index) in exercise.instructions"
          :key="index"
          class="font-Manrope text-lg">
          {{ instruction }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";


const Route = useRoute();
let exercise = ref({});
let id = Route.params.id;

const options = {
  method: "GET",
  url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
  headers: {
    "X-RapidAPI-Key": "7229adc070msh26d4e2c32a6cd6cp13204ejsn1e0f423a3faa",
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
