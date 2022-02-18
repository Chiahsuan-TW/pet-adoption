<template>
  <!-- <div
    class="modal fade modified_modal"
    id="application"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  > -->
  <div
    class="modified_modal"
    id="application"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <Form @submit="onSubmit" :validation-schema="schema">
      <h5 class="modal-title" id="staticBackdropLabel">志工報名</h5>
      <div class="group">
        <div>
          <label for="name">姓名</label>
          <!-- <input type="text" v-model="volunteerInfo.name" required /> -->
          <Field name="name" type="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label for="tel">聯絡電話</label>
          <Field name="tel" type="tel" placeholder="電話格式: 06266245" />
          <ErrorMessage name="tel" />
        </div>
        <div>
          <label for="email">電子信箱</label>
          <!-- <input type="email" v-model="volunteerInfo.email" required /> -->
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label for="address">通訊地址</label>
          <!-- <input type="text" v-model="volunteerInfo.address" required /> -->
          <Field name="address" type="address" />
          <ErrorMessage name="address" />
        </div>
        <div>
          <label for="reason">為什麼您想要來當志工呢？</label>
          <Field name="reason" type="text" rows="20" />
          <!-- <textarea name="reason" id="reason" cols="30" rows="10"></textarea> -->
        </div>
      </div>
      <div class="modal-footer">
        <p>單位收到資料後，三日內會有專人與您聯絡，感謝您的參與。</p>
        <div class="button_group">
          <Button type="button" class="cancel" @click="closeModal">
            取消
          </Button>
          <Button class="validate">送出</Button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
import Button from "@/components/Button";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "ApplicationForm",
  emits: {
    input: null,
  },
  components: {
    Button,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      name: yup.string().trim().required(),
      tel: yup.string().length(9).required(),
      email: yup.string().required().email(),
      address: yup.string().trim().required(),
    });
    return {
      schema,
    };
  },
  methods: {
    clickSubmit() {
      this.$emit("clickSubmit", this.volunteerInfo);
    },
    closeModal() {
      this.$emit("closeModal");
    },
    onSubmit(values) {
      this.$emit("clickSubmit", values);
    },
  },
};
</script>
<style lang="scss" scoped>
.modified_modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  z-index: 999;
  border: 1px solid color.$text_light;
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

        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #fff inset;
        }
      }
      span[role="alert"] {
        color: #e04b51;
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
      display: flex;
    }
    .validate {
      margin-left: 36px;
    }
  }
}
</style>
