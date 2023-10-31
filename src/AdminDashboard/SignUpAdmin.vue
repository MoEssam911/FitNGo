<template>
    <div
    class="flex justify-center items-center parent bg-white w-full h-full ">
    <div class="lg:w-11/12 md:w-10/12 w-11/12 mx-auto md:h-auto my-10">
      <img
        src="../assets/Images/Logo-Fit&go version 2.png"
        alt="Fit and Go"
        class="image-login mx-auto md:w-[69px] w-[50px]" />
      <h2 class="text-3xl font-bold text-center text-primary md:my-3 my-1">
        Admin Creation
      </h2>
      <form @submit.prevent="register">
        <div class="w-full">
          <div class="flex md:flex-wrap justify-center flex-wrap w-full md:gap-4 gap-1">
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">User Name</span>
              </h3>
              <input
                required
                v-model="userName"
                type="text"
                placeholder="ex:Mohamed Elshimi"
                class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary" />
            </div>
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">Email</span>
              </h3>
              <input
                required
                v-model="email"
                type="email"
                placeholder="ex:mid9653@gmail.com"
                class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary" />
            </div>
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">Password</span>
              </h3>
              <input
              required
                v-model="password"
                type="password"
                placeholder="***********"
                class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary" />
            </div>
            <button
          class="border rounded-xl bg-gray-800 hover:bg-[#e60000df] text-white py-2 w-2/4 block mx-auto mt-4">
          Create Admin
        </button>
          </div>
          
        </div>
        
      </form>

     
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import router from "../router";
import axios from "axios";
import '../firebaseInit'
// import auth functions
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {loginUser} from '../../public/Mixins/public'
const { setUser} = loginUser();
const closeLogin = inject('closeLogin');
const userLoggedIN = inject('userLoggedIN')

const email = ref("");
const password = ref("");
const userName = ref("");
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      data.user.displayName = userName.value;
      data.user.photoURL = "../../assets/Images/Logo-Fit&go version 2.png";
      console.log("user:", data.user);

      const admin = {
        id: data.user.uid,
        userName: userName.value,
        Email: email.value,
      };
      axios
        .post("http://localhost:3000/Admins", admin)
        .then((res) =>{ 
          console.log(res.data)
          alert("Admin Has Been Created Successfully")
            window.location.reload()
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => {
      console.log(err.message);
    });
      // router.push("/profile")
    }

</script>

<script>
    export default {
        name:"AdminSignup"
    }
</script>

<style scoped>

</style>