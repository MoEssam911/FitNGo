<template>
  <body>
    <HomeBanner />
   <TrainersFrame />
      <myMap/>
    <ToolsView />
    <OurPartners />
  </body>

</template>

<script setup>
// const myMap = () => import('../components/myMap.vue')
import myMap from '../components/myMap.vue'
import HomeBanner from '../components/Home/HomeBanner.vue'
import OurPartners from "../components/Home/OurPartners.vue"
import TrainersFrame from "../components/Home/TrainersFrames.vue"
import ToolsView from '../components/Home/ToolsView.vue'
</script>

 

