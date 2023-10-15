import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TrainersView from '../views/TrainersView.vue'

import WorkoutsView from '../views/WorkoutsView.vue'
import WorkoutView from '../views/WokrkoutView.vue'
import About from '../views/AboutView.vue'
import ShopViwe from '../views/ShopView.vue'



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

      path: '/workouts',
      name: 'workouts',
      component: WorkoutsView
    },

    {
      path: '/workouts/:id',
      name: 'workoutView',
      component: WorkoutView,
      props: true,
      path: "/workouts",
      name: "workouts",
      component: WorkoutView
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
  ]
})

export default router
