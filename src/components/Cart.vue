<template>
  <div class="container grid font-manrope">
    <div class="grid grid-cols-3">
      <div class="grid grid-flow-row col-span-2 h-5/6">
        <div class="container pt-[1%] grid grid-cols-10 bg-gray-bar rounded-xl">
          <div class="col-span-5 ml-[50%]"><p>product</p></div>
          <div class="col-span-3 ml-[5%]"><p>Price</p></div>
          <div class="col-span-1"><p>Quantity</p></div>
        </div>
        <div>
          <div
            class="grid grid-cols-10 container mx-auto bg-gray-bar rounded-lg mt-4 pt-[2%] pb-[2%] items-center gap-4 content-between"
          >
            <img src="./cover.jpg" class="col-span-2 rounded-xl ml-3 mr-6" />
            <p class="col-span-3 ml-[10%]">ProductNAme</p>
            <p class="col-span-3 font-[800] text-primary">100$</p>
            <div
              class="col-span-1 bg-notify-color rounded-lg flex justify-center items-center w-1/2"
            >
              2
            </div>

            <i class="fa-solid fa-trash col-span-1 text-primary"></i>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col col-span-1 bg-gray-bar mx-auto rounded-xl container w-2/3 mr-[10%] ml-[10%] pt-[2%] pb-[2%]"
      >
        <h2 class="flex font-bold order justify-center mb-[15%]">Cart Total</h2>
        <div class="flex flex-row justify-around">
          <div class="text-[14px]">subtotal</div>
          <div class="text-primary text-[14px]">100$</div>
        </div>
        <div class="flex flex-row justify-around mt-[5%]">
          <div class="font-extrabold text-[20px]">Total</div>
          <div class="font-extrabold text-[20px] text-primary">110$</div>
        </div>
        <button
          class="flex justify-around mt-[15%] mb-[5%] text-[white] bg-primary font-bold py-2 px-4 rounded-lg self-center"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
};
</script>

<style scoped></style>
