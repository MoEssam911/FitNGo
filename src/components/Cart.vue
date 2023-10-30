<template>

  <div class="container grid font-manrope  mb-[2%] ">
    <div class="grid grid-cols lg:grid-cols md:grid-row md:grid-flow-col gap-2">
      <div class="grid grid-flow-row  h-5/6 ">
        <div class="container pt-[1%] grid grid-cols-10 bg-secondary rounded-xl">
          <div class="col-span-5 ml-[50%]"><p>product</p></div>
          <div class="col-span-3 ml-[5%]"><p>Price</p></div>
          <div class="col-span-1"><p>Quantity</p></div>
        </div> 
       <!-- items -->
        <div 
        v-for="(item, index) in itemsIN" :key="index"
        >
          <div
            class="grid grid-cols-10  mx-auto bg-secondary rounded-lg mt-4 pt-[2%] pb-[2%] items-center gap-4 content-between"
          ><router-link :to="`/shop/${item.id}`">
            <img :src="item.images[0]" class="col-span-2 rounded-xl ml-3 mr-6 h-[90%] mix-blend-multiply " /></router-link>
            <p class="col-span-3 ml-[10%]">{{ item.title.substring(0,20)}}</p>
            <p class="col-span-3 font-semibold text-primary">{{ item.price }} EGP</p>
            <div
              class="col-span-1 bg-notify-color rounded-lg flex justify-center items-center w-1/2"
            >
              2
            </div>

            <!-- For more settings use the AutoHTML plugin tab ... -->
            <i @click="remove(index)" class="fa-solid fa-trash text-notify-color text-xl cursor-pointer"></i>
          </div>
        </div>
      </div>
      <!-- total  -->
      <div

        class="flex flex-col  lg:w-[300px] md:w-[300] sm:w-full h-[200px] bg-secondary md:mt-[20%] rounded-xl  mx-[10%]  pt-[2%] pb-[2%]"

      >
        <!-- <h2 class="flex font-bold order justify-center mb-[15%]">Cart Total</h2> -->
        <!-- <div class="flex flex-row justify-around">
          <div class="text-[14px]">subtotal</div>
          <div class="text-primary text-[14px]">{{prices}}EGP</div>
        </div> -->
        <div class="flex flex-row bottom-full justify-around mt-[15%] ">
          <div class="font-extrabold text-[20px]">Total</div>
          <div class="font-semibold text-[20px] text-primary">{{ prices+10 }} EGP</div>
        </div>
        <div class="flex flex-row justify-around  mt-[15%] mb-[5%] mx-[3%]  gap-2">
          <button
            class=" flex-none justify-around  text-[white] opacity-80 bg-primary font-bold  py-[2%] px-[4%] rounded-lg self-center"
          ><router-link to="/checkout">
            Checkout</router-link>
          </button>
          <button
          
            class=" grow bg-transparent opacity-60  border-primary border-[1px] text-primary flex justify-around  py-[2%] px-[4%] font-semibold text-sm  rounded-lg self-center"
          >          <router-link to="/shop">

            Continue Shopping</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { inject } from 'vue';

export default {
  name: "CartComponent",
  created(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getCartItem();
  },

  data(){
    return{
      oneItem:[],
      id: "",
      user:{},
      total:0,
    }
  },

  computed:{
    prices(){
      for(var i=0;i<this.oneItem.length;i++){
        console.log(this.total)
      this.total+= parseInt(this.oneItem[i].price.split(",").join(""))
    } 
    return this.total
    }, 
    itemsIN(){
      return this.oneItem
    }
  },
  methods: {
    getCartItem() {
      axios
        .get(`http://localhost:3000/users/${this.user.id}`)
        .then((res) => {
          this.oneItem = res.data.cart
          console.log(this.oneItem)
          
        })
        .catch((err) => console.log(err));
    },
  remove(index){

       let conf = confirm(`Are you sure you want to delete ?`)
        if (conf==true){
this.oneItem.splice(index,1)
this.user.cart=this.oneItem
axios
      .put(`http://localhost:3000/users/${this.user.id}`, this.user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

          this.getData()
 }

  }
  
};
</script>

<style scoped></style>
