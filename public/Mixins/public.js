import {ref} from 'vue'
import axios from 'axios'
export const loginUser = () =>{
    const user = ref({})
    const getUser = (uid) =>{
        axios.get(`http://localhost:3000/users/${uid}`).then((res)=>{
            console.log(res.data);
            user.value = res.data
            console.log(user);
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(user.value))
        }).catch(err=>console.log(err))
    }
    return {user,getUser}
}


// let user ={};
// let getUser = (uid)=>{
//     axios.get(`http://localhost:3000/users/${uid}`).then((res)=>{
//         console.log(res.data);
//         user = res.data
//         console.log(user);
//       }).catch(err=>console.log(err))
// }