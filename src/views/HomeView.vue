

<template>
  <ToolsView />
=======
<script setup>
import OurPartners from "../components/OurPartners.vue"
import Cart from "../components/Cart.vue"
import TrainersFrame from "../components/TrainersFrames.vue"
import GymLocations from "../components/GymLocations.vue"
</script>

<template>
  <div>

    <TrainersFrame></TrainersFrame>
    <GymLocations></GymLocations>
    <OurPartners></OurPartners>
    <Cart></Cart>


  </div>

</template>

<script setup>
import ToolsView from '../components/ToolsView.vue'
</script>