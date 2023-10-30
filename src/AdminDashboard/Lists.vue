<template>
    <div class="flex gap-32 justify-center mt-6">
      <div
        class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer" @click="changetoggle('trainers')"
        :class="{activeCol : toggle=='trainers'}"
      >
        Trainers
      </div>
      <div class="text-lg font-semibold">|</div>
      <div
        class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer" @click="changetoggle('products')"
        :class="{activeCol : toggle=='products'}"
      >
        Products
      </div>
      <div class="text-lg font-semibold">|</div>
      <div
        class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer" @click="changetoggle('users')"
        :class="{activeCol : toggle=='users'}"
      >
        Users
      </div>
      <div class="text-lg font-semibold">|</div>
      <div
        class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer" @click="changetoggle('admin')"
        :class="{activeCol : toggle=='admin'}"
      >
        Admins
      </div>
    </div>
    <div class="text-lg font-semibold">|</div>
    <div
      class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer"
      @click="changetoggle('products')"
      :class="{ activeCol: toggle == 'products' }"
    >
      Products
    </div>
    <div class="text-lg font-semibold">|</div>
    <div
      class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer"
      @click="changetoggle('Users')"
      :class="{ activeCol: toggle == 'Users' }"
    >
      Users
    </div>
  </div>
</template>

<script>
export default {
  name: "lists",
  data() {
    return {
      toggle: "trainers",
    };
  },
  inject: ["changeView"],
  methods: {
    changetoggle(togg) {
      this.changeView(togg);
      this.toggle = togg;
    },
  },
};
</script>

<style scoped>
.activeCol {
  color: #e60000;
}
</style>
