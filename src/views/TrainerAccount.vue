<template>
  <div class="container font-manrope">
    <div class="text-black">
      <h1 class="text-2xl font-bold">My Account</h1>
    </div>
    <div class="flex flex-row justify-between">
      <div
        class="flex flex-col items-center bg-secondary m-4 rounded-xl divide-y-2 divide-gray-500 w-4/12 md:w-3/12 lg:w-3/12"
      >
        <div class="justify-center">
          <img src="../assets/Images/trainer5.png" class="rounded-full mt-2" />
          <h1 class="text-center text-xl mt-4 font-bold text-primary">
            Amr Sameh
          </h1>
        </div>
        <div class="flex flex-col w-full p-2 m-8">
          <div class="flex flex-row bg-primary p-2 rounded-lg">
            <i
              class="fa-solid fa-user text-lg text-white w-2/4 md:w-1/3 lg:w-1/3"
            ></i>
            <h3 class="text-md text-white font-bold w-2/4 md:w-1/3 lg:w-1/3">
              My Data
            </h3>
          </div>

          <div class="flex flex-row p-2">
            <i class="fa-solid fa-user text-lg w-2/4 md:w-1/3 lg:w-1/3"></i>
            <h3 class="text-md text-black font-bold w-[100px]">My Clients</h3>
          </div>
          <div class="flex flex-row p-2">
            <i
              class="fa-solid fa-basket-shopping text-lg w-2/4 md:w-1/3 lg:w-1/3"
            ></i>
            <h3 class="text-md text-black font-bold w-[100px]">My Shop</h3>
          </div>
        </div>
      </div>

      <!-- <TrainerStatsData></TrainerStatsData> -->
      <!-- <TrainerClients></TrainerClients> -->
      <TrainerClientId></TrainerClientId>

    </div>
  </div>
</template>

<script>
import TrainerStatsData from "../components/TrainerStats&Data.vue";
import TrainerClients from "../components/TrainerClients.vue";
import TrainerClientId from "../components/TrainerClientId.vue";
export default {
  name: "TrainerAccount",
  components: {
    TrainerStatsData,
    TrainerClients,
    TrainerClientId,
  },
};
</script>

<style></style>
