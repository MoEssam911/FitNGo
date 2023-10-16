<template>
  <div class="container grid font-manrope mt-[5%] mb-[5%] ">
    <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-rows-3 md:grid-flow-row">
      <div class="grid grid-flow-row col-span-2 h-5/6 ">
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

<!-- For more settings use the AutoHTML plugin tab ... --> 
<svg class="vector" width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.9492 1.56251H16.0898L15.6309 0.649422C15.5336 0.454214 15.3839 0.29001 15.1984 0.175281C15.0129 0.0605526 14.7991 -0.00014785 14.581 8.56089e-06H9C8.78241 -0.000827891 8.56899 0.0596462 8.38418 0.174502C8.19937 0.289359 8.05066 0.453951 7.95508 0.649422L7.49609 1.56251H1.63672C1.42952 1.56251 1.2308 1.64482 1.08429 1.79133C0.937779 1.93784 0.855469 2.13656 0.855469 2.34376L0.855469 3.90626C0.855469 4.11346 0.937779 4.31217 1.08429 4.45868C1.2308 4.6052 1.42952 4.68751 1.63672 4.68751H21.9492C22.1564 4.68751 22.3551 4.6052 22.5016 4.45868C22.6482 4.31217 22.7305 4.11346 22.7305 3.90626V2.34376C22.7305 2.13656 22.6482 1.93784 22.5016 1.79133C22.3551 1.64482 22.1564 1.56251 21.9492 1.56251ZM3.45312 22.8027C3.49039 23.3978 3.75301 23.9562 4.18753 24.3644C4.62205 24.7726 5.1958 24.9999 5.79199 25H17.7939C18.3901 24.9999 18.9639 24.7726 19.3984 24.3644C19.8329 23.9562 20.0955 23.3978 20.1328 22.8027L21.168 6.25001H2.41797L3.45312 22.8027Z" fill="#E60000"/>
</svg>
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
