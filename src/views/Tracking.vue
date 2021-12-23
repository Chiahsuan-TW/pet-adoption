<template>
  <h2>追蹤浪浪</h2>
  <!-- <Card :pet="pet" /> -->
  <Card v-for="pet in trackingPets" :key="pet.animal_id" :pet="pet" />
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Tracking",
  components: { Card },
  data() {
    return {
      trackingPets: [],
      // pet: {
      //   animal_id: 123,
      //   animal_kind: "狗",
      //   animal_colour: "brown",
      //   animal_bacterin: "F",
      //   animal_place: "tainan",
      // },
      // pet: {},
    };
  },
  created() {
    const pet = {
      animal_id: 124,
      animal_kind: "狗",
      animal_colour: "brown",
      animal_bacterin: "F",
      animal_place: "tainan",
    };
    localStorage.setItem("favorite", JSON.stringify(pet));
    const favorite = JSON.parse(localStorage.getItem("favorite"));
    console.log(favorite);
    this.trackingPets.push(favorite);
  },
};
</script>

<style lang="scss" scoped></style>
