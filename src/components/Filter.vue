<template>
  <div class="choose">
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
        請選擇
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li v-for="(animal_type, index) in animalKind" :key="index" @click="click_animal(animal_type)">
          <a class="dropdown-item" href="#">{{ animal_type }}</a>
        </li>
      </ul>
    </div>
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
        請選擇
      </a>

      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li v-for="(cityId, city) in cities" :key="cityId" @click="click_city(city)">
          <a class="dropdown-item" href="#">{{ city }}</a>
        </li>
      </ul>
    </div>
    <button @click.prevent="this.$emit('clickSend')">送出</button>
  </div>
</template>
<script>
export default {
  name: 'Filter',
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
      theCity: null,
    };
  },
  methods: {
    click_city(city) {
      // console.log(city);
      this.$emit('confirm', city);
      console.log(this.animalKind);
    },
    click_animal(animal) {
      // console.log(animal);
      this.$emit('confirm_animal', animal);
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  width: 100px;
  border-radius: 10px;
  color: color.$primary;
  background: color.$secondary;
  &:hover {
    background: color.$cancel_btn;
    color: color.$text_dark;
  }
}
.choose {
  display: flex;
  margin-bottom: 63px;

  p {
    margin-right: 24px;
    font-size: 30px;
    color: color.$text_light;
  }
}

$border: 2px solid color.$secondary;
.dropdown {
  margin-right: 40px;
  & > a {
    display: flex;
    justify-content: space-between;
    border: $border;
  }
  ul {
    border: $border;
  }
  li + li {
    border-top: $border;
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
    max-height: 200px;
    overflow: scroll;
    a {
      font-size: 18px;
      text-align: center;
      color: color.$text_light;
      &:hover {
        background: color.$secondary;
        color: #fff;
      }
    }
  }
}
.dropdown-menu.show {
  top: -5px !important;
}
</style>
