<template>
  <div class="parallax">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Parallax",
};
</script>
<style lang="scss">
.parallax {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
  .parallax_group {
    position: relative;
    width: 100%;
    height: 100vh;
    transform-style: preserve-3d;
    .parallax_layer {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
    .parallax_layer--base {
      transform: translateZ(0);
      z-index: 5;
    }
    .parallax_layer--closely {
      transform: translateZ(90px) scale(0.7);
      z-index: 1;
    }
    .parallax_layer--fore {
      transform: translateZ(60px) scale(0.8);
      z-index: 2;
    }
    .parallax_layer--deep {
      transform: translateZ(-90px) scale(1.3);
      z-index: 3;
    }
    .parallax_layer--back {
      transform: translateZ(-60px) scale(1.2);
      z-index: 4;
    }
  }
}
</style>
