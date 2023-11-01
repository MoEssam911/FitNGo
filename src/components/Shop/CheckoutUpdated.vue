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
        <!-- shipping -->
        <div class="bg-white rounded-2xl md:w-9/12 md:mb-12">
          <section class="p-7 border-b">
            <div class="flex justify-between">
              <h2 class="text-xl font-semibold">
                <span class="pr-3">1</span> Shipping Address
              </h2>
              <div>
                <p>
                  <span class="text-lg font-semibold mr-3">Name:</span>
                  {{ user.userName }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Mobile:</span>
                  {{ user.phone }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Street:</span>
                  {{ user.address.street }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Building:</span>
                  {{ user.address.building }}
                </p>
                <p>
                  <span class="text-lg font-semibold mr-3">Area:</span>
                  {{ user.address.area }}
                </p>
              </div>
              <button
                @click="showHideAddress"
                class="border border-primary hover:bg-primary hover:text-white font-semibold px-5 h-11 rounded-lg">
                Change
              </button>
            </div>
          </section>
          <!-- payment methods -->
          <CheckoutPop v-if="showPop == true"></CheckoutPop>
          <section class="p-7" v-if="!hasPaid">
            <h2 class="text-xl font-semibold">
              <span class="pr-3">2</span> Payment Method
            </h2>

            <div class="">
              <div class="border-b pb-5">
                <h3 class="text-center text-2xl font-semibold pb-5 m-0">
                  <i class="fa-solid fa-hand-holding-dollar text-primary"></i>
                  Cash On Delivery
                </h3>
                <button
                  @click="changePop"
                  class="transition border border-primary hover:bg-primary hover:text-white text-xl font-semibold w-full py-3 px-5 rounded-xl">
                  Confirm Using Cash
                </button>
              </div>
            </div>
            <div>
              <h3 class="text-center text-2xl font-semibold pb-5 m-0">
                <i class="fa-regular fa-credit-card text-primary mr-2"></i>
                Pay Online
              </h3>
              <div ref="paypal" class="z-10"></div>
            </div>
          </section>
          <section v-if="hasPaid">
            <div class="border p-5 rounded-xl text-center m-6">
              
              <p class="text-2xl">
                <i class="fa-solid fa-truck-fast"></i>
                Your Order is been shipping
              </p>
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
            <div class="flex flex-col justify-center items-center py-2">
              <p class="lg:text-xl md:text-base font-bold">Total:</p>
              <p class="lg:text-lg md:text-base font-semibold text-primary">
                {{ prices }}
                <span class="font-bold text-base text-dark">EGP</span>
              </p>
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
          <!-- <div class="relative z-0 w-full mb-6 group">
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
          </div> -->
          <!-- <div class="relative z-0 w-full mb-6 group">
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
          </div> -->
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

  <component
    :is="'script'"
    :src="'https://www.paypal.com/sdk/js?client-id=AQPENnpRHIiN_s--JbA5QXXpsa6JPmD71kVfHBUkOQFXVZzTitRous4_YB2HrbhYhurDRH7bj776Zczw'"
    @load="setLoaded"></component>
</template>

<script>
import axios from "axios";
import CheckoutPop from "./CheckoutPop.vue";
import router from '../../router';

export default {
  name: "HelloWorld",
  data: function () {
    return {
      user: {},
      cart: [],
      showPop: false,
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
      cart: [],
      id: "",
      total: 0,

      // paypal
      hasPaid: false,
      loaded: false,
      paidFor: false,
      product: {
        price: "",
        description: "",
      },
    };
  },

  components: {
    CheckoutPop,
  },
  provide() {
    return {
      changePop: this.changePop,
    };
  },
  methods: {
    submitAddress() {
      this.user.address.street = this.address.street;
      this.user.address.building = this.address.building;
      this.user.address.area = this.address.area;
      localStorage.setItem("user", JSON.stringify(this.user));
      axios
        .put(`http://localhost:3000/users/${this.user.id}`, this.user)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.showAddressModal = !this.showAddressModal;
    },
    showHideAddress() {
      this.showAddressModal = !this.showAddressModal;
    },

    // pay cash
    changePop() {
        this.showPop = !this.showPop;
        this.hasPaid = true;
    },
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            this.product.price = this.prices;
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
            this.data;
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

    getCartItem() {
      axios
        .get(`http://localhost:3000/users/${this.user.id}`)
        .then((res) => {
          this.cart = res.data.cart;
          console.log(this.cart);
        })
        .catch((err) => console.log(err));
    },
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
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.cart = this.user.cart;
    this.getCartItem();
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
