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
              id="lName"
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
        <!-- my one -->
        <div class="flex flex-row justify-around">
<div class="flex flex-col w-1/2 m-2 space-y-2">
          <label for="county">Country</label>
          <select
            name="country-input"
            id="county"
            @change="changeSelected(event)"
            v-model="cValue"
            class="bg-gray-50 border outline-primary border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
            >
              <option value="">- Choose Country -</option><div>cValue</div>
              <option 
              v-for="(country , index) in countries "
              :key="index"
              >{{ country.country }}</option>
          </select></div>
          <div class="flex flex-col w-1/2 m-2 space-y-2  ">
          <label for="city">City</label>
          <select
          
            name="city-input"
            id="city" 
            v-model.lazy="city"
            class="bg-gray-50 border outline-primary border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
            >
              <option value="">- Choose City -</option>

              <option
              v-for="(value , index) of cities"
              :key="index"
              >{{ index}}</option>

          </select>
        </div>
          </div>
          <!-- bard one -->
          
            <!-- <div>
              <select v-model="selectedCountry">
                <option v-for="(country,index) in countries" :value="country" :key="index"
                >{{ country }}</option>
              </select>
          
              <select v-model="selectedCity">
                <option v-for="(city,index) in filteredCities" :key="index" :value="city 
                ">{{ city }}</option>
              </select>
            </div> -->
          
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
import axios from "axios";
import { ref, computed, onMounted, watch } from "vue";
export default {
  data() {
    return {
      countries: [],
      searchQuery: "",
      userImg: "../../../src/assets/Images/selim.jpeg ",
      cValue:"",
      city:"",
    };
  },
    created() {
      axios
        .get("http://localhost:3000/countries")
        .then((res) => {
          this.countries = res.data;
        })
        .catch((err) => console.log(err));
    },
    computed: {
      cities() {
          return this.countries.filter(city => city.country === this.cValue).map(city => city.city);
      },
    },
    methods: {
    changeSelected(event) {
this.cValue = event.target.value;
return this.cValue
    },
  },
};
</script>
<!-- <script>
export default {
  data() {
    return {
      countries: [],
      cities: [],
      selectedCountry: '',
      selectedCity: ''
    }
  },

  mounted() {
    // Read the JSON file into the data
    fetch('CountryData.json')
      .then(response => response.json())
      .then(data => {
        this.countries = data
        this.cities = data.reduce((acc, country) => {
          acc = [...acc, ...country.city]
          return acc
        }, [])
      })
  },

  computed: {
    filteredCities() {
      // Filter the city select element options based on the selected country
      return this.cities.filter(city => city.country === this.selectedCountry)
    }
  },

  watch: {
    selectedCountry(newCountry) {
      // Update the city select element options when the selected country changes
      this.selectedCity = ''
    }
  }
}
</script> -->

<style scoped>
input {
  border: 1px solid gray ;
}
input:focus{
border:1px solid #E60000  ;
outline-color: #E60000;
}
</style>
