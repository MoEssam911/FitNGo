<template>
    <div  class="h-auto bg-secondary rounded-3xl p-9 mb-9">
<TrainerAccountVue></TrainerAccountVue>
    </div>
</template>

<script>
import TrainerAccountVue from '../TrainerAccount.vue';
    export default {
        inject:['changeToggle'],
        components :{
            TrainerAccountVue,
        }
    }
</script>

<style scoped>

</style>