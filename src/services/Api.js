import axios from "axios";

const api = axios.create({
  baseURL: "https://data.coa.gov.tw/Service/OpenData/",
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_area_pkid=12&animal_kind=貓&$top=6
export default {
  getPets() {
    return api.get("TransService.aspx?UnitId=QcbUEzN6E6DL&$top=100");
  },
  getPetsByVariable(kind, city) {
    return api.get(
      `TransService.aspx?UnitId=QcbUEzN6E6DL&animal_area_pkid=${city}&animal_kind=${kind}`
    );
  },
  getPetDetail(id) {
    return api.get(`TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=${id}`);
  },
};

// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=235417

// https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_id=235417
