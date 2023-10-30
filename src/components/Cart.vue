<template>
  <div class="container grid font-manrope mb-[2%]">
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
        <div v-for="(item, index) in itemsIN" :key="index">
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
                @click="remove(item.id)"
                class="fa-solid fa-trash text-dark text-xl cursor-pointer hover:text-red-600"></i>
            </div>

          </div>
        </div>
      </div>
      <!-- total  -->
      <div
        class="flex flex-col justify-around p-4 max-h-56 bg-secondary rounded-xl">
        <!-- <h2 class="flex font-bold order justify-center mb-[15%]">Cart Total</h2> -->
        <!-- <div class="flex flex-row justify-around">
          <div class="text-[14px]">subtotal</div>
          <div class="text-primary text-[14px]">{{prices}}EGP</div>
        </div> -->
        <h3 class="text-xl font-semibold text-center p-2 border-b">
          Cart Summary
        </h3>
        <div class="flex justify-around">
          <div class="font-bold text-lg">Total</div>
          <div class="font-semibold text-lg text-primary">
            {{ prices + 10 }} EGP
          </div>
        </div>
        <div class="flex flex-row justify-around gap-2">
          <button
            class="text-[white] opacity-80 bg-primary py-2 font-bold w-1/2 rounded-lg">
            <router-link to="/checkout"> Checkout</router-link>
          </button>
          <button
            class="w-1/2 bg-transparent opacity-60 border-primary border text-primary py-2 font-semibold text-sm rounded-lg">
            <router-link to="/shop"> Continue Shopping</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "CartComponent",
  data() {
    return {
      oneItem: [],
      id: "",
      total: 0,
    };
  },
  created() {
    this.getCartItem();
  },
  computed: {
    prices() {
      for (var i = 0; i < this.oneItem.length; i++) {
        console.log(this.total);
        this.total += parseInt(this.oneItem[i].price.split(",").join(""));
      }
      return this.total;
    },
    itemsIN() {
      return this.oneItem;
    },
  },
  methods: {
    getCartItem() {
      axios
        .get(`http://localhost:3000/users/${this.user.id}`)
        .then((res) => {
          this.oneItem = res.data;
          console.log(this.oneItem);
        })
        .catch((err) => console.log(err));
    },
    remove(id) {
      let conf = confirm(`Are you sure you want to delete ?`);
      if (conf == true) {
        axios
          .delete(`http://localhost:3000/cart/${id}`)
          .then((res) => {
            this.$route.router.reload();
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.getData();
      }
    },
  },
};
</script>

<style scoped></style>
