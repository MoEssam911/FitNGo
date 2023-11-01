<template>
  <div class="container grid font-manrope mb-[2%]">
    <!-- no items  -->
    <div v-if="cart.length == 0" class="text-center pt-28 gap-4">
      <img src="../../assets/svg/itemempty-01.svg" alt="">
      <router-link to="/shop">
        <button
          class="bg-primary text-white rounded-lg py-3 px-4">
          Go Shopping
        </button>
      </router-link>
    </div>
    <div v-else>
      <h2 class="text-2xl font-semibold mb-6">Shopping Cart</h2>
      <div class="grid md:grid-row md:grid-flow-col gap-2">
        <div class="">
          <div
            class="flex justify-around bg-secondary rounded-xl p-4 border-b border-primary">
            <div class="lg:text-xl md:text-lg text-base font-semibold">
              <p>Product</p>
            </div>
            <div class="lg:text-xl md:text-lg text-base font-semibold">
              <p>Price</p>
            </div>
            <div class="lg:text-xl md:text-lg text-base font-semibold">
              <p>Quantity</p>
            </div>
          </div>
          <!-- items -->
          <div v-for="(item, index) in cart" :key="index">
            <div
              class="flex justify-between items-center px-5 py-1 gap-2 mx-auto bg-secondary rounded-lg mt-4">
              <div class="flex items-center">
                <router-link :to="`/shop/${item.id}`">
                  <img
                    :src="item.images[0]"
                    class="rounded-xl mix-blend-multiply h-auto"
                /></router-link>
                <p class="text-base">{{ item.title.substring(0, 20) }}</p>
              </div>

              <p class="font-semibold text-primary">{{ item.price }} EGP</p>
              <div class="bg-notify-color rounded-lg py-1 px-2">1</div>

              <!-- For more settings use the AutoHTML plugin tab ... -->
              <div>
                <i
                  @click="remove(index)"
                  class="fa-solid fa-trash text-dark text-xl cursor-pointer hover:text-red-600"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- total  -->
        <div
          class="flex flex-col justify-around p-4 max-h-56 bg-secondary rounded-xl">
          <h3 class="text-xl font-semibold text-center p-2 border-b">
            Cart Summary
          </h3>
          <div class="flex justify-around">
            <div class="font-bold text-lg">Total</div>
            <div class="font-semibold text-lg text-primary">
              {{ prices }} EGP
            </div>
          </div>
          <div class="flex flex-row justify-around gap-2">
            <button
              class="text-[white] opacity-80 bg-primary py-2 font-bold w-1/2 rounded-lg">
              <router-link to="/checkout"> Checkout</router-link>
            </button>
            <button
              class="w-1/2 bg-transparent opacity-60 border-primary border text-primary py-2 font-semibold text-sm rounded-lg">
              <router-link to="/shop">Continue Shopping</router-link>
            </button>
          </div>
        </div>
        <div class="w-2/6 delete">
          <DeletePop
            class="z-50"
            v-if="showPop == true"
            @change="changePop"
            @confirm="confirm"></DeletePop>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DeletePop from "./DeletePop.vue";
import { computed, inject } from "vue";

export default {
  name: "CartComponent",
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getCartItem();
    const flag = this.flag;
  },
  components: {
    DeletePop,
  },
  inject: ["flag"],

  provide() {
    return {
      changePop: this.changePop,
      DItem: computed(() => {
        this.DItem;
      }),
    };
  },
  data() {
    return {
      cart: [],
      id: "",
      user: {},
      total: 0,
      showPop: false,
      DItem: 0,
      flag: false,
    };
  },

  computed: {
    prices() {
      this.total = 0;
      for (var i = 0; i < this.cart.length; i++) {
        console.log(this.total);
        this.total += parseInt(this.cart[i].price.split(",").join(""));
      }
      return this.total;
    },
    itemsIN() {
      return this.cart;
    },
  },
  methods: {
    getCartItem() {
      axios
        .get(`http://localhost:3000/users/${this.user.id}`)
        .then((res) => {
          this.cart = res.data.cart;
          console.log(this.cart);
        })
        .catch((err) => console.log(err));
    },
    confirm(e) {
      this.changePop();

      this.flag = e;
      console.log(this.flag);
      this.remove(this.DItem);
    },
    changePop() {
      this.showPop = !this.showPop;
    },
    remove(index) {
      this.DItem = index;
      console.log(index);
      console.log(this.flag);
      if (this.flag == true) {
        this.changePop();

        this.cart.splice(index, 1);
        this.user.cart = this.cart;
        localStorage.setItem("user", JSON.stringify(this.user));
        axios
          .put(`http://localhost:3000/users/${this.user.id}`, this.user)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        this.flag = false;
        this.getData();
      } else {
        this.changePop();
      }
    },
  },
};
</script>

<style scoped>
.delete {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
