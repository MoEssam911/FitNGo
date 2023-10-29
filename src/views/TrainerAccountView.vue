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
          <TrainerAccountVue
            class="col-span-12"
            v-if="toggleComp === 'info'"
          ></TrainerAccountVue>
          <TrainerClients
            class="col-span-12"
            v-if="toggleComp === 'myclients'"
          ></TrainerClients>
          <TrainerClientSpecfic class="col-span-12"
            v-if="toggleComp === 'trainerclispc'"></TrainerClientSpecfic>
          <TrainerClientWPlanVue class="col-span-12"
            v-if="toggleComp === 'workoutplanTrainer'"></TrainerClientWPlanVue>
            <TrainerClientDPlanVue class="col-span-12"
            v-if="toggleComp === 'dietplanTrainer'"></TrainerClientDPlanVue>
            <TrainerDietPlanMaker class="col-span-12"
            v-if="toggleComp === 'dietplanMaker'"></TrainerDietPlanMaker>
            <TrainerPlanMaker class="col-span-12"
            v-if="toggleComp === 'workoutplanMaker'"></TrainerPlanMaker>
        </section>
      </div>
    </main>
  </section>
</template>

<script>
import TrainerSideBar from "../components/Tools/TrainerSideBar.vue";
import TrainerAccountVue from "../components/TrainerAccount.vue";
import TrainerClients from "../components/TrainerClients.vue";
import TrainerClientSpecfic from "../components/TrainerClientId.vue";
import TrainerClientWPlanVue from '../TrainerAccount/TrainerClientWPlan.vue';
import TrainerClientDPlanVue from '../TrainerAccount/TrainerClientDPlan.vue' ;
import TrainerDietPlanMaker from "../components/TrainerDietPlanMaker.vue";
import TrainerPlanMaker from "../components/TrainerPlanMaker.vue";
import MenuIcon from '../components/Tools/MenuIcon.vue'
import router from '../router';
export default {
  name: "TrainerAccountView",
  //   props : {
  //     toggleComp : {
  //         type: String,
  //       required: true,
  //     }
  //   },
  components: {
    TrainerSideBar,
    TrainerAccountVue,
    TrainerClients,
    TrainerClientSpecfic,
    TrainerClientWPlanVue,
    TrainerClientDPlanVue,
    TrainerDietPlanMaker,
    TrainerPlanMaker,
    MenuIcon,
  },
  provide() {
    return {
      ChangeToggle1: () => {
        this.toggleComp = "info";
         
        console.log(this.toggleComp);
      },
      ChangeToggle2: () => {
        this.toggleComp = "myclients";
         
        console.log(this.toggleComp);
      },
      ChangeToggleClient: () => {
        this.toggleComp = "trainerclispc";
         
        console.log(this.toggleComp);
      },
      ClientWPlan: () => {
        this.toggleComp = "workoutplanTrainer";
         
        console.log(this.toggleComp);
      },
      ClientDPlan: () => {
        this.toggleComp = "dietplanTrainer";
         
        console.log(this.toggleComp);
      },
      ClientDPlanMaker: () => {
        this.toggleComp = "dietplanMaker";
         
        console.log(this.toggleComp);
      },
      ClientWPlanMaker: () => {
        this.toggleComp = "workoutplanMaker";
         
        console.log(this.toggleComp);
      },
      toggleComp: this.toggleComp,
    };
  },
  data() {
    return {
      toggleUserSide: false,
      toggleIcons: true,
      toggleComp: "info",
      test: "",
    };
  },
  methods: {
    toggleIconsHandler() {
      this.toggleIcons = !this.toggleIcons;
    },
    toggleUserSideHandler() {
      this.toggleUserSide = !this.toggleUserSide;
    },

  },
};
</script>

<style lang="scss" scoped>
.stritch-icon {
  transform: scale(1.1);
  transform-origin: center;
}
.mini-icons {
  transition: 1s;
}
.hide-icons {
  transition: 1s;
  top: 50%;
  z-index: -1;
}
.hide-icons div {
  transform: rotate(360deg);
  position: fixed;
  top: 50%;
  right: 5%;
}
.arrow-class {
  transform: rotate(180deg);
}
@media (max-width: 768px) {
  .hide-user-sidebar {
    position: absolute;
    left: -60%;
    z-index: 10;
  }
  .show-user-sidebar {
    position: absolute;
    left: 0;
    z-index: 10;
    /* box-shadow: 1rem 0px 5px 0px black; */
  }
}
</style>
