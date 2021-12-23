<template>
  <div
    class="modal fade modified_modal"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form class="modal-content" @submit.prevent="clickSubmit">
        <h5 class="modal-title" id="staticBackdropLabel">志工報名</h5>
        <div class="group">
          <div>
            <label for="name">姓名</label
            ><input type="text" v-model="volunteerInfo.name" required />
          </div>
          <div>
            <label for="tel">聯絡電話</label
            ><input type="tel" v-model="volunteerInfo.tel" required />
          </div>
          <div>
            <label for="email">電子信箱</label
            ><input type="email" v-model="volunteerInfo.email" required />
          </div>
          <div>
            <label for="address">通訊地址</label
            ><input type="text" v-model="volunteerInfo.address" required />
          </div>
          <div>
            <label for="reason">為什麼您想要來當志工呢？</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <p>單位收到資料後，三日內會有專人與您聯絡，感謝您的參與。</p>
          <div class="button_group">
            <button
              type="button"
              class="btn"
              data-bs-dismiss="modal"
              @click="this.clickCancel"
            >
              取消
            </button>
            <a class="cancel" data-bs-dismiss="modal">
              <button type="button" class="btn">
                <Button @click="validate($event)" class="validate">送出</Button>
              </button>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "ApplicationForm",
  components: {
    Button,
  },
  data() {
    return {
      volunteerInfo: {
        name: "",
        tel: "",
        email: "",
        address: "",
      },
    };
  },
  methods: {
    clickSubmit() {
      this.$emit("clickSubmit", this.volunteerInfo);
    },
    validate($event) {
      if (!this.volunteerInfo.name) {
        $event.stopPropagation();
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modified_modal {
  .modal-dialog {
    min-width: 90%;
  }

  form {
    background-color: color.$primary;
    padding: 60px 16px;

    h5 {
      font-weight: 900;
      font-size: 50px;
      color: color.$text_dark;
      text-align: center;
    }

    .group {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      > div {
        flex: 1 0 45%;
        display: flex;
        flex-direction: column;
      }

      label {
        font-weight: 900;
        font-size: 20px;
        color: color.$text_dark;
      }

      input {
        padding: 8px;
        border: 0;
        border: 2px solid color.$secondary;
        outline: none;
      }

      textarea {
        border: 0;
        border: 2px solid color.$secondary;
        outline: none;
      }
    }
  }

  .modal-footer {
    justify-content: center;
    border-top: none;
    padding: 0;
    margin-top: 36px;

    p {
      text-align: center;
      width: 100%;
      font-weight: 900;
      font-size: 20px;
      color: color.$text_dark;
    }

    .button_group {
      margin-top: 60px;
    }

    .cancel {
      width: fit-content;
    }

    button[type="button"] {
      width: fit-content;
      margin-left: 36px;
    }
  }
}
</style>
