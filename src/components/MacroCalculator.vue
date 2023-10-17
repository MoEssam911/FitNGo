<template>
  <section>
    <div class="container h-max">
      <div class="flex gap-2 m-5 items-center cursor-pointer">
        <h1 class="font-Manrope font-bold text-lg">My Account</h1>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.125 11.1562L18.8125 5.90625L20.5625 4.15625C21.0417 3.67708 21.6304 3.4375 22.3288 3.4375C23.0271 3.4375 23.6154 3.67708 24.0938 4.15625L25.8438 5.90625C26.3229 6.38542 26.5729 6.96375 26.5938 7.64125C26.6146 8.31875 26.3854 8.89667 25.9062 9.375L24.125 11.1562ZM22.3125 13L9.0625 26.25H3.75V20.9375L17 7.6875L22.3125 13Z"
              fill="black" />
          </svg>
        </div>
      </div>

      <div class="flex gap-5 mt-10">
        <div
          class="lg:w-60 lg:h-96 bg-zinc-300 bg-opacity-50 rounded-3xl flex flex-col">
          <div class="mt-5 mx-auto">
            <img
              class="w-32 h-32 rounded-full object-cover"
              src="../assets/Images/profile.JPG" />
          </div>
          <div class="font-Manrope font-bold text-primary text-2xl text-center">
            Ali Maher
          </div>

          <hr />

          <div class="mt-5 flex flex-col gap-3 text-center">
            <div
              class="flex items-center gap-2 hover:bg-zinc-300 cursor-pointer">
              <div>
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 48 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 15.1667C16 12.8681 16.8429 10.6637 18.3431 9.03841C19.8434 7.41309 21.8783 6.5 24 6.5C26.1217 6.5 28.1566 7.41309 29.6569 9.03841C31.1571 10.6637 32 12.8681 32 15.1667C32 17.4652 31.1571 19.6696 29.6569 21.2949C28.1566 22.9202 26.1217 23.8333 24 23.8333C21.8783 23.8333 19.8434 22.9202 18.3431 21.2949C16.8429 19.6696 16 17.4652 16 15.1667ZM16 28.1667C13.3478 28.1667 10.8043 29.308 8.92893 31.3397C7.05357 33.3713 6 36.1268 6 39C6 40.7239 6.63214 42.3772 7.75736 43.5962C8.88258 44.8152 10.4087 45.5 12 45.5H36C37.5913 45.5 39.1174 44.8152 40.2426 43.5962C41.3679 42.3772 42 40.7239 42 39C42 36.1268 40.9464 33.3713 39.0711 31.3397C37.1957 29.308 34.6522 28.1667 32 28.1667H16Z"
                    fill="black" />
                </svg>
              </div>
              <h2 class="font-Manrope font-semibold text-xl">Get Trainer</h2>
            </div>
            <div
              class="flex items-center gap-2 hover:bg-zinc-300 cursor-pointer">
              <div>
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 49 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M39.9082 3.14941H42.875V50H6.125V3.14941H9.13965V0H12.2021V3.14941H18.375V0H21.4375V3.14941H27.6104V0H30.6729V3.14941H36.8457V0H39.9082V3.14941ZM39.8125 46.875V6.27441H9.1875V46.875H39.8125ZM33.6875 12.5244V15.6494H15.3125V12.5244H33.6875ZM15.3125 40.6738V37.5488H33.6875V40.6738H15.3125ZM15.3125 28.1494V25.0244H33.6875V28.1494H15.3125Z"
                    fill="#232222" />
                </svg>
              </div>
              <h2 class="font-Manrope font-semibold text-xl">My Plan</h2>
            </div>
            <div
              class="flex items-center gap-2 hover:bg-zinc-300 cursor-pointer">
              <div>
                <svg
                  width="30"
                  height="33"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M38.2111 14.3339H32.9651L31.8471 7.65452C31.6218 6.64393 31.1271 5.7132 30.4155 4.96116C29.7038 4.20912 28.8017 3.66383 27.8051 3.38319C26.8038 3.06105 25.7608 2.8872 24.7091 2.86719H18.2878C17.2361 2.8872 16.1931 3.06105 15.1918 3.38319C14.1951 3.66383 13.2931 4.20912 12.5814 4.96116C11.8698 5.7132 11.375 6.64393 11.1498 7.65452L10.0318 14.3339H4.78578C4.56 14.3325 4.33709 14.3845 4.13521 14.4856C3.93333 14.5867 3.75819 14.7341 3.62406 14.9157C3.48994 15.0973 3.40062 15.3081 3.36338 15.5308C3.32614 15.7535 3.34204 15.9818 3.40978 16.1972L8.79911 34.2572C9.07349 35.1296 9.61889 35.8919 10.3561 36.4332C11.0933 36.9745 11.9839 37.2666 12.8984 37.2672H30.0984C31.0081 37.2606 31.8923 36.9656 32.6237 36.4248C33.3552 35.8839 33.8962 35.125 34.1691 34.2572L39.5584 16.1972C39.6255 15.9841 39.6418 15.7583 39.6061 15.5378C39.5703 15.3173 39.4836 15.1082 39.3527 14.9272C39.2218 14.7462 39.0504 14.5983 38.8522 14.4952C38.654 14.3922 38.4345 14.337 38.2111 14.3339ZM12.9558 14.3339L13.9878 8.11319C14.1009 7.60528 14.3634 7.14282 14.7414 6.78523C15.1194 6.42765 15.5957 6.19128 16.1091 6.10652C16.8143 5.88292 17.5482 5.75965 18.2878 5.73385H24.7091C25.4573 5.75679 26.1998 5.88005 26.9164 6.10652C27.4298 6.19128 27.9062 6.42765 28.2842 6.78523C28.6622 7.14282 28.9247 7.60528 29.0378 8.11319L30.0411 14.3339H12.8411H12.9558Z"
                    fill="black" />
                </svg>
              </div>
              <h2 class="font-Manrope font-semibold text-xl">My Shop</h2>
            </div>
            <div class="flex items-center gap-2 bg-zinc-300">
              <div>
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.2825 34.0529L49.5 30.7758L46.2825 27.4987L38.25 35.6799L18.9675 16.0404L27 7.85911L23.7825 4.58203L20.565 7.85911L17.3475 4.58203L12.5325 9.4862L9.315 6.20911L6.0975 9.4862L9.315 12.7633L4.5 17.6674L7.7175 20.9445L4.5 24.2216L7.7175 27.4987L15.75 19.3174L35.0325 38.957L27 47.1383L30.2175 50.4154L33.435 47.1383L36.6525 50.4154L41.4675 45.5112L44.685 48.7883L47.9025 45.5112L44.685 42.2341L49.5 37.3299L46.2825 34.0529Z"
                    fill="white" />
                </svg>
              </div>
              <h2 class="font-Manrope text-white font-semibold text-xl">
                Tools
              </h2>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="h-44 w-full flex justify-evenly gap-2">
            <div
              class="bg-zinc-300 bg-opacity-50 w-1/4 h-full rounded-3xl hover:bg-primary hover:cursor-pointer flex flex-col justify-center items-center group">
              <div class="group-hover:fill-white">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 129 129"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M112.662 59.3797H91.7001C91.3294 59.3293 90.9536 59.3293 90.5829 59.3797H89.6784C89.4004 59.5383 89.1338 59.7161 88.8804 59.9117C88.5842 60.1073 88.2999 60.3205 88.0292 60.5501C87.8516 60.7677 87.6915 60.9989 87.5504 61.2418C87.3066 61.5769 87.0929 61.933 86.9119 62.3058L78.3997 85.7679L56.2145 25.6496C55.8417 24.6225 55.1617 23.7352 54.267 23.1081C53.3722 22.4809 52.3061 22.1445 51.2135 22.1445C50.1209 22.1445 49.0547 22.4809 48.16 23.1081C47.2653 23.7352 46.5853 24.6225 46.2125 25.6496L33.9229 59.3797H16.8983C15.4873 59.3797 14.1341 59.9402 13.1364 60.9379C12.1386 61.9357 11.5781 63.2889 11.5781 64.6999C11.5781 66.1109 12.1386 67.4641 13.1364 68.4618C14.1341 69.4596 15.4873 70.0201 16.8983 70.0201H39.7751C40.0775 69.8745 40.363 69.6961 40.6263 69.4881C40.9226 69.2924 41.2068 69.0793 41.4776 68.8496L41.9564 68.158C42.21 67.8294 42.4242 67.4723 42.5948 67.094L51.2135 42.9935L73.3455 103.75C73.7172 104.778 74.3967 105.667 75.2916 106.295C76.1864 106.924 77.2531 107.261 78.3464 107.261C79.4398 107.261 80.5065 106.924 81.4013 106.295C82.2962 105.667 82.9757 104.778 83.3474 103.75L95.5838 70.0201H112.662C114.073 70.0201 115.426 69.4596 116.424 68.4618C117.421 67.4641 117.982 66.1109 117.982 64.6999C117.982 63.2889 117.421 61.9357 116.424 60.9379C115.426 59.9402 114.073 59.3797 112.662 59.3797Z" />
                </svg>
              </div>
              <div class="font-Manrope font-bold group-hover:text-white">
                BMR Calculator
              </div>
            </div>
            <div
              class="bg-zinc-300 bg-opacity-50 w-1/4 h-full rounded-3xl hover:bg-primary hover:cursor-pointer flex flex-col justify-center items-center group">
              <div class="group-hover:fill-white">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 145 145"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M70.4129 72.3274L77.8268 23.8314C75.3754 23.4453 72.899 23.2393 70.4174 23.2151C43.2859 23.2151 21.3008 45.2048 21.3008 72.3274C21.3008 99.4545 43.2904 121.44 70.4129 121.44C97.5355 121.44 119.525 99.45 119.525 72.3274C119.525 71.1757 119.435 70.0466 119.354 68.9084L70.4129 72.3274ZM87.7509 14.7891L80.337 63.285L129.274 59.866C128.495 48.7555 123.961 38.2402 116.415 30.0483C108.869 21.8564 98.7603 16.4752 87.7509 14.7891Z" />
                </svg>
              </div>
              <div class="font-Manrope font-bold group-hover:text-white">
                Macro Calculator
              </div>
            </div>
            <div
              class="bg-zinc-300 bg-opacity-50 w-1/4 h-full rounded-3xl hover:bg-primary hover:cursor-pointer flex flex-col justify-center items-center group">
              <div class="group-hover:fill-white">
                <svg
                  width="80"
                  height="100"
                  viewBox="0 0 109 109"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_502_26558)">
                    <path
                      d="M20.4367 7.65606H13.9185V108.531H94.6602V7.65606H88.0368V0.875H81.3084V7.65606H67.7463V0.875H61.0178V7.65606H47.4557V0.875H40.7273V7.65606H27.1652V0.875H20.4367V7.65606ZM20.647 101.802V14.3845H87.9317V101.802H20.647ZM34.1039 27.8415V34.57H74.4748V27.8415H34.1039ZM74.4748 88.4505V81.722H34.1039V88.4505H74.4748ZM74.4748 61.484V54.7555H34.1039V61.484H74.4748Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_502_26558">
                      <rect
                        width="107.655"
                        height="107.656"
                        transform="matrix(-1 0 0 1 108.121 0.875)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="font-Manrope font-bold group-hover:text-white">
                Diet Plan
              </div>
            </div>
            <div
              class="bg-zinc-300 bg-opacity-50 w-1/4 h-full rounded-3xl hover:bg-primary hover:cursor-pointer flex flex-col justify-center items-center group">
              <div class="group-hover:fill-white">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 111 111"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_502_26567)">
                    <path
                      d="M55.2908 24.7224C61.9451 24.7224 67.3395 19.328 67.3395 12.6737C67.3395 6.01938 61.9451 0.625 55.2908 0.625C48.6366 0.625 43.2422 6.01938 43.2422 12.6737C43.2422 19.328 48.6366 24.7224 55.2908 24.7224Z" />
                    <path
                      d="M94.2342 28.1627H16.3482C14.8075 28.1627 13.33 28.7747 12.2405 29.8642C11.1511 30.9536 10.5391 32.4312 10.5391 33.9719C10.5391 35.5126 11.1511 36.9902 12.2405 38.0796C13.33 39.169 14.8075 39.7811 16.3482 39.7811H38.2682C39.7549 39.7811 41.4955 40.4459 42.4809 43.0084C43.632 45.984 43.0683 51.7308 42.3583 56.1824L41.4288 61.4429C41.4305 61.4566 41.4291 61.4705 41.4246 61.4836C41.4202 61.4966 41.4128 61.5085 41.403 61.5182L33.9586 103.863C33.6887 105.4 34.0385 106.981 34.9316 108.261C35.8248 109.541 37.1884 110.415 38.7243 110.692C39.4836 110.826 40.2621 110.808 41.0144 110.639C41.7668 110.47 42.4781 110.154 43.107 109.707C43.736 109.261 44.27 108.694 44.6781 108.04C45.0862 107.386 45.3603 106.657 45.4845 105.896L50.6288 76.4629C50.6288 76.4629 52.279 69.4725 55.2912 69.4725C58.3529 69.4725 59.9687 76.4629 59.9687 76.4629L65.113 105.922C65.2375 106.69 65.5135 107.425 65.925 108.085C66.3365 108.745 66.8752 109.317 67.5098 109.766C68.1444 110.216 68.8622 110.535 69.6213 110.704C70.3804 110.874 71.1656 110.89 71.9312 110.753C72.6968 110.616 73.4275 110.328 74.0806 109.906C74.7338 109.484 75.2963 108.935 75.7355 108.294C76.1746 107.652 76.4816 106.929 76.6386 106.167C76.7955 105.405 76.7993 104.62 76.6496 103.856L69.2031 61.5117C69.2047 61.4982 69.2034 61.4846 69.1993 61.4716C69.1952 61.4586 69.1884 61.4466 69.1794 61.4364L68.2478 56.1759C67.5378 51.7243 66.9741 45.9776 68.1252 43.002C69.1063 40.4459 70.9028 39.7746 72.2734 39.7746H94.2342C95.7749 39.7746 97.2525 39.1626 98.3419 38.0732C99.4313 36.9837 100.043 35.5061 100.043 33.9654C100.043 32.4247 99.4313 30.9472 98.3419 29.8577C97.2525 28.7683 95.7749 28.1562 94.2342 28.1562V28.1627Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_502_26567">
                      <rect
                        width="110.159"
                        height="110.159"
                        transform="translate(0.207031 0.625)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                class="font-Manrope font-bold group-hover:text-white text-sm">
                Body Fat Calculator
              </div>
            </div>
          </div>

          <!-- macro calculator component -->
          <div
            class="flex flex-col h-auto my-5 w-full bg-zinc-300 bg-opacity-50 rounded-3xl">
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
                      id="goals"
                      placeholder="maintain">
                      <option value="maintain">maintain</option>
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

            <div class="flex mx-10 font-Manrope text-gray-700 text-md">
              <div class="text-xl" v-if="submitted">
                <h1>
                  Your macro calculator is
                  <span class="font-extrabold text-primary">
                    {{ Math.round(result.value) }}
                  </span>
                </h1>
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
    url: "https://fitness-calculator.p.rapidapi.com/dailycalorie",
    params: {
      age: age.value,
      gender: selectedGender.value,
      height: height.value,
      weight: weight.value,
      activitylevel: activitylevel.value,
      goal: goal.value,
    },
    headers: {
      "X-RapidAPI-Key": "8a6946c476mshfabff6b286014fbp162994jsn5956471a8b1c",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };
});
async function fetchAPI() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    result.value = response.data;
    submitted.value = true;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped></style>
