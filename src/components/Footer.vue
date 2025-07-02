<template>
  <footer class="border-t border-secondGray/50 pt-5 pb-10">
    <div
      id="footer"
      class="container mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 pt-5"
    >
      <h3
        class="text-secondBlack text-base md:text-lg font-semibold font-Inter flex items-center gap-2"
      >
        <i class="fa-regular fa-copyright text-xl"></i>
        <span>Copyright 2025. Adoptme</span>
      </h3>

      <h3
        class="text-secondBlack text-base md:text-lg font-semibold font-Inter flex items-center gap-2"
      >
        <i class="fa-brands fa-whatsapp text-xl"></i>
        <span>(62)192834012</span>
        <span>|</span>
        <i class="fa-regular fa-envelope text-xl"></i>
        <span>adoptme@gmail.com</span>
      </h3>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from("#footer", {
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#footer",
      once: true,
      scrub: 1,
      end: "+=70",
    },
  });
});
</script>
