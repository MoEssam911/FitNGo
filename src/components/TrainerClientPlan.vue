<template>
  <section class="mt-40">
    <div class=" h-max">


      <div class="flex gap-5 mt-10">


        <div class="w-full">
          <!-- macro calculator component -->
          <div
            class="flex flex-col flex-wrap h-auto w-full bg-zinc-300 bg-opacity-50 rounded-3xl"
          >
            <table
              class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9"
              v-for="(plan, indx) in ClientPlan"
              :key="plan"
            >
              <template v-if="indx > PrePlan && indx <= NxtPlan">
                <caption class="text-dark text-2xl">
                  <i
                    class="fa-solid fa-arrow-left mr-72 cursor-pointer"
                    @click="PrevPlan"
                  ></i>
                  Your Workout plan:
                  <i
                    class="fa-solid fa-arrow-right ml-72 cursor-pointer"
                    @click="NextPlan"
                  ></i>
                </caption>
                <thead class="text-xs uppercase">
                  <tr class="border-b">
                    <td
                      class="px-6 py-4 text-center text-primary text-lg tracking-widest"
                      colspan="4"
                    >
                      <label for="">Month : </label>
                      {{ plan.month }}
                    </td>
                  </tr>
                  <tr class="bg-primary text-white tracking-wider">
                    <th scope="col" class="px-6 py-3 w-2/12">Id</th>
                    <th scope="col" class="px-6 py-3 w-6/12">Exercises</th>
                    <th scope="col" class="px-6 py-3 w-2/12">Reps</th>
                    <th scope="col" class="px-6 py-3 w-2/12">Sets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b"
                    v-for="(ex, index) in plan.table"
                    :key="ex"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-dark whitespace-nowrap"
                    >
                      {{ index + 1 }}
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-dark whitespace-nowrap"
                    >
                      {{ ex.exerciseName }}
                    </th>
                    <td class="px-6 py-4">
                      {{ ex.reps }}
                    </td>
                    <td class="px-6 py-4">
                      {{ ex.sets }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </table>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "TrainerClientPlans",
  data() {
    return {
      ClientPlan: [],
      NxtPlan: 1,
      PrePlan: 0,
    };
  },
  created() {
    axios
      .get("http://localhost:3000/workoutplans")
      .then((res) => {
        this.ClientPlan = res.data;
        console.log(this.ClientPlan[0].table);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    NextPlan() {
      this.NxtPlan += 1;
      this.PrePlan += 1;
      if (this.NxtPlan == this.ClientPlan.table.length - 1) {
        this.NxtPlan = this.ClientPlan.table.length - 1;
      }
    },
    PrevPlan() {
      if (this.PrePlan == 0) {
        this.PrePlan = 0;
      }
      this.NxtPlan -= 1;
      this.PrePlan -= 1;
    },
  },
};
</script>

<style scoped></style>
