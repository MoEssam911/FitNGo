<template>
  <section>
    <div class="container">
      <div class="about h-80 mt-10 rounded-3xl overflow-hidden">
        <div class="mt-16 ml-28 z-10 relative">
          <h2 class="text-primary font-semibold text-3xl">About Us</h2>
          <p class="text-white mt-9 w-[700px]">
            We are a fitness community dedicated to helping people achieve their
            fitness goals. Our mission is to provide our members with the best
            possible fitness experience by offering expert trainers,
            state-of-the-art facilities, and a supportive community.
          </p>
        </div>
      </div>
      <div class="flex gap-3 mt-12">
        <div
          class="flex flex-col justify-between our-mission w-4/12 h-96 bg-[#eee] rounded-3xl p-9 text-2xl">
          <h3 class="text-center text-primary font-semibold">Our Mission</h3>
          <p class="text-center">Icon</p>
          <p class="text-base text-dark leading-7 text-center">
            We help you reach your fitness goals with our online platform. You
            can hire a trainer, buy supplements, or find a gym near you. We make
            fitness easy and fun for everyone.
          </p>
        </div>
        <div
          class="flex flex-col justify-between our-mission w-4/12 h-96 bg-[#eee] rounded-3xl p-9 text-2xl">
          <h3 class="text-center text-primary font-semibold">Our Goals</h3>
          <img src="../assets/svg/octicon_goal-24.svg" alt="">
          <p class="text-base text-dark leading-7 text-center">
            To link you with expert trainers who can guide you to your fitness
            goals and wellness. <br />
            To provide you with a wide range of supplements that can boost your
            performance. <br />
            To assist you in finding the best gym near you that suits your needs
            and preferences.
          </p>
        </div>
        <div
          class="flex flex-col justify-between our-mission w-4/12 h-96 bg-[#eee] rounded-3xl p-9 text-2xl">
          <h3 class="text-center text-primary font-semibold">Our Message</h3>
          <p class="text-center">Icon</p>
          <p class="text-base text-dark leading-7 text-center">
            We are your online fitness partner. We have everything you need to
            get fit and healthy. Trainer, supplements, gym. Join us now and
            start your fitness journey.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  background-image: url(../assets/Images/about.jpg);
  position: relative;
}
.about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
