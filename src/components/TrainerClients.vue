<template>
  <div>
    <div class="py-4 mb-3 bg-secondary rounded-xl sm:w-12/12 lg:w-full">
      <h2 class="text-2xl font-bold pb-5 ml-3 ">My Clients :</h2>
      <table
            class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9">
            <thead class="text-xs uppercase">
              <tr class="bg-primary text-white tracking-wider">
                <th scope="col" class="px-6 py-3">Id</th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Wieght</th>
                <th scope="col" class="px-6 py-3">Age</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="cli,indx in trainer.Clients" :key="cli">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark whitespace-nowrap ">
                  {{ ++indx }} 
                </th>
                <td class="px-6 py-4">
                  {{ cli.userName }}
                </td>
                <td class="px-6 py-4">
                  {{ cli.weight }}
                </td>
                <td class="px-6 py-4">
                  {{ cli.age }}
                  <!-- {{ cli.id }} -->
                </td>
                <td class="px-6 py-4">
                  <router-link :to="`/TrainerAccount/EditUser/${cli.id}`"><i class="fa-solid fa-pen ml-5 cursor-pointer"></i></router-link>
                  <i class="fa-solid fa-trash ml-5 text-red-700 cursor-pointer"></i>
                </td>
              </tr>
              
            </tbody>
          </table>
          
    </div>
  </div>
</template>

<script>


export default {
  name:"TrainerClients",
  inject:['ChangeToggleClient'],
  components: {
    
  },
  
  created(){
    // axios
    //     .get(`http://localhost:3000/AllTrainers/${uid}`)
    //     .then((res) => {
    //         this.trainer = res.data
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    this.trainer = JSON.parse(localStorage.getItem('user'))
    console.log(this.trainer);
  },
  data() {
    return {
      trainer:{},
    };
  },
};
</script>

<style lang="scss" scoped></style>
