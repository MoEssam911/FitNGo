<script setup>
import TrainersBanner from "../components/TrainersBanner.vue"
</script>

<template>
  <section class="container h-full mt-12">
   <TrainersBanner></TrainersBanner>
<div class="flex flex-wrap container gap-2">
    <div v-for="card in trainerscards" :key="card">
      <div class="cards w-full">
        <div class="card mb-5">
          <div class="product flex flex-col justify-center items-center">
            <img
              :src="card.TrainerCard"
              width="250"
              class="mt-20 transition-all duration-500"
              alt="product" />
            <p class="text-center text-xl font-bold text-dark">
              {{ card.TrainerNames }}
            </p>
            <p class="price text-primary text-center text-xl font-bold">
              {{ card.Fees }}
            </p>
          </div>
          <router-link :to="`/trainers/${card.id}`"><button class="bg-primary transition rounded px-2 py-1 text-white">
            Hire Now
          </button></router-link>
        </div>
      </div>
    
  </div>
</div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "TrainersView",
  data() {
    return {
      trainerscards: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/AllTrainers")
      .then((res) => {
        this.trainerscards = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>


/* img {
    animation: 3s linear 750ms infinite alternate floating;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); transform: scale(1.1);}
    to   { transform: translate(0, -0px); }    
} */
</style>
