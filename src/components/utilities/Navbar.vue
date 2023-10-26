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
        <router-link to="/UserProfile"><div class="icon-login bg-slate-300 mx-auto mb-1 hover:cursor-pointer"><i class="fa-solid fa-user"></i></div></router-link>
        <h6 class="select-none text-sm hover:cursor-pointer hover:text-red-600" @click="apperLogin">Login</h6>
    </div>
    <i class="fa-solid fa-list responsive-icon hover:cursor-pointer text-right mx-4" @click="displayList"></i>
  </div>
  </header>
</template>

<script>
  export default {
    name:'Navbar',
    data(){
      return{
        toggle:'close',
        windowWidth: window.innerWidth,
      }
    },
    inject: ["isLoggedIn","apperLogin"],
    beforeUnmount() {
      // Remove the resize event listener when the component is unmounted
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    mounted() {
      // Add a listener to update windowWidth when the window is resized
      window.addEventListener('resize', this.updateWindowWidth);
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