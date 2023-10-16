<template>
  <div class="container">
    <h3>BMR Calculater</h3>
    <!-- all the section  -->
    <div class="flex lg:flex-row md:flex-col sm:flex-col">
      <!-- left hand side  hand side  -->
      <div class="flex flex-col justify-around">
        <!-- icons div -->
        <div class="flex flex-row justify-around mb-[1%]">
          <div
            class="flex flex-col focus:border-primary focus:border-b-2 selection:border-b-2"
          >
            <i class="fa-solid fa-mars text-primary text-4xl"></i>
            <h5 class="">Malee</h5>
          </div>
          <div class="flex flex-col hover:border-primary hover:border-b-2">
            <i class="fa-solid fa-venus text-4xl"></i>
            <h5 class="">Female</h5>
          </div>
        </div>
        <!-- inputs div -->
        <div>
          <labe for="age">Age</labe>
          <input id="age" type="nummber" id="agge" />
        </div>
        <!-- right hand side  -->
        <div></div>
      </div>
      <!-- right hand side -->
    </div>
  </div>
</template>

<script>
export default {
  name: "bmr",
};
</script>

<style lang="scss" scoped></style>
