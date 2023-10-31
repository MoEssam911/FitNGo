import { createRouter, createWebHistory } from "vue-router";

const  HomeView = () => import("../views/HomeView.vue") ;
const TrainersView = () => import("../views/TrainersView.vue") ;
const OneTrainerView = () => import("../views/OneTrainerView.vue");
const  ToolsPageView = () => import("../views/ToolsPageView.vue");
const About = () => import("../views/AboutView.vue");
const TrainerPlanMaker = () => import("../components/TrainerPlanMaker.vue");
const UserPlans = () => import('../components/UserAccount/UserPlans.vue')
const TrainerClientPlan = () => import('../components/TrainerClientPlan.vue')
const TrainerDietPlan = () => import('../components/TrainerDietPlanMaker.vue')
const EditProfile = () => import('../components/UserAccount/EditProfile.vue')
const TrainerAccountView = () => import('../views/TrainerAccountView.vue')
const TrainerEditsUser = () => import('../views/TrainerEditsUser.vue')
const EditWorkout = () => import('../views/EditWorkout.vue')
const EditDiet = () => import('../views/EditDiet.vue')
const DietMaker = () => import('../views/DietMaker.vue')
const woMaker = () => import('../views/woMaker.vue')
const UserProfile = () => import('../views/UserProfile.vue')
const WorkoutsView = () => import('../views/WorkoutsView.vue') 
const LoginOrSignUp = () => import('../views/DashboardAdminLogin&signapp.vue')

const shop = () => import ('../components/Shop/shop.vue') 
const item = () => import ('../components/Shop/item.vue')
const cart = () => import ('../components/Shop/CartUpdate.vue')
const checkout = () => import ('../components/Shop/CheckoutUpdated.vue')
const SingleWorkout = () => import ('../views/SingleWorkout.vue')
const ChangeProfilePicture = () => import ('../components/ChangeProfilePicture.vue')
const DashboardView = () => import ('../AdminDashboard/DashboardView.vue')
const EditTrainer = () => import ('../AdminDashboard/TrainersDashboard/TrainersDashboardEdit.vue')
const EditProduct = () => import ('../AdminDashboard/ProductsDashboard/ProductsDashboardEdit.vue')



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
      path: "/:NotFound(.*)*", 
      name: "ErrorPage",
      component: ErrorPage,
      meta: {
        title: 'Error'
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

        title:'Admin'
      }
    },
    {
      path: '/Admin',
      name: 'LoginOrSignUp',
      component: LoginOrSignUp,
      meta: {

        title:'Admin'
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


// router.beforeEach((to, from, next) => {
//   const hasTitle = to.meta && to.meta.title;
//   document.title = hasTitle ? `Fit&Go | ${to.meta.title}` : 'Fit&Go';
//   next();
// });


export default router;
