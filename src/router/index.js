import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TrainersView from '../views/TrainersView.vue'
import OneTrainerView from '../views/OneTrainerView.vue'

import WorkoutsView from '../views/WorkoutsView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import About from '../views/AboutView.vue'
import ShopViwe from '../views/ShopView.vue'
import BodyFatTool from '../components/BodyFatTool.vue'
import DietPlan from '../components/DietPlan.vue'
import BmrTool from '../components/ToolsPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: TrainersView
    },
    {
      path: '/trainers/:id',
      name: 'OneTrainerView',
      component: OneTrainerView
    },
    {

      path: '/workouts',
      name: 'workouts',
      component: WorkoutsView
    },

    {
      path: '/workouts/:id',
      name: 'workoutView',
      component: WorkoutView,
    },

    {
      path: '/About',
      name: 'about',
      component: About
    },
    
    {
      path: '/shop',
      name: 'shop',
      component: ShopViwe
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

    {
      path: '/bodyfattool',
      name: 'BodyFatTool',
      component: BodyFatTool
    },
    {
      path: '/dietplan',
      name: 'DietPlan',
      component: DietPlan
    },
    {
      path: '/bmrtool',
      name: 'BmrTool',
      component: BmrTool
    },
  ]

})

export default router
