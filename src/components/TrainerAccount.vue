<template>

    <div class="h-max">
      <div class="flex gap-5">
        
        <div class="w-full">
          <div
            class="flex flex-col flex-wrap h-auto w-full bg-secondary  rounded-3xl p-5"
          >
            <div>
              <h2 class="text-xl font-bold mb-4">My Stats & Data :</h2>
            </div>
            <div class="flex flex-col justify-center items-center ">
                <div class="my-4">
              <img
                class="w-52 h-52 rounded-full object-cover"
                src="../assets/Images/trainercards/amrsamehcard.png"
              />
            </div>
            
            <div class="flex gap-32">
              
              <div class=""><label for="" class="text-black font-medium">Name :</label>
              <h2 for="" class="text-primary font-medium">Amr Sameh</h2></div> 
              <div class=""><label for="" class="text-black font-medium">Clients :</label>
              <h2 for="" class="text-primary font-medium">5</h2></div>
              <div class="">
              <label for="" class="text-black font-medium">Work Status :</label>
              <h2 for="" class="text-primary font-medium">Gold's Gym</h2></div>
              <div class=""><label for="" class="text-black font-medium">Subscription Fees :</label>
              <h2 for="" class="text-primary font-medium">900 EGP</h2></div>
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
  name: "TrainerAccount",
 
};
</script>

<style scoped></style>
