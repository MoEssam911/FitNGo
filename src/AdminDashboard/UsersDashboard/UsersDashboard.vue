<template>
    <div>
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
                          <th scope="col" class="px-6 py-3 w-6/12">Email</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Gender</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Trainer</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="user,Indx in users" :key="user">
                            
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ Indx+1 }}</th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ user.userName }}</th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ user.Email }}</th>
                          <td class="px-6 py-4">
                            {{ user.gender }}
                          </td>
                          <td class="px-6 py-4">
                           <!-- {{ user.trainer.TrainerNames }} -->
                          </td>
                          <td class="px-6 py-4">
                           
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(user.id)"></i>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'UsersDashboard',
        data(){
            return {
          users: [],
          id: '',
          showadd:'',
          
            }
        },
        created(){
          axios.get("http://localhost:3000/users").then((res)=>{
            this.users = res.data
          }).catch((err)=>console.log(err))
        },
        methods:{
          deleteRow(id){
       let conf = confirm(`Are you sure you want to delete ${this.users.userName} ?`)
        if (conf==true){
          axios.delete(`http://localhost:3000/users/${id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
            this.getData()
        }
    },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>