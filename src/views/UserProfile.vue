<template>
    <div class="min-h-screen container relative gap-4">
        <div class="flex gap-2 pb-6 items-center cursor-pointer">
                <div class="md:hidden">
                    <MenuIcon @click="toggleUserSideHandler"></MenuIcon>
                </div>
                <h1 class="font-Manrope font-bold text-lg">My Account</h1>
                <div>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 30 30" 
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg" @click="toggleComponent='edit'">
                        <path
                        d="M24.125 11.1562L18.8125 5.90625L20.5625 4.15625C21.0417 3.67708 21.6304 3.4375 22.3288 3.4375C23.0271 3.4375 23.6154 3.67708 24.0938 4.15625L25.8438 5.90625C26.3229 6.38542 26.5729 6.96375 26.5938 7.64125C26.6146 8.31875 26.3854 8.89667 25.9062 9.375L24.125 11.1562ZM22.3125 13L9.0625 26.25H3.75V20.9375L17 7.6875L22.3125 13Z"
                        fill="black"/>
                    </svg>
                </div>
            </div>
        <div class="flex gap-5">
            <aside
                class="w-6/12 sm:w-5/12 md:w-4/12 transition-all duration-1000"
                :class="toggleUserSide ? 'show-user-sidebar' : 'hide-user-sidebar'">
                <UserSideBar class="w-full"></UserSideBar>
            </aside>
            <UserTrainer class="w-full" v-if="toggleComponent == 'trainer'"></UserTrainer>
            <UserPlans class="w-full" v-if="toggleComponent == 'myplan'"></UserPlans>
            <MyData class="w-full" v-if="toggleComponent == 'mydata'"></MyData>
            <Tools class="w-full" v-if="toggleComponent == 'tools'"></Tools>
            <EditProfile class="w-full" v-if="toggleComponent == 'edit'"></EditProfile>
        </div>
    </div>
</template>

<script>
import UserSideBar from '../components/Tools/UserSideBar.vue'
import UserPlans from '../components/UserAccount/UserPlans.vue'
import MenuIcon from '../components/Tools/MenuIcon.vue'
import Tools from './ToolsPageView.vue'
import EditProfile from '../components/UserAccount/EditProfile.vue'
import MyData from '../components/UserAccount/MyData.vue'
// import GetTrainer from '../components/UserAccount/GetTrainer.vue'
import UserTrainer from '../components/UserTrainer.vue'
    export default {
        name: "UserProfile",
        data(){
            return{
                toggleUserSide: false,
                toggleComponent:'trainer',
            }
        },
        components:{
            UserSideBar,
            UserPlans,
            MenuIcon,
            Tools,
            EditProfile,
            MyData,
            UserTrainer,
        },
        methods:{
            changeToggle(cname){
                if (JSON.parse(localStorage.getItem('fullData'))) {
                    this.toggleComponent = cname;
                    console.log(this.toggleComponent);
                }
            },
            toggleUserSideHandler() {
                this.toggleUserSide = !this.toggleUserSide;
            },
        },
        provide(){
            return{
            toggleComponent: this.toggleComponent,
            changeToggle: this.changeToggle
            }
        },
        created(){
            if(!(JSON.parse(localStorage.getItem('fullData')))){
                this.toggleComponent = 'mydata'
            }
        }
    }
</script>

<style scoped>
@media (max-width: 768px) {
  .hide-user-sidebar {
    position: absolute;
    left: -60%;
    z-index: 10;
  }
  .show-user-sidebar {
    position: absolute;
    left: 0;
    z-index: 10;
    /* box-shadow: 1rem 0px 5px 0px black; */
  }
}
</style>