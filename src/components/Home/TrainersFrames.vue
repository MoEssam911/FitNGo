<template>
  <section class="container">
    <h2 class="text-2xl text-primary font-bold ml-3 my-5">Trainers</h2>
    <div class="flex lg:flex-nowrap sm:flex-wrap justify-center lg:gap-1 md:gap-4">
      <div
        class="overflow-hidden transition-width frame lg:w-2/12 lg:hover:w-5/12 md:w-3/12 md:hover:w-5/12 sm:w-9/12 sm:hover:w-10/12  duration-1000 rounded-xl relative text-white text-center leading-[612px] hover:text-left hover:leading-none pt-5 pl-5"
        v-for="da in data"
        :key="da"
      >
        <img
          :src="da.TrainerImg"
          alt=""
          class="h-full object-cover absolute left-0 top-0"
        />
        <div class="trainer-data"> <h2>{{ da.TrainerNames }}</h2>
        <div v-html="da.rate" class="rate mt-40 text-primary"></div>
        
          <p class="w-10/12 mx-auto">{{ da.Description }}</p>
          <button
            class=" rounded-xl bg-primary text-white px-10 py-2 block mx-auto mt-6 transition duration-200"
          >
            Info 
          </button>
        </div>
      </div>

      <!-- {{ data }} -->
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "TrainersFrame",
  data() {
    return {
      // trainerImg:[
      //     '../src/assets/Images/Ahmed-Fathy.png',
      //     '../src/assets/Images/aly.jpg',
      //     '../src/assets/Images/gorilla.jpg',
      //     '../src/assets/Images/7ossam.jpg',
      //     '../src/assets/Images/momen.jpg',
      //     '../src/assets/Images/omar.jpg',
      // ],
      // trainerNames:[
      //     'C-Ahmed Fathy',
      //     'C-Ali Mazhar',
      //     'C-Hassan Gabr',
      //     'C-Hossam',
      //     'C-Moamen Maher',
      //     'C-Omar Ibrahim',
      // ]
      data: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/trainer")
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.frame {
  height: 600px;
  background: white;
  transition: 0.5s;  
}
.trainer-data p {
  transition: 1s;
}

.trainer-data {
position: relative;
transform: translateY(600px);
  transition: 1s;
}
.frame:hover .trainer-data {
  z-index: 12;
  position: relative;
  transform: translateY(80px);
}

.frame h2 {
opacity: 0;
  transition: 0.5s;
}
.frame:hover h2 {
    opacity: 1;
  transform: translateX(-10px);
  transform: translateY(-80px);
}
/* .frame span,
.frame p{
    opacity: 0;

}
.frame button{
    display: none;
}
.frame:hover span,
.frame:hover p{

    opacity: 1;
    transition-delay: 0.5s;
}
.frame:hover button{
    display: block;
    transition-delay: 0.5s;
}

.rate{
    width: 100px;
    height: 100px;
} */
.frame::before {
  content: "";
  width: 100%;
  height: 100%;
  background: #0000004a;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
</style>
