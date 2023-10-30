<template>
  <div class="bg-black bg-opacity-50 w-full h-screen z-[100] fixed top-0 left-0 flex justify-center items-center">
    <div class="container text-dark">
        <div class="w-7/12 mx-auto bg-white h-auto rounded-3xl p-5">
          <h2 class="text-xl text-center font-semibold">Add a shipping address</h2>
          <form @submit.prevent="fetchAPI">
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="weight"
              type="number"
              name="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="40"
              max="160" />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Weight <span class="text-xs">(kg)</span></label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="height"
              type="number"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="130"
              max="230" />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-dark  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="1"
              max="80" />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-dark  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Age</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="activitylevel"
              type="number"
              name="floating_company"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              min="1"
              max="7" />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-dark  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Activity Level <span class="text-xs">(from 1 to 7)</span></label
            >
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <select
            v-model="goal"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
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
            class="peer-focus:font-medium absolute text-sm text-dark  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Goal</label
          >

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
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>