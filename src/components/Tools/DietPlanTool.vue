<template>
  <section>
    <div
      class="flex flex-col flex-wrap h-auto w-full bg-secondary bg-opacity-50 rounded-3xl p-9 mb-9">
      <table
        class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9">
        <caption class="text-dark text-2xl">
          Your diet plan is
        </caption>
        <thead class="text-xs uppercase">
          <tr class="bg-primary text-white tracking-wider">
            <th scope="col" class="px-6 py-3">Balanced</th>
            <th scope="col" class="px-6 py-3">High Protein</th>
            <th scope="col" class="px-6 py-3">Low Carbs</th>
            <th scope="col" class="px-6 py-3">Low Fat</th>
            <th scope="col" class="px-6 py-3">Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <th scope="row" class="px-6 py-4 font-medium text-dark">Calorie</th>
            <td
              class="px-6 py-4 text-center text-primary text-lg tracking-widest"
              colspan="4">
              Fit&Go Calorie
            </td>
          </tr>
          <tr class="border-b">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-dark whitespace-nowrap dark:text-white">
              Protein
            </th>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
          </tr>
          <tr class="border-b">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-dark whitespace-nowrap">
              Fat
            </th>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
          </tr>
          <tr class="">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-dark whitespace-nowrap">
              Carbs
            </th>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
            <td class="px-6 py-4">Fit&Go gm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "DietPlan",
};
</script>

<style scoped></style>
