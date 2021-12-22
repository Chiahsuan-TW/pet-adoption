<template>
  <main>
    <h2>志工招募</h2>
    <section>
      <div>
        <img
          src="./../assets/images/photo/volunteer-1.jpg"
          alt="hand in hand"
        />
      </div>
      <div class="wrapper">
        <div class="circles">
          <img src="./../assets/images/circle-hollow.png" alt="hollow circle" />
          <img src="./../assets/images/circle-solid.png" alt="solid circle" />
        </div>
        <div class="volunteer_info">
          <div class="volunteer_info_hire">
            <h5>招募單位:</h5>
            <p>好想浪你回家基金會</p>
          </div>
          <div class="volunteer_info_address">
            <h5>服務地點:</h5>
            <p>701台南市東區北門路二段16號 L2A</p>
          </div>
          <div class="volunteer_info_service">
            <h5>服務內容簡介:</h5>
            <p>1. 協助浪浪社會化訓練</p>
            <p>2. 引導領養者認識浪浪</p>
            <p>3. 協助假日領養活動</p>
          </div>
          <div class="volunteer_info_contact">
            <h5>聯絡人及聯絡方式:</h5>
            <p>Chris 0966666666</p>
          </div>
          <div class="volunteer_info_target">
            <h5>招募對象:</h5>
            <p>18 歲以上一般民眾</p>
          </div>
        </div>
        <Button class="apply">報名加入</Button>
        <!--Bootstrap-->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn apply"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          報名加入
        </button>

        <!-- Modal -->
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
            <form class="modal-content">
              <h5 class="modal-title" id="staticBackdropLabel">志工報名</h5>
              <div class="group">
                <div>
                  <label for="name">姓名</label><input type="text" required />
                </div>
                <div>
                  <label for="tel">聯絡電話</label><input type="tel" required />
                </div>
                <div>
                  <label for="email">電子信箱</label
                  ><input type="text" required />
                </div>
                <div>
                  <label for="address">通訊地址</label
                  ><input type="text" required />
                </div>
                <div>
                  <label for="reason">為什麼您想要來當志工呢？</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <p>單位收到資料後，三日內會有專人與您聯絡，感謝您的參與。</p>
                <div class="button_group">
                  <button type="button" class="btn" data-bs-dismiss="modal">
                    取消
                  </button>
                  <button type="submit" class="btn">送出</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <img
          class="horizontal_line"
          src="./../assets/images/line-horizontal.png"
          alt="horizontal line"
        />
      </div>
      <div>
        <img
          src="./../assets/images/photo/volunteer-2.jpg"
          alt="people moving stuff"
        />
      </div>
      <div>
        <img
          src="./../assets/images/photo/volunteer-3.jpg"
          alt="people packing stuff"
        />
      </div>
    </section>
  </main>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Volunteer",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px 80px;
  background-color: color.$primary;

  h2 {
    flex-basis: 100%;
    margin-bottom: 60px;
  }

  section:nth-child(2) {
    width: 45%;

    .wrapper {
      padding: 0 80px;
    }

    .circles {
      margin-top: -20px;

      img:first-child {
        animation: spin 20s infinite alternate;
        animation-timing-function: linear;
      }

      img:last-child {
        position: relative;
        top: 100px;
        animation: spin 2.5s infinite alternate;
        animation-timing-function: linear;
        animation-delay: 2s;
      }
    }

    @keyframes spin {
      0% {
        transform: rotate3d(0, 1, 0, 0deg);
      }
      20% {
        transform: rotate3d(0, 1, 0, 72deg);
      }
      40% {
        transform: rotate3d(0, 1, 0, 144deg);
      }
      65% {
        transform: rotate3d(0, 1, 0, 216deg);
      }
      80% {
        transform: rotate3d(0, 1, 0, 288deg);
      }
      100% {
        transform: rotate3d(0, 1, 0, 360deg);
      }
    }

    .volunteer_info {
      margin-top: 113px;

      > div {
        margin-top: 16px;
      }

      h5 {
        font-weight: 900;
        font-size: 24px;
        color: color.$text_dark;
      }

      p {
        font-weight: 900;
        font-size: 20px;
        color: color.$text_light;
      }
    }
  }

  section:last-child {
    width: 55%;
    margin-right: 20px;
    margin-left: -20px;
    transform: scale(1.06);

    > div {
      width: 100%;
      margin-top: 60px;
      text-align: right;
    }

    img:not(.horizontal_line) {
      width: 100%;
      object-fit: cover;
    }
  }

  .apply {
    margin-top: 36px;
  }
}

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
      }

      textarea {
        border: 0;
        border: 2px solid color.$secondary;
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

    button[type="submit"] {
      margin-left: 36px;
    }
  }
}
</style>
