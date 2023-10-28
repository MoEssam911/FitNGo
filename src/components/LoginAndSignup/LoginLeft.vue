<template>
  <div class="flex justify-center items-center parent bg-white w-full h-full">
    <div class="md:w-8/12 w-11/12 my-10 mx-auto">
    <div class="w-full mx-auto logo mt-3">
      <img src="../../assets/Images/Logo-Fit&go version 2.png" alt="Fit and Go" class="">
    </div>
    <h2 class="text-3xl font-bold text-center text-primary mb-3">Login</h2>
    <div class="w-full">
      <div>
        <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Email</span></h3>
        <input type="email" v-model="email" placeholder="ex:mid9653@gmail.com" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
      </div>
      <div class="mt-3">
        <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">password</span></h3>
        <input type="password" v-model="password" placeholder="*********" class=" outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
      </div>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
    <button class="border rounded-xl bg-primary hover:bg-[#e60000df] text-white py-2 w-full block mx-auto  mt-4" @click="Login">Login</button>
    <h3 class="text-xl text-center my-3">Or Sign In With</h3>
    <div class="w-3/12 mx-auto flex justify-around gap-3">
      <a href=""><i class="fa-brands fa-google text-primary text-3xl "></i></a>
      <a href=""><i class="fa-brands fa-facebook text-[#17359D] text-3xl"></i></a>
    </div>
  </div>
  </div>
</template>
<script setup>
import { inject, ref } from "vue";
import '../../firebaseInit'
// import auth functions
import {
  getAuth,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // FacebookAuthProvider,
  // signInWithPopup,
} from "firebase/auth";
import axios from 'axios';
import {loginUser} from '../../../public/Mixins/public'
import router from '../../router';
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
      axios.get(`http://localhost:3000/users/${data.user.uid}`).then(async (res)=>{
            // console.log(res.data);
            user.value = res.data
            // console.log(user);
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(user.value))
            console.log(user.value);
            updateUser(user.value)
        }).catch(err=>console.log(err))
        console.log(user.value);
      userLoggedIN();
      closeLogin();
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
    });
  }
</script>
<script>
  export default {
    name:'LoginLeft',
  }
</script>

<style scoped>
.logo{
  height: 80px;
  width: 80px;
}
.float-text{
  margin-bottom: -6px;
  position: relative;
  z-index: 2;
}
input:focus{
  transform: scaleY(1.03);
}
.parent{
  min-height: 635px;
}
</style>