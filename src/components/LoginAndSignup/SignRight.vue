<template>
  <div
    class="flex justify-center items-center parent bg-white w-full h-full md:mt-0"
  >
    <div class="lg:w-11/12 md:w-10/12 w-11/12 mx-auto md:h-auto mt-[105px]">
      <img
        src="../../assets/Images/Logo-Fit&go version 2.png"
        alt="Fit and Go"
        class="image-login mx-auto md:w-[69px] w-[50px]"
      />
      <h2 class="text-3xl font-bold text-center text-primary md:my-3 my-1">
        Sign Up
      </h2>
      <form @submit.prevent="register">
        <div class="w-full">
          <div class="flex md:flex-nowrap flex-wrap w-full md:gap-4 gap-1">
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">User Name</span>
              </h3>
              <input
                required
                v-model="userName"
                type="text"
                placeholder="ex:Mohamed Elshimi"
                class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary"
              />
            </div>
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">Email</span>
              </h3>
              <input
                required
                v-model="email"
                type="email"
                placeholder="ex:mid9653@gmail.com"
                class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary"
              />
            </div>
          </div>
          <div
            class="flex md:flex-nowrap flex-wrap w-full md:gap-4 gap-1 md:mt-3 mt-1"
          >
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">Password</span>
              </h3>
              <input
                required
                v-model="password"
                type="password"
                placeholder="***********"
                class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary"
              />
            </div>
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">Age</span>
              </h3>
              <input
                required
                type="number"
                min="0"
                max="100"
                v-model="age"
                placeholder="ex:25"
                class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary"
              />
            </div>
          </div>
          <div
            class="flex md:flex-nowrap flex-wrap w-full md:gap-4 gap-1 md:mt-3 mt-1"
          >
            <div class="md:w-2/4 w-full">
              <h3 class="float-text">
                <span class="bg-white ms-2 text-center px-2">Number</span>
              </h3>
              <input
                type="tel"
                min="0"
                v-model="phone"
                placeholder="Number For Whatsapp"
                class="outline outline-2 px-2 w-full rounded md:py-2 py-1 focus:outline-primary"
              />
            </div>
            <div class="accent-primary md:w-2/4 w-full flex items-center pt-3">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                class="hover:cursor-pointer"
                v-model="gender"
              />
              <label
                class="bg-white text-center px-2 hover:cursor-pointer"
                for="male"
                >Male</label
              >
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                class="hover:cursor-pointer"
                v-model="gender"
              />
              <label
                class="bg-white text-center px-2 hover:cursor-pointer"
                for="female"
                >Female</label
              >
            </div>
          </div>
        </div>
        <div
          v-if="ErrMsg"
          class="flex items-center my-2 text-sm text-red-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">{{ ErrMsg }} </span>
          </div>
        </div>
        <button
          class="border rounded-xl bg-primary hover:bg-[#e60000df] text-white py-2 w-full block mx-auto"
        >
          Sign Up
        </button>
      </form>

      <h3 class="text-xl text-center my-2">Or Sign In With</h3>
      <div class="w-3/12 mx-auto flex justify-center items-center gap-6">
        <button @click="signInWithGoogle">
          <i class="fa-brands fa-google text-primary text-3xl"></i>
        </button>
        <button @click="signInWithFacebook">
          <i class="fa-brands fa-facebook text-[#17359D] text-3xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseModal from "../utilities/BaseModal.vue";
import { inject, ref } from "vue";
import router from "../../router";
import "../../firebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { loginUser } from "../../../public/Mixins/public";
import axios from "axios";

const { setUser } = loginUser();
const closeLogin = inject("closeLogin");
const userLoggedIN = inject("userLoggedIN");

let ErrMsg = ref("");

const email = ref("");
const password = ref("");
const userName = ref("");
const phone = ref("");
const age = ref("");
const gender = ref("");
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      data.user.displayName = userName.value;
      data.user.phoneNumber = phone.value;
      data.user.photoURL = "../../assets/Images/Logo-Fit&go version 2.png";
      console.log("user:", data.user);

      const user = {
        id: data.user.uid,
        userName: userName.value,
        Email: email.value,
        age: age.value,
        gender: gender.value,
        phone: phone.value,
        weight: "",
        height: "",
        bodyfat: "",
        bmr: "",
        address: {
          street: "",
          building: "",
          area: "",
        },
        cart: [],
        imageProfile: "https://placehold.co/300x300",
        trainer: {},
        plans: {
          Workouts: [],
          Diet: [],
        },
      };
      // setUser(user);
      axios
        .post("http://localhost:3000/users", user)
        .then((res) => {
          user.value = res.data;
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(user.value));
          localStorage.setItem("fullData", JSON.stringify(false));
          closeLogin();
          userLoggedIN();
          router.push("/UserProfile");
          // setTimeout(window.location.reload(),2000)
        })
        .catch((err) => console.log(err.message));
      // window.location.reload();
      // router.push("/profile")
    })
    .catch((err) => {
      if (err.code === "auth/email-already-in-use") {
        ErrMsg.value = "Already used E-mail. Try a different one.";
      } else {
        ErrMsg.value = "Something went wrong. Please review the entered data.";
      }
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result);
      const user = result.user;
      console.log(user);
      setUser(user);
      closeLogin();
      userLoggedIN();
    })
    .catch((err) => {
      console.log(err);
    });
};
const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((res) => {
      console.log(res);
      setUser(res.user);
      closeLogin();
      userLoggedIN();
    })
    .catch((err) => {
      console.log(err);
    });
};
console.log(gender);
</script>

<script>
export default {
  name: "SignRight",
};
</script>

<style scoped>
.logo {
  height: 80px;
  width: 80px;
}
.float-text {
  margin-bottom: -6px;
  position: relative;
  z-index: 2;
}
input:focus {
  transform: scaleY(1.05);
}
.parent {
  height: calc(100vh - 80px);
}
</style>
