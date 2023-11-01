<template>
  <div class="relative">
    <div
      class="my-shadow h-auto bg-secondary rounded-3xl py-9 flex flex-col relative"
      :class="toggle"
    >
      <!-- <div class="drag-btn px-4 text-white" @click="drag">
        <i class="fa-solid fa-bars text-primary cursor-pointer"></i>
      </div> -->
      <div class="mx-auto">
        <img
          class="w-32 h-32 rounded-full object-cover"
          :src="user.imageProfile"
        />
      </div>
      <p class="font-Manrope font-bold text-primary text-lg text-center py-3">
        {{ user.TrainerNames }}
      </p>

      <hr />

      <div class="mt-5 flex flex-col">
        <div
          class="heading flex items-center gap-4 hover:bg-primary hover:text-white py-3 cursor-pointer"
          :class="{ backPrimary: toggleComp == 'info' }"
          @click="ChangeTest1"
        >
          <div class="pl-[15%]">
            <svg
              class="blackSvg"
              :class="{ fillsvg: toggleComp == 'info' }"
              width="25"
              height="25"
              viewBox="0 0 48 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 15.1667C16 12.8681 16.8429 10.6637 18.3431 9.03841C19.8434 7.41309 21.8783 6.5 24 6.5C26.1217 6.5 28.1566 7.41309 29.6569 9.03841C31.1571 10.6637 32 12.8681 32 15.1667C32 17.4652 31.1571 19.6696 29.6569 21.2949C28.1566 22.9202 26.1217 23.8333 24 23.8333C21.8783 23.8333 19.8434 22.9202 18.3431 21.2949C16.8429 19.6696 16 17.4652 16 15.1667ZM16 28.1667C13.3478 28.1667 10.8043 29.308 8.92893 31.3397C7.05357 33.3713 6 36.1268 6 39C6 40.7239 6.63214 42.3772 7.75736 43.5962C8.88258 44.8152 10.4087 45.5 12 45.5H36C37.5913 45.5 39.1174 44.8152 40.2426 43.5962C41.3679 42.3772 42 40.7239 42 39C42 36.1268 40.9464 33.3713 39.0711 31.3397C37.1957 29.308 34.6522 28.1667 32 28.1667H16Z"
              />
            </svg>
          </div>
          <h2
            class="font-Manrope font-semibold text-sm lg:text-base bg-transparent"
          >
            My Info
          </h2>
        </div>
        <div
          :class="{ backPrimary: toggleComp == 'myclients' }"
          @click="ChangeTest2"
          class="heading flex items-center gap-4 hover:bg-primary hover:text-white py-3 cursor-pointer"
        >
          <div class="pl-[15%]">
            <svg
              class="blackSvg"
              :class="{ fillsvg: toggleComp == 'myclients' }"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1853 1792"
            >
              <path
                d="M593 896C485 899.333 396.667 942 328 1024H194C139.333 1024 93.3333 1010.5 56 983.5C18.6667 956.5 0 917 0 865C0 629.667 41.3333 512 124 512C128 512 142.5 519 167.5 533C192.5 547 225 561.167 265 575.5C305 589.833 344.667 597 384 597C428.667 597 473 589.333 517 574C513.667 598.667 512 620.667 512 640C512 732.667 539 818 593 896ZM1664 1533C1664 1613 1639.67 1676.17 1591 1722.5C1542.33 1768.83 1477.67 1792 1397 1792H523C442.333 1792 377.667 1768.83 329 1722.5C280.333 1676.17 256 1613 256 1533C256 1497.67 257.167 1463.17 259.5 1429.5C261.833 1395.83 266.5 1359.5 273.5 1320.5C280.5 1281.5 289.333 1245.33 300 1212C310.667 1178.67 325 1146.17 343 1114.5C361 1082.83 381.667 1055.83 405 1033.5C428.333 1011.17 456.833 993.333 490.5 980C524.167 966.667 561.333 960 602 960C608.667 960 623 967.167 645 981.5C667 995.833 691.333 1011.83 718 1029.5C744.667 1047.17 780.333 1063.17 825 1077.5C869.667 1091.83 914.667 1099 960 1099C1005.33 1099 1050.33 1091.83 1095 1077.5C1139.67 1063.17 1175.33 1047.17 1202 1029.5C1228.67 1011.83 1253 995.833 1275 981.5C1297 967.167 1311.33 960 1318 960C1358.67 960 1395.83 966.667 1429.5 980C1463.17 993.333 1491.67 1011.17 1515 1033.5C1538.33 1055.83 1559 1082.83 1577 1114.5C1595 1146.17 1609.33 1178.67 1620 1212C1630.67 1245.33 1639.5 1281.5 1646.5 1320.5C1653.5 1359.5 1658.17 1395.83 1660.5 1429.5C1662.83 1463.17 1664 1497.67 1664 1533ZM640 256C640 326.667 615 387 565 437C515 487 454.667 512 384 512C313.333 512 253 487 203 437C153 387 128 326.667 128 256C128 185.333 153 125 203 75C253 25 313.333 0 384 0C454.667 0 515 25 565 75C615 125 640 185.333 640 256ZM1344 640C1344 746 1306.5 836.5 1231.5 911.5C1156.5 986.5 1066 1024 960 1024C854 1024 763.5 986.5 688.5 911.5C613.5 836.5 576 746 576 640C576 534 613.5 443.5 688.5 368.5C763.5 293.5 854 256 960 256C1066 256 1156.5 293.5 1231.5 368.5C1306.5 443.5 1344 534 1344 640ZM1920 865C1920 917 1901.33 956.5 1864 983.5C1826.67 1010.5 1780.67 1024 1726 1024H1592C1523.33 942 1435 899.333 1327 896C1381 818 1408 732.667 1408 640C1408 620.667 1406.33 598.667 1403 574C1447 589.333 1491.33 597 1536 597C1575.33 597 1615 589.833 1655 575.5C1695 561.167 1727.5 547 1752.5 533C1777.5 519 1792 512 1796 512C1878.67 512 1920 629.667 1920 865ZM1792 256C1792 326.667 1767 387 1717 437C1667 487 1606.67 512 1536 512C1465.33 512 1405 487 1355 437C1305 387 1280 326.667 1280 256C1280 185.333 1305 125 1355 75C1405 25 1465.33 0 1536 0C1606.67 0 1667 25 1717 75C1767 125 1792 185.333 1792 256Z"
                
              />
            </svg>
          </div>
          <h2 class="font-Manrope font-semibold text-sm lg:text-base">
            My Clients
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../../router';
export default {
  name: "TrainerSideBar",
  inject: ["ChangeToggle1","ChangeToggle2","toggleComp"],
  
  data() {
    return {
      toggle: "main-side-right",
      flag: false,
      test: "",
      toggleComp:"info",
      user:{}
    };
  },
  created(){
    if (localStorage.getItem('role') == 'trainer') {
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user);
    }
  },

  methods: {
    drag() {
      if (this.flag) {
        this.toggle = "main-side-right";
      } else {
        this.toggle = "main-side-left";
      }
      this.flag = !this.flag;
    },
    async ChangeTest1 () {
      router.push('/TrainerAccount')
      this.toggleComp="info"
      await this.ChangeToggle1()
      console.log(this.toggleComp)
    },
    async ChangeTest2 () {
      router.push('/TrainerAccount')
      this.toggleComp = "myclients"
      await this.ChangeToggle2()
      console.log(this.toggleComp)
    }
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .my-shadow {
    box-shadow: 1px 3px 5px 0px black;
  }
}
.heading {
  transition: 0.2s;
}
.blackSvg {
  fill: black;
}
.heading:hover svg {
  fill: white;
}
.back-white {
  background-color: white;
}
.backPrimary {
  color: white;
  fill: white;
  background-color: #e60000;
}

.fillsvg {
  fill: white;
}
</style>
