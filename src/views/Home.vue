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
  <section class="gallery">
    <div>
      <img
        src="./../assets/images/photo/home-dog-2.jpg"
        alt="dog with black and white fur"
      />
    </div>
    <div><img src="./../assets/images/photo/home-cat-1.jpg" alt="cat" /></div>
    <div><img src="./../assets/images/photo/home-cat-2.jpg" alt="cat" /></div>
    <div>
      <img src="./../assets/images/photo/home-dog-3.jpg" alt="brown dog" />
    </div>
    <div>
      <img src="./../assets/images/photo/home-dog-4.jpg" alt="black dog" />
    </div>
    <div>
      <p>為牠駐足，尋找你們之間的命中注定</p>
      <div>
        <img src="./../assets/images/arrow-right.png" alt="right arraow" />
      </div>
    </div>
  </section>
  <section class="volunteer">
    <h3>志工招募</h3>
    <h4>我們需要你，成為我們最強的後盾</h4>
    <div>
      <img
        src="./../assets/images/photo/home-volunteer.jpg"
        alt="volunteer packing stuff"
      />
    </div>
    <Button>我有興趣</Button>
  </section>
  <section class="product">
    <section class="cat_profile">
      <img src="./../assets/images/photo/home-customize.jpg" alt="cat" />
    </section>
    <section class="product_description">
      <div class="circles">
        <img src="./../assets/images/circle-hollow.png" alt="hollow circle" />
        <img src="./../assets/images/circle-solid.png" alt="solid circle" />
      </div>
      <div class="product_text">
        <h3>周邊商品 - 客製化項圈</h3>
        <h4>訂做你們之間的獨一無二</h4>
        <p>商品所得將全數用於協助浪浪尋找歸屬</p>
        <Button>前往製作</Button>
      </div>
      <img
        src="./../assets/images/line-horizontial.png"
        alt="horizontal line"
      />
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button";

export default {
  name: "Home",
  components: {
    Button,
  },
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

.gallery {
  padding: 50px 100px 64px;
  position: relative;
  width: 100%;
  height: 1441px;

  div {
    width: fit-content;
  }

  div:nth-child(2) {
    position: absolute;
    left: 415px;
    top: 376px;
  }

  div:nth-child(3) {
    position: absolute;
    right: 100px;
    top: 106px;
  }

  div:nth-child(4) {
    position: relative;
    top: 308px;
  }

  div:nth-child(5) {
    position: absolute;
    right: 123px;
    top: 702px;
  }

  div:nth-child(6) {
    display: flex;
    // position: relative;
    // margin-top: 132px;
  }

  p {
    color: color.$solid_circle;
    font-weight: 900;
    font-size: 40px;
  }
}

.volunteer {
  background-color: color.$primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  h3 {
    color: color.$text_dark;
    font-weight: 900;
    font-size: 50px;
  }

  h4 {
    margin-top: 16px;
    color: color.$text_light;
    font-weight: 900;
    font-size: 30px;
  }

  div {
    margin-top: 40px;
  }
}

.product {
  display: flex;
  justify-content: space-between;
  padding: 40px 0 60px;
  background-color: color.$primary;

  &_description {
    padding-right: 100px;
  }

  .circles {
    text-align: right;
    position: relative;

    img:last-child {
      position: absolute;
      top: 140px;
      right: 124px;
    }
  }

  &_text {
    margin-top: 123px;
    text-align: center;
  }

  h3 {
    color: color.$text_dark;
    font-weight: 900;
    font-size: 50px;
  }

  h4 {
    margin-top: 16px;
    color: color.$text_light;
    font-weight: 900;
    font-size: 30px;
  }
}
</style>
