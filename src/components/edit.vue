<template>
  <div class="container my-6 py-2 w-3/4">
    <div class="flex flex-col bg-secondary rounded">
      <div class="flex flex-row justify-between container">
        <!-- header -->
        <div class="text-xl font-bold mt-7">Edit Profile</div>
        <!-- image -->
        <div>
          <img
            class="w-24 h-24 rounded-full object-cover mt-4"
            :src="userImg"
          />
        </div>
      </div>
      <!-- form -->

      <form class="flex flex-col justify-around container space-y-2 pb-[3%]">
        <!--name -->
        <div class="flex flex-row justify-around">
          <div class="flex flex-col w-1/2 m-2 space-y-2">
            <label for="fName">First Name </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
              type="text"
              id="Fname"
              placeholder="Nada"
            />
          </div>
          <div class="flex flex-col w-1/2 m-2 space-y-2">
            <label for="lName">Last Name </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
              type="text"
              id="Fname"
              placeholder="Rayan"
            />
          </div>
        </div>
        <!-- mail -->
        <div class="flex flex-col space-y-2 m-2">
          <label for="mail">E-mail</label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
            type="email"
            id="mail"
            placeholder="Example@gmail.com"
          />
        </div>
        <!-- mobile -->
        <div class="flex flex-col space-y-2 m-2">
          <label for="mobNum">Contact Number</label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
            type="tel"
            id="mobNum"
            pattern="\+?[1-9]\d{1,14}} "
            placeholder="0111111555"
          />
        </div>
        <!-- address -->
        <div class="flex flex-col space-y-2 m-2">
          <label for="address">address</label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
            id="address"
            type="text"
            placeholder="33062 New Cairo isle"
          />
        </div>

        <!-- location -->
        <!-- <div>

          <label for="county">Country</label>
          <input list="bands" id="choice" name="choice" />

          <select
            name="city-input"
            id="city" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"        
              >
              <option 
              v-for="(country , index) in world"
              :key="index"
              >{{ country.country }}</option>
          </select>
          <label for="city">City</label>
          <select
            name="city-input"
            id="city" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"        
              >
              <option
              v-for="(country , index) in world"
              :key="index"
              >{{ country.city }}</option>

          </select> -->
        <!-- PAssword -->
        <div class="flex flex-col space-y-2 m-2">
          <label for="pass">Password</label>
          <input
            type="password"
            placeholder="Not.your2names*-*"
            id="pass"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
      searchQuery: "",
      userImg: "../../../src/assets/Images/selim.jpeg ",
    };
  },
  //   created() {
  //     axios
  //       .get("http://localhost:3000/countries")
  //       .then((res) => {
  //         this.countries = res.data;
  //       })
  //       .catch((err) => console.log(err));
  //   },
  //   computed: {
  //     world() {
  //       return
  //         this.countries

  //     },
  //   },
};
</script>

<style scoped>
input {
  border: gray solid 1px;
}
</style>
