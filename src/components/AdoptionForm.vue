<template>
  <div
    :class="[
      'application',
      'modal_layout',
      'modal',
      'fade',
      { show: formVisibility },
    ]"
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
            <button
              class="btn next_btn"
              @click="closeForm"
              :data-bs-dismiss="isClosed ? 'modal' : ''"
            >
              申請
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdoptionForm",
  props: {
    formVisibility: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        isClosed: false,
    };
  },
  methods: {
    closeForm() {
      this.isClosed = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// common setting for modal
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
      outline: 4px solid #deb071;
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
