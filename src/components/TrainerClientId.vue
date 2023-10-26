<template>
  <div class="w-full">


  <div
  class="flex flex-col flex-wrap h-auto w-full bg-secondary rounded-3xl p-5 m-3"
  >
    <div class="text-black flex justify-between">
      <div class="flex"><i class="fa-solid fa-arrow-left hover:text-primary transition duration-200 cursor-pointer text-lg" @click="ChangeToggle2"></i>
      <h1 class="text-2xl font-bold ml-2">Selim Mohamed</h1></div>
      <div class="flex flex-col sm:mr-8 md:mr-20">
      <div class="text-sm font-bold  hover:text-primary transition-all duration-200 cursor-pointer" @click="ClientWPlan">Client Workouts Plans</div>
      <div class="text-sm font-bold hover:text-primary transition-all duration-200 cursor-pointer" @click="ClientDPlan">Client Diet Plans</div>
    </div>
    </div>

    <!-- <div class="w-full flex flex-col justify-center items-center">
      <img
        src="../assets/Images/selim.jpeg"
        class="md:ml-44 lg:ml-96 w-52 h-52 rounded-full object-cover"
      />
      <h1 class="text-center text-xl mt font-bold text-primary">Selim Mohamed</h1>
    </div> -->
    <div class="flex gap-5">
        <div class="w-full">
         
            <div class="flex flex-col justify-center items-center ">
                <div class="my-4 ">
              <img
                class="w-52 h-52 rounded-full object-cover"
                src="../assets/Images/selim.jpeg"
              />
              </div>
            
            <div class="flex gap-16 md:gap-20 lg:gap-32">
              
              <div class=""><label for="" class="text-black font-medium">Age :</label>
              <h2 for="" class="text-primary font-medium">27</h2></div> 
              <div class=""><label for="" class="text-black font-medium">Weight :</label>
              <h2 for="" class="text-primary font-medium">89 Kg</h2></div>
              <div class="">
              <label for="" class="text-black font-medium">Hieght :</label>
              <h2 for="" class="text-primary font-medium">178 cm</h2></div>
              <div class=""><label for="" class="text-black font-medium">Body Fat :</label>
              <h2 for="" class="text-primary font-medium">12.7%</h2></div>
            </div>
            </div>
            
            <div></div>
          
        </div>
      </div>
    
    
  </div>
</div>
</template>

<script>
export default {
  name: "TrainerClientSpecfic",
  inject:['ClientWPlan',"ClientDPlan",'ChangeToggle2'],

};
</script>

<style lang="scss" scoped></style>
