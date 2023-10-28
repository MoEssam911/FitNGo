<template>
  <header>
    <div class="navbar flex px-10 items-center bg-black text-white fixed w-full z-50 top-0">
    <div class="logo"><a href=""><img src="../../assets/Images/Logo-Fit&go version 2-white.png" alt=""></a></div>
    <div class="navigation ms-auto flex me-4">
      <div class="nav-list mx-4 flex text-white" v-if="this.toggle == 'open' || windowWidth > 830">
        <ul class="list-none flex">
        <router-link to="/"><a href="" class="hover:text-primary"><li class="mx-2 ">Home</li></a></router-link>
        <router-link to="/trainers"><a href="" class="hover:text-primary"><li class="mx-2 ">Trainers</li></a></router-link>
        <router-link to="/shop"><a href="" class="hover:text-primary"><li class="mx-2 ">E-Shop</li></a></router-link>
        <router-link to="/tools"><a href="" class="hover:text-primary"><li class="mx-2 ">Tools</li></a></router-link>
        <router-link to="/workouts"><a href="" class="hover:text-primary"><li class="mx-2 ">Workouts</li></a></router-link>
        <router-link to="/About"><a href="" class="hover:text-primary"><li class="mx-2 ">About</li></a></router-link>
      </ul>
      
      </div>
      <router-link to="/cart"><a href=""><i class="fa-solid fa-cart-shopping mx-6 text-right"></i></a></router-link>
      <a href=""><i class="fa-solid fa-bell text-yellow-400 text-right"></i></a>
    </div>
    <div>
        <div class="icon-login bg-slate-300 mx-auto mb-1 hover:cursor-pointer overflow-hidden" v-if="!loggedIN" @click="apperLogin">
          <i class="fa-solid fa-user" ></i>
        </div>
        <router-link to="/UserProfile"><div class="icon-login bg-slate-300 mx-auto mb-1 hover:cursor-pointer overflow-hidden" v-if="loggedIN">
          <img class="w-16 h-16 rounded-full object-cover" :src="user.imageProfile" alt="profile picture" />
        </div></router-link>
        <h6 class="select-none text-sm hover:cursor-pointer hover:text-red-600" v-if="!loggedIN" @click="apperLogin">Login</h6>
        <h6 class="select-none text-sm hover:cursor-pointer hover:text-red-600" v-if="loggedIN" @click="logout">Logout</h6>
    </div>
    <i class="fa-solid fa-list responsive-icon hover:cursor-pointer text-right mx-4" @click="displayList"></i>
  </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import {loginUser} from '../../../public/Mixins/public'
import router from '../../router';
// const { getUser} = loginUser();
// const user = ref({});
// const dataFromLocalStorage = localStorage.getItem('user');
// if (dataFromLocalStorage) {
//       user.value = dataFromLocalStorage;
//       if (user.value) {
//         window.location.reload()
        
//       }
// }
// console.log(user.value);
</script>
<script>
import router from '../../router';
// import '../../../public/Mixins/public'
// import { loginUser } from '../../../public/Mixins/public';
  export default {
    name:'Navbar',
    data(){
      return{
        toggle:'close',
        windowWidth: window.innerWidth,
        // user:{},
        newloggedIN: false,
      }
    },
    // mixins:['max'],
    inject: ["apperLogin","loggedIN","userLoggedIN","user"],
    beforeUnmount() {
      // Remove the resize event listener when the component is unmounted
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    mounted() {
      // Add a listener to update windowWidth when the window is resized
      window.addEventListener('resize', this.updateWindowWidth);
      window.onbeforeunload = this.handlePageReload;
      this.newloggedIN = JSON.parse(localStorage.getItem('loggedIn'))
      // this.user = JSON.parse(localStorage.getItem('user'));
      // console.log(this.newloggedIN);
    },
    created(){
      // this.user = loginUser();
      // console.log(this.user);
    },
    beforeDestroy() {
      window.onbeforeunload = null;
    },
    methods:{
      displayList(){
        if(this.toggle == 'close'){
          this.toggle = 'open'
        }else{
          this.toggle ='close';
        }
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
      handlePageReload() {
        // this.user = JSON.parse(localStorage.getItem('user'));
        this.newloggedIN = JSON.parse(localStorage.getItem('isloggedIn'))
        console.log(this.newloggedIN);
      },
      logout(){
        this.userLoggedIN()
        localStorage.clear();
        router.push('/')
      }
    }
  }
</script>

<style scoped>
.navbar{
  min-height: 80px;
}
.icon-login{
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 100%;
}
.logo img{
  height: 60px;
  width: 70px;
}
.responsive-icon{
  display: none;
  font-size: 28px;
}
@media(max-width: 830px) {
  .responsive-icon{
    display: block;
  }
  .nav-list{
    position: absolute !important;
    top: 5rem;
    left: 0;
    display: block;
    width: 100%;
    color: #000;
    text-align: center;
    background: #00000091;
    width: 100%;
    color: #fff;
    margin-left: 0px;
  }
  .nav-list ul{
    display: block;
    left: 0;
    min-width: 300px;
  }
  .nav-list a{
    display: block !important;
    margin-block: 15px;
    left: 0;
    min-width: 75px;
  }
  .nav-list li{
    left: 0;
    width: 100%;
  }
}
</style>