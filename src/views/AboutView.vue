<template>
  <section class="mt-16">
    <div class="container">
      <div class="about h-80 rounded-3xl overflow-hidden">
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
          <div class="icon text-center">
            <i class="fa-solid fa-medal text-primary text-7xl"></i>
          </div>
          <p class="text-base text-dark leading-7 text-center">
            We help you reach your fitness goals with our online platform. You
            can hire a trainer, buy supplements, or find a gym near you. We make
            fitness easy and fun for everyone.
          </p>
        </div>
        <div
          class="flex flex-col justify-between our-mission w-4/12 h-96 bg-[#eee] rounded-3xl p-9 text-2xl">
          <h3 class="text-center text-primary font-semibold">Our Goals</h3>
          <div class="icon text-center">
            <i class="fa-solid fa-bullseye text-primary text-7xl"></i>
          </div>
          <p class="text-base text-dark leading-7 text-center">
            To link you with expert trainers who can guide you to your fitness
            goals and wellness. <br />
            To provide you with a wide range of supplements that can boost your
            performance.
          </p>
        </div>
        <div
          class="flex flex-col justify-between our-mission w-4/12 h-96 bg-secondary rounded-3xl p-9 text-2xl">
          <h3 class="text-center text-primary font-semibold">Our Message</h3>
          <div class="icon text-center">
            <i class="fa-solid fa-heart text-primary text-7xl"></i>
          </div>
          <p class="text-base text-dark leading-7 text-center">
            We are your online fitness partner. We have everything you need to
            get fit and healthy. Trainer, supplements, gym. Join us now and
            start your fitness journey.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-16">
    <div class="container">
      <h3 class="text-primary text-center font-semibold text-3xl">
        Principles
      </h3>
      <div class="flex gap-3 mt-12">
        <div class="w-6/12 bg-secondary h-40 rounded-3xl p-9">
          <h3 class="text-center text-primary text-2xl">Remove Barriers</h3>
          <p class="text-center mt-5">
            Just grab your phone and start when you are ready we’ll build up the
            rest from there.
          </p>
        </div>
        <div class="w-6/12 bg-secondary h-40 rounded-3xl p-9">
          <h3 class="text-center text-primary text-2xl">Act as a coach</h3>
          <p class="text-center mt-5">
            We build personalized workout and meal plans, track your progress,
            give you advice and push you when you need it the most to ensure
            that you reach your goals.
          </p>
        </div>
      </div>
      <div class="flex gap-3 mt-3">
        <div class="w-6/12 bg-secondary h-40 rounded-3xl p-9">
          <h3 class="text-center text-primary text-2xl">
            Spread the knowledge
          </h3>
          <p class="text-center mt-5">
            Helpful insights and tips are integrated into the app for you to
            learn about your body and the workout process.
          </p>
        </div>
        <div class="w-6/12 bg-secondary h-40 rounded-3xl p-9">
          <h3 class="text-center text-primary text-2xl">Foster the habit</h3>
          <p class="text-center mt-5">
            Besides getting you the body you want, we aim to make you embrace a
            healthy lifestyle and make choices that will benefit you in the long
            run.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="container mt-16">
    <OurPartners class="mt-3"></OurPartners>
  </section>
</template>

<script>
import OurPartners from "../components/Home/OurPartners.vue";
export default {
  name: "About",
  components: {
    OurPartners
  }
};
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
