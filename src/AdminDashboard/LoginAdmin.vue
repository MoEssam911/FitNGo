<template>
     <div class="flex justify-center items-center parent bg-white w-full h-full">
    <div class="md:w-8/12 w-11/12 my-10 mx-auto">
    <div class="w-full mx-auto logo mt-3">
      <img src="../assets/Images/Logo-Fit&go version 2.png" alt="Fit and Go" class="image-login mx-auto md:w-[69px] w-[50px]">
    </div>
    <h2 class="text-3xl font-bold text-center text-primary mb-3">Admin Login</h2>
    <div class="w-full flex md:flex-wrap justify-center flex-wrap md:gap-4 gap-1">
      <div class="md:w-2/4 w-full">
        <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Email</span></h3>
        <input type="email" v-model="email" placeholder="ex:mid9653@gmail.com" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
      </div>
      <div class="md:w-2/4 w-full">
        <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Password</span></h3>
        <input type="password" v-model="password" placeholder="*********" class=" outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
      </div>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
    <button class="border rounded-xl bg-gray-800 hover:bg-[#e60000df] text-white py-2 w-2/4 block mx-auto mt-4" @click="Login">Login</button>
   
  </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import '../firebaseInit'
// import auth functions
import {
  getAuth,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // FacebookAuthProvider,
  // signInWithPopup,
} from "firebase/auth";
import axios from 'axios';
import {loginUser} from '../../public/Mixins/public'
import router from "../router";
const { user,getUser} = loginUser();
const closeLogin = inject('closeLogin');
const userLoggedIN = inject('userLoggedIN')
const updateUser = inject('updateUser')


const email = ref("");
const password = ref("");
const errorMsg = ref("");
const Login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      errorMsg.value = '';
      axios.get(`http://localhost:3000/Admins/${data.user.uid}`).then( (res)=>{
            // console.log(res.data);
            user.value = res.data
            // console.log(user);
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(user.value))
            localStorage.removeItem('role')
            localStorage.setItem('role','admin')
            console.log(user.value);
            console.log(res.data);
            updateUser(user.value)
            localStorage.setItem('adminLogin',JSON.stringify(true))
            router.push('/DashboardView')

        }).catch((err)=>{
          console.log(err);
        })
        console.log(user.value);
      // userLoggedIN();
      // closeLogin();
      // router.push('/UserProfile')
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code){
        case 'auth/invalid-email':
        errorMsg.value = 'Invalid Email/Password';
        break;
        case 'auth/user-not-found':
          errorMsg.value = 'No account with this email was found';
          break;
          case 'auth/wrong-password':
            errorMsg.value = 'Invalid Email/Password';
            break;
            default :
            errorMsg.value = 'Invalid Email/Password';
            break;
      }
      // console.log(user);
    });
  }
</script>


<script>
    export default {
        name:"AdminLogin"
    }
</script>

<style scoped>

</style>