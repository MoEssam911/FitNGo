<template>
  <div class="container grid font-manrope mb-12">
    <div class="text-black m-4 p-4">
      <h1 class="text-2xl font-bold">Checkout</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div class="md:col-span-1 lg:col-span-1">
        <div class="flex justify-between p-4">
          <h1>Address _________ Shipping ________ Payment</h1>
        </div>
        <div class="mt-4">
          <button
            class="bg-gray-200 m-[5%] text-black font-bold px-6 py-2 rounded-lg self-center outline-4 outline-gray-300"
          >
            PayPal
          </button>

          <button
            class="m-[5%] text-[white] bg-primary font-bold py-2 px-4 rounded-lg self-center"
          >
            CridetCard
          </button>
        </div>
        <div>
          <h3 class="text-xl mb-4 mt-4">Payment Details</h3>
          <!-- <div class="flex items-center mt-2">
                        <input type="text" id="cardName"  placeholder="Cardholder Name" >
                        <label for="cardName" class="ml-2"></label>
                </div> -->
          <form action="">
            <!-- <div class=" items-center  w-full md:w-60 lg:w-60 m-2">
                        <input class="border-2 border-gray-300 p-2 rounded-md" type="text" id="coupon"  placeholder="Enter coupon code here" >
                        <label for="coupon" class="m-2"></label>
                  </div> -->
            <div>
              <input
                class="cell w-full md:w-60 lg:w-60 h-8 m-2"
                type="text"
                placeholder="Cardholder Name"
              />
            </div>
            <div>
              <input
                class="cell w-full md:w-60 lg:w-60 h-8 border m-2"
                type="text"
                placeholder="Card Number"
              />
            </div>
          </form>
          <div class="flex w-full md:w-60 lg:w-60 h-8 gap-3">
            <div>
              <input
                class="cell w-full md:w-20 lg:w-20 h-8 border m-2 px-3 py-2"
                @click="toggle"
                placeholder="Month"
              />
              <div v-if="active">Menu</div>
            </div>
            <div>
              <input
                class="cell w-full md:w-20 lg:w-20 h-8 border m-2 px-3 py-2"
                @click="toggle"
                placeholder="Year"
              />
              <div v-if="active">Menu</div>
            </div>
            <div>
              <input
                class="cell w-full md:w-20 lg:w-20 h-8 border m-2 px-3 py-2"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
        <button
          class="bg-primary text-white py-2 rounded mt-12 mb-8 w-full md:w-80 lg:w-80"
        >
          Pay with card
        </button>
      </div>

      <div class="md:col-span-1 lg:col-span-1">
        <div class="text-black">
          <h1 class="text-2xl font-bold">Your Cart</h1>
        </div>
        <div class="grid grid-cols-3 p-4">
          <div class="col-span-1">
            <img
              src="../assets/Images/muscletech_creatine_monohydrate_200g_unflavoured_LRG.jpg"
              class="w-24 h-28 p-4"
              alt=""
            />
          </div>
          <div class="col-span-2 text-sm">
            <p>
              Whey Protein Standard Edition 2.2Kg <br />
              Quantity: 1 <br />
              2,900 <br />
              <span class="font-bold">EGP</span>
            </p>
          </div>
        </div>
        <hr class="m-4" />
        <div class="grid grid-cols-3 p-4">
          <div class="col-span-1">
            <img
              src="../assets/Images/muscletech_creatine_monohydrate_200g_unflavoured_LRG.jpg"
              class="w-24 h-28 p-4"
              alt=""
            />
          </div>
          <div class="col-span-2 text-sm">
            <p>
              Whey Protein Standard Edition 2.2Kg <br />
              Quantity: 1 <br />
              2,900 <br />
              <span class="font-bold">EGP</span>
            </p>
          </div>
        </div>

        <div class="flex items-center m-2">
          <input
            class="border-2 border-gray-300 p-2 w-80 rounded-md"
            type="text"
            id="coupon"
            placeholder="Enter coupon code here"
          />
          <label for="coupon" class="m-2"></label>
        </div>

        <div class="grid grid-cols-3 m-4">
          <div class="col-span-1">
            <h4>Subtotal</h4>
          </div>
          <div class="col-span-1 ml-6">
            <h3>4,000 <span class="font-bold">EGP</span></h3>
          </div>
        </div>
        <div class="grid grid-cols-3 m-4">
          <div class="col-span-1">
            <h4>Shipping</h4>
          </div>
          <div class="col-span-1 ml-6">
            <h3>Free</h3>
          </div>
        </div>
        <hr class="w-80" />

        <div class="grid grid-cols-3 m-4">
          <div class="col-span-1">
            <h4>Total</h4>
          </div>
          <div class="col-span-1 ml-6">
            <h3>4,000 <span class="font-bold">EGP</span></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckOut",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped></style>
