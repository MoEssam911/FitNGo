<template>
  <div class="flex justify-center items-center parent bg-white w-full h-full md:mt-0">
    <div class=" md:w-8/12 w-11/12 mx-auto md:h-auto md:mt-3 h-[450px]">
    <div class="w-full mx-auto logo mt-1">
      <img src="../../assets/Images/Logo-Fit&go version 2.png" alt="Fit and Go" class="">
    </div>
    <h2 class="text-3xl font-bold text-center text-primary md:mb-3 mb-1">Sign Up</h2>
    <div class="w-full">
      <div class="flex w-full gap-4">
        <div class="w-2/4">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Full Name</span></h3>
          <input type="text" placeholder="ex:Mohamed Elshimi" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
        </div>
        <div class="w-2/4">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Email</span></h3>
          <input type="email" placeholder="ex:mid9653@gmail.com" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
        </div>
      </div>
      <div class="flex w-full gap-4 mt-1">
        <div class="w-2/4">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Password</span></h3>
          <input type="password" placeholder="***********" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
        </div>
        <div class="w-2/4">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Age</span></h3>
          <input type="number" min="0" max="100" placeholder="ex:25" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
        </div>
      </div>
      <div class="flex w-full gap-4 mt-3">
        <div class="w-2/4">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Number</span></h3>
          <input type="text" min="0" placeholder="Number For Whatsapp" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
        </div>
        <div class="w-2/4 flex items-center pt-3">
          <input type="radio" name="gender" id="male" class="hover:cursor-pointer">
          <label class="bg-white text-center px-2 hover:cursor-pointer" for="male">Male</label>
          <input type="radio" name="gender" id="female" class="hover:cursor-pointer">
          <label class="bg-white text-center px-2 hover:cursor-pointer" for="female">Female</label>
        </div>
      </div>
    </div>
    <button class="border rounded-xl bg-primary hover:bg-[#e60000df] text-white py-2 w-full block mx-auto  mt-4">Sign Up</button>
    <h3 class="text-xl text-center my-2">Or Sign In With</h3>
    <div class="w-3/12 mx-auto flex justify-around gap-3">
      <a href=""><i class="fa-brands fa-google text-primary text-3xl "></i></a>
      <a href=""><i class="fa-brands fa-facebook text-[#17359D] text-3xl"></i></a>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'SignRight',
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
  transform: scaleY(1.05);
}
.parent{
  min-height: 635px;
}
</style>