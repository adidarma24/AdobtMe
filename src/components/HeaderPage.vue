<template>
  <header class="pb-36">
    <nav
      :class="[
        'fixed top-0 z-50 w-full p-5 xl:px-7 transition-colors duration-300 ease-in-out',
        isNavbarScrolled
          ? 'bg-linearBlue/75 shadow-md backdrop-blur-md'
          : 'bg-transparent',
      ]"
      id="navbar"
    >
      <div class="container mx-auto flex justify-between items-center">
        <!-- Brand -->
        <div class="flex items-center gap-6 lg:gap-10 xl:gap-20">
          <div class="flex items-center gap-2">
            <h1 class="font-Sawa font-medium text-xl text-paleBlue">AdoptMe</h1>
            <img :src="logo" alt="logo paw" />
          </div>

          <!-- Desktop Nav -->
          <ul class="hidden lg:flex gap-8 xl:gap-12">
            <li v-for="(link, idx) in navLinks" :key="idx">
              <a
                :href="link.href"
                class="font-Sawa font-medium text-secondGray hover:text-paleBlue transition"
              >
                {{ link.label }}
              </a>
            </li>

            <!-- Dropdown -->
            <li class="relative">
              <div
                class="flex items-center gap-2 cursor-pointer group"
                @click="toggleDropdown"
              >
                <span
                  class="text-secondGray font-Sawa font-medium group-hover:text-paleBlue transition"
                >
                  Adoption
                </span>
                <i
                  :class="[
                    'fa-solid text-secondGray group-hover:text-paleBlue transition',
                    showDropdownMenu ? 'fa-chevron-up' : 'fa-chevron-down',
                  ]"
                ></i>
              </div>

              <transition name="fade-slide">
                <div
                  v-if="showDropdownMenu"
                  class="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-sm px-5 py-4"
                >
                  <div class="space-y-2">
                    <div
                      class="flex gap-3 items-center group cursor-pointer"
                      @click="scrollToPet('Cats')"
                    >
                      <i
                        class="fa-solid fa-cat text-paleBlue group-hover:text-slate-500 transition"
                      />
                      <p
                        class="font-Sawa text-lg text-paleBlue group-hover:text-slate-500 transition"
                      >
                        Cats
                      </p>
                    </div>
                    <div
                      class="flex gap-3 items-center group cursor-pointer"
                      @click="scrollToPet('Dogs')"
                    >
                      <i
                        class="fa-solid fa-dog text-paleBlue group-hover:text-slate-500 transition"
                      />
                      <p
                        class="font-Sawa text-lg text-paleBlue group-hover:text-slate-500 transition"
                      >
                        Dogs
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>

        <!-- Right Section -->
        <div class="relative z-50 flex items-center gap-5 lg:gap-7">
          <img
            :src="searchGlass"
            alt="search"
            class="cursor-pointer active:scale-90 transition duration-300 ease-in-out hidden lg:block"
            @click="toggleSearchModal"
          />
          <!-- Search Modal -->
          <transition name="fade">
            <div
              v-if="showSearchModal"
              class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            >
              <div
                class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
              >
                <button
                  @click="toggleSearchModal"
                  class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
                <input
                  v-model="searchQuery"
                  @keyup.enter="submitSearch"
                  type="text"
                  placeholder="Search pet name or type..."
                  class="w-full border border-paleBlue rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-paleBlue"
                  autofocus
                />
                <button
                  @click="submitSearch"
                  class="mt-4 w-full bg-paleBlue text-white py-2 rounded hover:bg-slate-500 transition"
                >
                  Search
                </button>
              </div>
            </div>
          </transition>

          <a
            href="#"
            class="font-Sawa font-medium text-paleBlue hidden lg:block active:scale-90 transition"
          >
            Sign in
          </a>

          <button
            class="bg-paleBlue text-white px-6 py-2 rounded-sm font-medium hover:bg-slate-500 hidden lg:block active:scale-90 transition"
          >
            Sign up
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="block lg:hidden">
            <img
              :src="isMobileMenuOpen ? closeMenu : burgerMenu"
              alt="menu toggle"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      <transition name="fade-slide">
        <div
          v-if="isMobileMenuOpen"
          class="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-gradient-to-b from-linearBlue to-white shadow-xl px-6 py-12 space-y-6 z-40"
        >
          <ul class="space-y-6">
            <li v-for="(link, i) in navLinks" :key="i">
              <a :href="link.href" class="text-colorNav font-medium block">{{
                link.label
              }}</a>
            </li>
            <li>
              <a href="#" class="text-paleBlue font-medium block text-center"
                >Sign in</a
              >
            </li>
            <li>
              <a
                href="#"
                class="bg-paleBlue text-white py-2 px-6 block rounded-sm text-center font-medium"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </transition>

      <!-- Overlay -->
      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          @click="toggleMobileMenu"
          class="fixed top-0 left-0 w-full h-full bg-black/60 z-30 lg:hidden"
        ></div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

import burgerMenu from "../assets/burger.svg";
import closeMenu from "../assets/close.svg";
import searchGlass from "../assets/search.svg";
import logo from "../assets/paw.svg";

const isMobileMenuOpen = ref(false);
const showDropdownMenu = ref(false);
const isNavbarScrolled = ref(false);
const showSearchModal = ref(false);
const searchQuery = ref("");
// Toggle search modal
const toggleSearchModal = () => {
  showSearchModal.value = !showSearchModal.value;
  if (!showSearchModal.value) {
    searchQuery.value = "";
  }
};

// Submit search (scroll ke PetList dan trigger filter via event)
const submitSearch = () => {
  toggleSearchModal();
  // Kirim event custom ke window, nanti ditangkap di App.vue
  window.dispatchEvent(
    new CustomEvent("pet-search", { detail: searchQuery.value })
  );
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleDropdown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};

const scrollToPet = (type) => {
  let categoryId = null;
  let categoryValue = null;
  if (type === "Cats") {
    categoryId = "category-cats";
    categoryValue = "CATS";
  } else if (type === "Dogs") {
    categoryId = "category-dogs";
    categoryValue = "DOGS";
  }
  if (categoryId) {
    const catBtn = document.getElementById(categoryId);
    if (catBtn) {
      catBtn.click();
      catBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};

const handleScroll = () => {
  isNavbarScrolled.value = window.scrollY > 45;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  gsap.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Community", href: "#mission-title" },
  { label: "Stories with pet", href: "#sponsor-detail" },
  { label: "FAQ", href: "#accordion-title" },
];
</script>
