import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrainersView from "../views/TrainersView.vue";
import OneTrainerView from "../views/OneTrainerView.vue";
import ToolsPageView from "../views/ToolsPageView.vue";
import About from "../views/AboutView.vue";
import shop from "../components/shop.vue";
import BodyFatTool from "../components/Tools/BodyFatTool.vue";
import DietPlanTool from "../components/Tools/DietPlanTool.vue";
import BmrTool from '../components/Tools/BmrTool.vue'
import MyPlan from "../components/MyPlan.vue";
import TrainerPlanMaker from "../components/TrainerPlanMaker.vue";
import UserPlans from '../components/UserAccount/UserPlans.vue'
import TrainerClientPlan from '../components/TrainerClientPlan.vue'
import TrainerDietPlan from '../components/TrainerDietPlanMaker.vue'
import EditProfile from '../components/UserAccount/EditProfile.vue'
import TrainerAccountView from '../views/TrainerAccountView.vue'
import UserProfile from '../views/UserProfile.vue'
import WorkoutsView from '../views/WorkoutsView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import About from '../views/AboutView.vue'
import shop from '../components/shop.vue'
import BodyFatTool from '../components/BodyFatTool.vue'
import DietPlan from '../components/DietPlan.vue'
import BmrTool from '../components/ToolsPage.vue'
import item from '../components/item.vue'
import SingleWorkout from '../views/SingleWorkout.vue'
import ChangeProfilePicture from '../components/ChangeProfilePicture.vue'
import DashboardView from '../AdminDashboard/DashboardView.vue'
import EditTrainer from '../AdminDashboard/TrainersDashboard/TrainersDashboardEdit.vue'
import EditProduct from '../AdminDashboard/ProductsDashboard/ProductsDashboardEdit.vue'




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

      path: '/shop/:id',
      name: 'item',
      component: item
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: WorkoutsView
    },

    {
      path: '/workouts/:id',
      name: 'SingleWorkout',
      component: SingleWorkout,
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

      path: '/shop',
      name: 'shop',
      component: shop
    },
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
      path: '/TrainerClientPlan',
      name: 'TrainerClientPlan',
      component: TrainerClientPlan
    },
    {
      path: '/TrainerDietPlan',
      name: 'TrainerDietPlan',
      component: TrainerDietPlan
    },
    {
      path: '/EditProfile',
      name: 'EditProfile',
      component: EditProfile
    },
    {

      path: '/TrainerAccount',
      name: 'TrainerAccount',
      component: TrainerAccountView
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/ChangeProfilePicture',
      name: 'ChangeProfilePicture',
      component: ChangeProfilePicture
    },
    {
      path: '/DashboardView',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/trainersdata/:id/edit',
      name: 'EditTrainer',
      component: EditTrainer
    },
    {
      path: '/productsdata/:id/edit',
      name: 'EditProduct',
      component: EditProduct
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
