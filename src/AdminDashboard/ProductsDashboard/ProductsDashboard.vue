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
                          <th scope="col" class="px-6 py-3 w-6/12">Image</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Title</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Price</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="prod,Indx in products" :key="Indx">
                            <template v-if="Indx > pre && Indx <= nxt">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ Indx }}</th>
                          <td class="px-6 py-4">
                            <img :src="prod.image" alt="">
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ prod.title }}</th>
                          <td class="px-6 py-4">
                           {{ prod.price }}
                          </td>
                          <td class="px-6 py-4">
                            <i class="fa-solid fa-pen cursor-pointer"></i>
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(index)"></i>
                          </td>
                        </template>
                        </tr>
                        
                      </tbody>
                    </table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'ProductsDashboard',
        data(){
            return {
          products: [],
          id: '',
          nxt: 10,
          pre: 0,
            }
        },
        created(){
          axios.get("http://localhost:3000/supplements").then((res)=>{
            this.products = res.data
          }).catch((err)=>console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

</style>