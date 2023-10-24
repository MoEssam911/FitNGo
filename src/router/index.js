import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TrainersView from '../views/TrainersView.vue'
import OneTrainerView from '../views/OneTrainerView.vue'

import WorkoutsView from '../views/WorkoutsView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import About from '../views/AboutView.vue'
import shop from '../components/shop.vue'
import BodyFatTool from '../components/BodyFatTool.vue'
import DietPlan from '../components/DietPlan.vue'
import BmrTool from '../components/ToolsPage.vue'
import item from '../components/item.vue'



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
      component: shop
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
