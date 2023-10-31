<template>
    <div>
      <div class="flex justify-between cursor-pointer mt-10" >
        <div v-if="showadd==='crt'" @click="showadd=''"><i class="fa-solid fa-arrow-left"></i></div>
        <div v-if="showadd===''" @click="showadd='crt'" class="flex items-center"><i class="fa-solid fa-plus text-green-500 mr-2"></i><div>Create Admin</div></div>
      </div>
<SignUpAdmin v-if="showadd==='crt'"></SignUpAdmin>
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
                          <th scope="col" class="px-6 py-3 w-2/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="admin,Indx in admins" :key="admin">
                            
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ Indx+1 }}</th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ admin.userName }}</th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ admin.Email }}</th>
                          <td class="px-6 py-4">
                           
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(admin.id)"></i>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
    </div>
</template>

<script>
import axios from 'axios'
import SignUpAdmin from '../SignUpAdmin.vue'
    export default {
        name:'AdminDashboard',
        data(){
            return {
          admins: [],
          id: '',
          showadd:'',
          
            }
        },
        components:{
          SignUpAdmin,
        },
        created(){
          axios.get("http://localhost:3000/Admins").then((res)=>{
            this.admins = res.data
          }).catch((err)=>console.log(err))
        },
        methods:{
          deleteRow(id){
       let conf = confirm(`Are you sure you want to delete ${this.admins.adminName} ?`)
        if (conf==true){
          axios.delete(`http://localhost:3000/admins/${id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
            this.getData()
        }
    },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>