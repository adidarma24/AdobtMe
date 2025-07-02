<template>
  <section class="bg-gradient-to-b from-[#f3f8ff] to-white py-16 px-5 lg:px-8">
    <div class="container mx-auto">
      <!-- Header -->
      <div
        class="flex flex-col lg:flex-row gap-12 justify-between items-center mb-16"
      >
        <div class="lg:w-1/2 scroll-mt-32" id="mission-title">
          <h5
            class="text-lightBlue tracking-wide mb-3 text-sm md:text-base lg:text-lg font-semibold font-Sawa"
          >
            {{ aboutImage[0].titleHeader }}
          </h5>
          <h1
            class="text-secondBlack text-2xl md:text-3xl lg:text-4xl font-semibold font-Inter leading-snug"
          >
            {{ aboutImage[0].title }}
          </h1>
        </div>
        <div class="lg:w-1/2" id="mission-paragraph">
          <p
            class="text-secondGray font-Sawa text-base md:text-lg lg:text-xl leading-relaxed"
          >
            {{ aboutImage[0].desc }}
          </p>
        </div>
      </div>

      <!-- Image + Content -->
      <div
        class="flex flex-col lg:flex-row gap-12 justify-between items-center"
      >
        <div class="lg:w-1/2 mb-8 lg:mb-0" id="mission-img">
          <img
            :src="aboutImage[0].src"
            :alt="aboutImage[0].alt"
            class="mx-auto rounded-md shadow-md w-full"
          />
        </div>
        <div class="lg:w-1/2" id="mission-community">
          <div>
            <h5
              class="text-lightBlue tracking-wide mb-3 text-sm md:text-base lg:text-lg font-semibold font-Sawa"
            >
              {{ aboutImage[0].communityHeader }}
            </h5>
            <h1
              class="text-secondBlack text-2xl md:text-3xl lg:text-4xl font-semibold font-Inter mb-5 leading-snug"
            >
              {{ aboutImage[0].communityTitle }}
            </h1>
            <p
              class="text-secondGray font-Sawa text-base md:text-lg lg:text-xl leading-relaxed mb-8"
            >
              {{ aboutImage[0].communityDesc }}
            </p>
          </div>

          <!-- Stats with Icon Badge -->
          <div
            id="stats"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center font-Sawa"
          >
            <div>
              <div class="flex justify-center items-center gap-2 mb-2">
                <i
                  class="fa-solid fa-shield-cat text-xl text-paleBlue animate-bounce"
                ></i>
                <h3 id="count" class="text-paleBlue text-3xl font-bold">0</h3>
              </div>
              <p class="text-secondGray text-base md:text-lg">
                {{ aboutImage[0].countOneDetail }}
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center gap-2 mb-2">
                <i
                  class="fa-solid fa-paw text-xl text-paleBlue animate-bounce"
                ></i>
                <h3 id="count2" class="text-paleBlue text-3xl font-bold">0</h3>
              </div>
              <p class="text-secondGray text-base md:text-lg">
                {{ aboutImage[0].countTwoDetail }}
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center gap-2 mb-2">
                <i
                  class="fa-solid fa-dog text-xl text-paleBlue animate-bounce"
                ></i>
                <h3 id="count3" class="text-paleBlue text-3xl font-bold">0</h3>
              </div>
              <p class="text-secondGray text-base md:text-lg">
                {{ aboutImage[0].countThreeDetail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

defineProps({
  aboutImage: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  gsap.from("#mission-title", {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#mission-title",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from("#mission-paragraph", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#mission-paragraph",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from("#mission-img", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#mission-img",
      start: "top 85%",
      once: true,
    },
  });

  gsap.from("#mission-community", {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#mission-community",
      start: "top 85%",
      once: true,
    },
  });

  gsap.from("#stats", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#stats",
      start: "top 90%",
      once: true,
    },
  });

  const animateCount = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value) {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: parseInt(value),
          duration: 2.5,
          snap: { innerText: 1 },
          ease: "power1.out",
          scrollTrigger: {
            trigger: "#stats",
            start: "top 90%",
            once: true,
          },
        }
      );
    }
  };

  animateCount("#count", aboutImage[0].countOne);
  animateCount("#count2", aboutImage[0].countTwo);
  animateCount("#count3", aboutImage[0].countThree);
});
</script>
