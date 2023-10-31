<template>
  <div
    class="container md:mt-[9%] mt-[20%] mb-[2%] font-manrope content-around">
    <div class="w-full h-full grid">
      <div class="grid md:grid-cols-12 sm:grid-cols-6 container">
        <!-- <div class="col-span-2 flex-row"
        > -->

        <div class="col-span-2 flex-row">
          <div v-for="(img, index) in oneItem.images" :key="index">
            <img
              @click="imageSwap(index)"
              :src="oneItem.images[index]"
              class="rounded-xl border-2 border-zinc-300" />
          </div>
        </div>
        <!-- /*  image collection may be i need to merge it with image div */ -->
        <div
          class="col-span-4 md:mt-[18%] pr-[2%] border-r-2 border-notify-color">
          <img
            class="rounded-xl md:h-[300px] w-[700px] object-cover"
            :src="oneItem.images[countImg]" />
        </div>
        <!-- /* end of  image div to display item */ -->
        <!-- /* start of item data flex container  */ -->

        <div class="col-span-6 container flex flex-col p-[4%] gap-2">
          <div
            class="text-zinc-900 md:text-xl text-base font-semibold leading-7">
            {{ oneItem.title }}
          </div>
          <div class="text-neutral-400 text-xs">
            {{ oneItem.description }}
          </div>

          <!-- total item cost idk what is it  -->
          <div class="flex flex-col bg-gray-bar mt-[2%] rounded-md">
            <div class="text-black md:text-2xl text-xl border-b-2 pb-[2%]">
              {{ oneItem.price }}
              <span class="text-black md:text-2xl text-xl font-bold">EGP</span>
            </div>
            <div class="flex flex-row text-xs mt-[2%]">
              <svg
                class="fill-[#C4C4C4] h-full mr-[1%]"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
              <p class="text-neutral-600 font-xs">
                Add shipping insurance for 50L.E( declared value only if the
                package gets lost, stolen or damaged.)
              </p>
            </div>
          </div>
          <!-- btns of add item  -->
          <div class="flex flex-row mt-[2%]">
            <button
              @click="goCart()"
              class="bg-primary w-full rounded-md py-[1%] self-center mr-[1%]">
              <router-link :to="`/cart`">
              Buy Now
              </router-link>
            </button>
            <button
              @click="addCart()"
              class="flex bg-white text-gray-600 border-gray-600 border-2 py-[1%] justify-center ml-[1%] rounded-lg w-full">
              <svg
                class="mr-[3%]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                fill="none">
                <path
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.5 6v1a3 3 0 1 0 6 0V6" />
                <path
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21.169 13-1.11-6.658A4 4 0 0 0 16.113 3H8.89a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 7.224 21h6.278m5.998-6v6m3-3h-6" />
              </svg>
              Add to Cart
            </button>
          </div>
          <hr class="fill-black" />
        </div>
        <!-- /*  firstflex {grid container} */ -->
      </div>
      <!-- /*  grid container for item data */ -->
    </div>
    <!-- Description -->
    <div class="m-[4%] border-t-2 pt-[2%] pl-[5%] pr-[10%]">
      <div class="font-bold text-md text-black">Description</div>
      <div>
        <ul class="list-inside list-disc text-sm">
          <li>{{ oneItem.description }}</li>
          <li class="leading-relaxed">
            Company: {{ oneItem.overview.Company }}
          </li>
          <li class="leading-relaxed">Origin: {{ oneItem.overview.Origin }}</li>
          <li class="leading-relaxed">Weight: {{ oneItem.overview.Weight }}</li>
          <li class="leading-relaxed">
            Servings: {{ oneItem.overview.Servings }}
          </li>
          <li class="leading-relaxed">Flavor: {{ oneItem.overview.Flavor }}</li>
          <li class="leading-relaxed">
            Formation: {{ oneItem.overview.Formation }}
          </li>
        </ul>
      </div>
    </div>
    <PopShop v-if="showPop==true" class=""></PopShop>
  </div>
  <!-- /*  container  of page*/ -->
</template>

<script>
import PopShop from './PopShop.vue'
import axios from "axios";

export default {
  name: "item",
  provide() {
    return {
      changePop : this.changePop
    };},

    data() {
    return {
      counter: 1,
      oneItem: {},
      id: "",
      countImg: 0,
      user: {},
      showPop: false,
    };
  },
  
  components:{
    PopShop
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getOneITem();
    axios
      .get(`http://localhost:3000/users/${this.user.id}`)
      .then((res) => {
        this.user = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    changePop(){
      this.showPop = !this.showPop;
    },
    getOneITem() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/products/${this.id}`)
        .then((res) => (this.oneItem = res.data))
        .catch((err) => console.log(err));
    },
    getRandITem() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/products/`)
        .then((res) => (this.oneItem = res.data))
        .catch((err) => console.log(err));
    },
    imageSwap(index) {
      this.countImg = index;
    },
    addCart() {
      this.user.cart.push(this.oneItem);
      axios
        .put(`http://localhost:3000/users/${this.user.id}`, this.user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        this.showPop = true;
    },
    goCart() {
      this.addCart();
      router.push("/cart");
    },
  

  },

  addItem() {
    if (this.oneItem.stock > this.counter) {
      return this.counter++;
    } else {
      return this.counter;
    }
  },
  removeItem() {
    if (this.counter == 0) {
      return 0;
    } else {
      return this.counter--;
    }
    
  },
};
</script>

<style></style>
