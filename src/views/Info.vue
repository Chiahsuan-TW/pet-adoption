<template>
  <!-- 浪浪資料頁 -->
  <div class="info">
    <div class="info_container">
      <h2>浪浪資料</h2>
      <div class="info_area">
        <!-- 裝飾線 -->
        <div class="line_horizontal"></div>
        <div class="line_vertical"></div>
        <!--  -->
        <div class="row gx-5">
          <div class="col-12 col-md-7 col-lg-6">
            <!-- 左半部 -->
            <div class="info_visual">
              <div class="info_img">
                <!-- 元件放這邊 -->
                <div class="wrap_img">
                  <img :src="checkPhotoExit" alt="動物圖片" />
                </div>
                <div class="dots"></div>
              </div>
              <div class="tracking">
                <span
                  :class="['tracking_icon', { favorite_true: isLikedStyle }]"
                  @click="clickFavoriteButton"
                  >&#9829;</span
                >
                <span class="tracking_text" @click="clickFavoriteButton">{{
                  isTracked
                }}</span>
              </div>
              <button
                class="btn next_btn"
                data-bs-toggle="modal"
                data-bs-target="#adoption"
              >
                我有意願認養
              </button>
            </div>
          </div>
          <!-- 右半部 -->
          <div class="col-12 col-md-5 col-lg-6">
            <ul class="info_data">
              <li>狀態:<span>待領養</span></li>
              <li>
                類型:<span>{{ petDetailData.animal_kind }}</span>
              </li>
              <li>
                顏色:<span>{{ petDetailData.animal_colour }}</span>
              </li>
              <li>
                型別:<span>{{ genderTranslate }}</span>
              </li>
              <li>
                體型:<span>{{ bodytypeTranslate }}</span>
              </li>
              <li>
                收容地點:<span>{{ petDetailData.shelter_name }}</span>
              </li>
              <li>
                收容地址:<span>{{ petDetailData.shelter_address }}</span>
              </li>
              <li>
                聯絡電話:<span>{{ petDetailData.shelter_tel }}</span>
              </li>
              <li>
                入所日期:<span>{{ petDetailData.animal_createtime }}</span>
              </li>
              <li>
                備註:<span
                  >本站動物皆採現場互動面談後評估能否認養，不接受系統上的預約</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 裝飾線 -->
      <div class="search_others">
        <div class="line_horizontal_long"></div>
        <button type="button" class="text_btn">尋找其他浪浪</button>
        <router-link :to="{ name: 'Search' }"
          ><img src="./../assets/images/arrow-right.png" alt="right arraow"
        /></router-link>
      </div>
    </div>
  </div>

  <!-- 認養須知 modal -->
  <AdoptionNotice @next="showForm" />
  <!-- 認養申請 modal -->
  <AdoptionForm :formVisibility="formVisibility" />
  <!-- <pre>{{ id }}</pre> -->
  <!-- <span>動態props id{{ $route.params.id }}</span> -->
</template>
<script>
import Api from "@/services/Api";
import AdoptionNotice from "@/components/AdoptionNotice";
import AdoptionForm from "@/components/AdoptionForm";

export default {
  props: ["id"],
  components: {
    AdoptionNotice,
    AdoptionForm,
  },
  data() {
    return {
      // isLiked: false,
      //點擊愛心
      //isLiked 會切換
      //陣列第一筆都放目前資料
      petDetailData: {},
      findIndexResult: null,
      currentFavoriteData: null,
      isLikedStyle: null,
      formVisibility: false,
    };
  },
  created() {
    this.getAnimal();
    this.getLocalStorage();
    this.checkLikedStyle();
    // console.log("AAA", this.findIndexResult);
  },
  methods: {
    async getAnimal() {
      const petInfor = await Api.getPetDetail(this.id);
      this.petDetailData = petInfor.data[0];
    },
    getLocalStorage() {
      this.currentFavoriteData =
        JSON.parse(localStorage.getItem("favorite")) || [];
      this.findIndex();
    },
    setLocalStorage(currentFavoriteData) {
      // console.log("所以我要存資料", currentFavoriteData);
      localStorage.setItem("favorite", JSON.stringify(currentFavoriteData));
    },
    findIndex() {
      this.findIndexResult = this.currentFavoriteData.findIndex((data) => {
        return data.petId === this.id;
      });
    },
    checkLikedStyle() {
      if (this.findIndexResult > -1) {
        this.isLikedStyle = true;
      } else {
        this.isLikedStyle = false;
      }
    },
    clickFavoriteButton() {
      this.getLocalStorage();
      if (this.findIndexResult > -1) {
        //表示local有資料
        this.isLikedStyle = !this.isLikedStyle;
        this.currentFavoriteData.splice(this.findIndexResult, 1);
        this.setLocalStorage(this.currentFavoriteData);
        return;
      }
      this.isLikedStyle = !this.isLikedStyle;
      const saveData = {
        animal_id: this.id,
        animal_kind: this.petDetailData?.animal_kind,
        animal_colour: this.petDetailData?.animal_colour,
        animal_place: this.petDetailData?.animal_place,
        //要補轉換過的男女的資料
        animal_bacterin: this.petDetailData.animal_bacterin,
        album_file: this.petDetailData?.album_file,
      };
      this.currentFavoriteData.push(saveData);
      this.setLocalStorage(this.currentFavoriteData);
    },
    showForm() {
      this.formVisibility = true;
    },
  },
  computed: {
    checkPhotoExit() {
      if (this.petDetailData?.album_file) {
        return this.petDetailData.album_file;
      }
      return require("./../assets/images/dog-brown.jpg");
    },
    isTracked() {
      if (this.isLikedStyle) {
        return "取消追蹤";
      } else {
        return "追蹤";
      }
    },
    genderTranslate() {
      switch (this.petDetailData.animal_sex) {
        case "F":
          return "女孩";
        case "M":
          return "男孩";
        default:
          return "尚未確認";
      }
    },
    bodytypeTranslate() {
      switch (this.petDetailData.animal_bodytype) {
        case "BIG":
          return "大";
        case "MEDIUM":
          return "中";
        case "SMALL":
          return "小";
        default:
          return "尚未確認";
      }
    },
  },
};
</script>

