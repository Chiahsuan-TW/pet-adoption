<template>
  <header>
    <Navbar @darkModel="clickDarkModel" />
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

  data() {
    return {
      navDark: this.isDark,
    };
  },
  methods: {
    clickDarkModel(isDark) {
      console.log("我在父層", isDark);
      document.querySelector("nav").classList.toggle("dark");
      document.querySelector("main").classList.toggle("dark");
      document.querySelector(".search_container").classList.toggle("dark");
      document.body.style = "color:red";
    },
  },
};
</script>

<style lang="scss">
header {
  max-width: 1440px;
  margin: 0 auto;
}

nav.dark {
  background: #000;
  .tabs a {
    color: #fff;
  }
}
</style>
