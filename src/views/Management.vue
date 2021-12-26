<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />
  <!-- <div class="bar">
    <span class="sun clickSun"><i class="fas fa-sun fa-fw"></i></span>
    
  </div> -->

  <div class="content" :class="{ dark_background }">
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
<style lang="scss" scope></style>
