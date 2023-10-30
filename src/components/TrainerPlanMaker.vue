<template>
    <section>
      <div class=" h-max">

  
        <div class="flex gap-5">

  
          <div class="w-full">
            
  
            <!-- macro calculator component -->
            <div
              class="flex flex-col flex-wrap h-auto p-4 w-full bg-zinc-300 bg-opacity-50 rounded-3xl">
              <div><router-link :to="`/TrainerAccount/EditUser/${user.id}/WorkoutsPlans`"><i class="fa-solid fa-arrow-left hover:text-primary transition duration-200 cursor-pointer text-lg"></i></router-link></div>
              <table class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9" >
                      <caption class="text-dark text-2xl mb-2">
                      Workout plan:
                      </caption>
                      <thead class="text-xs uppercase">
                        <tr class="border-b" >
                          <td
                            class="px-6 py-4 text-center text-primary text-lg tracking-widest"
                            colspan="8">
                            <label for="">Month : </label>
                            <input type="text" v-model="fullTable.month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary w-10/12 p-2.5">
                          </td>
                        </tr>
                        <tr class="bg-primary text-white tracking-wider">
                          <th scope="col" class="px-2 lg:px-6 py-3 w-2/12">Id</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-6/12">Exercises</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-2/12">Reps</th>
                          <th scope="col" class="px-2 lg:px-6py-3 w-2/12">Sets</th>
                          <th scope="col" class="px-2 lg:px-6 py-3 w-2/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="ex,index in fullTable.table" :key="ex">
                            
                          <th
                            scope="row"
                            class="px-2 lg:px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ index+1 }}</th>
                          <th
                            scope="row"
                            class="px-2 lg:px-6 py-4 font-medium text-dark whitespace-nowrap">
                           <input
                        v-model="ex.exerciseName"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-10/12 p-2.5"
                        placeholder="Exercise Name"
                        required /></th>
                          <td class="px-2 lg:px-6 py-4">
                            <input
                        v-model="ex.sets"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-8/12 p-2.5"
                        placeholder="Sets"
                        required
                        min="1"
                        max="5" />
                          </td>
                          <td class="px-2 lg:px-6 py-4">
                            <input
                        v-model="ex.reps"
                        type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-8/12 p-2.5"
                        placeholder="Reps"
                        required
                        min="1"
                        max="15" />
                          </td>
                          <td class="px-2 lg:px-6 py-4">
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
  name:"TrainerPlan",
  inject:['ClientWPlan'],
  data () {
    return {
      fullTable:{
        month:'',
        table:[{
      exerciseName : "",
      sets : "",
      reps : "",
      }]
      },
      user:{},  
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
      this.user.plans.Workouts.push(this.fullTable)
      axios.put(`http://localhost:3000/users/${this.id}`,this.user).then((res)=>{
                    console.log(res.data)
                    alert("Submit Workout Successfully");
                  }).catch((err)=>console.log(err));
                  router.push(`/TrainerAccount/EditUser/${this.user.id}/WorkoutsPlans`)
                  window.location.reload()
                
    },
    AddRow() {
      this.fullTable.table.push({
      exerciseName : "",
      sets : "",
      reps : "",
      })
    },
deleteRow(index) {
    this.fullTable.table.splice(index,1)
},
  },
 
}

  </script>
  
  <style scoped>
  
  </style>