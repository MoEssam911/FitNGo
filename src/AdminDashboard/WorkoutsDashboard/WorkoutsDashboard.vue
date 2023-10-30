<template>
  <div>
    <div class="flex justify-end cursor-pointer" @click="showadd='show'"><div><i class="fa-solid fa-plus text-green-500 mr-2"></i></div><div>Add user</div></div>
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
                        <th scope="col" class="px-6 py-3 w-2/12">AGE</th>
                        <th scope="col" class="px-6 py-3 w-2/12">Gender</th>
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
                        <td class="px-6 py-4">
                          {{ user.age }}
                        </td>
                        <td class="px-6 py-4">
                         {{ user.gender }}
                        </td>
                        <td class="px-6 py-4">
                          <router-link :to="`/usersdata/${user.id}/edit`"><i class="fa-solid fa-pen cursor-pointer"></i></router-link>
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
      name:'usersDashboard',
    
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
     let conf = confirm(`Are you sure you want to delete ${this.users['Names']} ?`)
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