<template>

<teleport to="body">
  <transition name="modal-outer">
    <div class="fixed z-50 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 w-screen h-screen" v-show="mapShown" @click="mapShown = false">

      <transition name="modal-inner" mode="out-in">
        <div v-if="mapShown" id="mapContainer" class="m-auto h-screen w-screen md:m-auto md:w-[42rem] lg:w-[70rem] md:h-96 md:translate-y-[30%] md:shadow-lg shadow-lg" @click.stop></div>
      </transition>

      <button @click="mapShown = false"
        class="rounded-full bg-primary bg-opacity-40 hover:bg-opacity-70 text-white text-lg px-3 py-1 absolute top-10 left-0 m-7"
        >
        X
      </button>
    </div>
  </transition>
</teleport>



  <div class="fixed bottom-4 right-4 z-50">
    <button
    class=" bg-primary w-14 h-14 text-white text-4xl rounded-full animate-bounce hover:bg-red-700 btn"
    @click="showMap"

  >
    <i class="fa-solid fa-location-dot"></i>
    </button>
  </div>

</template>


<style scoped>

.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.5s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.5s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}

</style>




<script>
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "axios";
export default {
  name: "Map",
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiYWxpbWFoZXIxIiwiYSI6ImNsbjNzNG1ucjBxMGkybHBocmh3bXgzY2MifQ.NPBtwhE5AodWv6ZKTvLUsQ",
      map: null,
      userLocation: null,
      gyms: [],
      mapShown: false,
      errMsg: '',
    };
  },
  methods: {
    // define a method to show the map and get the user's location
    showMap() {

      if (this.mapShown) {
        // do nothing
        return;
      }

      this.mapShown = true;
      // get user's current location using browser's geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // store user's location in data
          this.userLocation = [
            position.coords.longitude,
            position.coords.latitude,
          ];

          // create map instance after getting user's location
          this.createMap();
        },
        (error) => {
          console.error(error);
          this.errMsg = "Something went wrong, couldn't get your location."
        }
      );
    },
    createMap() {
      // set mapbox access token
      mapboxgl.accessToken = this.accessToken;

      // create map instance
      this.map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: this.userLocation,
        zoom: 12,
      });

      // add navigation control to map
      const nav = new mapboxgl.NavigationControl();
      this.map.addControl(nav, "top-right");

      // add geolocate control to map
      const geolocate = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        trackUserLocation: true,
      });

      this.map.addControl(geolocate, "top-right");

      // add marker for user's location
      const userMarker = new mapboxgl.Marker()
        .setLngLat(this.userLocation)
        .addTo(this.map);

      // get nearest gyms using mapbox geocoding API
      this.getGyms();
    },
    getGyms() {

      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?access_token=${this.accessToken}&proximity=${this.userLocation}&categories=gym&limit=100`;


      axios
        .get(url) 
        .then((response) => {
          this.gyms = response.data.features;
          this.gyms.forEach((gym) => {
            const gymMarker = new mapboxgl.Marker()
              .setLngLat(gym.geometry.coordinates)
              .addTo(this.map);

            const gymPopup = new mapboxgl.Popup({ offset: 25 }).setText(
              gym.place_name
            );

            gymMarker.setPopup(gymPopup);
          });
        })
        .catch((error) => {
          console.error(error);
          this.errMsg = "Something went wrong, couldn't rertrieve data."
        });
    },
  },
};
</script>