<template>
  <div class="container mt-[55%] mb-[2%] font-manrope content-around">
    <div class="w-full h-full grid">
      <div class="grid grid-cols-12 container">
        <!-- <div class="col-span-2 flex-row"
        > -->
        
        <div class="col-span-2 flex-row "
       >
        <div
        v-for="(img, index) in oneItem.images" :key="index" 
        >
        <img @click="imageSwap(index)" 
            :src="oneItem.images[index]"
            class="rounded-xl border-2 border-zinc-300 "
          /></div>  
          <!-- <img
            :src="oneItem.images[1]"
            class="rounded-xl border-2 border-zinc-300"
          />
          <img
          :src="oneItem.images[2]"
          class="rounded-xl border-2 border-zinc-300"
          />
          <img
          :src="oneItem.images[3]"
          class="rounded-xl border-2 border-zinc-300"
          /> -->
        </div>
        <!-- /*  image collection may be i need to merge it with image div */ -->
        <div class="col-span-4 mt-[18%] pr-[2%] border-r-2 border-notify-color">
          <img class="rounded-xl h-[300px] w-[700px] object-cover" :src="oneItem.images[countImg]" />
        </div>
        <!-- /* end of  image div to display item */ -->
        <!-- /* start of item data flex container  */ -->

        <div class="col-span-6 container flex flex-col p-[4%]">
          <div class="text-zinc-900 text-xl font-semibold leading-7">
{{ oneItem.title }}          </div>
          <div class="text-neutral-400 text-xs">
            {{ oneItem.description }}
          </div>
          <!-- /*  shiping row data flex container  */ -->
          <div class="flex flex-row mt-[2%] text-neutral-800 font-medium">
            <div class="mr-[5%]">Shipping</div>
            <div class="mt-[1%]">
              <div class="">Free Shipping for above 500L.E</div>
              <div
                className="text-neutral-400 text-xs font-normal leading-tight"
              >
                Delivery Time: 14–17 days
              </div>
            </div>
          </div>
          <!-- quantity counter -->
          <div class="flex flex-row mt-[2%] text-neutral-800 font-medium">
            <div class="mr-[5%]">{{oneItem.stock}} in stock</div>
            <!-- counter -->
            <div class="mt-[1%] border-black">
              <div class="max-w-fit p-0">
                <button @click="removeItem" class="fill-[#C4C4C4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                    />
                  </svg>
                </button>
                <input
                  class="ml-[1%] w-1/6 border-gray-bar pl-[5%]"
                  v-model="counter"
                />
                <button @click="addItem" class="fill-[#C4C4C4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <!-- quantity in stock -->
            <div
              class="ml-[-20%] mt-[1%] text-neutral-600 text-sm font-normal leading-tight"
            >
              10 available / 50 sold
            </div>
          </div>
          <!-- total item cost idk what is it  -->
          <div class="flex flex-col bg-gray-bar p-[2%] mt-[1%] rounded-md">
            <div class="text-black text-2xl border-b-2 pb-[2%]">
              2500 <span class="text-black text-2xl font-bold">EGP</span>
            </div>
            <div class="flex flex-row text-xs mt-[2%]">
              <svg
                class="fill-[#C4C4C4] h-full mr-[1%]"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
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
              class="bg-primary w-full rounded-md py-[1%] self-center mr-[1%]"
            >
              Shop Now
            </button>
            <button
              class="flex bg-white text-gray-600 border-gray-600 border-2 py-[1%] justify-center ml-[1%] rounded-lg w-full"
            >
              <svg
                class="mr-[3%]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                fill="none"
              >
                <path
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.5 6v1a3 3 0 1 0 6 0V6"
                />
                <path
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21.169 13-1.11-6.658A4 4 0 0 0 16.113 3H8.89a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 7.224 21h6.278m5.998-6v6m3-3h-6"
                />
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
Company: {{oneItem.overview.Company}}
          </li>
          <li class="leading-relaxed">
            Origin: {{oneItem.overview.Origin}}
          </li>
          <li class="leading-relaxed">
            Weight: {{oneItem.overview.Weight}}
          </li>
          <li class="leading-relaxed">
            Servings: {{oneItem.overview.Servings}}
          </li>
          <li class="leading-relaxed">
            Flavor: {{oneItem.overview.Flavor}}
          </li>
          <li class="leading-relaxed">
            Formation: {{oneItem.overview.Formation}}
          </li>

        </ul>
      </div>
    </div>
  </div>
  <!-- /*  container  of page*/ -->
</template>

<script>
import axios from 'axios'
export default {
  name: "item",
  data() {
    return {
      counter: 1,
      oneItem:{},
      id:"",
    countImg:0
    };
  },
  created() {
    this.getTrainer();
  },
  methods: {
    getTrainer() {
      this.id = this.$route.params.id;
      axios
      .get(`http://localhost:7071/products/${this.id}`)
        .then((res) => (this.oneItem = res.data))
        .catch((err) => console.log(err));
    },
    imageSwap(index){
    this.countImg=index
    },

    addItem() {
      return this.counter++;
    },
    removeItem() {
      if (this.counter == 0) {
        return 0;
      } else {
        return this.counter--;
      }
    },


      
    
  },
};
</script>

<style></style>
