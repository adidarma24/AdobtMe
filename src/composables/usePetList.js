import { ref, computed, onMounted } from "vue";
import gsap from "gsap";
import thinking from "../assets/thinking.gif";
import good from "../assets/thumbs-up-cat.gif";
import sad from "../assets/sad cats.jpg";

export default function usePetList(props) {
  const selectedCategory = ref("ALL");

  const filteredPetImages = computed(() => {
    return props.petImages.filter((pet) => {
      if (selectedCategory.value === "ALL") return true;
      if (selectedCategory.value === "CATS")
        return pet.alt?.toLowerCase().includes("cat");
      if (selectedCategory.value === "DOGS")
        return pet.alt?.toLowerCase().includes("dog");
      return pet.alt
        ?.toLowerCase()
        .includes(selectedCategory.value.toLowerCase());
    });
  });

  const handleCategoryClick = (category) => {
    selectedCategory.value = category;
  };

  const adoptPet = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to adopt this pet!",
      imageUrl: thinking,
      imageWidth: 400,
      imageHeight: 250,
      showCancelButton: true,
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, adopt it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "You have adopted the pet",
          imageUrl: good,
          imageWidth: 230,
          imageHeight: 230,
          confirmButtonText: "Next",
          confirmButtonColor: "#304057",
          color: "#304057",
        });
      } else {
        Swal.fire({
          title: "Cancelled!",
          text: "You did not adopt the pet",
          imageUrl: sad,
          imageWidth: 250,
          imageHeight: 250,
          confirmButtonText: "Next",
          confirmButtonColor: "#304057",
          color: "#304057",
        });
      }
    });
  };

  onMounted(() => {
    gsap.from("#petlist-title", {
      opacity: 0,
      y: 120,
      ease: "power2.out",
      duration: 1,
    });
    gsap.from("#petlist-filter", {
      opacity: 0,
      y: 60,
      ease: "power2.out",
      delay: 0.2,
      duration: 1,
    });
  });

  return {
    selectedCategory,
    filteredPetImages,
    handleCategoryClick,
    adoptPet,
  };
}
