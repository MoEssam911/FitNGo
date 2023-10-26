<template>
  <div>
    <TrainersBanner />
    <TrainersFromJson />
  </div>
</template>



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
<script setup>
import TrainersBanner from "../components/TrainersBanner.vue";
import TrainersFromJson from "../components/TrainersFromJson.vue";
</script>
