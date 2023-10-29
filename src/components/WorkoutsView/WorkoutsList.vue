<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      <template v-for="(exercise) in exercises" :key="exercise.id">
        <WorkoutsCard :exercise="exercise" />
      </template>
    </div>
</template>

<script>
import WorkoutsCard from '../WorkoutsView/WorkoutsCard.vue';
export default {
  props: ['exercises'],
  components: {
    WorkoutsCard,
  },
}
</script>