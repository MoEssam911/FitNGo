<template>
  <div>
    <HomeBanner />
    <TrainersFrame></TrainersFrame> 
    <GymLocations></GymLocations>
    <ToolsView />
    <OurPartners></OurPartners>
  </div>

</template>
<script setup>
import HomeBanner from '../components/Home/HomeBanner.vue'
import OurPartners from "../components/Home/OurPartners.vue"
import TrainersFrame from "../components/Home/TrainersFrames.vue"
import GymLocations from "../components/Home/GymLocation/GymLocations.vue"
import ToolsView from '../components/Home/ToolsView.vue'
</script>

 