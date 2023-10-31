<template>
  <div class="bg-sky-950 flex justify-between p-4"><h2 class="text-2xl font-bold  text-white rounded-sm">Dashboard</h2><router-link to="/"><div class="text-sm font-bold  text-white cursor-pointer" v-if="loggedIN" @click="logout">Logout</div></router-link></div>
  <div class="container">
    <div class="flex flex-col">
    <lists></lists>
    <div class="">
<TrainersDashboard v-if="toggle==='trainers'"></TrainersDashboard>
<ProductsDashboardVue v-if="toggle==='products'"></ProductsDashboardVue>
<UsersDashboard v-if="toggle==='users'"></UsersDashboard>
<AdminDashboard v-if="toggle==='admin'"></AdminDashboard>
    </div>
</div>
  </div>
</template>

<script>
import router from '../router';
import lists from '../AdminDashboard/Lists.vue';
import TrainersDashboard from '../AdminDashboard/TrainersDashboard/TrainersDashboard.vue'
import ProductsDashboardVue from './ProductsDashboard/ProductsDashboard.vue';
import UsersDashboard from '../AdminDashboard/UsersDashboard/UsersDashboard.vue';
import AdminDashboard from './AdminsDB/AdminDashboard.vue';

export default {
  name: "DashboardView",
  components:{
    TrainersDashboard,
    ProductsDashboardVue,
    UsersDashboard,
    AdminDashboard,
    lists,
    WorkoutsDashboard,
  },
provide() {
    return {
        changeView : (togg)=> {
  this.toggle = togg
   }
    };
},
  data(){
    return {
        toggle:'trainers',
        loggedIN:true
    }
  },
  methods:{
    logout(){
        this.userLoggedIN()
        localStorage.clear();
        localStorage.removeItem('role')
        localStorage.setItem('role','user')
        this.role='user'
        alert("Redirect")
        router.push('/')
        window.location.reload()
      },
      userLoggedIN(){
      this.loggedIN = !this.loggedIN;
      localStorage.setItem('loggedIn',JSON.stringify(this.loggedIN))
      this.user = JSON.parse(localStorage.getItem('user'));
      // window.location.reload();
      // console.log(this.user);
    },
  }
};
</script>

<style scoped>


</style>
