<template>
    <div>
{{ trainers.TrainerImg }}
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"OneTrainerView",
        data(){
            return {
        trainers:{},
        id:"",
            }
        },
        created(){
            this.getTrainer()
        },
        methods:{
        getTrainer(){
           this.id= this.$route.params.id
           axios.get(`http://localhost:3000/AllTrainers/${this.id}`).then(res=>this.trainers=res.data).catch(err=>console.log(err))
        }
        }
    }
</script>

<style scoped>

</style>