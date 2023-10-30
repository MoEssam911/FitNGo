<template>
  <div class="flex flex-col">
    <div class="flex relative object-cover h-[350px]">
      <img
        class="w-full object-"
        src="../../src/assets/Images/WhatsApp Image 2023-10-19 at 17.23.47_e920d04d.jpg" />
    </div>

    <div class="container">
      <!-- ad banners  -->
      <div
        class="flex relative object-cover lg:flex-row md:flex-row sm:flex-col">
        <div class="w-1/2">
          <img
            src="../../src/assets/Images/08f1c52293c3de74e6874e9dbc83aceb.png"
            class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
          <p
            class="flex font-Manrope whitespace-pre-line p-[5%] text-primary lg:text-2xl md:text-2xl sm:text-base font-extrabold">
            SALE 15% ON SPORT SHOES
          </p>
        </div>
        <div class="w-1/2 h-1/4">
          <img class="blur-[0.5px]" src="../../src/assets/Images/zegama.jpg" />
          <p
            class="absolute left-[50%] inset-0 flex font-Manrope whitespace-pre-line p-[5%] text-primary lg:text-4xl md:text-2xl sm:text-xl font-extrabold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            SALE 15% ON SPORT SHOES
          </p>
        </div>
      </div>
      <!-- search  -->
      <div class="my-6">
        <!-- <input type="search" id="site-search" placeholder="Search For Product .." class="border-gray-100 border-2 active:border-1-black" />
    <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span> -->
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="search"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary outline-primary"
            placeholder="Search by products name ..." />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-lg border border-primary hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
      <!-- shop items  -->
      <div class="grid grid-cols-12 gap-x-2">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">

          <div class="card">
            <div class="icon z-10">
              <!-- <i class="fa-solid fa-cart-shopping text-xl text-white"></i> -->
              <i
                @click="addCart(item)"
                class="fa-solid fa-cart-plus text-xl text-primary cursor-pointer"></i>
            </div>
            <router-link :to="`/shop/${item.id}`">
              <div class="product flex flex-col justify-center items-center">
                <img
                  :src="item.images[0]"
                  width="150"
                  class="mt-20 w-[150px] h-[180px] md:transition-all md:duration-500"
                  alt="product" />
                <div class="h-[70px]">
                  <p class="text-center md:text-xl text-md font-bold text-dark">
                    {{ item.title.substr(0, 20) }}
                  </p>
                </div>
                <div class="h-30px pb-[5%]">
                  <p class="price text-primary text-center text-xl font-bold">
                    {{ item.price }}
                  </p>
                </div>
              </div></router-link
            >
            <button
              @click="addCart(item)"
              class="bg-primary transition rounded px-2 py-1 text-white">
              <router-link :to="`/cart`"> Buy Now</router-link>
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
        class="btn-more-to-explore w-40 h-12 self-center m-5">
        More To Explore
      </button>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import ShopCardsandSearchVue from "./ShopCardsandSearch.vue";
import ShopBanners from "./ShopBanners.vue";
</script>
<script>
import axios from "axios";
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
      .get("http://localhost:7071/products")
      .then((res) => {
        this.itemsDb = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    loadMore() {
      this.currentIndex += 12;
    },
    addCart(item) {
      axios
        .post("http://localhost:3000/cart", item)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    items() {
      return (
        this.itemsDb
          // .filter((item) => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
          .filter((item) =>
            item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .slice(0, this.currentIndex + 12)
      );
    },
  },
};
</script>

<style scoped>
.search-icon {
  position: absolute;
  left: 16%;
  top: 5%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.icon {
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 25px;
  transition: 0.5s;
}
</style>
