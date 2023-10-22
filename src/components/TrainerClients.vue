<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-4 bg-secondary m-4 rounded-xl min-w-xs sm:w-12/12 md:w-10/12 lg:w-9/12">
      <div class="flex justify-between">
        <h2 class="text-xl p-4 leading-6 font-medium text-black">My Clients</h2>
        <!-- <div class="flex space-x-1">
          <button class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fas fa-filter"></i>
          </button>
        </div> -->
      </div>

      <div
        class="m-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-3 flex justify-between"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-red-300">
            <td class="px-4 py-4 ml-2 whitespace-nowrap">
              <h1>ID</h1>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <h1 class="">Clint</h1>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <h1>Last Edit</h1>
            </td>
          </thead>

          <tbody class="bg-slate-50 divide-y divide-gray-200">
            <tr v-for="(client, index) in clients" :key="index">
              <td class="px-4 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  id="checkbox"
                  v-model="checked"
                  class="form-checkbox h-4 w-4 text-primary"
                />
                <label for="checkbox" class="ml-2 text-black text-lg">
                  1{{ client.id }}</label
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <img
                  :src="client.image"
                  alt=""
                  class="h-10 w-10 rounded-full"
                />

                <div class="text-sm text-gray-900">
                  Yasser Maged{{ client.occupation }}
                  <p class="text-sm text-gray-500">
                    Web Designer {{ client.name }}
                  </p>
                </div>
              </td>
              <!-- <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ client.name }}</div>
                <div class="text-sm text-gray-500">{{ client.occupation }}</div>
              </td> -->
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                <div>
                  1 week ago{{ client.lastEdit }}
                  <i class="fa-solid fa-pen ml-2"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"TrainerClients",
  data() {
    return {
      clients: [
        // Add your clients here
        " Yasser Maged",
        "Mohamed M",
        "Layla Ahmed",
        "Selim Mohamed",
        "Selim Mohamed",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
