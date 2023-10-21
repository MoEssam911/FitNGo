<template>
  <div class="m-5 flex">
    <select
      v-model="data.bodyPart"
      class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:border-primary"
      placeholder="All Exercises"
      @change="emitUpdate"
    >
      <option value="" selected disabled hidden>All Exercises</option>
      <option value="back">Back</option>
      <option value="chest">Chest</option>
      <option value="upper arms">Upper Arms</option>
      <option value="lower arms">Lower Arms</option>
      <option value="upper legs">Upper Legs</option>
      <option value="lower legs">Lower Legs</option>
      <option value="cardio">Cardio</option>
    </select>
    <div class="relative w-full">
      <input
        v-model="data.searchQuery"
        type="search"
        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary"
        placeholder="Search by Exercise name ..."
        @input.lazy="emitUpdate"
      />
      <button
        type="submit"
        class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitUpdate() {
      this.$emit("update", this.data);
    },
  },
};
</script>
