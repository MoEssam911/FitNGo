<template>
  <div class="bg-secondary bg-opacity-50 rounded-3xl h-auto p-9 mb-9">
    <div>
      <h2 class="text-2xl font-bold pb-5">Macro Calculator</h2>
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
              v-model="activitylevel"
              type="number"
              name="floating_company"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="1"
              max="7" />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Activity Level <span class="text-xs">(from 1 to 7)</span></label
            >
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <select
            v-model="goal"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
            name="goals"
            id="goals">
            <option class="" value="maintain" selected>maintain</option>
            <option class="" value="mildlose">mildlose</option>
            <option class="" value="weightlose">weightlose</option>
            <option class="" value="extremelose">extremelose</option>
            <option class="" value="mildgain">mildgain</option>
            <option class="" value="weightgain">weightgain</option>
            <option class="" value="extremegain">extremegain</option>
          </select>

          <label
            for=""
            class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Activity Level</label
          >
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
    <div>
      <div class="" v-if="submitted">
        <div class="overflow-x-auto">
          <table
            class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9">
            <caption class="text-dark text-2xl">
              Your macro calculator is
            </caption>
            <thead class="text-xs uppercase">
              <tr class="bg-primary text-white tracking-wider">
                <th scope="col" class="px-6 py-3">Balanced</th>
                <th scope="col" class="px-6 py-3">High Protein</th>
                <th scope="col" class="px-6 py-3">Low Carbs</th>
                <th scope="col" class="px-6 py-3">Low Fat</th>
                <th scope="col" class="px-6 py-3">Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <th scope="row" class="px-6 py-4 font-medium text-dark">
                  Calorie
                </th>
                <td
                  class="px-6 py-4 text-center text-primary text-lg tracking-widest"
                  colspan="4">
                  {{ result.value.calorie.toFixed(0) }} Calorie
                </td>
              </tr>
              <tr class="border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark whitespace-nowrap dark:text-white">
                  Protein
                </th>
                <td class="px-6 py-4">
                  {{ result.value.balanced.protein.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.highprotein.protein.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.lowcarbs.protein.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.lowfat.protein.toFixed(0) }} gm
                </td>
              </tr>
              <tr class="border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                  Fat
                </th>
                <td class="px-6 py-4">
                  {{ result.value.balanced.fat.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.highprotein.fat.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.lowcarbs.fat.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.lowfat.fat.toFixed(0) }} gm
                </td>
              </tr>
              <tr class="">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                  Carbs
                </th>
                <td class="px-6 py-4">
                  {{ result.value.balanced.carbs.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.highprotein.carbs.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.lowcarbs.carbs.toFixed(0) }} gm
                </td>
                <td class="px-6 py-4">
                  {{ result.value.lowfat.carbs.toFixed(0) }} gm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <p class="py-4">
          <span class="font-extrabold">* The macro calculator is </span>
          an easy equation to work out how many macronutrients (protein,
          carbohydrates and fats) your body needs each day based on your weight
          and daily activity levels.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, ref, reactive } from "vue";

let age = ref("");
let height = ref("");
let weight = ref("");
let goal = ref("");
let activitylevel = ref("");
let selectedGender = ref("male");
let result = reactive({});
let submitted = ref(false);

const options = computed(() => {
  return {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/macrocalculator",
    params: {
      age: age.value,
      gender: selectedGender.value,
      height: height.value,
      weight: weight.value,
      activitylevel: activitylevel.value,
      goal: goal.value,
    },
    headers: {
      "X-RapidAPI-Key": "73ffbb0b3fmsh7c68f62c00b146fp1e9bd0jsn7d02faa9e6c1",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };
});

async function fetchAPI() {
  try {
    const response = await axios.request(options.value);
    console.log(response.data.data);
    console.log(options.value);
    result.value = response.data.data;
    submitted.value = true;
  } catch (error) {
    console.error(error);
  }
}
</script>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
