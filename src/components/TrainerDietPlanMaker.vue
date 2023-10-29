<template>
    <section>
      <div class=" h-max ">
    
  
        <div class="flex gap-5">
          
  
          <div class="w-full">
            
  
            <!-- macro calculator component -->
            <div
              class="flex flex-col flex-wrap h-auto p-4 w-full bg-zinc-300 bg-opacity-50 rounded-3xl">
              <router-link :to="`/TrainerAccount/EditUser/${user.id}/DietPlans`">
              <i
                class="fa-solid fa-arrow-left hover:text-primary transition duration-200 cursor-pointer text-lg"
              ></i>
            </router-link>
              <table class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9" >
                      <caption class="text-dark text-center mb-2 text-2xl">
                        Diet plan:
                      </caption>
                      <thead class="text-xs uppercase">
                        <tr class="border-b" >
                          <td
                            class="px-6 py-4 text-center text-primary text-lg tracking-widest"
                            colspan="8">
                            <label for="">Week : </label>
                            <input type="text" v-model="dietTable.week" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary w-10/12 p-2.5">
                          </td>
                        </tr>
                        <tr class="bg-primary text-white tracking-wider">
                          <th scope="col" class="px-2 lg:px-6 py-3 w-1/12 md:w-1/12 lg:w-1/12">Id</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-1/12 md:w-1/12 lg:w-4/12">Breakfast</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-1/12 md:w-1/12 lg:w-4/12">Snack</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-1/12 md:w-1/12 lg:w-4/12">Launch</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-1/12 md:w-1/12 lg:w-4/12">Dinner</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-1/12 md:w-1/12 lg:w-1/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="diet,index in dietTable.table" :key="diet">
                            
                          <th
                            scope="row"
                            class="py-4 font-medium text-dark whitespace-nowrap w-1/12">
                          {{ index+1 }}</th>
                          <th
                            scope="row"
                            class="py-4 font-medium text-dark whitespace-nowrap w-2/12">
                           <input
                        v-model="diet.breakfast"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary w-full p-2.5"
                        placeholder="Breakfast"
                        required /></th>
                          <td class="py-4 w-2/12">
                            <input
                        v-model="diet.snacks"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary w-full p-2.5"
                        placeholder="Snack"
                        required
                        min="1"
                        max="5" />
                          </td>
                          <td class="py-4 w-2/12">
                            <input
                        v-model="diet.launch"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary w-full p-2.5"
                        placeholder="Launch"
                        required
                       />
                          </td>
                          <td class="py-4 w-2/12">
                            <input
                        v-model="diet.dinner"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary w-full p-2.5"
                        placeholder="Dinner"
                        required
                        />
                          </td>
                          <td class="py-4 w-1/12">
                            <i class="fa-solid fa-plus text-green-500 cursor-pointer" @click="AddRow"></i>
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(index)"></i>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  <button class="btn-primary-hover text-white font-bold" @click="submit()">Submit Plan</button>
                  <div>
                    
                  </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
  </template>
  
  
  <script>
import axios from 'axios'
import router from '../router';
export default {
  name:"TrainerDietPlan",
  inject:['ClientDPlan'],
  data () {
    return {
      id:'',
      user:{},
      dietTable:{
        week:'',
        table:[{
      breakfast : "",
      snacks : "",
      launch : "",
      dinner : "",
      }]
      },    
      id: "",
    }
  },
  created(){
    this.id = this.$route.params.id;
    axios.get(`http://localhost:3000/users/${this.id}`).then((res)=>{
      this.user = res.data;
    }).catch(err=>console.log(err))
  },
  methods :{

    submit() {
      this.user.plans.Diet.push(this.dietTable)
      axios.put(`http://localhost:3000/users/${this.id}`,this.user).then((res)=>{
         console.log(res.data)
         alert('Plan Submit Successfully')
      }).catch((err)=>console.log(err));
      router.push(`/TrainerAccount/EditUser/${this.user.id}/DietPlans`);
    },
    AddRow() {
      this.dietTable.table.push({
      breakfast : "",
      snacks : "",
      launch : "",
      dinner : "",
      })
    },
deleteRow(index) {
    this.dietTable.table.splice(index,1)
},
  },
 
}

  </script>
  
  <style scoped>
  
  </style>