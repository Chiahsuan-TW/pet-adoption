<template>
  <!-- <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  /> -->
  <!-- <nav>
    <router-link :to="{ name: 'Home' }"
      ><img src="./../assets/images/paw.png" alt="dog paw"
    /></router-link>
    <div class="tabs">
      <router-link :to="{ name: 'Search' }">尋找浪浪</router-link>
      <router-link :to="{ name: 'Tracking' }">追蹤浪浪</router-link>
      <router-link :to="{ name: 'Volunteer' }">志工招募</router-link>
      <a href="##">愛心項圈</a>
      <router-link :to="{ name: 'Management' }">後台管理</router-link>
      <span class="moon"><i class="fas fa-moon fa-fw"></i></span>
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
            <router-link class="nav-link" :to="{ name: 'Tracking' }"
              >追蹤浪浪</router-link
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
export default {
  name: "Navbar",
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
</style>
