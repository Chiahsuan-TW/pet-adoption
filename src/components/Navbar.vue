<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />
  <!-- <nav>
    <router-link :to="{ name: 'Home' }"
      ><img src="./../assets/images/paw.png" alt="dog paw"
    /></router-link>
    <div class="tabs">
      <router-link :to="{ name: 'Search' }">尋找浪浪</router-link>
      <router-link :to="{ name: 'Tracking' }">
        <i class="fas fa-heart love" v-if="isLoveStyle"></i
        >追蹤浪浪</router-link
      >
      <router-link :to="{ name: 'Volunteer' }">志工招募</router-link>
      <a href="##">愛心項圈</a>
      <router-link :to="{ name: 'Management' }">後台管理</router-link>
      <span class="moon" @click="clickDark" :class="{ isDark }"
        ><i class="fas fa-moon fa-fw"></i
      ></span>
    </div>
  </nav> -->

  <nav class="my_nav navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="logo navbar-brand">
        <img src="./../assets/images/paw.png" alt="dog paw" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Search' }"
              >尋找浪浪</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link tracking_link"
              :to="{ name: 'Tracking' }"
            >
              <!-- <i class="fas fa-heart love" v-if="isLoveStyle"></i> -->
              <div v-if="isLoveStyle" class="heart love">
                <span>{{ followAmount }}</span>
              </div>
              追蹤浪浪</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Volunteer' }"
              >志工招募</router-link
            >
          </li>
          <li class="nav-item">
            <a href="##" class="nav-link">愛心項圈</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Management' }"
              >後台管理</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  emits: ["darkModel"],
  data() {
    return {
      isDark: true,
      currentFavoriteData: null,
    };
  },
  computed: {
    ...mapState(["isLoveStyle", "followAmount"]),
  },
  methods: {
    clickDark() {
      this.isDark = !this.isDark;
      this.$emit("darkModel", this.isDark);
    },

    isLove(islove) {
      console.log("我在navbar", islove);
    },
  },
};
</script>

<style lang="scss" scoped>
.my_nav {
  position: sticky;
  top: 0;
  padding: 41px 100px;
  background-color: color.$primary;
  .logo {
    transition: filter 0.25s;
    &:hover {
      filter: brightness(50%);
    }
  }
  .container-fluid {
    padding: 0;
    .navbar-collapse {
      .navbar-nav {
        flex: 1 0 0;
        justify-content: flex-end;
        .nav-item {
          &:not(:last-child) {
            margin-right: 60px;
          }
          .nav-link {
            font-size: 18px;
            font-weight: 500;
            transition: 0.25s;
            &:hover {
              color: color.$secondary;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .my_nav {
    .container-fluid {
      .navbar-collapse {
        margin-top: 10px;
        .navbar-nav {
          .nav-item {
            .nav-link {
              text-align: center;
              border-bottom: 1px dotted #ddd;
              transition: 0.25s;
              &:hover {
                background-color: color.$secondary;
                color: #fff;
                border-radius: 10px;
              }
            }
          }
          .nav-item:not(:last-child) {
            margin-right: 0;
          }
        }
      }
    }
  }
}

// nav {
//   padding: 41px 100px;
//   background-color: color.$primary;
// }

// .tabs {
//   a {
//     color: color.$text_dark;
//   }
//   a + a {
//     margin-left: 60px;
//   }
// }
// .moon {
//   font-size: 30px;
//   border-radius: 100px;
//   background-color: color.$text_dark;
//   color: color.$secondary;
// }
// .isDark {
//   font-size: 30px;
//   border-radius: 100px;
//   background-color: orange;
//   color: rgb(241, 245, 10);
// }
// .dark_background {
//   background: #000;
//   .list-group-item {
//     background: #000;
//     color: #fff;
//   }

//   color: #fff;
//   h2 {
//     color: orange;
//   }
// }
.moon.isDark {
  font-size: 30px;
  border-radius: 100px;
  background-color: color.$text_dark;
  color: color.$secondary;
}
.moon {
  font-size: 30px;
  border-radius: 100px;
  background-color: orange;
  color: rgb(241, 245, 10);
}
.tracking_link {
  position: relative;

  .heart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: pink;
    height: 20px;
    width: 20px;
    transform: rotate(-45deg);

    &::after {
      background-color: pink;
      content: "";
      border-radius: 50%;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0px;
      left: 10px;
      z-index: -2;
    }

    &::before {
      content: "";
      background-color: pink;
      border-radius: 50%;
      position: absolute;
      width: 20px;
      height: 20px;
      top: -10px;
      left: 0px;
      z-index: -2;
    }

    span {
      font-size: 12px;
      color: color.$text_dark;
      transform: rotate(45deg);
    }
  }

  .love {
    position: absolute;
    right: 100%;
    animation: moveIn 3s linear, 1.5s linear 3s pump infinite;
    animation-fill-mode: forwards;
  }
}
@keyframes moveIn {
  from {
    top: -80px;
  }
  to {
    top: 10px;
  }
}
@keyframes moving {
  0% {
    left: -22px;
  }
  25% {
    left: -25px;
  }
  50% {
    left: -22px;
  }
  75% {
    left: -19px;
  }
  100% {
    left: -22px;
  }
}

@keyframes pump {
  0% {
    transform: rotate(-45deg), scale(0);
  }
  25% {
    transform: rotate(-45deg) scale(0.8);
  }
  50% {
    transform: rotate(-45deg), scale(0.6);
  }
  75% {
    transform: rotate(-45deg), scale(0.8);
  }
  100% {
    transform: rotate(-45deg), scale(0);
  }
}

</style>
