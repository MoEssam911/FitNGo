<template>
    <div>
        <div class="flex justify-center mt-30 gap-10 ">
            <div class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer" @click="toggle='Login'">Login</div>
            <div class="text-lg font-semibold">|</div>
            <div class="text-lg font-semibold hover:text-primary transition duration-200 cursor-pointer" @click="toggle='SignUp'">Sign Up</div>
        </div>
<SignUpAdmin v-if="toggle=='SignUp'"></SignUpAdmin>
<LoginAdmin v-if="toggle=='Login'"></LoginAdmin>
    </div>
</template>

<script>
import SignUpAdmin from '../AdminDashboard/SignUpAdmin.vue';
import LoginAdmin from '../AdminDashboard/LoginAdmin.vue';
    export default {
        name:'LoginOrSignUp',
        components:{
            SignUpAdmin,
            LoginAdmin
        },
        data(){
            return {
                toggle:'Login',
            }
        }
    }
</script>

<style scoped>

</style>