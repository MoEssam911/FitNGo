<template>
  <header>
    <div class="navbar flex px-10 items-center bg-black text-white fixed w-full z-50 top-0">
    <div class="logo"><a href=""><img src="../../assets/Images/Logo-Fit&go version 2-white.png" alt=""></a></div>
    <div class="navigation ms-auto flex me-4">
      <div class="nav-list mx-4 flex text-white" v-if="this.toggle == 'open' || windowWidth > 830">
        <ul class="list-none flex">
        <router-link to="/"><li class="mx-2 hover:text-primary">Home</li></router-link>
        <router-link to="/trainers"><li class="mx-2 hover:text-primary" v-if="role=='user'">Trainers</li></router-link>
        <router-link to="/shop"><li class="mx-2 hover:text-primary">E-Shop</li></router-link>
        <li class="mx-2 hover:text-primary hover:cursor-pointer" @click="apperLogin" v-if="!loggedIN && role=='user'">Tools</li>
        <router-link to="/UserProfile" v-if="loggedIN && role=='user'"><li class="mx-2 hover:text-primary">Tools</li></router-link>
        <router-link to="/workouts"><li class="mx-2 hover:text-primary">Workouts</li></router-link>
        <router-link to="/About"><li class="mx-2 hover:text-primary">About</li></router-link>
      </ul>
      
      </div>
      <router-link to="/cart"><a href=""><i class="fa-solid fa-cart-shopping mx-6 text-right"></i></a></router-link>
    </div>
    <div>
        <div class="icon-login bg-slate-300 mx-auto mb-1 hover:cursor-pointer overflow-hidden" v-if="!loggedIN" @click="apperLogin">
          <i class="fa-solid fa-user" ></i>
        </div>
        <router-link to="/UserProfile"><div class="icon-login bg-slate-300 mx-auto mb-1 hover:cursor-pointer overflow-hidden" v-if="loggedIN && role == 'user'">
          <img class="w-16 h-16 rounded-full object-cover" :src="user.imageProfile" alt="profile picture" />
        </div></router-link>
        <router-link to="/TrainerAccount"><div class="icon-login bg-slate-300 mx-auto mb-1 hover:cursor-pointer overflow-hidden" v-if="loggedIN && role == 'trainer'">
          <img class="w-16 h-16 rounded-full object-cover" :src="user.imageProfile" alt="profile picture" />
        </div></router-link>
        <h6 class="select-none text-sm hover:cursor-pointer hover:text-red-600" v-if="!loggedIN" @click="apperLogin">Login</h6>
        <h6 class="select-none text-sm hover:cursor-pointer hover:text-red-600" v-if="loggedIN" @click="logout">Logout</h6>
    </div>
    <i class="fa-solid fa-list responsive-icon hover:cursor-pointer text-right mx-4" @click="displayList"></i>
  </div>
  </header>
</template>
<script>
import router from '../../router';
  export default {
    name:'Navbar',
    data(){
      return{
        toggle:'close',
        windowWidth: window.innerWidth,
        newloggedIN: false,
        role:'user'
      }
    },
    inject: ["apperLogin","loggedIN","userLoggedIN","user"],
    beforeUnmount() {
      // Remove the resize event listener when the component is unmounted
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    created(){
    this.role = localStorage.getItem('role')
    console.log(this.role);
  

    },
    mounted() {
      // Add a listener to update windowWidth when the window is resized
      window.addEventListener('resize', this.updateWindowWidth);
      window.onbeforeunload = this.handlePageReload;
      this.newloggedIN = JSON.parse(localStorage.getItem('loggedIn'))
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
        this.newloggedIN = JSON.parse(localStorage.getItem('isloggedIn'))
        console.log(this.newloggedIN);
      },
      logout(){
        this.userLoggedIN()
        localStorage.clear();
        localStorage.removeItem('role')
        localStorage.setItem('role','user')
        router.push('/')
        this.role='user'
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