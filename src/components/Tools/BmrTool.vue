<template>
  <div class="h-auto bg-secondary bg-opacity-50 rounded-3xl p-9">
    <div>
      <h2 class="text-2xl font-bold pb-5">BMR Calculator</h2>
      <form @submit.prevent="fetchAPI">
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="weight"
              type="number"
              name="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="40"
              max="160" />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Weight <span class="text-xs">(kg)</span></label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="height"
              type="number"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="130"
              max="230" />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Height <span class="text-xs">(cm)</span></label
            >
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="age"
              type="number"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="1"
              max="80" />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Age</label
            >
          </div>
          <div class="mt-5">
            <input
              v-model="selectedGender"
              type="radio"
              id="male"
              name="gender"
              value="male"
              class="text-dark text-sm mr-2 accent-primary"
              checked />
            <label for="male" class="font-medium text-dark mr-4"> Male </label>
            <input
              v-model="selectedGender"
              type="radio"
              id="female"
              name="gender"
              value="female"
              class="text-dark text-sm mr-2 accent-primary" />
            <label for="female" class="font-medium text-dark"> Female </label>
          </div>
        </div>
        <div class="m-5 block text-center">
          <button
            class="bg-primary rounded-lg p-2 px-6 text-white font-Manrope text-sm hover:bg-red-800"
            type="submit">
            Calculate
          </button>
        </div>
      </form>
    </div>

    <div class="flex mx-10 font-Manrope text-gray-700 text-md">
      <div class="text-xl" v-if="submitted">
        <h1>
          Your Basic Metablic Rate is
          <span class="font-extrabold text-primary">
            {{ Math.round(result.value.info.bmr) }}</span
          >
        </h1>
      </div>
      <div v-else>
        <p>
          <span class="font-extrabold"
            >* The Basic Metabolic Rate (BMR) Calculator </span
          >estimates your basal metabolic rate—the amount of energy expended
          while at rest in a neutrally temperate environment, and in a
          post-absorptive state (meaning that the digestive system is inactive,
          which requires about 12 hours of fasting).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed, reactive } from "vue";

let age = ref("");
let weight = ref("");
let height = ref("");
let selectedGender = ref("male");
let result = reactive({});
let submitted = ref(false);

const options = computed(() => {
  return {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/bmr",
    params: {
      weight: weight.value,
      height: height.value,
      age: age.value,
      gender: selectedGender.value,
    },
    headers: {
      "X-RapidAPI-Key": "7229adc070msh26d4e2c32a6cd6cp13204ejsn1e0f423a3faa",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };
});

async function fetchAPI() {
  try {
    const response = await axios.request(options.value);
    console.log(response.data);
    console.log(weight.value, height.value, age.value, selectedGender.value);
    result.value = response.data;
    console.log(result);
    submitted.value = true;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped></style>
