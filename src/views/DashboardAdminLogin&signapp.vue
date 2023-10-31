<template>
    <div>
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