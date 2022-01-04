<template>
  <router-link :to="{ name: 'info', params: { id: pet.animal_id } }">
    <div class="pet_card">
      <div class="wrap_img">
        <img :src="checkPhotoExit" alt="動物圖片" />
      </div>
      <div class="introduce">
        <p>{{ pet.animal_kind }}</p>
        <p>{{ pet.animal_colour }}</p>
        <p>{{ genderTranslate }}</p>
      </div>
      <div class="address">
        <img src="./../assets/images/map.png" alt="map_icon" />
        <span>{{ pet.animal_place }}</span>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Card",
  props: {
    pet: {
      type: Object,
      required: true,
    },
    id: { type: String },
  },
  data() {
    return {
      currentPage: 2,
    };
  },
  computed: {
    genderTranslate() {
      switch (this.pet.animal_bacterin) {
        case "F":
          return "女孩";
        case "M":
          return "男孩";
        default:
          return "尚未確認";
      }
    },
    checkPhotoExit() {
      if (this.pet.album_file) {
        return this.pet.album_file;
      } else if (!this.pet.album_file && this.pet.animal_kind === "狗") {
        return require("./../assets/images/dog-brown.jpg");
      } else {
        return require("./../assets/images/photo/search-cat.jpg");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.pet_card {
  padding: 16px;
  width: 400px;
  height: 426px;
  background: #fff;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.6);
  color: color.$text_dark;
  margin-bottom: 20px;
  transition: 0.6s;
  &:hover {
    filter: brightness(120%);
    transform: translate(-4px, -8px);
    box-shadow: 6px 4px 10px #777, 0 0 25px #777;
  }
}
.wrap_img {
  width: 368px;
  height: 301px;
  background: color.$primary;
  text-align: center;
  margin-bottom: 24px;
  margin-right: 36px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.introduce {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.address img {
  margin-right: 16px;
}
</style>
