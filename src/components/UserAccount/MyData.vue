<template>
  <div class="h-auto bg-secondary rounded-3xl p-9 mb-9">
    <h2 class="text-2xl font-bold pb-7">My Data</h2>
    <div v-if="isSaved">
      <div class="grid md:grid-cols-2 md:gap-6">
        <p class="relative z-0 w-full mb-6">
          <span class="text-primary font-bold">Weight</span>: {{ weight }}
        </p>
        <p class="relative z-0 w-full mb-6">
          <span class="text-primary font-bold">Height</span>: {{ height }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <p class="relative z-0 w-full mb-6">
          <span class="text-primary font-bold">Body Fat</span>: {{ bodyfat }}
        </p>
        <p class="relative z-0 w-full mb-6">
          <span class="text-primary font-bold">BMR</span>: {{ bmr }}
        </p>
      </div>
    </div>
    <div v-else>
      <form @submit.prevent="saveInfo">
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
              v-model="bodyfat"
              type="number"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Body Fat</label
            >
            <p class="text-dark text-xs">
              Calculate your body fat from
              <router-link to="tools" class="underline text-primary"
                >Here</router-link
              >
            </p>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="bmr"
              type="number"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >BMR</label
            >
            <p class="text-dark text-xs">
              Calculate your BMR from
              <router-link to="tools" class="underline text-primary"
                >Here</router-link
              >
            </p>
          </div>
        </div>
        <div class="m-5 block text-center">
          <button
            class="bg-primary rounded-lg p-2 px-6 text-white font-Manrope text-sm hover:bg-red-800"
            type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'MyData',
  data() {
    return {
      isSaved: false,
      weight: "",
      height: "",
      bodyfat: "",
      bmr: "",
    };
  },
  methods: {
    saveInfo() {
      this.isSaved = !this.isSaved;
    },
  },
};
</script>

<style lang="scss" scoped></style>
