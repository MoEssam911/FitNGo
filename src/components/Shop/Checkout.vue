<template>
  <main class="bg-secondary text-dark bg-opacity-50 h-screen">
    <div class="container">
      <div class="pt-20 flex   items-center"> 
        <img class="mr-[35%] ml-2" src="../../assets/Images/Logo-Fit&go version 2.png" alt="logo" width="50" >
        <h1 class="text-3xl text-center font-bold  pb-5 ">
          Checkout
        </h1>
      </div>
      <section class="container rounded-t-2xl bg-white py-5 border-b">
        <div class="flex justify-between">
          <h2 class="text-xl font-semibold">
            <span class="pr-3">1</span> Shipping Address
          </h2>
          <div>
            <p>Mohamed Essam</p>
            <p>Amin Shawky</p>
            <p>Building 38, Floor 2, Apartment 2</p>
            <p>Cairo, Ein Shams, Helmeyat AZ Zaytoun</p>
          </div>
          <button
            class="border border-primary  hover:bg-primary hover:text-white font-semibold px-5 h-11 rounded-lg">
            Change
          </button>
        </div>
      </section>
      <section class="container rounded-b-2xl bg-white py-5 border-b">
        <h2 class="text-xl font-semibold">
          <span class="pr-3">2</span> Payment Method
        </h2>
        <div class="my-5">
          <input type="checkbox" id="cash" class="accent-primary mr-3">
          <label for="cash" class="select-none text-lg">Cash On Delivery</label>
          <div>
            <p class= "ml-6 pt-3"><i class="fa-solid fa-hand-holding-dollar text-primary mr-2"></i><em>Now you can pay on delivery <span class="text-primary ml-1">Or</span></em></p>
            
            <p  class= "ml-6 pt-3"> <i class="fa-regular fa-credit-card text-primary mr-2"></i> <em>You can pay online</em></p>
          </div>
        </div>
        <div>
          <div ref="paypal" class=""></div>
        </div>
      </section>
    </div>
  </main>

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
      active: false,
      oneItem: [],
      id: "",
      total: 0,
      loaded: false,
      paidFor: false,
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg",
      },
    };
  },
  mounted: function () {},
  methods: {
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
