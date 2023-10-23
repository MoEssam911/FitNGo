<script setup>
import TrainersBanner from "../components/TrainersBanner.vue";
import TrainersFromJson from "../components/TrainersFromJson.vue";
</script>

<template>
  <section class="container h-full mt-12">
   <TrainersBanner></TrainersBanner>
<TrainersFromJson></TrainersFromJson>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "TrainersView",
  data() {
    return {
      
    };
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
