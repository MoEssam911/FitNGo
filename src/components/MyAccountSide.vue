<template>
  <div class="container flex  md:static sm:absolute sm:left-[-500px]">
<div class="flex flex-col justify-around bg-secondary w-1/4 min-w-min ">
  <div class="flex flex-col border-b-2 border-current items-around ">
<img :src="userImg" alt="userName" class="rounded-full ">
<h3 class="text-center text-primary font-extrabold lg:text-base my-[3%] text-sm">{{ userName }}</h3>

  </div>
<div class="flex flex-col items-start mt-[2%] justify-around">
<div class="p-[6%]  hover:bg-primary hover:text-white  w-full "><i class="fa-solid fa-user"></i> Get Trainer</div>
<div class="p-[6%] hover:bg-primary hover:text-white w-full "><i class="fa-solid fa-file-invoice" ></i> My Plan</div>
<div class="p-[6%] hover:bg-primary hover:text-white w-full "><i class="fa-solid fa-shop" ></i> My Shop</div>
<div class="p-[6%] hover:bg-primary hover:text-white w-full "> <i class="fa-solid fa-dumbbell"></i> Tools</div>
</div>
</div>
  </div>
</template>

<script>
  export default {
 data(){
  return{
    userName:'salem mohamed',
    userImg:"../../src/assets/Images/trainer4.png"
  }
 }
  }
</script>

<style scoped>

</style>