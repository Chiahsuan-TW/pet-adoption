<template>
  <header>
    <Navbar />
  </header>
  <router-view />
  <Footer />
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style lang="scss">
header {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
