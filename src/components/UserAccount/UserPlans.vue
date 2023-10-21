<template>
    <div class="bg-secondary w-full mt-20 p-6">
        <div class="flex justify-between">
            <i class="fa-solid fa-caret-left text-4xl hover:cursor-pointer hover:text-primary inline-block" @click="change('left')" v-if="planTarget > 0"></i>
            <i class="fa-solid fa-caret-right text-4xl hover:cursor-pointer hover:text-primary inline-block ms-auto" @click="change('right')" v-if="planTarget < maxLength"></i>
        </div>
        <div class=" overflow-x-auto relative" v-for="plan,index in plans" :key="plan">
                    <table
                      class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9"  v-if="planTarget == index">
                      <caption class="text-dark text-2xl mb-3">
                        My Plan - {{ plan.month }}
                      </caption>
                      <thead class="text-xs uppercase">
                        <tr class="bg-primary text-white tracking-wider">
                          <th scope="col" class="px-6 py-3 capitalize">ID</th>
                          <th scope="col" class="px-6 py-3 capitalize">EXERCISE</th>
                          <th scope="col" class="px-6 py-3 capitalize">SETS</th>
                          <th scope="col" class="px-6 py-3 capitalize">REPS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b" v-for="ex,index in plan.table" :key="ex">
                            <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark ">
                            {{ index+=1 }}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark ">
                            {{ ex.exerciseName }}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark ">
                            {{ ex.sets }}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark ">
                            {{ ex.reps }}
                          </th>
                        </tr>
                        
                      </tbody>
                    </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "UserPlans",
        created(){
            axios.get('http://localhost:3000/workoutplans').then((res)=>{
                this.plans=res.data;
                this.maxLength = this.plans.length-1;
            }).catch(err=>console.log(err))
        },
        data(){
            return{
                planTarget : 0,
                maxLength: 0,
                plans:[
                ]
                 
            }
        },
        methods:{
            change(dir){
                if (dir == 'right') {
                    if (this.planTarget == this.plans.length-1) {
                        return;
                    }
                    this.planTarget += 1;
                } else {
                    if (this.planTarget == 0) {
                        return
                    }
                    this.planTarget -= 1;
                }
            }
        }
    }
</script>

<style scoped>

</style>