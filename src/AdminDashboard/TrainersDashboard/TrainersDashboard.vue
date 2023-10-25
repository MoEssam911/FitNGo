<template>
    <div>
        <table
                      class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9" >
                     
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
                            10
                          </td>
                          <td class="px-6 py-4">
                           {{ trainer.Fees }}
                          </td>
                          <td class="px-6 py-4">
                            <router-link :to="`/trainersdata/${trainer.id}/edit`"><i class="fa-solid fa-pen cursor-pointer"></i></router-link>
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(index)"></i>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'TrainersDashboard',
        data(){
            return {
          trainers: [],
          id: '',
            }
        },
        created(){
          axios.get("http://localhost:3000/AllTrainers").then((res)=>{
            this.trainers = res.data
          }).catch((err)=>console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

</style>