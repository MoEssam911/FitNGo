<script setup></script>

<template>
  <section class="container h-full mt-12">
    <div class="container flex items-center">
      <div class="lg:w-6/12">
        <img
          src="../assets/Images/trainercards/trainer-banner-redcircle.png"
          alt=""
        />
      </div>
      <div class="lg:w-6/12">
        <h2 class="text-2xl font-bold">
          HERE IS AN OPPORTUNITY TO GET IN SHAPE WITH THE BEST TRAINERS IN EGYPT
        </h2>
        <h2 class="text-lg">Choose Your Trainer And Start Now</h2>
        <button class="w-36 h-9 btn-primary-hover text-white transition duration-150 mt-7">Start Now</button>
      </div>
    </div>

    <template v-for="trainercard in trainerscards" :key="trainercard">
        
      <div class="container">
        <div class="cards grid grid-cols-12 gap-4">
          <div class="card mb-5">
            <div class="icon z-10">
              <a href="index.html">
                <i class="fa-solid fa-cart-shopping text-xl text-white"></i>
              </a>
            </div>
            <div class="product flex flex-col justify-center items-center">
              <img
                :src="trainercard.TrainerCard"
                width="150"
                class="mt-20 transition-all duration-500"
                alt="product"
              />
              <p class="text-center text-xl font-bold text-dark">
                {{ trainercard.TrainerNames }}
              </p>
              <p class="price text-primary text-center text-xl font-bold">
                {{ trainercard.Fees }}
              </p>
            </div>
            <button class="bg-primary transition rounded px-2 py-1 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </template>
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
        this.trainerscards = res.trainerscards;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.icon {
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 25px;
  transition: 0.5s;
}

/* img {
    animation: 3s linear 750ms infinite alternate floating;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); transform: scale(1.1);}
    to   { transform: translate(0, -0px); }    
} */
</style>
