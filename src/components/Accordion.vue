<template>
  <div class="container mx-auto px-5 lg:px-8 pt-16 pb-24">
    <!-- Title Section -->
    <div class="text-center scroll-mt-32" id="accordion-title">
      <h5
        class="text-lightBlue font-semibold font-Sawa tracking-wider mb-3 text-sm md:text-base lg:text-lg"
      >
        FORUM ANSWER AND QUESTION
      </h5>
      <h1
        class="text-secondBlack font-Inter font-semibold text-2xl md:text-3xl lg:text-4xl xl:max-w-md xl:leading-relaxed mx-auto mb-5"
      >
        Adopt the pet that has waited too long
      </h1>
      <p
        class="text-secondGray font-Sawa text-base md:text-lg lg:text-xl md:max-w-md mx-auto mb-8"
      >
        What are you waiting for? They need your help for their better lives!
      </p>
    </div>

    <!-- Accordion Section -->
    <div
      class="grid grid-cols-1 max-w-4xl mx-auto cursor-pointer"
      id="accordions"
    >
      <div v-for="(item, index) in accordionItems" :key="index">
        <div
          class="p-5 border-[1px]"
          :class="item.show ? 'border-paleBlue' : 'border-secondGray/40'"
          v-auto-animate
          @click="toggleAccordion(index)"
        >
          <!-- Accordion Header -->
          <div
            class="flex items-center justify-between"
            :class="item.show ? 'mb-5' : 'mb-0'"
          >
            <div class="flex items-center gap-3">
              <span class="text-base md:text-lg text-paleBlue">&bull;</span>
              <p
                class="text-base md:text-lg text-paleBlue font-semibold font-Inter"
              >
                {{ item.title }}
              </p>
            </div>
            <i
              class="fa-solid"
              :class="
                item.show
                  ? 'fa-chevron-up text-secondGray/75'
                  : 'fa-chevron-down text-paleBlue'
              "
            ></i>
          </div>

          <!-- Accordion Content -->
          <p
            v-if="item.show"
            class="text-base md:text-lg text-paleBlue font-Sawa"
          >
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

// Accordion Data
const accordionItems = ref([
  {
    title: "How to adopt a pet?",
    content:
      "Create a user account in AdoptMe. Once finished, you can choose which animal you want to adopt in the adopt list.",
    show: false,
  },
  {
    title: "How to adopt a cat?",
    content:
      "You just have to choose the cat you like and want to adopt from the pet list.",
    show: false,
  },
  {
    title: "How to adopt a dog?",
    content:
      "You just have to choose the dog you like and want to adopt from the pet list.",
    show: false,
  },
  {
    title: "How much does it cost to adopt an animal?",
    content: "It depends on the type and age of the animal.",
    show: false,
  },
  {
    title: "Does AdoptMe sell animals other than cats and dogs?",
    content: "No, AdoptMe does not sell animals other than cats and dogs.",
    show: false,
  },
  {
    title: "Is there a special animal clinic at AdoptMe?",
    content:
      "Yes, there is a special clinic to handle the care of cats and dogs at AdoptMe.",
    show: false,
  },
]);

// Accordion Toggle Function
const toggleAccordion = (index) => {
  accordionItems.value = accordionItems.value.map((item, i) => ({
    ...item,
    show: i === index ? !item.show : false,
  }));
};

// GSAP Animation on Mount
onMounted(() => {
  gsap.from("#accordion-title", {
    opacity: 0,
    y: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#accordion-title",
      once: true,
      start: "top center",
      scrub: 1,
      end: "+=100",
    },
  });

  gsap.from("#accordions", {
    opacity: 0,
    y: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#accordions",
      once: true,
      start: "top center",
      scrub: 1,
      end: "+=160",
    },
  });
});
</script>
