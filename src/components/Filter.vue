<template>
  <div class="choose">
    <div class="dropdown_area">
      <p>動物品種</p>
      <div class="dropdown">
        <a
          class="btn dropdown-toggle bg-white"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ type }}
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li
            v-for="(animal_type, index) in animalKind"
            :key="index"
            @click="click_animal(animal_type)"
          >
            <a class="dropdown-item" href="#">{{ animal_type }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="dropdown_area">
      <p>收容所</p>
      <div class="dropdown">
        <a
          class="btn dropdown-toggle bg-white"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ city }}
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li
            v-for="(cityId, city) in cities"
            :key="cityId"
            @click="click_city(city)"
          >
            <a class="dropdown-item" href="#">{{ city }}</a>
          </li>
        </ul>
      </div>
    </div>
    <button @click.prevent="this.$emit('clickSend')">送出</button>
  </div>
</template>
<script>
export default {
  name: "Filter",
  props: {
    cities: {
      type: Object,
      required: true,
    },
    animalKind: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      type: "請選擇",
      city: "請選擇",

      theCity: null,
    };
  },
  methods: {
    click_city(city) {
      this.$emit("confirm", city);
      this.city = city;
      // console.log(this.animalKind);
    },
    click_animal(animal) {
      // console.log(animal);
      this.$emit("confirm_animal", animal);
      this.type = animal;
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: color.$primary;
  background: color.$secondary;
  transition: 0.25s;
  &:hover {
    filter: contrast(120%);
  }
}

// dropdown
$border: 2px solid color.$secondary;
.choose {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  margin-bottom: 63px;
}
@media (max-width: 1199px) {
  .choose {
    justify-content: center;
    .dropdown_area {
      flex: 0 0 100%;
      gap: 24px;
      p {
        flex: 0 0 30%;
      }
      .dropdown {
        flex: 1 0 0;
        .btn {
          width: 100%;
        }
      }
    }
    button {
      width: 100%;
    }
  }
}
.dropdown_area {
  display: flex;
  gap: 24px;
  p {
    font-size: 30px;
    color: color.$text_light;
  }
  .dropdown {
    > .btn {
      display: flex;
      justify-content: space-between;
      border: $border;
      transition: 0.4s;
      &:hover {
        box-shadow: 0 0 3px color.$secondary, 0 0 10px color.$secondary,
          0 0 25px color.$secondary;
      }
    }
    ul {
      width: 100%;
      border: $border;
      li {
        width: 100%;
      }
      li + li {
        border-top: $border;
      }
    }
    a {
      padding: 9px 16px;
      width: 250px;
      color: color.$text_light;
      &:focus {
        box-shadow: none;
      }

      &:hover {
        color: color.$text_light;
      }
      &:after {
        align-self: center;
        font-size: 25px;
      }
    }
    .dropdown-menu {
      padding: 0;
      transform: translate3d(0, 46px, 0) !important;
      max-height: 200px;
      overflow: scroll;
      a {
        width: 100%;
        text-align: center;
        font-size: 18px;
        text-align: center;
        color: color.$text_light;
        transition: 0.4s;
        &:hover {
          background: color.$secondary;
          color: #fff;
        }
      }
    }
  }
}
.dropdown-menu.show {
  // top: -5px !important;
}
</style>
