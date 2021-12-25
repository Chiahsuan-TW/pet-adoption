<template>
  <div class="search_page">
    <div class="wrap_container">
      <h2>尋找浪浪</h2>
      <Filter
        @clickSend="sendConfirm"
        @confirm="getCity"
        @confirm_animal="getAnimal"
        :cities="cities"
        :animalKind="animalKind"
      ></Filter>
      <!-- <button type="button" style="padding: 30px" @click="getAnimalType">看api資料</button> -->
      <section class="content">
        <Card v-for="pet in pets" :key="pet.animal_id" :pet="pet"></Card>
      </section>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Api from "@/services/Api";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
export default {
  name: "Search",
  components: {
    Card,
    Filter,
    Pagination,
  },
  data() {
    return {
      pets: null,
      cities: null,
      animalKind: null,
      selectCity: null,
      selectAnimalType: null,
    };
  },
  created() {
    Api.getPets()
      .then((response) => {
        this.pets = response.data;
        // console.log('顯示第一次接api回傳', response.data);
        this.getCityOfAddress();
        this.getAnimalType();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    getCity(city) {
      this.selectCity = city;
      console.log("選擇都市的", this.selectCity, this.cities[this.selectCity]);

      // console.log('parent', city);
    },
    getAnimal(animal) {
      this.selectAnimalType = animal;
      // console.log('parent', animal);
    },
    getCityOfAddress() {
      const apiData = this.pets;
      const cities = {};
      apiData.forEach((data) => {
        let address = data.shelter_address;
        let city_code = data.animal_area_pkid;
        let city = address[0] + address[1] + address[2];
        cities[city] = city_code;
      });
      // console.log(cities);
      this.cities = { ...cities };
    },
    getAnimalType() {
      const allAnimalKind = [];
      this.pets.forEach((data) => {
        allAnimalKind.push(data.animal_kind);
      });
      this.animalKind = [...new Set(allAnimalKind)];
    },
    async sendConfirm() {
      const cityCode = this.cities[this.selectCity]
        ? this.cities[this.selectCity]
        : "";
      const kind = this.selectAnimalType ? this.selectAnimalType : "";
      const { data } = await Api.getPetsByVariable(kind, cityCode);
      this.pets = data;
      console.log(data.length);
      this.selectCity = null;
      this.selectAnimalType = null;
    },
  },
};
</script>

<style lang="scss" scope>
.wrap_container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0px 100px 60px 100px;
  background: color.$primary;
}

h2 {
  color: color.$text_dark;
  margin-bottom: 26px;
  font-size: 50px;
}

.wrap_container {
  .pagination {
    justify-content: center;
    font-size: 18px;
    a {
      color: #e5e5e5;
      border: 0;
      background: none;
      &:focus {
        box-shadow: none;
      }
      &:hover {
        color: color.$text_dark;
      }
    }
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}


</style>
