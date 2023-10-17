<template>
  <!-- <div class="mt-20 bg-black min-h-screen flex" :style="`background:#777 url(${trainers.TrainerImg}) no-repeat`" style="background-size: 100% 150%; background-blend-mode: multiply;">
    <div class="w-4/12 backdrop-opacity-75 bg-white/30 h-[540px]">
     <img :src="trainers.TrainerCard" alt="">
    </div>
    </div> -->
  <div
    class="container flex flex-wrap mt-20 bg-white min-h-screen flex"
    :style="`background: #ebe7e7 url(${trainers.TrainerImg}) no-repeat`"
    style="background-size: 100% 150%; background-blend-mode: soft-light"
  >
    <div
      class="md:w-6/12 sm:w-12/12 md:shadow-lg md:border rounded-md mt-8"
      style="backdrop-filter: blur(0.5)"
    >
      <img :src="trainers.TrainerCard" class="h-4/12 " alt="" />
    </div>
    <div class="ml-10 md:w-5/12 sm:w-12/12 mt-8 ">
      <h2 class="text-3xl font-bold uppercase text-primary">
        {{ trainers.TrainerNames }}
      </h2>
      <p class="text-xl">
        {{ trainers.Description }}
      </p>
      <div class="my-4">
        <a href=""
          ><i
            class="fa-brands fa-x-twitter mx-3 text-2xl hover:text-red-600"
          ></i
        ></a>
        <a href=""
          ><i class="fa-brands fa-facebook mx-3 text-2xl hover:text-red-600"></i
        ></a>
        <a href=""
          ><i
            class="fa-brands fa-instagram mx-3 text-2xl hover:text-red-600"
          ></i
        ></a>
        <a href=""
          ><i class="fa-brands fa-youtube mx-3 text-2xl hover:text-red-600"></i
        ></a>
      </div>
      <h2 class="text-xl font-bold">Previous Results</h2>
      <div class="flex my-2">
        <div class="rounded-xl  overflow-hidden"><img src="../assets/Images/beforeandafter/ba1.webp" class="w-9/12 hover:w-10/12 transition-width duration-500 border shadow-lg" alt=""></div>
        <div class="rounded-xl  overflow-hidden"><img src="../assets/Images/beforeandafter/ba2.webp" class="w-9/12 hover:w-10/12 transition-width duration-500 border shadow-lg" alt=""></div>
        <div class="rounded-xl  overflow-hidden"><img src="../assets/Images/beforeandafter/ba3.webp" class="w-9/12 hover:w-10/12 transition-width duration-500 border shadow-lg" alt=""></div>
      </div>
      <p class="text-sm my-4">
        <h2 class="font-bold">How it works :</h2>
        You enroll with the coach of your choice You fill in your addition key
        details like food preferences, preferred time to contact, any medical
        issue etc Coach calls you within 24 hours at your preferred time Coach
        understand your goal, sets expectation about how this will work Coach
        evaluate and prepares the best plan for you Coach assesses your weekly
        progress and makes course adjustment You get fit, yay!
      </p>
      <div class="btn-primary-hover my-4">
        <button class="text-white bg-primary rounded-md ">Start Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "OneTrainerView",
  data() {
    return {
      trainers: {},
      id: "",
    };
  },
  created() {
    this.getTrainer();
  },
  methods: {
    getTrainer() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/AllTrainers/${this.id}`)
        .then((res) => (this.trainers = res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
col{
    /* color: #ebe7e7; */
}
</style>
<!-- linear-gradient(
        to right,
        rgba(255,255,255,0.9),
        rgba(0,0,0,0)
    ), -->