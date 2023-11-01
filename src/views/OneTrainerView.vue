<template>
  <div
    class="container flex-wrap mt-20 bg-white min-h-screen flex"
    :style="`background: #ebe7e7 url(${trainers.TrainerImg}) no-repeat`"
    style="background-size: 100% 150%; background-blend-mode: soft-light"
  >
    <div
      class="md:w-6/12 sm:w-12/12 md:shadow-lg md:border rounded-md mt-8"
      style="backdrop-filter: blur(0.5)"
    >
      <img :src="trainers.imageProfile" class="h-4/12" alt="" />
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
      
    </div>
  </div>
  <BaseModal :modalActive="modalActive" @close="deleteuserifNo">
    <div class="flex flex-col m-2 ">
      <div class="flex justify-around items-center mb-2">
        <h1 class="text-2xl font-bold font-Manrope text-gray-600 text-left">Payment</h1>
        <h2 class="text-lg font-medium font-Manrope text-gray-600 text-right">{{ trainers.Fees }}</h2>
      </div>
      <label class="text-left font-Manrope text-gray-600 my-2">Full Name:</label>
      <input class="w-full border border-gray-200 h-8 rounded-md bg-gray-100 mb-2" type="text">
      <div class="flex gap-2">
        <div class="flex flex-col w-8/12">
        <label class="text-left font-Manrope text-gray-600 my-2">Card Number:</label>
        <input type="number" class="border border-gray-200 h-8 rounded-md bg-gray-100">
        </div>
        <div class="flex flex-col w-4/12">
          <label class="text-left font-Manrope text-gray-600 my-2">CVV:</label>
          <input type="number" class=" border border-gray-200 h-8 rounded-md bg-gray-100">
        </div>
      </div>
      <label class="text-left font-Manrope text-gray-600 my-2">Street Address:</label>
      <input type="number" class="border border-gray-200 h-8 rounded-md bg-gray-100">
      <label class="text-left font-Manrope text-gray-600 my-2">Zip:</label>
      <input type="number" class="border border-gray-200 h-8 rounded-md bg-gray-100">
      <button class="w-full h-14 bg-primary hover:bg-red-500 my-8 rounded-lg text-white text-center font-Manrope font-extrabold hover:text-gray-100"
        @click.prevent="settrainerinuser">
        Submit Payment
      </button>


    </div>
  </BaseModal>
</template>

<script>
import BaseModal from "../components/utilities/BaseModal.vue";
import axios from "axios";
export default {
  name: "OneTrainerView",
  components:{
    BaseModal,
  },
  data() {
    return {
      trainers: {},
      user: {},
      id: "",
      Clients: [],
      conf: "",
      modalActive: false,
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getTrainer();
    // this.getUser();
  },
  methods: {
    changePop(){
      this.showPop = !this.showPop;
    },
    getTrainer() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/AllTrainers/${this.id}`)
        .then((res) => {
          this.trainers = res.data;
        })
        .catch((err) => console.log(err));
    },
    getUser() {
      // axios
      //   .get(`http://localhost:3000/users/${this.user.id}`)
      //   .then((res) => {
      //     this.user = res.data;
      //   })
      //   .catch((err) => console.log(err));
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user);
    },
    SubwithTrainer() {
      this.modalActive = true;
      console.log(this.trainers.Clients.includes(this.user));
      if (this.trainers.Clients.indexOf(this.user) === -1) {
        this.trainers.Clients.push(this.user);
      axios
        .put(`http://localhost:3000/AllTrainers/${this.id}`, this.trainers)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      }
    },
    settrainerinuser() {
      this.modalActive = false
      this.trainers.Clients = []
      this.user.trainer = this.trainers;
      console.log(this.user);
      axios
        .put(`http://localhost:3000/users/${this.user.id}`, this.user)
        .then((res) => {
          console.log(res.data);
         localStorage.setItem("user", JSON.stringify(this.user))

        })
        .catch((err) => console.log(err));

    },
    deleteuserifNo() {
      this.modalActive = false
      this.trainers.Clients.pop();
      axios
        .put(`http://localhost:3000/AllTrainers/${this.id}`, this.trainers)
        .then((res) => {
          console.log(res);
          console.log('a7a');
          // console.log(this.trainers.Clients[0].id);
        })
        .catch((err) => console.log(err));
    },
    
  },
};
</script>

<style scoped>

</style>
