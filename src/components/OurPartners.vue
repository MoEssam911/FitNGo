<template>
    <div>
<h2 class="text-2xl text-primary font-bold ml-3">Our Partners</h2>
<section class="flex container p-2">
    <template v-for="logo in partnersLogo" :key="logo">
<div class="circle flex justify-center items-center m-3">
<img src="../assets/Images/gofit.png" alt="">
</div>
</template>    
</section>
    </div>
</template>

<script>
    export default {
        name:"OurPartners",
        data(){
            return {
        partnersLogo : [
        "../../assets/Images/gofit.png",
        "/assets/Images/gofit.png",
        "/assets/Images/gofit.png",
        "/assets/Images/gofit.png",
        "/assets/Images/gofit.png",
        "/assets/Images/gofit.png"
        ]
            }
        }
    }
</script>

<style scoped>
.circle {
    width: 234px;
height: 234px;
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