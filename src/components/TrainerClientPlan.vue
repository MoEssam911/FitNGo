<template>
  <section>
    <div class="container h-max">
      <div class="flex gap-2 m-5 items-center cursor-pointer">
        <h1 class="font-Manrope font-bold text-lg">My Account</h1>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.125 11.1562L18.8125 5.90625L20.5625 4.15625C21.0417 3.67708 21.6304 3.4375 22.3288 3.4375C23.0271 3.4375 23.6154 3.67708 24.0938 4.15625L25.8438 5.90625C26.3229 6.38542 26.5729 6.96375 26.5938 7.64125C26.6146 8.31875 26.3854 8.89667 25.9062 9.375L24.125 11.1562ZM22.3125 13L9.0625 26.25H3.75V20.9375L17 7.6875L22.3125 13Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div class="flex gap-5 mt-10">
        <div
          class="lg:w-60 lg:h-96 bg-zinc-300 bg-opacity-50 rounded-3xl flex flex-col"
        >
          <div class="mt-5 mx-auto">
            <img
              class="w-32 h-32 rounded-full object-cover"
              src="../assets/Images/profile.JPG"
            />
          </div>
          <div class="font-Manrope font-bold text-primary text-2xl text-center">
            Ali Maher
          </div>

          <hr />

          <div class="mt-5 flex flex-col gap-3 text-center">
            <div
              class="flex items-center gap-2 hover:bg-zinc-300 cursor-pointer"
            >
              <div>
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 48 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 15.1667C16 12.8681 16.8429 10.6637 18.3431 9.03841C19.8434 7.41309 21.8783 6.5 24 6.5C26.1217 6.5 28.1566 7.41309 29.6569 9.03841C31.1571 10.6637 32 12.8681 32 15.1667C32 17.4652 31.1571 19.6696 29.6569 21.2949C28.1566 22.9202 26.1217 23.8333 24 23.8333C21.8783 23.8333 19.8434 22.9202 18.3431 21.2949C16.8429 19.6696 16 17.4652 16 15.1667ZM16 28.1667C13.3478 28.1667 10.8043 29.308 8.92893 31.3397C7.05357 33.3713 6 36.1268 6 39C6 40.7239 6.63214 42.3772 7.75736 43.5962C8.88258 44.8152 10.4087 45.5 12 45.5H36C37.5913 45.5 39.1174 44.8152 40.2426 43.5962C41.3679 42.3772 42 40.7239 42 39C42 36.1268 40.9464 33.3713 39.0711 31.3397C37.1957 29.308 34.6522 28.1667 32 28.1667H16Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h2 class="font-Manrope font-semibold text-xl">Get Trainer</h2>
            </div>
            <div
              class="flex items-center gap-2 hover:bg-zinc-300 cursor-pointer"
            >
              <div>
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 49 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.9082 3.14941H42.875V50H6.125V3.14941H9.13965V0H12.2021V3.14941H18.375V0H21.4375V3.14941H27.6104V0H30.6729V3.14941H36.8457V0H39.9082V3.14941ZM39.8125 46.875V6.27441H9.1875V46.875H39.8125ZM33.6875 12.5244V15.6494H15.3125V12.5244H33.6875ZM15.3125 40.6738V37.5488H33.6875V40.6738H15.3125ZM15.3125 28.1494V25.0244H33.6875V28.1494H15.3125Z"
                    fill="#232222"
                  />
                </svg>
              </div>
              <h2 class="font-Manrope font-semibold text-xl">My Plan</h2>
            </div>
            <div
              class="flex items-center gap-2 hover:bg-zinc-300 cursor-pointer"
            >
              <div>
                <svg
                  width="30"
                  height="33"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.2111 14.3339H32.9651L31.8471 7.65452C31.6218 6.64393 31.1271 5.7132 30.4155 4.96116C29.7038 4.20912 28.8017 3.66383 27.8051 3.38319C26.8038 3.06105 25.7608 2.8872 24.7091 2.86719H18.2878C17.2361 2.8872 16.1931 3.06105 15.1918 3.38319C14.1951 3.66383 13.2931 4.20912 12.5814 4.96116C11.8698 5.7132 11.375 6.64393 11.1498 7.65452L10.0318 14.3339H4.78578C4.56 14.3325 4.33709 14.3845 4.13521 14.4856C3.93333 14.5867 3.75819 14.7341 3.62406 14.9157C3.48994 15.0973 3.40062 15.3081 3.36338 15.5308C3.32614 15.7535 3.34204 15.9818 3.40978 16.1972L8.79911 34.2572C9.07349 35.1296 9.61889 35.8919 10.3561 36.4332C11.0933 36.9745 11.9839 37.2666 12.8984 37.2672H30.0984C31.0081 37.2606 31.8923 36.9656 32.6237 36.4248C33.3552 35.8839 33.8962 35.125 34.1691 34.2572L39.5584 16.1972C39.6255 15.9841 39.6418 15.7583 39.6061 15.5378C39.5703 15.3173 39.4836 15.1082 39.3527 14.9272C39.2218 14.7462 39.0504 14.5983 38.8522 14.4952C38.654 14.3922 38.4345 14.337 38.2111 14.3339ZM12.9558 14.3339L13.9878 8.11319C14.1009 7.60528 14.3634 7.14282 14.7414 6.78523C15.1194 6.42765 15.5957 6.19128 16.1091 6.10652C16.8143 5.88292 17.5482 5.75965 18.2878 5.73385H24.7091C25.4573 5.75679 26.1998 5.88005 26.9164 6.10652C27.4298 6.19128 27.9062 6.42765 28.2842 6.78523C28.6622 7.14282 28.9247 7.60528 29.0378 8.11319L30.0411 14.3339H12.8411H12.9558Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h2 class="font-Manrope font-semibold text-xl">My Shop</h2>
            </div>
            <div class="flex items-center gap-2 bg-zinc-300">
              <div>
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.2825 34.0529L49.5 30.7758L46.2825 27.4987L38.25 35.6799L18.9675 16.0404L27 7.85911L23.7825 4.58203L20.565 7.85911L17.3475 4.58203L12.5325 9.4862L9.315 6.20911L6.0975 9.4862L9.315 12.7633L4.5 17.6674L7.7175 20.9445L4.5 24.2216L7.7175 27.4987L15.75 19.3174L35.0325 38.957L27 47.1383L30.2175 50.4154L33.435 47.1383L36.6525 50.4154L41.4675 45.5112L44.685 48.7883L47.9025 45.5112L44.685 42.2341L49.5 37.3299L46.2825 34.0529Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 class="font-Manrope text-white font-semibold text-xl">
                Tools
              </h2>
            </div>
          </div>
        </div>

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
