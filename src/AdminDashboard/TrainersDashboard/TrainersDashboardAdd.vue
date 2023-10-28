<template>
    <div class="container">
<div class="">
<form @submit.prevent="register">
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="TrainerCard"
            type="text"
            name="floating_rate"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_rate"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Image URL</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="TrainerImg"
            type="text"
            name="floating_rate"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_rate"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Background Image URL</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="userName"
            type="text"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >User Name</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="email"
            type="email"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="password"
            type="password"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Password</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="phone"
            type="tel"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Phone Number</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="age"
            type="number"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Age</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="Description"
            type="text"
            name="floating_desc"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_desc"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Description</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="Fees"
            type="text"
            name="floating_fees"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_fees"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Subscription Fees</label
          >
        </div>
        <div class="accent-primary md:w-2/4 w-full flex items-center pt-3">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                class="hover:cursor-pointer"
                v-model="gender" />
              <label
                class="bg-white text-center px-2 hover:cursor-pointer"
                for="male"
                >Male</label
              >
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                class="hover:cursor-pointer"
                v-model="gender" />
              <label
                class="bg-white text-center px-2 hover:cursor-pointer"
                for="female"
                >Female</label
              >
            </div>
   
        <button class="btn-primary-hover text-white font-bold  p-2 w-full">Add Trainer</button>
</form>
</div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import router from "../../router";
import '../../firebaseInit'
// import auth functions
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import axios from "axios";
const email = ref("");
const password = ref("");
const userName = ref("");
const phone = ref("");
const age = ref("");
const gender = ref("");
const TrainerImg = ref("");
const TrainerCard = ref("");
const Rate = ref("");
const Description = ref("");
const Fees = ref("");
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      data.user.displayName = userName.value;
      data.user.phoneNumber = phone.value;
      data.user.photoURL = "../../assets/Images/Logo-Fit&go version 2.png";
      console.log("user:", data.user);

      const trainer = {
        id: data.user.uid,
        TrainerNames: userName.value,
        age: age.value,
        gender: gender.value,
        TrainerImg: TrainerImg.value,
        TrainerCard: TrainerCard.value,
        Rate: Rate.value,
        Description: Description.value,
        Fees: Fees.value,
        PhoneNumber: phone.value,
        Clients:[],
      };
      axios
        .post("http://localhost:3000/AllTrainers", trainer)
        .then((res) =>{ 
          console.log(res.data)
          alert("Trainer Has Been Added Succefully")
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => {
      console.log(err.message);
    });
};
</script>

<!-- <script>


    export default {
        name:'AddTrainer',

        data(){
            return {
                addedtrainer:{
            TrainerImg: "",
      TrainerCard: "",
      TrainerNames: "",
      Rate: "",
      Description: "",
      Fees: "",
      Clients: [
        
      ]
          },
                id:'',
            }
        },
        
        methods:{
          AddTrainer(){
                axios.post("http://localhost:3000/AllTrainers",this.addedtrainer).then((res)=>{
                    console.log(res.data)
                    alert("trainer has been added successfully :)")
                    
                 }).catch((err)=>console.log(err));
            }
        }
    }
</script> -->

<style scoped>

</style>