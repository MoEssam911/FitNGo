<template>
  <section>
    <div class="bg-secondary  rounded-3xl h-auto p-9 mb-9">
      <div>
      <h2 class="text-2xl font-bold pb-5">Body Fat Calculator</h2>
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
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="waist"
                type="number"
                name="floating_company"
                id="floating_company"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                min="40"
                max="130" />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Waist <span class="text-xs">(40cm to 130cm)</span></label
              >
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="neck"
                type="number"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                min="20"
                max="80" />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Neck <span class="text-xs">(20cm to 80cm)</span></label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="hip"
                type="number"
                name="floating_company"
                id="floating_company"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                min="40"
                max="130" />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Hip <span class="text-xs">(40cm to 130cm)</span></label
              >
            </div>
          </div>
          <div class="relative w-full mb-6 group">
            <div class="mt-5">
              <input
                v-model="selectedGender"
                type="radio"
                id="male"
                name="gender"
                value="male"
                class="text-dark text-sm mr-2 accent-primary"
                checked />
              <label for="male" class="font-medium text-dark mr-4">
                Male
              </label>
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

      <div class="flex font-Manrope text-gray-700 text-md">
        <div class="text-xl" v-if="submitted">
          <h1>
            Body Fat Calculator
            <h2 class="font-extrabold">Body Fat (BMI method)</h2>
            <span class="font-extrabold text-primary">
              {{ result.value.data["Body Fat (BMI method)"] }}%
            </span>
          </h1>
          <h1>
            <h2 class="font-extrabold">Body Fat (U.S. Navy Method)</h2>
            <span class="font-extrabold text-primary">
              {{ result.value.data["Body Fat (U.S. Navy Method)"] }}%
            </span>
          </h1>
          <h1>
            <h2 class="font-extrabold">Body Fat Mass</h2>
            <span class="font-extrabold text-primary">
              {{ result.value.data["Body Fat Mass"] }}kgs
            </span>
          </h1>
          <h1>
            <h2 class="font-extrabold">Lean Body Mass</h2>
            <span class="font-extrabold text-primary">
              {{ result.value.data["Lean Body Mass"] }}kgs
            </span>
          </h1>
        </div>
        <div v-else>
          <p class="">
            <span class="font-extrabold">* The Body Fat Calculator</span>
            This body fat calculator estimates your body's percentage of body
            fat and discovers how much you would need to weigh for a healthy
            amount of body fat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, computed, reactive } from "vue";

let age = ref("");
let weight = ref("");
let height = ref("");
let neck = ref("");
let waist = ref("");
let hip = ref("");
let gender = ref("male");
let result = reactive({});
let submitted = ref(false);

const options = computed(() => {
  return {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/bodyfat",
    params: {
      age: age.value,
      gender: gender.value,
      weight: weight.value,
      height: height.value,
      neck: neck.value,
      waist: waist.value,
      hip: hip.value,
    },
    headers: {
      "X-RapidAPI-Key": "f38e7a8c48msh6bd8d918eb0ea3bp19fef9jsn97e5740b5b86",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };
});

async function fetchAPI() {
  try {
    const response = await axios.request(options.value);
    console.log(response.data);
    console.log(
      weight.value,
      height.value,
      age.value,
      gender.value,
      waist.value,
      neck.value,
      hip.value
    );
    result.value = response.data;
    console.log(result);
    submitted.value = true;
  } catch (error) {
    console.log(error);
  }
}
//   const options =  {
//   method: 'GET',
//   url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
//   params: {
//     age: age.value,
//     gender: gender.value,
//     weight: weight.value,
//     height: height.value,
//     neck: neck.value,
//     waist: waist.value,
//     hip: hip.value
//   },
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
</script>

<style scoped></style>
