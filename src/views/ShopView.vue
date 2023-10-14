<template>
  <!-- <div class="container">
    <div class="banner w-full h-80 object-">
    </div>
  </div> -->
  <Card></Card>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "ShopViwe",
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url(../assets/Images/banner-am-shoppp.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