<style scoped lang="scss">
// animation
@keyframes fontScale {
  0% {
    font-size: 24px;
  }
  60% {
    font-size: 30px;
  }
  100% {
    font-size: 24px;
  }
}
.tracking .tracking_icon.favorite_true {
  animation: fontScale 0.75s;
  transition: 0.7s;
}
.tracking .tracking_icon.favorite_true {
  color: red;
}
// info style
.info {
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 100px 83px 100px;
  background-color: color.$primary;
  .info_container {
    h2 {
      margin-bottom: 60px;
      font-size: 50px;
    }
  }
}
.info_area {
  position: relative;
  .line_horizontal {
    position: absolute;
    z-index: 99;
    right: -30px;
    width: 250px;
    height: 4px;
    background-color: color.$secondary;
  }
  .line_vertical {
    position: absolute;
    z-index: 99;
    right: 0;
    top: -30px;
    width: 4px;
    height: 250px;
    background-color: color.$secondary;
  }
  margin-bottom: 120px;
}
.info_img {
  position: relative;
  max-width: 500px;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 40px;
  .wrap_img {
    padding: 0 5%;
    text-align: center;
    background-color: color.$primary;
    img {
      width: 100%;
      object-fit: contain;
      vertical-align: middle;
    }
  }
  .dots {
    width: 145px;
    height: 115px;
    position: absolute;
    bottom: -60px;
    right: -80px;
    background: url(../assets/images/circles.png);
  }
  @media (max-width: 1439px) {
    .dots {
      display: none;
    }
  }
}
//  追蹤按鈕
.tracking {
  margin-bottom: 60px;
  span {
    &:hover {
      cursor: pointer;
    }
  }
  .tracking_icon {
    margin-right: 16px;
    color: #888;
    font-size: 24px;
    vertical-align: middle;
  }
  .tracking_text {
    font-size: 18px;
    vertical-align: middle;
  }
}
.info_data {
  list-style-type: none;
  padding: 0;
  li {
    font-size: 24px;
    font-weight: 900;
    color: color.$text_dark;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    span {
      display: block;
      margin-top: 12px;
      font-size: 18px;
      color: color.$text_light;
    }
  }
}
.search_others {
  display: flex;
  align-items: center;
  img {
    flex: 0 1 auto;
    animation: move 0.5s infinite alternate;

    @keyframes move {
      0% {
        transform: translateX(-6px);
      }
      25% {
        transform: translateX(-3px);
      }
      50% {
        transform: translateX(0px);
      }
      75% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(10px);
      }
    }
  }
}
.line_horizontal_long {
  flex: 0 1 auto;
  margin-right: 70px;
  width: 700px;
  height: 1px;
  background-color: color.$secondary;
}
.text_btn {
  margin-right: 36px;
  font-size: 40px;
  background: transparent;
  color: color.$solid_circle;
  cursor: pointer;
}

// common setting for modal
.form_btn {
  display: flex;
  justify-content: center;
}
.btn {
  width: 233px;
  height: 81px;
  margin-right: 36px;
  border-radius: 10px;
  font-size: 25px;
  color: #fbf8f5;
  transition: 0.4s;
}
.cancel_btn {
  background-color: color.$cancel_btn;
  &:hover {
    background-color: #b6b6b6;
  }
}
.next_btn {
  background-color: color.$secondary;
  &:hover {
    background-color: #deb071;
  }
}
@media (max-width: 767px) {
  .form_btn {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
