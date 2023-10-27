<template>
  <div>
    <div class="profile-pic">
      <label class="-label" for="file">
        <span
          ><i class="fa-solid fa-camera text-white z-20 mr-3 text-lg"></i
        ></span>
        <span class="text-sm">Change Image</span>
      </label>
      <input type="file" id="file" @change="onFileSelected" />
      <img
        class="w-32 h-32 rounded-full object-cover"
        :src="url"
        alt="profile picture" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { storage } from "../firebaseInit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      selectedFile: null,
      url: "https://placehold.co/300x300",
      users: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/users").then((res) => {
      this.users = res.data;
      console.log(this.
      users);
    });
  },
  methods: {
    // this will be triggered on every file change
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];

      // creating reference to firebase storage
      const storageRef = ref(storage, "/uploadeImages");

      // to upload to firebase storage
      uploadBytes(storageRef, this.selectedFile)
        .then((res) => {
          console.log(res);

          // after we upload the image, we will download it by getting its URL
          getDownloadURL(ref(storage, "/uploadeImages"))
            .then((downloadUrl) => {
              console.log(downloadUrl);
              this.url = downloadUrl;
                axios.post(`http://localhost:3000/uploadimage`, this.url)
            })
            .catch((err) => {
              console.log("download error:", err);
            });
        })
        .catch((err) => {
          console.log("upload error:", err);
        });
    },

    // onUpload() {
    //   // const fd = new FormData();
    //   // fd.append("image", this.selectedFile, this.selectedFile.name);
    //   // axios
    //   //   .post("gs://fitngo-project.appspot.com", fd, {

    //   //   })
    //   //   .then((res) => {
    //   //     console.log(res);
    //   //   })
    //   //   .catch((err) => {
    //   //     console.log(err);
    //   //   });

    //   const storageRef = ref(storage, "/uploadeImages");
    //   uploadBytes(storageRef, this.selectedFile)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // saveImage() {
    //   getDownloadURL(ref(storage, "/uploadeImages"))
    //     .then((downloadUrl) => {
    //       console.log(downloadUrl);
    //       this.url = downloadUrl
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
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
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: $fontColor;
      transition: background-color 0.2s ease-in-out;
      border-radius: $radius;
      margin-bottom: 0;
    }
  }

  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
}
</style>
