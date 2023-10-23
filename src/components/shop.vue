<template>
  <div class=" flex flex-col">
   <ShopBanners></ShopBanners>
 <ShopCardsandSearchVue></ShopCardsandSearchVue>
  </div>
</template>
<script setup>
import ShopCardsandSearchVue from "./ShopCardsandSearch.vue";
import ShopBanners from "./ShopBanners.vue";
</script>
<script>

export default {
  name: "shop",
 
  
};
</script>

<style scoped>


</style>
