<template>
  <header>
    <Navbar />
  </header>
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

<style lang="scss">
header {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
