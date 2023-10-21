<template>
  <footer class="text-white p-14 flex flex-wrap md:items-center md:justify-between sticky top-[100vh]">
    <div class="md:w-auto sm:w-6/12 w-full">
      <h3 class="text-xl font-bold mb-3">Contact Us</h3>
      <h6 class="my-2"><i class="fa-solid fa-phone me-3"></i><span>01154569204</span></h6>
      <h6 class="my-2"><i class="fa-solid fa-envelope me-3"></i><span>mohamed.elsimi@outlook.com</span></h6>
      <h6><i class="fa-solid fa-location-dot me-3"></i><span>Cairo,Egypt</span></h6>
    </div>
    <div class="md:w-auto w-full text-center md:order-none order-2 md:mt-0 mt3 md:mx-4 mx-0">
      <h3 class="uppercase font-bold mb-3">Follow Us On Social Media</h3>
      <div class="flex justify-between">
        <a href=""><i class="fa-brands fa-x-twitter mx-3 text-2xl hover:text-red-600"></i></a>
        <a href=""><i class="fa-brands fa-facebook mx-3 text-2xl hover:text-red-600"></i></a>
        <a href=""><i class="fa-brands fa-instagram mx-3 text-2xl hover:text-red-600"></i></a>
        <a href=""><i class="fa-brands fa-youtube mx-3 text-2xl hover:text-red-600"></i></a>
      </div>
    </div>
    <div class="md:w-auto sm:w-6/12 w-full md:text-start sm:text-end text-left sm:mt-0 my-3">
      <h3 class="text-xl font-bold mb-3">Menu</h3>
      <div class="flex flex-wrap box-border">
         <router-link to="/" class="md:w-6/12  my-1 w-full">Home</router-link>
         <router-link to="/trainers" class="md:w-6/12  my-1 w-full">Trainers</router-link>
         <router-link to="/shop" class="md:w-6/12  my-1 w-full">E-Shop</router-link>
         <router-link to="/" class="md:w-6/12  my-1 w-full">Tools</router-link>
         <router-link to="/workouts" class="md:w-6/12  my-1 w-full">Workouts</router-link>
         <router-link to="/About" class="md:w-6/12  my-1 w-full">About</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped>
footer{
  min-height: 200px;
  background: #000000af url(../../assets/Images/footer.jpg) no-repeat 100%/100%;
  background-size: cover;
  background-blend-mode: multiply;
}
</style>