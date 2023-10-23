<template>
  <div class="relative w-full">
    <div class="flex gap-5">
      <div class="bg-secondary w-full p-4 rounded-2xl">
        <div class="flex justify-between"><div><i class="fa-solid fa-arrow-left hover:text-primary transition duration-200 cursor-pointer text-lg" @click="ChangeToggleClient"></i></div>
        <div @click="ClientDPlanMaker" class="cursor-pointer"><i class="fa-solid fa-plus text-green-500"></i> Diet Plan</div></div>
        <div class="flex justify-between">
          <i
            class="fa-solid fa-caret-left text-4xl hover:cursor-pointer hover:text-primary inline-block"
            @click="change('left')"
            v-if="planTarget > 0"
          ></i>
          <i
            class="fa-solid fa-caret-right text-4xl hover:cursor-pointer hover:text-primary inline-block ms-auto"
            @click="change('right')"
            v-if="planTarget < maxLength"
          ></i>
        </div>
        <div
          class="overflow-x-auto relative"
          v-for="(plan, index) in plans"
          :key="plan"
        >
          <table
            class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9"
            v-if="planTarget == index"
          >
            <caption class="text-dark text-2xl mb-3">
              My Plan -
              {{
                plan.week
              }}
            </caption>
            <thead class="text-xs uppercase">
              <tr class="bg-primary text-white tracking-wider">
                <th scope="col" class="px-6 py-3 w-1/12">Id</th>
                <th scope="col" class="px-6 py-3 w-4/12">Breakfast</th>
                <th scope="col" class="px-6 py-3 w-4/12">Snack</th>
                <th scope="col" class="px-6 py-3 w-4/12">Launch</th>
                <th scope="col" class="px-6 py-3 w-4/12">Dinner</th>

              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="(ex, index) in plan.table" :key="ex">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark lg:text-base md:text-sm text-xs"
                >
                  {{ (index += 1) }}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark lg:text-base md:text-sm text-xs"
                >
                  {{ ex.breakfast }}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark lg:text-base md:text-sm text-xs"
                >
                  {{ ex.snacks }}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark lg:text-base md:text-sm text-xs"
                >
                  {{ ex.launch }}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark lg:text-base md:text-sm text-xs"
                >
                  {{ ex.dinner }}
                </th>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import UserSideBar from '../Tools/UserSideBar.vue'
// import MenuIcon from '../Tools/MenuIcon.vue'
import axios from "axios";
export default {
  name: "TrainerClientWPlans",
inject:["ClientDPlanMaker",'ChangeToggleClient'],
  components: {
    // UserSideBar,
    // MenuIcon,
  },
  created() {
    axios
      .get("http://localhost:3000/dietplans")
      .then((res) => {
        this.plans = res.data;
        this.maxLength = this.plans.length - 1;
      })
      .catch((err) => console.log(err));
  },
  data() {
    return {
      toggleUserSide: false,
      planTarget: 0,
      maxLength: 0,
      plans: [],
    };
  },
  methods: {
    change(dir) {
      if (dir == "right") {
        if (this.planTarget == this.plans.length - 1) {
          return;
        }
        this.planTarget += 1;
      } else {
        if (this.planTarget == 0) {
          return;
        }
        this.planTarget -= 1;
      }
    },
    toggleUserSideHandler() {
      this.toggleUserSide = !this.toggleUserSide;
    },
  },
};
</script>

<style scoped>
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
