<template>
    <div class="mx-auto flex flex-col items-center justify-center relative ">
        <div class="profile-pic ">
          <label class="-label " for="file">
            <span><i class="fa-solid fa-camera text-white z-20 mr-3 text-lg"></i></span>
            <span class="text-sm">Change Image</span>
          </label>
          <input id="file" ref="fileInput" type="file" @input="pickfile"/>
          <img :src="previewImage" id="output" width="200" @click="selectImage" :class="{bgGray : test}"/>
        </div>
        
        <!-- <div class="w-32 h-32 rounded-full bg-black bg-opacity-50 z-10 absolute cursor-pointer show"></div>
        <img
          class="w-32 h-32 rounded-full object-cover z-0 cursor-pointer absolute"
          src="../assets/Images/selim.jpeg" /> -->
      
      <div class="font-Manrope font-bold text-primary text-lg text-center py-3">
        {{user.userName}}
      </div>
      <!-- {{ user.id }} -->

    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                previewImage: '',
                test:true,
                user:{},
                file:{},
            }
        },
        created(){
          this.user = JSON.parse(localStorage.getItem('user'));
          this.file = JSON.parse(localStorage.getItem('userImage'));
          // this.getImage(this.file)
          // console.log(this.user);
        },
        methods:{
            selectImage() {
                this.$refs.fileInput.click()
            },
            pickfile(){
                let input = this.$refs.fileInput
                let file = input.files
                if (file && file[0]) {
                    let reader = new FileReader
                    reader.onload = e =>{
                        this.previewImage = e.target.result
                        this.user.imageProfile = file[0];
                        console.log(this.user);
                        // console.log(e.target.result);
                        this.test = false;
                    }

                    reader.readAsDataURL(file[0])
                    this.$emit('input',file[0])
                    localStorage.setItem('userImage',JSON.stringify(file[0]))
                    console.log(file[0]);
                    console.log(this.user);
                    // axios.put(`http://localhost:3000/users/${this.user.id}`,this.user).then((res)=>{
                    //   console.log(res);
                    // }).catch(err=>console.log(err))
                }
            },
            // getImage(file){
            //   let reader = new FileReader
            //         reader.onload = e =>{
            //             this.previewImage = e.target.result
            //             // this.user.imageProfile = file;
            //             // console.log(this.user);
            //             // console.log(e.target.result);
            //             this.test = false;
            //         }
            //         reader.readAsDataURL(file)
            // }
        },
    }

</script>

<style lang="scss" scoped>
/* input {
    display: none;
}

.show {
    transition: .3s;
}
.show {
    opacity: 0;
}
.show:hover{
opacity: 1;
} */
@mixin object-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

$circleSize: 165px;
$radius: 100px;
$shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
$fontColor: rgb(250, 250, 250);

.profile-pic {
  color: transparent;
  transition: all 0.3s ease;
  @include object-center;
  position: relative;
  transition: all 0.3s ease;

  input {
    display: none;
  }

  img {
    position: absolute;
    object-fit: cover;
    width: $circleSize;
    height: $circleSize;
    box-shadow: $shadow;
    border-radius: $radius;
    z-index: 0;
  }

  .-label {
    cursor: pointer;
    height: $circleSize;
    width: $circleSize;
  }

  &:hover {
    .-label {
      @include object-center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10000;
      color: $fontColor;
      transition: background-color 0.2s ease-in-out;
      border-radius: $radius;
      margin-bottom: 0;
      
    }
  }


  .-label i {
 display: none;
  }
  .-label:hover i {
 display: block;
  }
  
  span {
    height: 2em;
  }
}

/////////////////////////
// Body styling 🐾
/////////---------->

body {
  height: 100vh;
  background-color: rgb(25, 24, 21);
  @include object-center;

  a:hover {
    text-decoration: none;
  }
}
.bgGray{
  background-color: gray;
}
</style>

