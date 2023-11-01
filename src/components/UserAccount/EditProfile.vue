<template>
  <div class="w-full h-screen bg-secondary p-6 rounded-2xl">
    <form @submit.prevent="saveData">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="fullname"
            type="text"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Full Name</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="age"
            type="number"
            name="floating_phone"
            id="floating_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
            min="1"
            max="80"
          />
          <label
            for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Age</label
          >
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          v-model="contact"
          type="number"
          name="floating_phone"
          id="floating_phone"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />

        <label
          for=""
          class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Contact</label
        >
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="bodyfat"
            type="number"
            name="floating_last_name"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
            min="8"
            max="15"
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >bodyfat</label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="bmr"
            type="number"
            name="floating_email"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            bmr</label
          >
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="weight"
            type="number"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
            min="40"
            max="160"
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Weight <span class="text-xs">(kg)</span></label
          >
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model="height"
            type="number"
            name="floating_last_name"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
            min="130"
            max="230"
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Height <span class="text-xs">(cm)</span></label
          >
        </div>
      </div>
      <div class="m-5 block text-center">
        <button
          class="bg-primary rounded-lg p-2 px-6 text-white font-Manrope text-sm hover:bg-red-800"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import MenuIcon from "../Tools/MenuIcon.vue";
import axios from 'axios';
export default {
  name: "EditProfile",
  components: {
    MenuIcon,
  },
  data(){
    return{
      weight:'',
      height:'',
      bodyfat:'',
      bmr : '',
      fullname : '',
      age: '',
      contact : 0,
      user:{}
    }
  },
  created(){
    this.user = JSON.parse(localStorage.getItem('user'))
      this.weight = this.user.weight;
      this.height = this.user.height;
      this.age = this.user.age;
      this.fullname = this.user.userName;
      this.contact = this.user.phone;
      this.bmr = this.user.bmr;
      this.bodyfat = this.user.bodyfat;
  },
  methods:{
    saveData(){
      this.user.weight = this.weight;
      this.user.height = this.height;
      this.user.age = this.age;
      this.user.userName = this.fullname;
      this.user.phone = this.contact;
      this.user.bmr = this.bmr;
      this.user.bodyfat = this.bodyfat;
      axios
        .put(`http://localhost:3000/users/${this.user.id}`, this.user)
        .then((res) => {
            console.log(res.data);
            localStorage.setItem('user',JSON.stringify(this.user));
            // router.push('/UserProfile');
            window.location.reload();
            // setTimeout(window.location.reload(),2000)
        })
        .catch((err) => console.log(err.message));
    }
  },
  // inject:['changeToggle']
};
</script>

<style scoped></style>
