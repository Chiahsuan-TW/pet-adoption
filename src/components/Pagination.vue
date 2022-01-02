<template>
  <nav aria-label="Page navigation ">
    <ul class="pagination">
      <li class="page-item">
        <a
          :class="['page-link', { active: currentPage === 1 }]"
          href="##"
          @click.prevent="clickPagination(1)"
          >第一頁</a
        >
      </li>
      <li
        class="page-item"
        v-for="numberOfpage in totalPage"
        :key="numberOfpage"
        @click.prevent="clickPagination(numberOfpage)"
      >
        <a
          :class="['page-link', { active: currentPage === numberOfpage }]"
          href="##"
          >{{ numberOfpage }}
        </a>
      </li>
      <li class="page-item">
        <a
          :class="['page-link', { active: currentPage === totalPage }]"
          href="##"
          @click.prevent="clickPagination(totalPage)"
          >最後一頁</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    totalPage: {
      type: Number,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    clickPagination(numberOfpage) {
      this.currentPage = numberOfpage;
      this.$emit("clickNumberOfPage", numberOfpage);
    },
  },
  created() {},
};
</script>
<style lang="scss" scope>
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

  .page-link.active {
    color: color.$text_dark;
  }
}
.pagination {
  justify-content: center;
  font-size: 18px;

  a {
    color: color.$text_dark;
    color: #e5e5e5;
    border: 0;
    background: none;
    &:focus {
      box-shadow: none;
      background: none;
    }
    &:hover {
      color: color.$text_dark;
      background: none;
    }
  }
}
</style>
