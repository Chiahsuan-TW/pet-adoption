<template>
  <main>
    <div class="parallax">
      <section class="landing_page">
        <section class="adoption">
          <div class="home">
            <div class="mask">
              <img src="./../assets/images/home.png" alt="home icon" />
            </div>
          </div>
          <h1>浪我陪你等家</h1>
          <h2>領養代替購買</h2>
          <p>零撲殺後<br />長住收容所的浪浪們<br />你願意給他們一個家嗎</p>
          <div class="dots">
            <img src="./../assets/images/circles.png" alt="dots box" />
          </div>
          <button>
            <a href="#gallery">
              <img
                src="./../assets/images/arrow-down.png"
                alt="arrow downwards"
              />
            </a>
          </button>
        </section>
        <section class="dog_profile">
          <img src="./../assets/images/photo/home-dog-1.jpg" alt="brown dog" />
        </section>
      </section>
      <section id="gallery" class="gallery parallax_group">
        <div class="gallery_img_1 parallax_layer parallax_layer--base">
          <img
            src="./../assets/images/photo/home-dog-2.jpg"
            alt="dog with black and white fur"
          />
        </div>
        <p>
          希望能夠有一個家，<br />
          一個會好好愛我的主人
        </p>
        <div class="gallery_img_2 parallax_layer parallax_layer--deep">
          <img src="./../assets/images/photo/home-cat-1.jpg" alt="cat" />
        </div>
        <div class="gallery_img_3 parallax_layer parallax_layer--fore">
          <img src="./../assets/images/photo/home-cat-2.jpg" alt="cat" />
        </div>
        <p>你能夠帶我回家嗎？</p>
        <div class="gallery_img_4 parallax_layer parallax_layer--back">
          <img src="./../assets/images/photo/home-dog-3.jpg" alt="brown dog" />
        </div>
        <div class="gallery_img_5 parallax_layer parallax_layer--closely">
          <img src="./../assets/images/photo/home-dog-4.jpg" alt="black dog" />
        </div>
        <router-link class="gallery_text_link" :to="{ name: 'Search' }">
          <p>為牠駐足，尋找你們之間的命中注定</p>
          <img src="./../assets/images/arrow-right.png" alt="right arraow" />
        </router-link>
      </section>
      <section class="volunteer parallax_group">
        <div class="volunteer_title parallax_layer parallax_layer--fore">
          <h3>志工招募</h3>
          <h4>我們需要你，成為我們最強的後盾</h4>
        </div>
        <div class="volunteer_img parallax_layer parallax_layer--base">
          <img
            src="./../assets/images/photo/home-volunteer.jpg"
            alt="volunteer packing stuff"
          />
        </div>
        <div class="volunteer_btn parallax_layer parallax_layer--closely">
          <router-link :to="{ name: 'Volunteer' }"
            ><Button>我有興趣</Button></router-link
          >
        </div>
      </section>
      <section class="product parallax_group">
        <section class="cat_profile parallax_layer parallax_layer--fore">
          <img src="./../assets/images/photo/home-customize.jpg" alt="cat" />
        </section>
        <div class="circles parallax_layer parallax_layer--back">
          <img src="./../assets/images/circle-hollow.png" alt="hollow circle" />
          <img src="./../assets/images/circle-solid.png" alt="solid circle" />
        </div>
        <section
          class="product_description parallax_layer parallax_layer--closely"
        >
          <div class="product_text">
            <h3>週邊商品 - 客製化項圈</h3>
            <h4>訂做你們之間的獨一無二</h4>
            <p>商品所得將全數用於協助浪浪尋找歸屬</p>
            <Button>前往製作</Button>
          </div>
          <img
            src="./../assets/images/line-horizontial.png"
            alt="horizontal line"
            class="horizontal_line"
          />
        </section>
      </section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button";

export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      pets: [],
      isLoveStyle: null,
    };
  },
  methods: {
    scrollToNext() {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    },
    isExistData() {
      this.$store.commit("setFollowAmount", this.pets.length);
      if (this.pets.length > 0) {
        this.$store.commit("hasLoveStyle");
      } else {
        this.$store.commit("deleteLoveStyle");
      }
    },
  },
  created() {
    this.pets = JSON.parse(localStorage.getItem("favorite")) || [];
    this.isExistData();
  },
};
</script>

