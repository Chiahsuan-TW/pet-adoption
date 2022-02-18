<template>
  <div class="tracking_page">
    <div class="tracking_container">
      <h2>追蹤浪浪</h2>
      <section class="tracking_content">
        <Card
          class="tracking_card"
          v-for="pet in dataPartition"
          :key="pet.animal_id"
          :pet="pet"
        />
      </section>
    </div>
  </div>

  <nav aria-label="Page navigation ">
    <Pagination
      :totalPage="claculatePages"
      @clickNumberOfPage="numberOfpage"
    ></Pagination>
  </nav>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Tracking",
  components: { Card, Pagination },
  data() {
    return {
      pets: null,
      resultPerPage: 15,
      currentPage: 1,
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
  },
  methods: {
    numberOfpage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    dataPartition() {
      const start = (this.currentPage - 1) * this.resultPerPage;
      const end = this.currentPage * this.resultPerPage;
      return this.pets.slice(start, end);
    },
    claculatePages() {
      const Pages = Math.ceil(this.pets.length / this.resultPerPage);
      return Pages;
    },
  },
};
</script>

<style lang="scss" scoped>
.tracking_container {
  margin: 0 auto;
  max-width: 1440px;
  min-height: 80vh;
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
::v-deep .pagination {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  justify-content: center;
  font-size: 18px;
  background-color: color.$primary;
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
.Page {
  display: flex;
  justify-content: center;
}
</style>
