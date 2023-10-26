<template>
  <button
    @click="handleClick"
    class="btn-more-to-explore w-40 h-12 self-center m-5"
  >
    More To Explore
  </button>
</template>

<script>
export default {
  // Define the prop
  props: {
    loadMore: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click", this.loadMore);
    },
  },
};
</script>
