<template>
  <section>
    <div class="container">
      <div class="cards grid grid-cols-12 gap-4">
        <div
          class=" mt-10 - card hover:shadow-lg transition-all duration-500 border relative overflow-hidden flex flex-col items-center rounded-[40px] h-[450px] grid-cols-3 col-span-3">
          <img
            src="../assets/Images/product1-removebg-preview.png"
            width="150"
            class="mt-20 transition-all duration-500"
            alt="product" />
          <p class="text-center text-2xl font-bold text-dark ">
            Optimum Nutrition Whey Protein
          </p>
          <div class="price flex items-center">
            <p class="text-primary text-center text-2xl font-bold mr-28">EGP1,600.00</p>
            <button class="bg-primary rounded px-2 py-1 text-white w-20">Buy Now</button>
          </div>
        </div>
        <div
          class=" mt-10 - card hover:shadow-lg transition-all duration-500 border relative overflow-hidden flex flex-col items-center rounded-[40px] h-[450px] grid-cols-3 col-span-3">
          <img
            src="../assets/Images/product1-removebg-preview.png"
            width="150"
            class="mt-20 transition-all duration-500"
            alt="product" />
          <p class="text-center text-2xl font-bold text-dark ">
            Optimum Nutrition Whey Protein
          </p>
          <div class="price flex items-center">
            <p class="text-primary text-center text-2xl font-bold mr-28">EGP1,600.00</p>
            <button class="bg-primary rounded px-2 py-1 text-white w-20">Buy Now</button>
          </div>
        </div>
        <div
          class=" mt-10 - card hover:shadow-lg transition-all duration-500 border relative overflow-hidden flex flex-col items-center rounded-[40px] h-[450px] grid-cols-3 col-span-3">
          <img
            src="../assets/Images/product1-removebg-preview.png"
            width="150"
            class="mt-20 transition-all duration-500"
            alt="product" />
          <p class="text-center text-2xl font-bold text-dark ">
            Optimum Nutrition Whey Protein
          </p>
          <div class="price flex items-center">
            <p class="text-primary text-center text-2xl font-bold mr-28">EGP1,600.00</p>
            <button class="bg-primary rounded px-2 py-1 text-white w-20">Buy Now</button>
          </div>
        </div>
        <div
          class=" mt-10 - card hover:shadow-lg transition-all duration-500 border relative overflow-hidden flex flex-col items-center rounded-[40px] h-[450px] grid-cols-3 col-span-3">
          <img
            src="../assets/Images/product1-removebg-preview.png"
            width="150"
            class="mt-20 transition-all duration-500"
            alt="product" />
          <p class="text-center text-2xl font-bold text-dark ">
            Optimum Nutrition Whey Protein
          </p>
          <div class="price flex items-center">
            <p class="text-primary text-center text-2xl font-bold mr-28">EGP1,600.00</p>
            <button class="bg-primary rounded px-2 py-1 text-white w-20">Buy Now</button>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Card",
  components: {
    
  },

};
</script>

<style lang="scss" scoped>
.card::before {
  content: "";
  width: 330px;
  height: 330px;
  background-color: #e60000;
  position: absolute;
  top: -100px;
  right: -130px;
  border-radius: 50%;
  z-index: -1;
  transition: 0.5s;
}
.card:hover::before {
  content: "";
  width: 464px;
  height: 458px;
  top: -230px;
}
.card:hover img {
  transition: 0.5s;
  margin-top: 35px;
}
.card .price {
  position: absolute;
  bottom: 5%;
  left: 30%;
  transition: 0.5s;
}
// .card .price button {
//   transform: translateX(150px);
//   transition: 0.5s;
// }
.card:hover .price{
  left: 10px;
  bottom: 10%;
}
.card:hover .price p{
  color: #3A3A3A;
}
</style>
