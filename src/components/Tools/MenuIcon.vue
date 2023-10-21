<template>
  <div class="icon-container" @click="toggleMenuHandler">
    <div class="menu-icon" :class="toggleMenuIcon ? '' : 'opened-menu'">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMenuIcon: true,
    };
  },
  methods: {
    toggleMenuHandler() {
      this.toggleMenuIcon = !this.toggleMenuIcon;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  // border: 2px solid rgb(230 0 0);
  // border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  text-align: center;
}
.menu-icon {
  width: 28px;
  height: 14px;
  position: relative;
}
.menu-icon span {
  position: absolute;
  left: 0;
  width: 20px;
  height: 2px;
  transition: 0.3s;
  background-color: black;
}
.menu-icon span:first-child {
  top: 0;
}
.menu-icon span:nth-child(2) {
  top: 6px;
}
.menu-icon span:last-child {
  top: 12px;
}
.menu-icon.opened-menu span:first-child {
  top: 6px;
  transform: rotate(45deg);
  background-color: rgb(230, 0, 0);
}
.menu-icon.opened-menu span:nth-child(2) {
  opacity: 0;
}
.menu-icon.opened-menu span:last-child {
  top: 6px;
  transform: rotate(-45deg);
  background-color: rgb(230, 0, 0);
}
</style>
