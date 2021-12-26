<template>
  <div
    :class="[
      'adoption',
      'modal_layout',
      'modal',
      'fade',
      { show: formVisibility },
    ]"
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
        <form class="adoption_form" @submit.prevent="handleSubmit">
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
                v-model="questions.one"
              />
              <label for="question_1_true">是</label>
              <input
                type="radio"
                name="question_1"
                id="question_1_false"
                value="false"
                v-model="questions.one"
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
                v-model="questions.two"
              />
              <label for="question_2_true">是</label>
              <input
                type="radio"
                name="question_2"
                id="question_2_false"
                value="false"
                v-model="questions.two"
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
                v-model="questions.three"
              />
              <label for="question_3_true">是</label>
              <input
                type="radio"
                name="question_3"
                id="question_3_false"
                value="false"
                v-model="questions.three"
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
                v-model="questions.four"
              />
              <label for="question_4_true">是</label>
              <input
                type="radio"
                name="question_4"
                id="question_4_false"
                value="false"
                v-model="questions.four"
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
                v-model="questions.five"
              />
              <label for="question_5_true">是</label>
              <input
                type="radio"
                name="question_5"
                id="question_5_false"
                value="false"
                v-model="questions.five"
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
                v-model="questions.six"
              />
              <label for="question_6_true">是</label>
              <input
                type="radio"
                name="question_6"
                id="question_6_false"
                value="false"
                v-model="questions.six"
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
                v-model="questions.seven"
              />
              <label for="question_7_true">是</label>
              <input
                type="radio"
                name="question_7"
                id="question_7_false"
                value="false"
                v-model="questions.seven"
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
                v-model="questions.eight"
              />
              <label for="question_8_true">是</label>
              <input
                type="radio"
                name="question_8"
                id="question_8_false"
                value="false"
                v-model="questions.eight"
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
                v-model="questions.nine"
              />
              <label for="question_9_true">是</label>
              <input
                type="radio"
                name="question_9"
                id="question_9_false"
                value="false"
                v-model="questions.nine"
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
                v-model="questions.ten"
              />
              <label for="question_10_true">是</label>
              <input
                type="radio"
                name="question_10"
                id="question_10_false"
                value="false"
                v-model="questions.ten"
                checked
              />
              <label for="question_10_false">否</label>
            </div>
          </div>
          <div class="form_btn">
            <button class="btn cancel_btn" data-bs-dismiss="modal">取消</button>
            <Button
              class="next_btn"
              data-bs-toggle="modal"
              data-bs-target="#application"
            >
              <button
                data-bs-dismiss="modal"
                @click="validate"
                :disabled="isAllTrue ? false : true"
                class="next_btn inner"
              >
                下一步
              </button>
            </Button>
            <!-- <Button
              class="next_btn"
              data-bs-dismiss="modal"
              @click="$emit('next')"
            >
              下一步
            </Button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "AdoptionNotice",
  pros: {
    formVisibility: {
      type: Boolean,
    },
  },
  components: {
    Button,
  },
  data() {
    return {
      questions: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
      },
    };
  },
  methods: {
    validate(e) {
      //TODO: 驗證
      if (this.isAllTrue) {
        console.log("next");
        return;
      } else {
        console.log("STOP");
        e.stopImmediatePropagation();
      }
    },
  },
  computed: {
    isAllTrue() {
      const answers = Object.values(this.questions);
      return answers.every((answer) => answer === "true");
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
  > a {
    color: #fff;
  }
  &:hover {
    background-color: #deb071;
  }
  .next_btn.inner {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #fff;
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
        outline: 4px solid #deb071;
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
</style>
