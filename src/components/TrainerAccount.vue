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
                :src="user.imageProfile"
              />
            </div>

            <div class="grid grid-cols-2 lg:flex gap-20 ">
              <div class="flex flex-wrap">
                <label for="" class="text-black text-base font-medium">Name :</label>
                <h2 for="" class="text-primary text-base font-medium">{{ user.TrainerNames }}</h2>
              </div>
              <div class="flex flex-wrap ">
                <label for="" class="text-black text-base font-medium">Clients :</label>
                <h2 for="" class="text-primary text-base font-medium" v-if="user.Clients.length">{{ user.Clients.length }}</h2>
              </div>
              <div class="flex flex-wrap">
                <label for="" class="text-black text-base font-medium"
                  >Rate :</label>
                <span v-html="user.Rate" for="" class="text-primary text-base font-medium"></span>
              </div>
              <div class="flex flex-wrap">
                <label for="" class="text-black text-base font-medium"
                  >Subscription Fees :</label
                >
                <h2 for="" class="text-primary text-base font-medium">{{ user.Fees }}</h2>
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
  data(){
    return{
      user:{},
    }
  },
  created(){
    if (localStorage.getItem('role') == 'trainer') {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
};
</script>

<style scoped></style>
