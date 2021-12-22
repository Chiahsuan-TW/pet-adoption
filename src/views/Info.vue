<template>
  <div class="info">
    <div class="info_container">
      <h2>浪浪資料</h2>
      <div class="info_area">
        <div class="line_horizontal"></div>
        <div class="line_vertical"></div>
        <div class="row row-cols-1 row-cols-md-2 gx-0">
          <div class="col">
            <div class="info_visual">
              <div class="info_img"></div>
              <div class="tracking">
                <span
                  :class="['tracking_icon', { favorite_true: isLiked }]"
                  @click="favoriteClick"
                  >&#9829;</span
                >
                <span class="tracking_text" @click="favoriteClick">{{
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
          <div class="col">
            <ul class="info_data">
              <li>狀態:<span>待領養</span></li>
              <li>類型:<span>貓</span></li>
              <li>顏色:<span>灰白色</span></li>
              <li>型別:<span>女孩</span></li>
              <li>體型:<span>小</span></li>
              <li>收容地點:<span>澎湖縣流浪動物收容中心</span></li>
              <li>收容地址:<span>澎湖縣流浪動物收容中心</span></li>
              <li>聯絡電話:<span>06-9213559</span></li>
              <li>入所日期:<span>2021/09/23</span></li>
              <li>
                備註:<span
                  >本站動物皆採現場互動面談後評估能否認養，不接受系統上的預約</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="line_horizontal_long"></div>
      <button type="button" class="text_btn">尋找其他浪浪</button>
    </div>
  </div>

  <div
    class="adoption modal_layout modal fade"
    id="adoption"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="processbar">
          <span class="circle circle_1"></span>
          <span class="line"></span>
          <span class="circle circle_2"></span>
        </div>
        <h3>步驟一 認養需知</h3>
        <form class="adoption_form">
          <div class="question question_1">
            <p>
              <span>1.</span>
              <span
                >您是否看過犬貓之行為健康評估表?您是否與管理人員或志工討論過該犬貓之狀況。</span
              >
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_1"
                id="question_1_true"
                value="true"
              />
              <label for="question_1_true">是</label>
              <input
                type="radio"
                name="question_1"
                id="question_1_false"
                value="false"
                checked
              />
              <label for="question_1_false">否</label>
            </div>
          </div>
          <div class="question question_2">
            <p>
              <span>2.</span
              ><span>
                您是否知道犬貓的健康有許多不確定的風險?
                您是否了解當牠生病時立即就醫治療是飼主的責任?
              </span>
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_2"
                id="question_2_true"
                value="true"
              />
              <label for="question_2_true">是</label>
              <input
                type="radio"
                name="question_2"
                id="question_2_false"
                value="false"
                checked
              />
              <label for="question_2_false">否</label>
            </div>
          </div>
          <div class="question question_3">
            <p>
              <span>3.</span
              ><span
                >您是否了解: 給犬貓良好的教育，是飼主應該努力學習的責任?</span
              >
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_3"
                id="question_3_true"
                value="true"
              />
              <label for="question_3_true">是</label>
              <input
                type="radio"
                name="question_3"
                id="question_3_false"
                value="false"
                checked
              />
              <label for="question_3_false">否</label>
            </div>
          </div>
          <div class="question question_4">
            <p>
              <span>4.</span
              ><span>
                您是否了解犬貓剛到新環境時，許多潛在的疾病會因
                1.運輸過程吹風淋雨 2.洗澡 3.過度玩耍
                4.更換食物等等讓降低抵抗力而爆發疾病
              </span>
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_4"
                id="question_4_true"
                value="true"
              />
              <label for="question_4_true">是</label>
              <input
                type="radio"
                name="question_4"
                id="question_4_false"
                value="false"
                checked
              />
              <label for="question_4_false">否</label>
            </div>
          </div>
          <div class="question question_5">
            <p>
              <span>5.</span>
              <span
                >您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查</span
              >
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_5"
                id="question_5_true"
                value="true"
              />
              <label for="question_5_true">是</label>
              <input
                type="radio"
                name="question_5"
                id="question_5_false"
                value="false"
                checked
              />
              <label for="question_5_false">否</label>
            </div>
          </div>
          <div class="question question_6">
            <p>
              <span>6.</span
              ><span>犬貓將近有15年的壽命，您是否了解無論人事物的演變</span>
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_6"
                id="question_6_true"
                value="true"
              />
              <label for="question_6_true">是</label>
              <input
                type="radio"
                name="question_6"
                id="question_6_false"
                value="false"
                checked
              />
              <label for="question_6_false">否</label>
            </div>
          </div>
          <div class="question question_7">
            <p>
              <span>7.</span><span>您是否了解飼養動物需要適當的居家條件?</span>
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_7"
                id="question_7_true"
                value="true"
              />
              <label for="question_7_true">是</label>
              <input
                type="radio"
                name="question_7"
                id="question_7_false"
                value="false"
                checked
              />
              <label for="question_7_false">否</label>
            </div>
          </div>
          <div class="question question_8">
            <p>
              <span>8.</span
              ><span
                >您是否同意在未取得共識之前絕不貿然認養，以免造成日後極大的心理負擔</span
              >
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_8"
                id="question_8_true"
                value="true"
              />
              <label for="question_8_true">是</label>
              <input
                type="radio"
                name="question_8"
                id="question_8_false"
                value="false"
                checked
              />
              <label for="question_8_false">否</label>
            </div>
          </div>
          <div class="question question_9">
            <p>
              <span>9.</span
              ><span
                >您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。</span
              >
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_9"
                id="question_9_true"
                value="true"
              />
              <label for="question_9_true">是</label>
              <input
                type="radio"
                name="question_9"
                id="question_9_false"
                value="false"
                checked
              />
              <label for="question_9_false">否</label>
            </div>
          </div>
          <div class="question question_10">
            <p>
              <span>10.</span>
              <span
                >如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費</span
              >
            </p>
            <div class="check_box">
              <input
                type="radio"
                name="question_10"
                id="question_10_true"
                value="true"
              />
              <label for="question_10_true">是</label>
              <input
                type="radio"
                name="question_10"
                id="question_10_false"
                value="false"
                checked
              />
              <label for="question_10_false">否</label>
            </div>
          </div>
          <div class="form_btn">
            <button class="btn cancel_btn" data-bs-dismiss="modal">取消</button>
            <button
              class="btn next_btn"
              data-bs-toggle="modal"
              data-bs-target="#application"
            >
              <a href="##" data-bs-dismiss="modal">下一步</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    class="application modal_layout modal fade"
    id="application"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="processbar">
          <span class="circle circle_1"></span>
          <span class="line"></span>
          <span class="circle circle_2"></span>
        </div>
        <h3>步驟二 認養申請</h3>
        <div class="confirm_check">
          <input type="checkbox" name="" id="confirm_check" />
          <label for="confirm_check"
            >本人願意遵守以下規定, 並提出認養申請</label
          >
        </div>
        <ol class="consent_info">
          <li>
            依法辦理寵物登記、晶片植入等事項。並同意為認養隻動物絕育，避免不必要之繁殖。
          </li>
          <li>
            無論何時都以人道方式對待認養動物，提供牠適當之食物、飲水及空間，並絕不任意棄養認養的動物。
          </li>
          <li>
            若認養動物年齡未滿8週或不宜施打疫苗者，必須完成狂犬病預防注射，並將注射證明影本郵寄或傳真回本所備查。
          </li>
          <li>
            定期幫牠進行狂犬病預防注射、驅蟲及健康檢查，受傷或罹病時，必請獸醫師給予醫療。
          </li>
          <li>
            妥善照顧牠，防止其無故侵害他人之生命，身體、自由、財產或安寧。
          </li>
          <li>
            不再隨便放縱牠於戶外，牠出入公共場所或公眾出入之場所時，必由7歲以上之人伴同，並採取適當之防衛措施，如繫犬鍊、帶口罩等，始得攜出戶外。
          </li>
          <li>
            當牠轉讓、死亡或住所異動時，於1個月內依規定辦理變更登記；遺失時，於5天內依規定申報。
          </li>
          <li>本人願接受貴所之追蹤訪視及飼養輔導。</li>
          <li>
            如有違反上述認養規定，貴所有權收回該動物，並終止認養人對該認養動物之權利。
          </li>
          <li>
            如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費。
          </li>
          <li>
            依據「動物保護法」第33-1條之規定:完成不擬續養手續後將不得飼養寵物及認養收容動物。
          </li>
          <li>
            本認養申請資料送出後，不代表已完成所選動物之認養，亦不代表您已具認養本動物的第一優先權，認養以收容所現場完成程序為準。
          </li>
        </ol>
        <div class="applicant_info">
          <h4>申請資料</h4>
          <div class="applicant_input">
            <div>
              <div class="location">
                <label for="location">飼養地點</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="請輸入地址及型態(公寓、透天...)"
                  required
                />
              </div>
              <div class="space">
                <label for="space">空間大小</label>
                <input
                  type="text"
                  name="space"
                  id="space"
                  placeholder="請輸入坪數"
                  required
                />
              </div>
            </div>
            <div>
              <div class="hadpets">
                <label for="hadpets">現有動物隻數</label>
                <input type="text" name="hadpets" id="hadpets" required />
              </div>
              <div></div>
            </div>
            <div>
              <div class="name">
                <label for="name">認養人姓名</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div class="birth">
                <label for="birth">認養人出生日期</label>
                <input type="text" name="birth" id="birth" required />
              </div>
            </div>
            <div>
              <div class="tel">
                <label for="tel">認養人聯絡電話</label>
                <input type="tel" name="tel" id="tel" required />
              </div>
              <div class="mail">
                <label for="mail">電子信箱</label>
                <input type="email" name="mail" id="mail" required />
              </div>
            </div>
            <div>
              <div class="address">
                <label for="address">通訊地址</label>
                <input type="text" name="address" id="address" required />
              </div>
              <div></div>
            </div>
          </div>
          <div class="form_btn">
            <button class="btn cancel_btn" data-bs-dismiss="modal">取消</button>
            <button class="btn next_btn">申請</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
    };
  },
  methods: {
    favoriteClick() {
      this.isLiked = !this.isLiked;
    },
  },
  computed: {
    isTracked() {
      if (this.isLiked) {
        return "取消追蹤";
      } else {
        return "追蹤";
      }
    },
  },
};
</script>

