<template>
  <!-- <div class="bar">
    <span class="sun clickSun"><i class="fas fa-sun fa-fw"></i></span>
    
  </div> -->
  <div class="backend_page" :class="{ dark_background }">
    <h2>後台系統</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            志工招募資訊
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="volunteer_content content_layout accordion-body">
            <p v-if="noVolunteers">目前無人申請喔!</p>

            <ul class="volunteer_table">
              <li class="" v-for="volunteer in volunteers" :key="volunteer">
                <div class="table_content">
                  <p class="name"><span>姓名:</span>{{ volunteer["name"] }}</p>
                  <p><span>電話:</span>{{ volunteer["tel"] }}</p>
                  <p><span>電子信箱:</span>{{ volunteer["email"] }}</p>
                  <p><span>地址:</span>{{ volunteer["address"] }}</p>
                </div>
                <!-- <span class="badge bg-primary rounded-pill">14</span> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            認養申請資訊
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="adoption_content content_layout accordion-body">
            <p v-if="noAdopters">目前無人申請喔!</p>
            <ul class="volunteer_table">
              <li v-for="adopter in adopters" :key="adopter">
                <div class="table_content">
                  <p class="name"><span>姓名:</span>{{ adopter["name"] }}</p>
                  <p><span>電話:</span>{{ adopter["tel"] }}</p>
                  <p><span>電子信箱:</span>{{ adopter["email"] }}</p>
                  <p><span>地址:</span>{{ adopter["address"] }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      volunteers: [],
      adopters: [],
      noVolunteers: false,
      noAdopters: false,
      isDark: true,
      dark_background: false,
    };
  },
  created() {
    this.getVolunteers();
    this.getAdopters();
  },
  methods: {
    async getVolunteers() {
      const querySnapshot = await getDocs(collection(db, "volunteers"));
      querySnapshot.forEach((doc) => {
        this.volunteers.push(doc.data());
      });
      if (this.volunteers.length === 0) {
        return (this.noVolunteers = true);
      }
    },
    async getAdopters() {
      const queryAdopters = await getDocs(collection(db, "adopters"));
      queryAdopters.forEach((adopt) => {
        this.adopters.push(adopt.data());
      });
      if (this.adopters.length === 0) {
        return (this.noAdopters = true);
      }
    },
    checkApplication(data) {
      if (data.length === 0) {
        return true;
      }
      return false;
    },
    clickDark() {
      this.isDark = !this.isDark;
      this.dark_background = !this.dark_background;
    },
  },
};
</script>
<style lang="scss" scope>
.backend_page {
  max-width: 1440px;
  min-height: 80vh;
  padding: 0px 100px 60px 100px;
  margin: 0 auto;
  background-color: color.$primary;
  h2 {
    color: #5e5b56;
    margin-bottom: 50px;
    font-size: 50px;
  }
}
.accordion-item {
  border: 2px solid color.$secondary;
  box-shadow: 2px 2px 5px #999;
  transition: transform 0.4s;
  &:not(:first-of-type) {
    margin-top: 20px;
    border: 2px solid color.$secondary;
  }
  &:hover {
    transform: translate(-4px, -8px);
  }
  .accordion-header {
    margin-bottom: 0;
    .accordion-button {
      padding: 18px 38px;
      color: color.$text_dark;
      font-size: 36px;
      &:not(.collapse) {
        background-color: color.$primary;
      }
      &:focus {
        border-color: color.$secondary;
        box-shadow: 3px 3px 3px color.$secondary, 0 0 5px color.$secondary,
          0 0 12px color.$secondary;
      }
    }
  }
}

.content_layout {
  padding: 30px 20px;
  > p {
    padding: 20px;
    font-size: 36px;
    color: #fff;
    background-color: #dcba8a;
    border-radius: 20px;
    text-align: center;
  }
  .volunteer_table {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: color.$primary;
    counter-reset: num;
    li {
      display: flex;
      align-items: center;
      flex: 0 0 100%;
      gap: 50px;
      padding: 10px 20px;
      .table_content {
        flex: 1 0 0;
      }
      p {
        padding: 5px 10px;
        font-size: 20px;
        span {
          display: inline-block;
          margin-right: 10px;
          width: 100px;
          font-size: 22px;
        }
      }
      .name {
        margin-bottom: 10px;
        font-size: 28px;
        font-weight: 600;
        border-bottom: 2px solid #000;
      }
      &::before {
        display: block;
        font-size: 28px;
        font-weight: 900;
        counter-increment: num;
        content: counter(num) ".";
      }
      &:nth-child(odd) {
        background-color: color.$secondary;
      }
    }
  }
}
</style>
