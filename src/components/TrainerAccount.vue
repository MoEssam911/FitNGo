<template>
  <div class="h-max">
    <div class="flex gap-5">
      <div class="w-full flex flex-col">
        <div
          class="flex flex-col flex-wrap h-auto w-full bg-secondary rounded-3xl p-5 m-3"
        >
          <div>
            <h2 class="text-xl font-bold mb-4">My Stats & Data :</h2>
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="my-4">
              <img
                class="w-52 h-52 rounded-full object-cover justify-center"
                src="../assets/Images/trainercards/amrsamehcard.png"
              />
            </div>

            <div class="grid grid-cols-2 md:grid-rows-1 gap-32">
              <div class="flex">
                <label for="" class="text-black text-sm md:text-base font-medium">Name :</label>
                <h2 for="" class="text-primary text-sm md:text-base font-medium">Amr Sameh</h2>
              </div>
              <div class="flex">
                <label for="" class="text-black text-sm md:text-base font-medium">Clients :</label>
                <h2 for="" class="text-primary text-sm md:text-base font-medium">5</h2>
              </div>
              <div class="flex">
                <label for="" class="text-black text-sm md:text-base font-medium"
                  >Work Status :</label>
                <h2 for="" class="text-primary text-sm md:text-base font-medium">Gold's Gym</h2>
              </div>
              <div class="flex">
                <label for="" class="text-black text-sm md:text-base font-medium"
                  >Subscription Fees :</label
                >
                <h2 for="" class="text-primary text-sm md:text-base font-medium">900 EGP</h2>
              </div>
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
