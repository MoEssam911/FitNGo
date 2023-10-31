<template>
  <!-- <div class="mt-20 bg-black min-h-screen flex" :style="`background:#777 url(${trainers.TrainerImg}) no-repeat`" style="background-size: 100% 150%; background-blend-mode: multiply;">
      <div class="w-4/12 backdrop-opacity-75 bg-white/30 h-[540px]">
      <img :src="trainers.TrainerCard" alt="">
      </div>
      </div> -->

  <div
    class="container flex-wrap mt-20 bg-white min-h-screen flex"
    :style="`background: #ebe7e7 url(${trainers.TrainerImg}) no-repeat`"
    style="background-size: 100% 150%; background-blend-mode: soft-light"
  >
    <div
      class="md:w-6/12 sm:w-12/12 md:shadow-lg md:border rounded-md mt-8"
      style="backdrop-filter: blur(0.5)"
    >
      <img :src="trainers.TrainerCard" class="h-4/12" alt="" />
    </div>
    <div class="ml-10 md:w-5/12 sm:w-12/12 mt-8">
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
        <div class="rounded-xl overflow-hidden">
          <img
            src="../assets/Images/beforeandafter/ba1.webp"
            class="w-9/12 hover:w-10/12 transition-width duration-500 border shadow-lg"
            alt=""
          />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img
            src="../assets/Images/beforeandafter/ba2.webp"
            class="w-9/12 hover:w-10/12 transition-width duration-500 border shadow-lg"
            alt=""
          />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img
            src="../assets/Images/beforeandafter/ba3.webp"
            class="w-9/12 hover:w-10/12 transition-width duration-500 border shadow-lg"
            alt=""
          />
        </div>
      </div>
      <p class="text-sm my-4">
        <span> <h2 class="font-bold">How it works :</h2></span>
        You enroll with the coach of your choice You fill in your addition key
        details like food preferences, preferred time to contact, any medical
        issue etc Coach calls you within 24 hours at your preferred time Coach
        understand your goal, sets expectation about how this will work Coach
        evaluate and prepares the best plan for you Coach assesses your weekly
        progress and makes course adjustment You get fit, yay!
      </p>


        <button
          class="text-white font-Manrope text-justify px-3 py-2 m-3 hover:bg-red-500 bg-primary rounded-md"
          @click="SubwithTrainer"
        >
          Start Now
        </button>
      <PopTrainer v-if="showPop==true"></PopTrainer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PopTrainer from '../components/PopTrainer.vue'
export default {
  name: "OneTrainerView",
  components:{
    PopTrainer,
  },
  data() {
    return {
      trainers: {},
      user: {},
      id: "",
      Clients: [],
      conf: "",
      showPop: false,
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getTrainer();
    this.getUser();
  },
  provide(){
    return{
      changePop : this.changePop
    }
  },
  methods: {
    changePop(){
      this.showPop = !this.showPop;
    },
    getTrainer() {
      this.id = this.$route.params.id;
      // this.Clients = this.$route.params.id;
      axios
        .get(`http://localhost:3000/AllTrainers/${this.id}`)
        .then((res) => {
          this.trainers = res.data;
          console.log(this.trainers);
          // console.log(this.trainers.Clients[0].id);
          // console.log(this.trainers.Clients);
          // console.log(this.trainers.Fees);
          console.log(this.trainers.Clients.length);
        })
        .catch((err) => console.log(err));
    },
    getUser() {
      axios
        .get(`http://localhost:3000/users/${this.user.id}`)
        .then((res) => {
          // console.log(res.data)
          this.user = res.data;
          // console.log(this.user)
        })
        .catch((err) => console.log(err));
    },
    SubwithTrainer() {
      // console.log(this.trainers.Clients);
      // if (this.trainers.Clients.length < 1) {
        
      // }
      // console.log(Object.is(this.trainers.Clients[0],this.user));
      // console.log(this.user);
      // if (this.trainers.Clients.findIndex(object => object === this.user)) {
      //     alert('You Already Have Sub');
      //     return
      //   }
      this.showPop = true;
      this.trainers.Clients.push(this.user);
      axios
        .put(`http://localhost:3000/AllTrainers/${this.id}`, this.trainers)
        .then((res) => {
          console.log(res);
          // console.log(this.trainers.Clients[0].id);
        })
        .catch((err) => console.log(err));

      //   for(var i=0;i<=this.trainers.Clients.length;i++){
      //   if(!this.trainers.Clients[i].hasOwnProperty(this.user.id)){
      //     this.trainers.Clients.push(this.user)
      //   axios.put(`http://localhost:3000/AllTrainers/${this.id}`,this.trainers).then((res)=>{
      //     console.log(res);
      //     alert("you have been subscribed successfully")
      //   }).catch(err=>console.log(err))

      //   }
      //   else {
      //     alert("you are already subscribed !!")
      //   }
      // }
    },
    
  },
};
</script>

<style scoped>

</style>
