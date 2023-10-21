import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrainersView from "../views/TrainersView.vue";
import OneTrainerView from "../views/OneTrainerView.vue";
import WorkoutsView from "../views/WorkoutsView.vue";
import WorkoutView from "../views/WorkoutView.vue";
import ToolsPageView from "../views/ToolsPageView.vue";
import About from "../views/AboutView.vue";
import shop from "../components/shop.vue";
import ShopView from "../views/ShopView.vue";
import BodyFatTool from "../components/Tools/BodyFatTool.vue";
import DietPlanTool from "../components/Tools/DietPlanTool.vue";
import BmrTool from '../components/Tools/BmrTool.vue'
import MyPlan from "../components/MyPlan.vue";
import TrainerPlanMaker from "../components/TrainerPlanMaker.vue";
import UserPlans from '../components/UserAccount/UserPlans.vue'
import EditProfile from '../components/UserAccount/EditProfile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/trainers",
      name: "trainers",
      component: TrainersView,
    },
    {
      path: "/trainers/:id",
      name: "OneTrainerView",
      component: OneTrainerView,
    },
    {
      path: "/workouts",
      name: "workouts",
      component: WorkoutsView,
    },

    {
      path: "/workouts/:id",
      name: "workoutView",
      component: WorkoutView,
    },

    {
      path: "/About",
      name: "about",
      component: About,
    },

    {
      path: "/shop",
      name: "shop",
      component: shop,
    },
    {
      path: "/tools",
      name: "ToolsPageView",
      component: ToolsPageView,
    },
    {
      path: "/bodyfattool",
      name: "BodyFatTool",
      component: BodyFatTool,
    },
    {
      path: "/dietplan",
      name: "DietPlanTool",
      component: DietPlanTool,
    },
    {
      path: "/bmrtool",
      name: "BmrTool",
      component: BmrTool,
    },
    {
      path: "/myplan",
      name: "myplan",
      component: MyPlan,
    },
    {
      path: '/TrainerPlanMaker',
      name: 'TrainerPlanMaker',
      component: TrainerPlanMaker
    },
    {
      path: '/UserPlans',
      name: 'UserPlans',
      component: UserPlans
    },
    {
      path: '/EditProfile',
      name: 'EditProfile',
      component: EditProfile
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
