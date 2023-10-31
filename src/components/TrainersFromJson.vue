<template>
  <template v-if="trainerscards.length === 0">
    <TrainersSkeleton />
  </template>
  <template v-else>
    <div class="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
    <div v-for="card in trainerscards" :key="card">
      <div class="cards w-full mb-5">
        <div class="card my-2 h-fit">
          <div class="product flex flex-col justify-center items-center my-6">
            <img
              :src="card.imageProfile"
              width="250"
              class="mt-2 transition-all duration-500"
              alt="product" />
            <p class="text-center text-xl font-bold text-dark">
              {{ card.TrainerNames }}
            </p>
            <p class="price text-primary text-center text-xl font-bold">
              {{ card.Fees }}
            </p>
            <span v-html="card.Rate" class="price text-red-500 hover:text-primary text-center text-md"></span>
          </div>
          <router-link :to="`/trainers/${card.id}`"><button class="bg-primary transition rounded px-2 py-1 text-white">
            Start Now
          </button></router-link>
        </div>
      </div>
    
  </div>
    </div>
  </template>

</template>

<script>
import axios from "axios";
import TrainersSkeleton from '../components/SkeletonPlaceholders/TrainersSkeleton.vue'
    export default {
        name:'TrainersFromJson',
        components: {
          TrainersSkeleton
        },
        data() {
    return {
      trainerscards: [],
    };
  },
  created() {
    setTimeout(() => {
      axios
      .get("http://localhost:3000/AllTrainers")
      .then((res) => {
        this.trainerscards = res.data;
      })
      .catch((err) => console.log(err));
    }, 2000)

  },
    }
</script>

<style lang="scss" scoped>

</style>