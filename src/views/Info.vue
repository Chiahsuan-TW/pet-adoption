<template>
  <div class="adoption">
    <div class="processbar">
      <span class="processbar_circle"></span>
      <span class="processbar_line"></span>
      <span class="processbar_circle"></span>
    </div>
    <h2>步驟一 認養需知</h2>
    <form class="adoption_form">
      <div class="question_1">
        <span
          >1.
          您是否看過犬貓之行為健康評估表?您是否與管理人員或志工討論過該犬貓之狀況。</span
        >
        <input
          type="radio"
          name="question_1"
          id="question_1_true"
          value="true"
        />
        <label for="question_1_true">是</label>
        <input
          type="radio"
          name="question_1"
          id="question_1_false"
          value="false"
        />
        <label for="question_1_false">否</label>
      </div>
      <div class="question_2">
        <span
          >2. 您是否知道犬貓的健康有許多不確定的風險?
          您是否了解當牠生病時立即就醫治療是飼主的責任?</span
        >
        <input
          type="radio"
          name="question_2"
          id="question_2_true"
          value="true"
        />
        <label for="question_2_true">是</label>
        <input
          type="radio"
          name="question_2"
          id="question_2_false"
          value="false"
        />
        <label for="question_2_false">否</label>
      </div>
      <div class="question_3">
        <span>3. 您是否了解: 給犬貓良好的教育，是飼主應該努力學習的責任?</span>
        <input
          type="radio"
          name="question_3"
          id="question_3_true"
          value="true"
        />
        <label for="question_3_true">是</label>
        <input
          type="radio"
          name="question_3"
          id="question_3_false"
          value="false"
        />
        <label for="question_3_false">否</label>
      </div>
      <div class="question_4">
        <span
          >4. 您是否了解犬貓剛到新環境時，許多潛在的疾病會因 1.運輸過程吹風淋雨
          2.洗澡 3.過度玩耍 4.更換食物等等讓降低抵抗力而爆發疾病</span
        >
        <input
          type="radio"
          name="question_4"
          id="question_4_true"
          value="true"
        />
        <label for="question_4_true">是</label>
        <input
          type="radio"
          name="question_4"
          id="question_4_false"
          value="false"
        />
        <label for="question_4_false">否</label>
      </div>
      <div class="question_5">
        <span
          >5.
          您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查</span
        >
        <input
          type="radio"
          name="question_5"
          id="question_5_true"
          value="true"
        />
        <label for="question_5_true">是</label>
        <input
          type="radio"
          name="question_5"
          id="question_5_false"
          value="false"
        />
        <label for="question_5_false">否</label>
      </div>
      <div class="question_6">
        <span>6. 犬貓將近有15年的壽命，您是否了解無論人事物的演變</span>
        <input
          type="radio"
          name="question_6"
          id="question_6_true"
          value="true"
        />
        <label for="question_6_true">是</label>
        <input
          type="radio"
          name="question_6"
          id="question_6_false"
          value="false"
        />
        <label for="question_6_false">否</label>
      </div>
      <div class="question_7">
        <span>7. 您是否了解飼養動物需要適當的居家條件?</span>
        <input
          type="radio"
          name="question_7"
          id="question_7_true"
          value="true"
        />
        <label for="question_7_true">是</label>
        <input
          type="radio"
          name="question_7"
          id="question_7_false"
          value="false"
        />
        <label for="question_7_false">否</label>
      </div>
      <div class="question_8">
        <span
          >8.
          您是否同意在未取得共識之前絕不貿然認養，以免造成日後極大的心理負擔</span
        >
        <input
          type="radio"
          name="question_8"
          id="question_8_true"
          value="true"
        />
        <label for="question_8_true">是</label>
        <input
          type="radio"
          name="question_8"
          id="question_8_false"
          value="false"
        />
        <label for="question_8_false">否</label>
      </div>
      <div class="question_9">
        <span
          >9.
          您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。</span
        >
        <input
          type="radio"
          name="question_9"
          id="question_9_true"
          value="true"
        />
        <label for="question_9_true">是</label>
        <input
          type="radio"
          name="question_9"
          id="question_9_false"
          value="false"
        />
        <label for="question_9_false">否</label>
      </div>
      <div class="question_10">
        <span
          >10.
          如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費</span
        >
        <input
          type="radio"
          name="question_10"
          id="question_10_true"
          value="true"
        />
        <label for="question_10_true">是</label>
        <input
          type="radio"
          name="question_10"
          id="question_10_false"
          value="false"
        />
        <label for="question_10_false">否</label>
      </div>
    </form>
  </div>
</template>

<script></script>

<style scoped lang="scss"></style>
