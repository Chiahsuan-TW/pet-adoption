<template>
  <div class="tracking_page">
    <div class="tracking_container">
      <h2>追蹤浪浪</h2>
      <section class="tracking_content">
        <Card
          class="tracking_card"
          v-for="pet in pets"
          :key="pet.animal_id"
          :pet="pet"
        />
      </section>
    </div>
  </div>

  <nav aria-label="Page navigation ">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="##">第一頁</a></li>
      <li class="page-item"><a class="page-link active" href="##">1</a></li>
      <li class="page-item"><a class="page-link" href="##">2</a></li>
      <li class="page-item"><a class="page-link" href="##">3</a></li>
      <li class="page-item"><a class="page-link" href="##">最後一頁</a></li>
    </ul>
  </nav>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Tracking",
  components: { Card },
  data() {
    return {
      pets: null,

      // pet: {
      //   animal_id: 123,
      //   animal_kind: "狗",
      //   animal_colour: "brown",
      //   animal_bacterin: "F",
      //   animal_place: "tainan",
      // },
    };
  },
  created() {
    this.pets = JSON.parse(localStorage.getItem("favorite"));
    console.log(this.pets);
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.tracking_container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 100px 60px 100px;
  background-color: color.$primary;
}
h2 {
  margin-bottom: 26px;
  font-size: 50px;
  color: color.$text_dark;
}
.tracking_content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ::v-deep .tracking_card {
    display: inline-block;
    .pet_card {
      width: 100%;
      height: auto;
      text-align: center;
      .wrap_img {
        margin: 0 auto;
      }
      .introduce {
        width: 368px;
        margin: 0 auto;
      }
    }
  }
}
@media (max-width: 1439px) {
  .tracking_container {
    .tracking_content {
      .tracking_card {
        flex: 0 1 48%;
        gap: 2%;
        .pet_card {
          padding-right: 0;
          padding-left: 0;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .tracking_container {
    .tracking_content {
      justify-content: center;
      .tracking_card {
        flex: 0 0 80%;
      }
    }
  }
}
.pagination {
  justify-content: center;
  font-size: 18px;
  a {
    color: #e5e5e5;
    border: 0;
    background: none;
    &:focus {
      box-shadow: none;
    }
    &:hover {
      color: color.$text_dark;
    }
  }
}
%pagination {
  background: color.$secondary;
  color: #ffff;
}
.pagination li {
  &:first-child a {
    @extend %pagination;
  }
  &:last-child a {
    @extend %pagination;
  }
}
</style>
