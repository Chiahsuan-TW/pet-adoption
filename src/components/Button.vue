<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
button {
  width: 233px;
  height: 81px;
  background-color: color.$secondary;
  color: color.$primary;
  border-radius: 10px;
  font-weight: 900;
  font-size: 25px;
  transition: 0.25s;
  &:hover {
    filter: contrast(120%);
  }
}
</style>
