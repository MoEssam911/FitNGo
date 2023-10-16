<template>
  <div class="flex justify-center items-center parent bg-white w-full h-full">
    <div class="md:w-8/12 w-11/12 my-10 mx-auto">
    <div class="w-full mx-auto logo mt-3">
      <img src="../../assets/Images/Logo-Fit&go version 2.png" alt="Fit and Go" class="">
    </div>
    <h2 class="text-3xl font-bold text-center text-primary mb-3">Login</h2>
    <div class="w-full">
      <div>
        <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Email</span></h3>
        <input type="email" placeholder="ex:mid9653@gmail.com" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
      </div>
      <div class="mt-3">
        <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">password</span></h3>
        <input type="password" placeholder="*********" class=" outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
      </div>
    </div>
    <button class="border rounded-xl bg-primary hover:bg-[#e60000df] text-white py-2 w-full block mx-auto  mt-4">Login</button>
    <h3 class="text-xl text-center my-3">Or Sign In With</h3>
    <div class="w-3/12 mx-auto flex justify-around">
      <a href=""><i class="fa-brands fa-google text-primary text-3xl "></i></a>
      <a href=""><i class="fa-brands fa-facebook text-[#17359D] text-3xl"></i></a>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name:'LoginLeft',
  }
</script>

<style scoped>
.logo{
  height: 80px;
  width: 80px;
}
.float-text{
  margin-bottom: -6px;
  position: relative;
  z-index: 2;
}
input:focus{
  transform: scaleY(1.03);
}
.parent{
  min-height: 635px;
}
</style>