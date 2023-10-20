<template>
  <div class="flex justify-center items-center parent bg-white w-full h-full md:mt-0">
    <div class="lg:w-11/12 md:w-10/12 w-11/12 mx-auto md:h-auto mt-[105px]">
    <img src="../../assets/Images/Logo-Fit&go version 2.png" alt="Fit and Go" class="image-login mx-auto md:w-[69px] w-[50px]">
    <h2 class="text-3xl font-bold text-center text-primary md:my-3 my-1">Sign Up</h2>
    <div class="w-full">
      <div class="flex md:flex-nowrap flex-wrap w-full md:gap-4 gap-1">
        <div class="md:w-2/4 w-full">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Full Name</span></h3>
          <input type="text" placeholder="ex:Mohamed Elshimi" class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary">
        </div>
        <div class="md:w-2/4 w-full">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Email</span></h3>
          <input type="email" placeholder="ex:mid9653@gmail.com" class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary">
        </div>
      </div>
      <div class="flex md:flex-nowrap flex-wrap w-full md:gap-4 gap-1 md:mt-3 mt-1">
        <div class="md:w-2/4 w-full">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Password</span></h3>
          <input type="password" placeholder="***********" class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary">
        </div>
        <div class="md:w-2/4 w-full">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Age</span></h3>
          <input type="number" min="0" max="100" placeholder="ex:25" class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary">
        </div>
      </div>
      <div class="flex md:flex-nowrap flex-wrap w-full md:gap-4 gap-1 md:mt-3 mt-1">
        <div class="md:w-2/4 w-full">
          <h3 class="float-text"><span class="bg-white ms-2 text-center px-2">Number</span></h3>
          <input type="text" min="0" placeholder="Number For Whatsapp" class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary">
        </div>
        <div class="md:w-2/4 w-full flex items-center pt-3">
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
  height: calc(100vh - 80px);
}
</style>