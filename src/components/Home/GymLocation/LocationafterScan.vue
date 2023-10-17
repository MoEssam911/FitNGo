<template>
    
<div class="rounded-xl flex flex-wrap justify-between lg:w-6/12 w-3/12">
    <div class="flex w-6/12 items-center" v-for="n in 6" :key="n">
        <div class="w-3/12 h-fit rounded-lg overflow-hidden circle"><img src="../assets/Images/Partners/golds.png" class="object-contain" alt=""></div>
        <div class="w-4/12 ml-2"><h3>Gold's Gym</h3></div>
        <div class="w-5/12 "><button class="rounded-xl bg-primary text-white px-4 py-2 block mx-auto">Get Direction</button></div>
    </div>
</div>
    
</template>

<script>
    export default {
        name:"LocationafterScan",
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>

</style>