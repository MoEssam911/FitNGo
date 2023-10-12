<template>
    <section class="container mx-auto">
        <h2 class="text-2xl text-primary font-bold ml-3 my-5">Trainers</h2>
        <div class="flex gap-1">
            <div class="overflow-hidden transition-width frame w-2/12 hover:w-5/12 duration-500 rounded-xl relative text-white text-center leading-[612px] hover:text-left hover:leading-none pt-5 pl-5"  v-for="da in data" :key="da">
                <img :src="da.trainerImg" alt="" class="h-full  object-cover absolute left-0 top-0">
                <h2 >{{ da.trainerNames }}</h2>
                <div v-html="da.rate" class="rate mt-40 text-primary"></div>
                <div id="trainer-data"><p class="w-10/12 mx-auto ">{{ da.Description }}</p>
                <button class="border rounded-xl bg-primary text-white px-10 py-2 block mx-auto mt-6 transition duration-200">Info</button></div>
            </div>
            
            <!-- {{ data }} -->
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        name:"TrainersFrame",
        data(){
            return{
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
                data:[]
            }
        },
        created(){
            axios.get('http://localhost:3000/trainer').then((res)=>{
                this.data = res.data;
            }).catch(err=>console.log(err))
        }
        
    }
</script>

<style scoped>

.frame {
    height: 600px;
    background: white;
    transition: .5s;
}



#trainer-data {
    opacity: 0;
    top: 150px;
    transition: .8s;
    transition-delay: 2s;
}
.frame:hover #trainer-data{
    opacity: 1;
    z-index: 12;
    position: relative;
    transform: translateY(-50px);
    transition-delay: 2s;
    transition: .8s;
}

.frame h2{
    z-index: 12;
    transition: .5s;
    transition-delay: .3s;
}
.frame:hover h2{
    transform: translateX(-10px);
    transform: translateY(10px);
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
.frame::before{
    content: '';
    width: 100%;
    height: 100%;
    background: #0000004a;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
}
</style>