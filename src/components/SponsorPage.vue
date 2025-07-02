<template>
  <div class="container mx-auto px-5 lg:px-8 pt-16 pb-24">
    <div
      class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
    >
      <!-- Sponsor Details -->
      <div
        id="sponsor-detail"
        class="lg:w-1/2 text-center lg:text-left scroll-mt-32"
      >
        <h5
          class="text-lightBlue tracking-wide mb-3 text-sm md:text-base lg:text-lg font-semibold font-Sawa"
        >
          {{ sponsor?.titleHead }}
        </h5>
        <h1
          class="text-secondBlack text-2xl md:text-3xl lg:text-4xl font-semibold font-Inter leading-snug mb-5"
        >
          {{ sponsor?.title }}
        </h1>
        <p
          class="text-secondGray font-Sawa text-base md:text-lg lg:text-xl mb-8"
        >
          {{ sponsor?.desc }}
        </p>
        <a
          href="#"
          class="inline-block px-8 py-4 bg-paleBlue text-white font-Sawa rounded-xl shadow-lg transition duration-300 ease-in-out hover:bg-slate-600 hover:scale-105"
        >
          {{ sponsor?.button }}
        </a>
      </div>

      <!-- Sponsor Image -->
      <div id="sponsor-img" class="lg:w-1/2">
        <img
          :src="sponsor?.src"
          :alt="sponsor?.alt"
          class="rounded-2xl shadow-md w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  sponsorDetails: {
    type: Array,
    required: true,
  },
});

// Use optional chaining to avoid undefined access
const sponsor = computed(() => props.sponsorDetails?.[0]);

onMounted(() => {
  gsap.from("#sponsor-img", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sponsor-img",
      start: "top center",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#sponsor-detail", {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#sponsor-detail",
      start: "top center",
      toggleActions: "play none none none",
    },
  });
});
</script>
