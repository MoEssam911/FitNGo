<template>
  <div
    @focus="changePop"
    id="popup-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          @click="changePop"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal">
          <i class="fa-solid fa-xmark"></i>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 text-center">
          <i
            class="fa-solid mx-auto mb-4 fa-circle-check fa-3x text-primary"></i>

          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Your order has been placed <span class="text-primary">successfully</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PopTrainer",
  data() {
    return {
      // showPop: "shown",
      trainers: {},
      user: {},
      id: "",
      Clients: [],
      conf: "",
    };
  },
  inject: ["changePop"],
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getUser();
  },

  methods: {
    getUser() {
      axios
        .get(`http://localhost:3000/users/${this.user.id}`)
        .then((res) => {
          // console.log(res.data)
          this.user = res.data;
          // console.log(this.user)
        })
        .catch((err) => console.log(err));
    },
    hide() {
      var showing = setInterval(this.changePop(), 50);
      setTimeout(showing);
    },
  },
};
</script>

<style scoped>
/* .show {
display: block;
}

.hide {
display: none;
} */
</style>
