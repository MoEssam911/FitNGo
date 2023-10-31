<template>
  <main class="bg-secondary text-dark bg-opacity-50">
    <div class="container" v-if="!paidFor">
      <div class="pt-28 flex gap-3 items-center">
        <img
          class="ml-1"
          src="../../assets/Images/Logo-Fit&go version 2.png"
          alt="logo"
          width="40" />
        <h1 class="text-3xl text-center font-bold">Checkout</h1>
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Payment -->
        <div class="bg-white rounded-2xl md:w-9/12 md:mb-12 ">
          <section class="p-7 border-b">
            <div class="flex justify-between">
              <h2 class="text-xl font-semibold">
                <span class="pr-3">1</span> Shipping Address
              </h2>
              <div>
                <p>
                  <span class="text-lg font-semibold mr-3">Name:</span>
                  {{ fullName }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Mobile:</span>
                  {{ mobilNum }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Street:</span>
                  {{ address.street }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Building:</span>
                  {{ address.building }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Area:</span>
                  {{ address.area }}
                </p>
              </div>
              <button
                @click="showHideAddress"
                class="border border-primary hover:bg-primary hover:text-white font-semibold px-5 h-11 rounded-lg">
                Change
              </button>
            </div>
          </section>
          <section class="p-7">
            <h2 class="text-xl font-semibold">
              <span class="pr-3">2</span> Payment Method
            </h2>
            <div class="my-5">
              <input type="checkbox" id="cash" class="accent-primary mr-3" />
              <label for="cash" class="select-none text-lg"
                >Cash On Delivery</label
              >
              <div>
                <p class="ml-6 pt-3">
                  <i
                    class="fa-solid fa-hand-holding-dollar text-primary mr-2"></i
                  ><em
                    >Now you can pay on delivery
                    <span class="text-primary ml-1">Or</span></em
                  >
                </p>

                <p class="ml-6 pt-3">
                  <i class="fa-regular fa-credit-card text-primary mr-2"></i>
                  <em>You can pay online</em>
                </p>
              </div>
            </div>
            <div>
              <div ref="paypal" class="z-10"></div>
            </div>
          </section>
        </div>

        <!-- cart -->
        <div class="bg-white rounded-2xl md:w-3/12 mb-12">
          <h1 class="text-2xl font-bold text-center p-3 border-b">Your Cart</h1>
          <!-- item -->
          <div
            class="flex flex-col justify-center items-center border-b py-2"
            v-for="(item, index) in cart"
            :key="index">
            <div class="">
              <img :src="item.images[0]" class="w-24 h-28" alt="product" />
            </div>
            <div class="text-sm text-center">
              <p>
                {{ item.title.substring(0, 25) }}
              </p>
              <p>
                <span class="text-primary font-semibold mr-1">{{
                  item.price
                }}</span>
                <span class="font-bold">EGP</span>
              </p>
            </div>
          </div>
          <!-- subtotal -->
          <div class="p-4">
            <!-- <div class="flex justify-between py-2">
              <p class="lg:text-lg md:text-base font-semibold">Shipping:</p>
              <p  class="lg:text-lg md:text-base font-semibold text-primary">Free</p>
            </div> -->
            <div class="flex flex-col justify-center items-center py-2">
              <p class="lg:text-xl md:text-base font-bold ">Total:</p>
              <p  class="lg:text-lg md:text-base font-semibold text-primary">{{ prices }} <span class="font-bold text-base text-dark">EGP</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- change address -->
  <div
    v-if="showAddressModal"
    @click.self="showHideAddress"
    class="bg-black bg-opacity-50 w-full h-full flex justify-center items-center fixed top-0 left-0 z-[100]">
    <div class="text-dark">
      <div class="w-auto bg-white h-auto rounded-3xl p-5">
        <h2 class="text-xl text-center font-semibold mb-5 border-b p-3">
          Add a shipping address
        </h2>
        <form @submit.prevent="submitAddress">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="fullName"
              type="text"
              name="floating_full_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required />
            <label
              for="floating_full_name"
              class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Full Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="mobilNum"
              type="tel"
              name="floating_mobile_number"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required />
            <label
              for="floating_mobile_number"
              class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Mobile Number
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="address.street"
              type="text"
              name="floating_street"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required />
            <label
              for="floating_street"
              class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Street Name
            </label>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="address.building"
                type="text"
                name="floating_building"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required />
              <label
                for="floating_building"
                class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Building <span class="text-xs">name/no</span></label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="address.area"
                type="text"
                name="floating_area"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required />
              <label
                for="floating_area"
                class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >City/Area</label
              >
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model="address.landmark"
              type="text"
              name="floating_street"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required />
            <label
              for="floating_street"
              class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Nearest landmark
            </label>
          </div>

          <div class="m-5 block text-center">
            <button
              class="bg-primary rounded-lg p-2 px-6 text-white font-Manrope text-sm hover:bg-red-800"
              type="submit">
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <div>
    <div v-if="!paidFor">
      <h1>Buy this Lamp - ${{ product.price }} OBO</h1>

      <p>{{ product.description }}</p>

      <img
        width="400"
        src="https://images-na.ssl-images-amazon.com/images/I/61yZD4-mKjL._SX425_.jpg" />
    </div>

    <div v-if="paidFor">
      <h1>Noice, you bought a beautiful lamp!</h1>

      <img src="https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif" />
    </div>

    <div ref="paypal"></div>
  </div> -->
  <component
    :is="'script'"
    :src="'https://www.paypal.com/sdk/js?client-id=AQPENnpRHIiN_s--JbA5QXXpsa6JPmD71kVfHBUkOQFXVZzTitRous4_YB2HrbhYhurDRH7bj776Zczw'"
    @load="setLoaded"></component>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: function () {
    return {
      user:{},
      cart: [],
      // adress data
      fullName: null,
      mobilNum: null,
      address: {
        street: null,
        building: null,
        area: null,
        landmark: null,
      },
      showAddressModal: false,

      // checkout data
      active: false,
      oneItem: [],
      id: "",
      total: 0,

      // paypal
      loaded: false,
      paidFor: false,
      product: {
        price: this.prices,
        description: '',
      },
    };
  },


  methods: {submitAddress(){

  },
    showHideAddress() {
      this.showAddressModal = !this.showAddressModal;
    },
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    toggle() {
      this.active = !this.active;
    },

    getItem() {
      axios
        .get("http://localhost:3000/cart")
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
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.getData();
        this.$router.go(0);
      }
    },
  },
  computed: {
    prices() {
      for (var i = 0; i < this.oneItem.length; i++) {
        console.log(this.total);
        this.total += parseInt(this.oneItem[i].price.split(",").join(""));
      }
      return this.total;
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.cart = this.user.cart
    this.getItem();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
