<template>
  <div class="container flex flex-col">
    <div class="flex relative mt-[10%] object-cover">
      <img
        class="w-full blur-[1px]"
        src="../../src/assets/Images/banner-shoppp - Copy.png"
      />
      <p
        class="absolute inset-0 flex items-center justify-center font-Manrope text-white text-6xl font-extrabold"
      >
        OurShop
      </p>
    </div>

    <!-- ad banners  -->
    <div class="flex relative object-cover">
      <div class="w-1/2 h-1/4 ease-in-out duration-300">
        <img
          src="../../src/assets/Images/08f1c52293c3de74e6874e9dbc83aceb.png"
        />
      </div>
      <div class="w-1/2 h-1/4">
        <img class="blur-[0.5px]" src="../../src/assets/Images/zegama.jpg" />
        <p
          class="absolute left-[50%] inset-0 flex font-Manrope whitespace-pre-line p-[2%] text-primary text-xl font-extrabold"
        >
          SALE 15% ON SPORT SHOES
        </p>
      </div>
    </div>
    <!-- search  -->
    <div class="mt-[3%]">
      <!-- <input type="search" id="site-search" placeholder="Search For Product .." class="border-gray-100 border-2 active:border-1-black" />
    <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span> -->
      <div class="relative w-full">
        <input
          v-model="searchQuery"
          type="search"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary"
          placeholder="Search by Exercise name ..."
        />
        <button
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-lg border border-primary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
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
    <!-- shop items  -->
    <div class="grid lg:grid-cols-12 md:grid-cols-6 gap-6 grid-flow-row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="card col-span-3 mb-5"
      >
        <div class="product flex flex-col justify-center items-center">
          <img
            :src="item.image"
            width="150"
            class="mt-20 transition-all duration-500"
            alt="product"
          />
          <p class="text-center text-xl font-extrabold py-3 text-dark">
            {{ item.desc.substr(4, 26) }}
          </p>
          <p class="price text-primary text-center text-xl font-bold">
            {{ item.price }}
          </p>
        </div>
        <button class="bg-primary transition rounded px-2 py-1 text-white">
          Buy Now
        </button>

        <div class="icon z-10 m-1">
          <button
            href="index.html"
            class="bg-primary transition rounded px-2 py-1 text-white"
          >
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>

      <!-- <div  v-for="(item, index) in itemsDb" :key="index" class=" card col-span-3">
      {{ item.desc}}
      <div class=" "></div>
    </div> -->
    </div>
    <button
      @click="loadMore"
      class="btn-more-to-explore w-40 h-12 self-center m-5"
    >
      More To Explore
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { ref, computed, onMounted, watch } from "vue";

export default {
  name: "shop",
  data() {
    return {
      itemsDb: [],
      currentIndex: 0,
      nameI: "",
      searchQuery: "",
    };
  },
  created() {
    axios
      .get("http://localhost:7071/supplements")
      .then((res) => {
        this.itemsDb = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    loadMore() {
      this.currentIndex += 12;
    },
  },
  computed: {
    items() {
      return this.itemsDb
        .filter((item) =>
          item.desc.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .slice(0, this.currentIndex + 12);
    },
  },
};
</script>

<style scoped>
.search-icon {
  position: absolute;
  left: 16%;
  top: 5%;
  transform: translate(-25%, -25%);
  z-index: 1;
}
</style>
