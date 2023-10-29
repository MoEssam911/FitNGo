<template>
  <template v-if="trainerscards.length === 0">
    <TrainersSkeleton />
  </template>
  <template v-else>
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
    }, 1000)

  },
    }
</script>

<style lang="scss" scoped>

</style>