<style lang="scss" scoped>
// parallax component
.parallax {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
  .parallax_group {
    position: relative;
    width: 100%;
    height: 100vh;
    transform-style: preserve-3d;
    .parallax_layer {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
    .parallax_layer--base {
      transform: translateZ(0);
      z-index: 5;
    }
    .parallax_layer--closely {
      transform: translateZ(90px) scale(0.7);
      z-index: 1;
    }
    .parallax_layer--fore {
      transform: translateZ(60px) scale(0.8);
      z-index: 2;
    }
    .parallax_layer--deep {
      transform: translateZ(-90px) scale(1.3);
      z-index: 3;
    }
    .parallax_layer--back {
      transform: translateZ(-60px) scale(1.2);
      z-index: 4;
    }
  }
}
// p
// parallax for group2
.gallery.parallax_group {
  height: 1441px;
}

.gallery_img_1 {
  img {
    position: absolute;
    top: 50px;
    left: 100px;
  }
}
.gallery_img_2 {
  img {
    position: absolute;
    top: 376px;
    left: 415px;
  }
}
.gallery_img_3 {
  img {
    position: absolute;
    top: 10px;
    right: 100px;
  }
}
.gallery_img_4 {
  img {
    position: absolute;
    bottom: 243px;
    left: 100px;
  }
}
.gallery_img_5 {
  img {
    position: absolute;
    bottom: 337px;
    right: 223px;
  }
}
.gallery_text_link {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 40px;
  width: fit-content;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  p {
    font-size: 40px;
    font-weight: 900;
    text-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 12px #fff, 0 0 20px #fff;
  }
}
.gallery {
  > p {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff;
  }
}

// parallax for group3
.volunteer.parallax_group {
  height: 928px;
  .volunteer_img {
    text-align: center;
  }
  .volunteer_btn {
    a {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

// parallax for group4
.product.parallax_group {
  height: 881px;
}
//main
main {
  max-width: 1440px;
  margin: 0 auto;
}
// landing_page
.landing_page {
  position: relative;
  z-index: 99;
  height: calc(100vh - 125px);
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: color.$primary;

  .adoption {
    padding-left: 100px;
    width: 50%;
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

  .dog_profile {
    height: 100%;
    width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  button {
    width: 146px;
    height: 120px;
    background-color: color.$secondary;
    position: absolute;
    bottom: 0;
    transition: 0.25s;
    a {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:hover {
      filter: contrast(120%);
    }
  }
}
// gallery
.gallery {
  padding: 50px 100px 64px;
  position: relative;
  width: 100%;
  height: 1441px;
  img {
    // box-shadow: 1px 2px 10px #555;
    &[alt^="right"] {
      box-shadow: none;
    }
  }
  p {
    font-weight: 500;
    font-size: 24px;
    color: color.$text_light;
  }

  p:nth-child(2) {
    position: absolute;
    top: 181px;
    left: 543px;
  }

  p:nth-child(5) {
    position: absolute;
    top: 752px;
  }

  div:nth-child(8) {
    display: flex;
    align-items: baseline;
    gap: 20px;
    position: absolute;
    left: 296px;
    bottom: 64px;

    img {
      animation: move 0.5s infinite alternate;
      @keyframes move {
        0% {
          transform: translateX(-6px);
        }
        25% {
          transform: translateX(-3px);
        }
        50% {
          transform: translateX(-6px);
        }
        75% {
          transform: translateX(-3px);
        }
        100% {
          transform: translateX(10px);
        }
      }
    }
  }

  p:first-child {
    color: color.$solid_circle;
    font-weight: 900;
    font-size: 40px;
  }
}

// volunteer
.volunteer {
  background-color: color.$primary;
  padding: 40px 0;
  .volunteer_title {
    h3 {
      color: color.$text_dark;
      font-weight: 900;
      font-size: 50px;
      text-align: center;
      text-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 35px #fff;
    }
    h4 {
      margin-top: 16px;
      color: color.$text_light;
      font-weight: 900;
      font-size: 30px;
      text-align: center;
      text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 15px, 0 0 25px #fff;
    }
  }

  button {
    box-shadow: 0 0 3px color.$primary, 0 0 15px color.$primary,
      0 0 50px color.$primary;
    transition: 0.25s;
    &:hover {
      filter: contrast(120%);
    }
  }
}
// product
.product {
  height: 881px;
  .cat_profile {
    img {
      top: 40px;
    }
  }
  .circles {
    img {
      position: absolute;
      border-radius: 50%;
    }
    img[alt="hollow circle"] {
      top: 40px;
      right: 100px;
      animation: spin 12s infinite alternate;
      animation-timing-function: linear;
      box-shadow: 0 0 3px color.$secondary, 0 0 5px color.$secondary,
        0 0 15px color.$secondary, 0 0 30px color.$secondary;
    }
    img[alt="solid circle"] {
      top: 180px;
      right: 244px;
      animation: spin 3s infinite alternate;
      animation-timing-function: linear;
      animation-delay: 2s;
    }
  }
  .product_description {
    .product_text {
      position: absolute;
      top: 313px;
      right: 100px;
      text-align: center;
      h3 {
        margin-bottom: 16px;
        font-size: 50px;
        font-family: 900;
        color: color.$text_dark;
      }
      h4 {
        margin-bottom: 16px;
        font-size: 30px;
        font-weight: 900;
        color: color.$text_light;
      }
      p {
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: 900;
        color: color.$text_light;
      }
    }
    img {
      position: absolute;
      bottom: 151px;
      right: 555px;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
    filter: hue-rotate(0deg);
  }
  // 20% {
  //   transform: rotate3d(0, 1, 0, 72deg);
  //   filter: hue-rotate(72deg);
  // }
  // 40% {
  //   transform: rotate3d(0, 1, 0, 144deg);
  //   filter: hue-rotate(144deg);
  // }
  // 65% {
  //   transform: rotate3d(0, 1, 0, 216deg);
  //   filter: hue-rotate(216deg);
  // }
  // 80% {
  //   transform: rotate3d(0, 1, 0, 288deg);
  //   filter: hue-rotate(288deg);
  // }
  100% {
    transform: rotate3d(0, 1, 0, 360deg);
    filter: hue-rotate(360deg);
  }
}

// home animation
.home {
  position: relative;
  width: 575px;
  height: 290px;
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    animation: mask 5s ease infinite;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
@keyframes mask {
  from {
    height: 0;
    top: 290px;
  }
  to {
    height: 290px;
    top: 0;
  }
}
</style>
