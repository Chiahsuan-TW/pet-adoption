import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "這是必填欄位",
  },
  string: {
    required: "這是必填欄位",
    min: "請至少輸入${min}個字",
    max: "最多只能輸入 ${max} 個字",
    email: "請輸入正確格式的email",
    length: "電話號碼應為${length}位數",
  },
});
