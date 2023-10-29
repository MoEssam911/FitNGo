<template>
    <section class="relative">
    <main class="container">
      <div class="flex gap-2 pb-6 items-center cursor-pointer">
        <div class="md:hidden">
                    <MenuIcon @click="toggleUserSideHandler"></MenuIcon>
                </div>
        <h1
          class="font-Manrope font-bold text-lg"
          @ChangeTest="updatetoggleComp2($event)"
        >
          My Account
        </h1>
      </div>
      <div class="flex gap-5">
        <aside
          class="w-6/12 sm:w-5/12 md:w-4/12 transition-all duration-1000"
          :class="toggleUserSide ? 'show-user-sidebar' : 'hide-user-sidebar'"
        >
          <TrainerSideBar
            class="w-full"
            :toggleComp="toggleComp"
          ></TrainerSideBar>
        </aside>
        <section class="grid grid-cols-12 gap-3 w-full">
          <TrainerClientId class="col-span-12"></TrainerClientId>
        </section>
      </div>
    </main>
  </section>
</template>

<script>
import MenuIcon from '../components/Tools/MenuIcon.vue';
import TrainerSideBar from '../components/Tools/TrainerSideBar.vue';
import TrainerClientId from '../components/TrainerClientId.vue';
    export default {
        name:'TrainerEditsUser',
       components:{
        TrainerClientId,
        TrainerSideBar,
        MenuIcon,
       },
       inject:["toggleComp"]
    }
</script>

<style lang="scss" scoped>

</style>