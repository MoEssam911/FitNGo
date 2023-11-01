<template>
  <div class="h-max">
    <div class="flex gap-5">
      <div class="w-full flex flex-col">
        <div class="text-dark text-2xl mb-3 text-center" v-if="user.trainer==0">
          <img class="opacity-75" src="../assets/svg/NoTrainersvg-01.svg" alt="">
        </div>

        <div v-else
          class="flex flex-col flex-wrap h-auto w-full bg-secondary rounded-3xl p-5 m-3"
        >
          <div>
            <h2 class="text-xl font-bold mb-4">My Stats & Data :</h2>
          </div>
          <div class="flex flex-col justify-center items-center">
            <div class="my-4">
              <img
                class="w-52 h-52 rounded-full object-cover justify-center"
                :src="user.trainer.imageProfile"
              />
            </div>

            <div class="grid grid-cols-2 lg:flex gap-20">
              <div class="flex flex-wrap">
                <label for="" class="text-black text-base font-medium"
                  >Name :</label
                >
                <h2 for="" class="text-primary text-base font-medium">
                  {{ user.trainer.TrainerNames }}
                </h2>
              </div>
              <div class="flex flex-wrap">
                <label for="" class="text-black text-base font-medium"
                  >Rate :</label
                >
                <h2 v-html="user.trainer.Rate" for="" class="text-primary text-base font-medium">
                  
                </h2>
              </div>
              <div class="flex flex-wrap">
                <label for="" class="text-black text-base font-medium"
                  >Subscription Fees :</label
                >
                <h2 for="" class="text-primary text-base font-medium">
                  {{ user.trainer.Fees }}
                </h2>
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
  name: "UserTrainer",
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    // console.log(!!this.user.trainer[0]);
    // if (!this.user.trainer[0].imageProfile) {
    //     this.user.trainer[0].imageProfile = ''
    // }
  },
};
</script>

<style scoped></style>
