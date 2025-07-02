<script setup>
import { defineProps } from "vue";
import usePetList from "../composables/usePetList";

const props = defineProps({
  petImages: {
    type: Array,
    required: true,
  },
});

const { selectedCategory, filteredPetImages, handleCategoryClick, adoptPet } =
  usePetList(props);
</script>

<template>
  <section id="pet-lists" class="bg-[#f9fcff] py-16">
    <div class="container mx-auto px-5 lg:px-8">
      <!-- Header -->
      <div class="mb-7 text-center" id="petlist-title">
        <h5
          class="text-lightBlue tracking-widest mb-3 font-semibold text-sm md:text-base lg:text-lg font-Sawa uppercase"
        >
          Adoption Pet
        </h5>
        <h1
          class="text-secondBlack font-Inter font-semibold text-2xl md:text-3xl lg:text-4xl mb-4"
        >
          Adopt the pet that has waited too long
        </h1>
        <p
          class="text-secondGray font-Sawa text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
        >
          What are you waiting for? Let’s adopt some new softly friends in
          AdoptMe. They are waiting for you too!
        </p>
      </div>

      <!-- Category Filter -->
      <div id="petlist-filter" class="flex justify-center gap-4 mb-12">
        <div
          v-for="(category, index) in ['CATS', 'DOGS', 'ALL']"
          :key="index"
          @click="handleCategoryClick(category)"
          :class="[
            'cursor-pointer border px-6 py-2 rounded transition duration-300 ease-in-out font-medium font-Inter text-sm md:text-base',
            selectedCategory === category
              ? 'bg-paleBlue text-white border-paleBlue'
              : 'text-paleBlue border-paleBlue/50 hover:bg-paleBlue hover:text-white',
          ]"
        >
          {{ category }}
        </div>
      </div>

      <!-- Pet Cards -->
      <div
        v-auto-animate="{ duration: 600 }"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        <div
          v-for="(pet, index) in filteredPetImages"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
        >
          <!-- Image Hover Layer -->
          <div class="relative group" id="petlist-img">
            <img
              :src="pet.src"
              :alt="pet.alt"
              class="w-full h-64 object-cover object-center rounded-t-xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-white/70 transition duration-300 ease-in-out"
            >
              <div
                class="absolute inset-0 flex flex-col justify-end items-center p-5"
              >
                <button
                  @click="adoptPet"
                  class="mb-4 px-6 py-2 bg-paleBlue text-white font-Sawa rounded opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out hover:bg-slate-500"
                >
                  Adopt Now
                </button>
                <h1
                  class="text-white group-hover:text-secondBlack text-lg font-medium transition duration-300 font-Sawa"
                >
                  {{ pet.waiting }}
                </h1>
              </div>
            </div>
          </div>

          <!-- Pet Info -->
          <div id="petlist-detail" class="text-center p-4">
            <h2 class="text-secondBlack font-Inter font-semibold text-xl mb-1">
              {{ pet.name }}
            </h2>
            <p class="text-secondGray font-Sawa text-base">{{ pet.old }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
