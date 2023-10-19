<template>
  <section>
      <div class="">
        <div class="card mb-5">
          <div class="icon z-10">
            <a href="index.html">
              <i class="fa-solid fa-cart-plus text-xl hover:text-2xl hover:rotate-3 transition-all text-white"></i>
            </a>
          </div>
          <div class="product flex flex-col justify-center items-center">
            <img
              src="../assets/Images/product1-removebg-preview.png"
              width="150"
              class="mt-20 transition-all duration-500"
              alt="product" />
            <p class="text-center text-xl font-bold text-dark">
              Optimum Nutrition Whey Protein
            </p>
            <p class="price text-primary text-center text-xl font-bold">
              EGP1,600.00
            </p>
          </div>
          <button class="bg-primary transition rounded px-2 py-1 text-white">
            Buy Now
          </button>
        </div>
      </div>
  </section>


</template>

<script>
export default {
  name: "Card",
  components: {},
};
</script>

<style lang="scss" scoped>
.icon {
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 25px;
  transition: 0.5s;
}
</style>
