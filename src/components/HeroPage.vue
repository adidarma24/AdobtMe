<template>
  <section class="container mx-auto px-5 lg:px-8">
    <div class="flex flex-col lg:flex-row items-center justify-between">
      <!-- Image Hero -->
      <div class="lg:w-[65%] order-2 lg:order-2 mb-10 lg:mb-0" id="img-hero">
        <img
          :src="heroImages[0].src"
          :alt="heroImages[0].alt"
          class="mx-auto md:scale-95"
        />
      </div>

      <!-- Text Content -->
      <div
        class="lg:w-1/2 xl:w-[46%] order-1 lg:order-1 text-center lg:text-left"
        id="img-text"
      >
        <h1
          id="hero-title"
          class="font-Inter text-2xl md:text-4xl xl:text-5xl text-paleBlue font-semibold leading-relaxed xl:leading-snug tracking-wide mb-4"
        >
          Let's Choose and
          <i
            class="fa-solid fa-paw rotate-45 text-4xl xl:text-5xl text-paleBlue ml-2"
          ></i>
          Adopt your new Pet
        </h1>

        <p
          id="hero-desc"
          class="font-Sawa text-secondGray text-base md:text-lg xl:text-xl max-w-lg lg:max-w-[22rem] xl:max-w-sm mx-auto lg:mx-0 mb-6"
        ></p>

        <div
          id="button"
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-7"
        >
          <a
            href="#"
            class="px-6 py-3 bg-paleBlue font-Sawa text-white rounded-md shadow-md hover:bg-slate-500 transition duration-300 text-center"
          >
            Adopt now
          </a>
          <a
            href="#"
            class="px-6 py-3 text-paleBlue font-Sawa border border-paleBlue rounded-md hover:bg-paleBlue hover:text-white transition duration-300 text-center"
          >
            Donate for food
          </a>
        </div>

        <div>
          <p
            id="paragraph-hero"
            class="uppercase font-Sawa font-semibold text-paleBlue text-sm md:text-base mb-3"
          >
            Supported by:
          </p>
          <div
            id="hero-logo"
            class="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-sm justify-items-center mx-auto lg:mx-0"
          >
            <img
              v-for="(image, index) in heroImages.slice(1)"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="w-16 sm:w-20 md:w-24 object-contain hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { onMounted } from "vue";

gsap.registerPlugin(TextPlugin);

defineProps({
  heroImages: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  gsap.from("#img-hero", {
    duration: 2,
    delay: 1.5,
    opacity: 0,
    x: 100,
    ease: "back.out(2)",
  });

  gsap.from("#hero-title", {
    duration: 2,
    delay: 2,
    opacity: 0,
    y: -160,
    ease: "power3.out",
  });

  gsap.to("#hero-desc", {
    duration: 3.5,
    delay: 2.5,
    text: "Adopt a pet, give them the best treatment, and enjoy the beautiful bond of friendship.",
    ease: "power1.inOut",
  });

  gsap.from("#button", {
    delay: 3,
    duration: 2,
    opacity: 0,
    x: -120,
    ease: "power3.out",
  });

  gsap.from("#paragraph-hero", {
    delay: 3.5,
    duration: 1.5,
    opacity: 0,
    x: -100,
    ease: "power2.out",
  });

  gsap.from("#hero-logo", {
    delay: 4,
    duration: 2,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  });
});
</script>