<style scoped lang="scss">
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
// info
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
    right: -30px;
    width: 250px;
    height: 4px;
    background-color: color.$secondary;
  }
  .line_vertical {
    position: absolute;
    right: 0;
    top: -30px;
    width: 4px;
    height: 250px;
    background-color: color.$secondary;
  }
  margin-bottom: 120px;
}
.info_img {
  max-width: 500px;
  height: 400px;
  background-color: #ccc;
  margin-bottom: 40px;
}
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
.line_horizontal_long {
  display: inline-block;
  margin-right: 70px;
  width: 700px;
  height: 4px;
  background-color: color.$secondary;
}
.text_btn {
  font-size: 40px;
  background: transparent;
  color: color.$solid_circle;
  cursor: pointer;
}

// common set for modal
.modal_layout {
  width: 90%;
  margin: 0 auto;
  padding: 36px 16px 60px 16px;
  background-color: color.$primary;
  h3 {
    margin-bottom: 60px;
    text-align: center;
    font-size: 50px;
    color: color.$text_dark;
  }
}
.processbar {
  margin: 36px auto 36px auto;
  width: fit-content;
  .circle {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    background-color: color.$solid_circle;
  }
  .circle_2 {
    background-color: #e5e5e5;
  }
  .line {
    display: inline-block;
    width: 100px;
    height: 4px;
    vertical-align: middle;
    background-color: #e5e5e5;
  }
}
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
// BS modal setting
.modal {
  top: 30px;
  right: 0;
  max-height: 90vh;
  .modal-dialog {
    .modal-content {
      border: none;
      background-color: color.$primary;
    }
  }
}
.modal-dialog {
  margin: 0;
  width: 100%;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 100%;
    margin: 0;
  }
}
// adoption
.adoption_form {
  color: color.$text_dark;
}
.question {
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 27px;
  }
  p {
    display: flex;
    width: 900px;
  }
  .check_box {
    input[type="radio"] {
      margin-right: 16px;
      padding: 15px;
      vertical-align: middle;
      appearance: none;
      background-color: #c4c4c4;
      cursor: pointer;
      transition: background-color 0.25s;
      &:checked {
        background-color: color.$secondary;
      }
      &:hover {
        outline: 2px solid #deb071;
      }
    }
    label {
      vertical-align: middle;
      &:not(last-child) {
        margin-right: 16px;
      }
    }
  }
}
@media (max-width: 992px) {
  .question {
    flex-wrap: wrap;
    p {
      margin-bottom: 8px;
    }
    .check_box {
      margin-left: 16px;
    }
  }
}
// application
button[data-bs-target="#application"] {
  width: fit-content;
  height: fit-content;
  padding: 0;
  border: none;

  a {
    width: 233px;
    height: 81px;
    line-height: 81px;
    color: color.$primary;
    display: inline-block;
  }
}
.application {
  .processbar {
    .line {
      background-color: color.$solid_circle;
    }
    .circle_2 {
      background-color: color.$solid_circle;
    }
  }
}
.confirm_check {
  width: fit-content;
  margin: 0 auto 16px auto;
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    margin-right: 16px;
    vertical-align: middle;
    appearance: none;
    background-color: #c4c4c4;
    cursor: pointer;
    transition: background-color 0.4s;
    &:checked {
      background-color: color.$secondary;
    }
    &:hover {
      outline: 2px solid #deb071;
    }
  }
  label {
    vertical-align: middle;
  }
}
.consent_info {
  margin-bottom: 60px;
  li:not(:last-child) {
    margin-bottom: 16px;
  }
}
.applicant_info {
  h4 {
    width: fit-content;
    margin: 0 auto 18px auto;
  }
  .applicant_input {
    margin-bottom: 60px;
    > div {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      > div {
        flex: 1 0 0;
      }
      label {
        display: block;
        margin-bottom: 8px;
        color: color.$text_dark;
        font-size: 20px;
      }
      input {
        display: block;
        width: 100%;
        height: 52px;
        padding: 0 16px;
        border: 2px solid color.$secondary;
        outline: none;
        transition: 0.4s;
        &::placeholder {
          font-size: 20px;
          color: color.$cancel_btn;
        }
        &:focus {
          box-shadow: 0 0 3px #ffc574, 0 0 12px #ffc574;
          transform: translate(-2px, -2px);
        }
      }
    }
  }
}
</style>
