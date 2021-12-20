<template>
  <Navbar />
  <router-view />
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss"></style>
