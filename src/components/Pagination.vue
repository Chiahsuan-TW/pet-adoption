<template>
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
<script></script>
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
}
</style>
