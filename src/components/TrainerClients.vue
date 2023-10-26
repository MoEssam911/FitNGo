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
              <tr class="border-b" v-for="cli in 10" :key="cli">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-dark whitespace-nowrap ">
                  {{ cli }} 
                </th>
                <td class="px-6 py-4">
                  Selim Mohamed
                </td>
                <td class="px-6 py-4">
                  84 kg
                </td>
                <td class="px-6 py-4">
                  27
                </td>
                <td class="px-6 py-4">
                  <i class="fa-solid fa-pen ml-5 cursor-pointer" @click="ChangeToggleClient"></i>
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
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
