import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import WorkoutsView from '../views/WorkoutsView.vue'
import WorkoutView from '../views/WokrkoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      props: true
    }
  ]
})

export default router
