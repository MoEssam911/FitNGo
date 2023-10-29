import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrainersView from "../views/TrainersView.vue";
import OneTrainerView from "../views/OneTrainerView.vue";
import ToolsPageView from "../views/ToolsPageView.vue";
import About from "../views/AboutView.vue";
import BodyFatTool from "../components/Tools/BodyFatTool.vue";
import DietPlanTool from "../components/Tools/DietPlanTool.vue";
import MyPlan from "../components/MyPlan.vue";
import TrainerPlanMaker from "../components/TrainerPlanMaker.vue";
import UserPlans from '../components/UserAccount/UserPlans.vue'
import TrainerClientPlan from '../components/TrainerClientPlan.vue'
import TrainerDietPlan from '../components/TrainerDietPlanMaker.vue'
import EditProfile from '../components/UserAccount/EditProfile.vue'
import TrainerAccountView from '../views/TrainerAccountView.vue'
import TrainerEditsUser from '../views/TrainerEditsUser.vue'
import EditWorkout from '../views/EditWorkout.vue'
import EditDiet from '../views/EditDiet.vue'
import DietMaker from '../views/DietMaker.vue'
import woMaker from '../views/woMaker.vue'
import UserProfile from '../views/UserProfile.vue'
import WorkoutsView from '../views/WorkoutsView.vue'
import WorkoutView from '../views/SingleWorkout.vue'

import shop from '../components/shop.vue'
// import BodyFatTool from '../components/Tools/BodyFatTool.vue'
// import DietPlan from '../components/Tools/DietPlanTool.vue'
// import ToolsPage from '../components/ToolsPage.vue'
import item from '../components/item.vue'
import cart from '../components/Cart.vue'
import checkout from '../views/CheckOut.vue'
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
      meta: {
        title: 'Home'
      }
    },
    {
      path: "/trainers",
      name: "trainers",
      component: TrainersView,
      meta: {
        title: 'Trainers'
      }
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
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: WorkoutsView,
      meta: {
        title: 'Workouts'
      }
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
      meta: {
        title: 'About Us'
      }
    },

    {
      path: "/shop",
      name: "shop",
      component: shop,
      meta: {
        title: 'Shop'
      }
    },
    {
      path: "/tools",
      name: "ToolsPageView",
      component: ToolsPageView,
      meta: {
        title: 'Tools'
      }
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

      path: '/TrainerAccount/EditUser/:id',
      name: 'TrainerEditsUser',
      component: TrainerEditsUser
    },
    {

      path: '/TrainerAccount/EditUser/:id/WorkoutsPlans',
      name: 'EditWorkout',
      component: EditWorkout
    },
    {

      path: '/TrainerAccount/EditUser/:id/DietPlans',
      name: 'EditDiet',
      component: EditDiet
    },
    {

      path: '/TrainerAccount/EditUser/:id/DietMaker',
      name: 'DietMaker',
      component: DietMaker
    },
    {

      path: '/TrainerAccount/EditUser/:id/woMaker',
      name: 'woMaker',
      component: woMaker
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
      component: DashboardView,
      meta: {
        title: 'Admin'
      }
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


router.beforeEach((to, from, next) => {
  const hasTitle = to.meta && to.meta.title;
  document.title = hasTitle ? `Fit&Go | ${to.meta.title}` : 'Fit&Go';
  next();
});


export default router;
