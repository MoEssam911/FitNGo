<template>
    <section class="mt-12 container mx-auto">
        <h2 class="text-2xl text-primary font-bold ml-3 my-5">Our Partners</h2>
<div class="flex container p-2">
    <template v-for="logo in data" :key="logo">
<div class="circle flex justify-center items-center m-3">
<img :src="logo.partnerImg" alt="">
</div>
</template>    
</div>
    </section>
</template>

<script>
import axios from "axios";
    export default {
        name:"OurPartners",
        data(){
            return {
        // partnersLogo : [
        // "../../assets/Images/gofit.png",
        // "/assets/Images/gofit.png",
        // "/assets/Images/gofit.png",
        // "/assets/Images/gofit.png",
        // "/assets/Images/gofit.png",
        // "/assets/Images/gofit.png"
        // ]
        data: [],
            }
        },
        created() {
    axios
      .get("http://localhost:3000/partners")
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => console.log(err));
  },
    }
</script>

<style scoped>
.circle {
    width: 200px;
height: 200px;
background-color: white;
border-radius: 50%;
filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
overflow: hidden;
transition: .3s;
}
.circle:hover {
    transform: scale(1.1);
}
</style>