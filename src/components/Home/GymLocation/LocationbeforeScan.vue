<template>
    
        <div class="rounded-xl w-full h-full bgimg flex justify-center gap-32">
            
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-3xl text-gray-900 font-bold ml-3 my-2">Get Nearby</h2>
            <h2 class="text-6xl text-primary font-bold ml-3 my-2">Gyms</h2>
            </div>
            <div class="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="160" viewBox="0 0 152 185" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3436 10.1707C62.065 -3.61247 91.2226 -3.37156 114.721 10.8018C137.989 25.2638 152.131 51.0742 151.999 78.839C151.458 106.422 136.294 132.349 117.339 152.393C106.399 164.013 94.1604 174.289 80.8736 183.01C79.5052 183.801 78.0063 184.33 76.4509 184.573C74.9538 184.509 73.4959 184.066 72.2086 183.285C51.9238 170.182 34.1278 153.456 19.6769 133.912C7.58471 117.598 0.714779 97.8887 1.26335e-05 77.4599C-0.0156978 49.6418 14.6221 23.9539 38.3436 10.1707ZM52.0551 88.9744C56.0453 98.8117 65.4639 105.228 75.9131 105.228C82.7586 105.278 89.339 102.536 94.188 97.6135C99.0371 92.6913 101.752 85.998 101.728 79.0249C101.764 68.3811 95.4979 58.7646 85.8546 54.6656C76.2113 50.5666 65.0933 52.7935 57.6916 60.3067C50.29 67.8199 48.0648 79.1372 52.0551 88.9744Z" fill="#E60000"/>
</svg>
            </div>
        </div>
    
</template>

<script>
    export default {
        name:"LocationbeforeScan",

    }
</script>

<style scoped>
.bgimg {
    background-image: url("../../../assets/Images/background-location.jpg");
    background-size: cover;
}

svg {
    animation: 750ms linear 750ms infinite alternate locationanimation;
}
@keyframes locationanimation {
    from {
        transform: translateY(-30px);
    }
    to {
        transform: translateY(20px);
    }
}
</style>