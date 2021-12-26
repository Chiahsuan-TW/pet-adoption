<template>
  <!-- <div class="bar">
    <span class="sun clickSun"><i class="fas fa-sun fa-fw"></i></span>
    
  </div> -->
  <div class="backend_content" :class="{ dark_background }">
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
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <h2>志工招募資訊</h2>
            <div>
              <ul class="list-group list-group-numbered">
                <p v-if="noVolunteers">目前無人申請</p>

                <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  v-for="volunteer in volunteers"
                  :key="volunteer"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">姓名:{{ volunteer["name"] }}</div>
                    <p>電話:{{ volunteer["tel"] }}</p>
                    <p>電子信箱:{{ volunteer["email"] }}</p>
                    <p>地址:{{ volunteer["address"] }}</p>
                  </div>
                  <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                </li>
              </ul>
            </div>
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
            認養申請
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <h2>認養申請</h2>
            <div>
              <p v-if="noAdopters">目前無人申請</p>
              <ul class="list-group list-group-numbered">
                <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  v-for="adopter in adopters"
                  :key="adopter"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">姓名:{{ adopter["name"] }}</div>
                    <p>電話:{{ adopter["tel"] }}</p>
                    <p>電子信箱:{{ adopter["email"] }}</p>
                    <p>地址:{{ adopter["address"] }}</p>
                  </div>
                </li>
              </ul>
            </div>
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
      // console.log(this.adopters.length == 0);
      if (this.adopters.length === 0) {
        return (this.noAdopters = true);
      }
    },
    checkApplication(data) {
      console.log(data.length);
      if (data.length === 0) {
        return true;
      }
      return false;
    },
    clickDark() {
      this.isDark = !this.isDark;
      this.dark_background = !this.dark_background;
      // console.log(this.isLight);
    },
  },
};
</script>
<style lang="scss" scope>
.backend_content {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
