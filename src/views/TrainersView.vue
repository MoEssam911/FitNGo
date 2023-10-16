router-link<script setup></script>

<template>
  <section class="container h-full mt-12">
    <div class="container flex lg:flex-wrap justify-center items-center">
      <div class="lg:w-6/12 md:w-full sm:w-full">
        <img
          src="../assets/Images/trainercards/trainer-banner-redcircle.png"
          alt=""
        />
      </div>
      <div class="lg:w-6/12 md:w-12/12 sm:w-full">
        <h2 class="text-2xl font-bold">
          HERE IS AN OPPORTUNITY TO GET IN SHAPE WITH THE BEST TRAINERS IN EGYPT
        </h2>
        <h2 class="text-lg">Choose Your Trainer And Start Now</h2>
        <button class="w-36 h-9 btn-primary-hover text-white transition duration-150 mt-7">Start Now</button>
      </div>
    </div>
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
          <router-link :to="`/trainers/${card.Id}`"><button class="bg-primary transition rounded px-2 py-1 text-white">
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
