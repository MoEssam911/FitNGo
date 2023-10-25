<template>
    <div class="container">
        <div><h2 class="text-2xl font-bold">Dashboard</h2></div>
        <lists></lists>
<div class="">
<form @submit.prevent="EditTrainer">
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="Onetrainer.TrainerCard"
            type="text"
            name="floating_rate"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_rate"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Image URL</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="Onetrainer.TrainerNames"
            type="text"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Full Name</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="Onetrainer.Description"
            type="text"
            name="floating_desc"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_desc"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Description</label
          >
        </div>
    <div class="mt-8 relative z-0 w-full mb-6 group"><input
            v-model="Onetrainer.Fees"
            type="text"
            name="floating_fees"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_fees"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Subscription Fees</label
          >
        </div>
   
        <button class="btn-primary-hover text-white font-bold  p-2 w-full">Submit Edits</button>
</form>
</div>
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
        provide() {
    return {
        changeView : (togg)=> {
  this.toggle = togg
   }
    };
},
        data(){
            return {
                Onetrainer : {
      TrainerImg: "",
      TrainerCard: "",
      TrainerNames: "",
      Rate: "",
      Description: "",
      Fees: "",
      Clients: [
        {}
      ]
    },
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
                    alert("trainer has been updated successfully :)")
                    
                 }).catch((err)=>console.log(err));
            }
        }
    }
</script>

<style scoped>

</style>