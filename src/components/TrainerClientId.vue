<template>
  <div
    class="flex flex-col bg-secondary m-4 rounded-xl w-8/12 md:w-9/12 lg:w-9/12"
  >
    <div class="text-black">
      <h1 class="text-l font-bold p-6 float-left">My Client/Id</h1>
      <h1 class="text-l font-bold p-6 float-right">Client Plans</h1>
    </div>

    <div class="w-full justify-center items-center">
      <img
        src="../assets/Images/trainer5.png"
        class="md:ml-44 lg:ml-96 rounded-full w-1/4"
      />
      <h1 class="text-center text-xl mt font-bold text-primary">Amr Sameh</h1>
    </div>

    <div class="p-4 rounded-xl h-full bg-gray-200 grid grid-cols-3">
      <div class="col-span-1 m-2">
        <div class="mb-4">
          <h2 class="text-md font-semibold">Water Consumed</h2>
          <div class="w-3/4 h-2 bg-blue-200"></div>
          <h3 class="text-md font-thin">0 ltr</h3>
        </div>
        <div class="mb-4">
          <h2 class="text-md font-semibold">Steps Walked</h2>
          <div class="w-1/2 h-2 bg-blue-200"></div>
          <h3 class="text-md font-thin">0 ltr</h3>
        </div>
      </div>

      <div class="mb-6 mt-9 col-span-1">
        <div
          class="lg:w-60 lg:h-60 md:w-44 md:h-44 sm:w-20 sm:h-20 xs:w-10 xs:h-10 bg-gray-200 flex items-center rounded-full border-8 border-red-200 justify-center"
        >
          <span class="text-gray-500 lg:text-lg text-md ml-4">
            <span class="text-gray-600 text-md font-bold ml-7">0 kcal</span>
            <br />
            You’ve not yet <br />
            marked your <br />
            consumed items of
            <br />
            <span class="text-black font-semibold ml-7">2800 kcal</span>
          </span>
        </div>
      </div>

      <div class="col-span-1 mt-2 ml-12">
        <div class="mb-4">
          <h2 class="text-md font-semibold">Carbs</h2>
          <div class="w-1/4 h-2 bg-yellow-200"></div>
          <h3 class="text-md font-thin">350g of 350g left</h3>
        </div>
        <div class="mb-4">
          <h2 class="text-md font-semibold">Protein</h2>
          <div class="w-1/2 h-2 bg-green-200"></div>
          <h3 class="text-md font-thin">210 of 210g left</h3>
        </div>
        <div class="mb-4">
          <h2 class="text-md font-semibold">Fat</h2>
          <div class="w-1/3 h-2 bg-red-200"></div>
          <h3 class="text-md font-thin">62g of 62g left</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
