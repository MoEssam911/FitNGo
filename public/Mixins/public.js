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
    const setUser = (uid,userObj) =>{
        axios
        .put(`http://localhost:3000/users/${uid}`, userObj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    const putTrainer = (uid,trainObj) =>{
        axios
        .put(`http://localhost:3000/AllTrainers/${uid}`, trainObj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    const getTrainer = (uid) =>{
        axios
        .get(`http://localhost:3000/AllTrainers/${uid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }

    
    return {user,getUser,setUser,getTrainer,putTrainer}
}


// let user ={};
// let getUser = (uid)=>{
//     axios.get(`http://localhost:3000/users/${uid}`).then((res)=>{
//         console.log(res.data);
//         user = res.data
//         console.log(user);
//       }).catch(err=>console.log(err))
// }