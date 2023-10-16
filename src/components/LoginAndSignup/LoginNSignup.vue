<template>
  <div class="login-signup">
    <div class="flex relative h-full">
      <div class="md:w-2/4 w-3/4" v-if="test == 'login'">
        <transition name="fade">
          <LoginLeft></LoginLeft>
        </transition> 
      </div>  
    <div class="md:w-2/4 w-3/4 ms-auto" v-if="test == 'sign'">
      <transition name="fade">
        <SignRight></SignRight>
      </transition> 
    </div>
    <div class="bg-primary red-card-left" :class="{'red-card-right' :sign}">
      <LoginRight v-if="test == 'login'"></LoginRight>
      <SignLeft v-if="test == 'sign'"></SignLeft>
    </div>
  </div>
  </div>
</template>

<script>
import 'vue';
import LoginLeft from './LoginLeft.vue'
import LoginRight from './LoginRight.vue'
import SignLeft from './SignLeft.vue';
import SignRight from './SignRight.vue'
  export default {
    name:'LoginNSignup',
    components:{
      LoginLeft,
      LoginRight,
      SignLeft,
      SignRight,
    },
    data(){
      return{
        test:'login',
        sign:false,
        // sign2:false,
      }
    },
    methods:{
      change(){
        if (this.test == 'login') {
          this.test = 'sign'
          this.sign = true;
        } else {
          this.test = 'login'
          this.sign = false;
        }
      },
      // changeStyle(){
      // }
    },
    provide() {
      return {
        test: this.test,
        change: this.change,
      };
    },
  }
</script>

<style scoped>
/* .bgw{
  background-color: white;
  transition: background 0.3s ease-in;
}
.bgp{
  background-color: #E60000;
  transition: background 0.3s ease-in;
}
.bgwhite{
  background-color: white;
  transition: background 0.3s ease-in;
} */
.red-card-left{
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  transition: right 0.5s ease, left 0.5s ease;
  z-index: 12;
}
.red-card-right{
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  transition: right 0.5s ease, left 0.5s ease;
  z-index: 12;
}
@media (max-width: 768px) {
  .red-card-left{
  position: absolute;
  left: 75%;
  top: 0;
  width: 25%;
  height: 100%;
  transition: right 0.5s ease, left 0.5s ease;
  z-index: 12;
}
.red-card-right{
  position: absolute;
  left: 0;
  top: 0;
  width: 25%;
  height: 100%;
  transition: right 0.5s ease, left 0.5s ease;
  z-index: 12;
}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>