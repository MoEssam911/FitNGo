<template>
  <div class="w-full">


  <div
  class="flex flex-col flex-wrap h-auto w-full bg-secondary rounded-3xl p-5 m-3"
  >
    <div class="text-black flex justify-between">
      <div class="flex"><router-link to="/TrainerAccount">
        <i class="fa-solid fa-arrow-left hover:text-primary transition duration-200 cursor-pointer text-lg" @click="ChangeToggle2"></i>
      </router-link>
      <h1 class="text-2xl font-bold ml-4">{{ user.userName }}</h1></div>
      <div class="flex flex-col sm:mr-8 md:mr-20">
        <router-link :to="`/TrainerAccount/EditUser/${user.id}/WorkoutsPlans`"><div class="text-sm font-bold  hover:text-primary transition-all duration-200 cursor-pointer">Client Workouts Plans</div></router-link>
        <router-link :to="`/TrainerAccount/EditUser/${user.id}/DietPlans`"> <div class="text-sm font-bold hover:text-primary transition-all duration-200 cursor-pointer">Client Diet Plans</div></router-link>
    </div>
    </div>

    <!-- <div class="w-full flex flex-col justify-center items-center">
      <img
        src="../assets/Images/selim.jpeg"
        class="md:ml-44 lg:ml-96 w-52 h-52 rounded-full object-cover"
      />
      <h1 class="text-center text-xl mt font-bold text-primary">Selim Mohamed</h1>
    </div> -->
    <div class="flex gap-5">
        <div class="w-full">
         
            <div class="flex flex-col justify-center items-center ">
                <div class="my-4 ">
              <img
                class="w-52 h-52 rounded-full object-cover"
                :src="user.imageProfile"
              />
              </div>
            
            <div class="flex gap-16 md:gap-20 lg:gap-32">
              
              <div class=""><label for="" class="text-black font-medium">Age :</label>
              <h2 for="" class="text-primary font-medium">{{user.age}}</h2></div> 
              <div class=""><label for="" class="text-black font-medium">Weight :</label>
              <h2 for="" class="text-primary font-medium">{{user.weight}}</h2></div>
              <div class="">
              <label for="" class="text-black font-medium">Hieght :</label>
              <h2 for="" class="text-primary font-medium">{{ user.height }}</h2></div>
              <div class=""><label for="" class="text-black font-medium">Body Fat :</label>
              <h2 for="" class="text-primary font-medium">{{ user.bodyfat }}</h2></div>
            </div>
            </div>
            
            <div></div>
          
        </div>
      </div>
    
    
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "TrainerClientSpecfic",
  inject:['ClientWPlan',"ClientDPlan",'ChangeToggle2'],
  data(){
            return {
        user:{},
        id:'',
            }
        },
        created(){
this.id= this.$route.params.id
axios.get(`http://localhost:3000/users/${this.id}`).then((res)=>{
    console.log(res)
    this.user=res.data;
}).catch(err=>console.log(err))
        }
};
</script>

<style lang="scss" scoped></style>
