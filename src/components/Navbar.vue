<template>
  <nav>
    <router-link :to="{ name: 'Home' }"
      ><img src="./../assets/images/paw.png" alt="dog paw"
    /></router-link>
    <div class="tabs">
      <router-link :to="{ name: 'Search' }">尋找浪浪</router-link>
      <router-link :to="{ name: 'Tracking' }">追蹤浪浪</router-link>
      <router-link :to="{ name: 'Volunteer' }">志工招募</router-link>
      <a href="##">愛心項圈</a>
      <router-link :to="{ name: 'Info' }">資訊</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
}

.tabs {
  a {
    color: color.$text_dark;
  }
  a + a {
    margin-left: 5px;
  }
}
</style>
