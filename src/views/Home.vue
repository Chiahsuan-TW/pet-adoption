<template>
  <section class="landing_page">
    <section class="adoption">
      <div class="home">
        <img src="./../assets/images/home.png" alt="home icon" />
      </div>
      <h1>浪我陪你等家</h1>
      <h2>領養代替購買</h2>
      <p>零撲殺後<br />長住收容所的浪浪們<br />你願意給他們一個家嗎</p>
      <div class="dots">
        <img src="./../assets/images/circles.png" alt="dots box" />
      </div>
      <button>
        <img src="./../assets/images/arrow-down.png" alt="arrow downwards" />
      </button>
    </section>
    <section class="dog_profile">
      <img src="./../assets/images/photo/home-dog-1.jpg" alt="brown dog" />
    </section>
  </section>
  <section></section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.landing_page {
  height: calc(100vh - 112px);
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: color.$primary;

  .adoption {
    padding-left: 100px;
  }

  .home {
    width: 575px;

    img {
      width: 100%;
    }
  }

  h1 {
    color: color.$text_dark;
    font-weight: 500;
    font-size: 70px;
  }

  h2 {
    margin-top: 12px;
    color: color.$secondary;
    font-weight: 500;
    font-size: 30px;
  }

  p {
    margin-top: 67px;
    color: color.$text_light;
    font-weight: 500;
    font-size: 20px;
  }

  .dots {
    position: absolute;
    left: 647px;
    bottom: 168px;
  }

  button {
    width: 146px;
    height: 120px;
    background-color: color.$secondary;
    position: absolute;
    bottom: 0;
  }
}
</style>
