<template>
  <section>
          <!-- macro calculator component -->
          <div
            class="flex flex-col h-auto my-5 w-full bg-secondary bg-opacity-50 rounded-3xl">
            <div>
              <h2 class="text-2xl font-bold pt-6 pl-6">Macro Calculator</h2>
              <form @submit.prevent="fetchAPI">
                <div class="flex justify-around">
                  <div class="m-5 w-64">
                    <label class="block mb-2 text-sm font-medium text-gray-900">
                      Weight
                    </label>
                    <input
                      v-model="weight"
                      type="number"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-64 p-2.5"
                      placeholder="Weight in kg"
                      required
                      min="40"
                      max="160" />
                  </div>

                  <div class="m-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900"
                      >Height</label
                    >
                    <input
                      v-model="height"
                      type="number"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-64 p-2.5"
                      placeholder="Height in cm"
                      required
                      min="130"
                      max="230" />
                  </div>

                  <div class="m-5 w-64">
                    <label class="block mb-2 text-sm font-medium text-gray-900"
                      >Age</label
                    >
                    <input
                      v-model="age"
                      type="number"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-64 p-2.5"
                      placeholder="31"
                      required
                      min="1"
                      max="80" />
                  </div>
                </div>
                <div class="flex justify-around items-end">
                  <div class="m-5 w-64">
                    <label class="block mb-2 text-sm font-medium text-gray-900">
                      Activity Level
                    </label>
                    <input
                      v-model="activitylevel"
                      type="number"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-64 p-2.5"
                      placeholder="From 1 to 7"
                      required
                      min="1"
                      max="7" />
                  </div>

                  <div class="m-5 w-64">
                    <label class="block mb-2 text-sm font-medium text-gray-900">
                      Goal
                    </label>
                    <select
                      v-model="goal"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-64 p-2.5"
                      name="goals"
                      id="goals">
                      <option value="maintain" selected>maintain</option>
                      <option value="mildlose">mildlose</option>
                      <option value="weightlose">weightlose</option>
                      <option value="extremelose">extremelose</option>
                      <option value="mildgain">mildgain</option>
                      <option value="weightgain">weightgain</option>
                      <option value="extremegain">extremegain</option>
                    </select>
                  </div>
                  <div class="m-5 w-64">
                    <label
                      for="gender"
                      class="block mb-2 text-sm font-medium text-gray-900">
                      Gender
                    </label>

                    <div class="flex items-center">
                      <input
                        v-model="selectedGender"
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary mr-2"
                        checked />
                      <label
                        for="male"
                        class="text-sm font-medium text-gray-900 mr-4">
                        Male
                      </label>
                      <input
                        v-model="selectedGender"
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary mr-2" />
                      <label
                        for="female"
                        class="text-sm font-medium text-gray-900">
                        Female
                      </label>
                    </div>
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

            <div class="container">
              <div class="" v-if="submitted">
                <div class=" overflow-x-auto">
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
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark ">
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
                  carbohydrates and fats) your body needs each day based on your
                  weight and daily activity levels.
                </p>
              </div>
            </div>
          </div>
  </section>
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

<style lang="scss" scoped>
.tools-enter-active,
.tools-leave-active {
  transition: opacity 0.9s;
}

.tools-enter,
.tools-leave-to {
  opacity: 0;
}
</style>
