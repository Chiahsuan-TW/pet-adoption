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
  padding: 26px 66px;
  background-color: color.$secondary;
  color: color.$primary;
  border-radius: 10px;
  font-weight: 900;
  font-size: 25px;
}
</style>
