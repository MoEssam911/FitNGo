<template>
  <div class="container">
    <div><h2 class="text-2xl font-bold">Dashboard</h2></div>
    <div class="flex flex-col">
    <lists></lists>
    <div class="">
<TrainersDashboard v-if="toggle==='trainers'"></TrainersDashboard>
<ProductsDashboardVue v-if="toggle==='products'"></ProductsDashboardVue>
    </div>
</div>
  </div>
</template>

<script>
import lists from '../AdminDashboard/Lists.vue';
import TrainersDashboard from '../AdminDashboard/TrainersDashboard/TrainersDashboard.vue'
import ProductsDashboardVue from './ProductsDashboard/ProductsDashboard.vue';

export default {
  name: "DashboardView",
  components:{
    TrainersDashboard,
    ProductsDashboardVue,
    lists,
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
        toggle:'trainers'
    }
  }
};
</script>

<style scoped>


</style>
