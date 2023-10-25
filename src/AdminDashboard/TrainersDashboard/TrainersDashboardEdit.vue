<template>
    <div>
        <lists></lists>
{{ Onetrainer }}
    </div>
</template>

<script>
import axios from 'axios';
import lists from '../Lists.vue';

    export default {
        name:'EditTrainer',
        components:{
            lists,
        },
        data(){
            return {
                Onetrainer : {},
                id:'',
            }
        },
        created () {
            this.id = this.$route.params.id
                    axios.get(`http://localhost:3000/AllTrainers/${this.id}`).then((res)=>{
                        console.log(res.data)
                        this.Onetrainer = res.data
                    }).catch((err)=>console.log(err))
        },
        methods:{
            EditTrainer(){
                axios.put(`http://localhost:3000/AllTrainers/${this.id}`,this.Onetrainer).then((res)=>{
                    console.log(res.data)
                    alert("your product has been updated successfully :)")
                    
                 }).catch((err)=>console.log(err));
            }
        }
    }
</script>

<style scoped>

</style>