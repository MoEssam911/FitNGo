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
      <div
          v-if="errorMsg"
          class="flex items-center my-2 text-sm text-red-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">{{ errorMsg }} </span>
          </div>
        </div>
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
      console.log(data.user.uid);
      axios.get(`http://localhost:3000/users/${data.user.uid}`).then( (res)=>{
            // console.log(res.data);
            user.value = res.data
            // console.log(user);
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(user.value))
            localStorage.removeItem('role')
            localStorage.setItem('role','user')
            localStorage.setItem('fullData',JSON.stringify(true));
            console.log(user.value);
            console.log(res.data);
            updateUser(user.value)
            router.push('/')
            // window.location.reload()


        }).catch((err)=>{
          axios.get(`http://localhost:3000/AllTrainers/${data.user.uid}`).then( (res)=>{
            // console.log(res.data);
            user.value = res.data
            // console.log(user);
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(user.value))
            localStorage.removeItem('role')
            localStorage.setItem('role','trainer')
            localStorage.setItem('fullData',JSON.stringify(true));
            console.log(user.value);
            console.log(res.data);
            updateUser(user.value)
            router.push('/')
            window.location.reload()

        }).catch((err)=>{
          console.log(err);
        })
        })
      console.log(user.value);
      userLoggedIN();
      closeLogin();
      // window.location.reload();
      // router.push('/UserProfile')
    })
    .catch((error) => {
      console.log(error.code);
      if (error.code) {
        errorMsg.value = 'Invalid Email / Password.';
      }
    });
  }
</script>
<script>
  export default {
    name:'LoginLeft',
    // inject:['updateUser']
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