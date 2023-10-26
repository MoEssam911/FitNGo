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
          <div class="flex h-8 gap-1">
            <div>
              <input
                class="cell w-full md:w-20 lg:w-20 h-8 border mt-2 ml-2 px-3 py-2"
                @click="toggle"
                placeholder="Month"
              />
              <div v-if="active">Menu</div>
            </div>
            <div>
              <input
                class="cell w-full md:w-20 lg:w-20 h-8 border mt-2 ml-2 px-3 py-2"
                @click="toggle"
                placeholder="Year"
              />
              <div v-if="active">Menu</div>
            </div>
            <div>
              <input
                class="cell w-full md:w-16 lg:w-16 h-8 border mt-2 ml-2 px-3 py-2"
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
        <div class="grid grid-cols-3 p-4"
        v-for="(item, index) in oneItem" :key="index"
        >
          <div class="col-span-1">
            <img
            :src="item.images[0]"
              class="w-24 h-28 p-4"
              alt=""
            />
          </div>
       
          <div class="col-span-2 text-sm"
          >
            <p>
            {{item.title.substring(0,25)}}<br />
              {{ item.price }}<br />
              <span class="font-bold">EGP</span>
            </p>
          </div>
        </div>
        <hr class="m-4" />
        <div class="grid grid-cols-3 p-4">
   
      
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
            <h3>{{ prices }} <span class="font-bold">EGP</span></h3>
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
            <h3>{{ prices }} <span class="font-bold">EGP</span></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CheckOut",
  data() {
    return {
      active: false,
      oneItem:[],
      id: "",
      total:0,
    };
  },
  created() {
    this.getItem();
  },
  computed:{
    prices(){
      for(var i=0;i<this.oneItem.length;i++){
        console.log(this.total)
      this.total+= parseInt(this.oneItem[i].price.split(",").join(""))
    } 
    return this.total
    }, },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  
  getItem() {
      axios
        .get("http://localhost:3000/cart")
        .then((res) => {
          this.oneItem = res.data
          console.log(this.oneItem)
          
        })
        .catch((err) => console.log(err));
    },
  remove(id){

       let conf = confirm(`Are you sure you want to delete ?`)
        if (conf==true){
          axios.delete(`http://localhost:3000/cart/${id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
            this.getData()
        }
  }
}};
</script>

<style lang="scss" scoped></style>
