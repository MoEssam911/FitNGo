<template>
    <section class="mt-12 mb-11 container mx-auto">
        <h2 class="text-2xl text-primary font-bold ml-3 my-5">Our Partners</h2>
<div class="flex container flex-wrap">
    <div v-for="logo in data" :key="logo" class="lg:w-2/12 md:w-4/12 sm:w-6/12">
<div class="circle flex items-center lg:h-72">
<img :src="logo.partnerImg" class="object-contain" alt="">
</div>
</div>    
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
    /* width: 200px; */
/* height: 200px; */
background-color: white;
/* border-radius: 50%; */
filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
overflow: hidden;
transition: .3s;
}
.circle:hover {
    transform: scale(1.1);
}
</style>