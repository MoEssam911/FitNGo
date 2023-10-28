<template>
    <div>
      <div class="flex justify-end cursor-pointer" @click="showadd='show'"><div><i class="fa-solid fa-plus text-green-500 mr-2"></i></div><div>Add Trainer</div></div>
      <AddTrainer v-if="showadd==='show'"></AddTrainer>
        <table
                      class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9" v-if="showadd===''">
                     
                      <thead class="text-xs uppercase">
                        <tr class="border-b" >
                          <td
                            class="px-6 py-4 text-center text-primary text-lg tracking-widest"
                            colspan="4">
                          </td>
                        </tr>
                        <tr class="bg-sky-950 text-white tracking-wider">
                          <th scope="col" class="px-6 py-3 w-2/12">Id</th>
                          <th scope="col" class="px-6 py-3 w-6/12">Name</th>
                          <th scope="col" class="px-6 py-3 w-2/12">No.Clients</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Subscrption Fees</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="trainer,Indx in trainers" :key="trainer">
                            
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ Indx+1 }}</th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ trainer.TrainerNames }}</th>
                          <td class="px-6 py-4">
                            {{ trainer.Clients.length }}
                          </td>
                          <td class="px-6 py-4">
                           {{ trainer.Fees }}
                          </td>
                          <td class="px-6 py-4">
                            <router-link :to="`/trainersdata/${trainer.id}/edit`"><i class="fa-solid fa-pen cursor-pointer"></i></router-link>
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(trainer.id)"></i>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
    </div>
</template>

<script>
import axios from 'axios'
import AddTrainer from '../TrainersDashboard/TrainersDashboardAdd.vue'
    export default {
        name:'TrainersDashboard',
        components:{
          AddTrainer,
        },
        data(){
            return {
          trainers: [],
          id: '',
          showadd:'',
          
            }
        },
        created(){
          axios.get("http://localhost:3000/AllTrainers").then((res)=>{
            this.trainers = res.data
          }).catch((err)=>console.log(err))
        },
        methods:{
          deleteRow(id){
       let conf = confirm(`Are you sure you want to delete ${this.trainers['TrainerNames']} ?`)
        if (conf==true){
          axios.delete(`http://localhost:3000/AllTrainers/${id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
            this.getData()
        }
    },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>