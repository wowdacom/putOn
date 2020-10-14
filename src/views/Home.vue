<template>
  <div class="home">
    <van-field name="flipped" label="怦然心動">
      <template #input>
        <van-switch active-color="#ffdee1" v-model="flipped" size="20" />
      </template>
    </van-field>
    <van-field v-model="name" label="書名" />
    <van-field v-model="author" label="作者" />
    <van-field v-model="publisher" label="出版社" />
    <van-field name="language" label="語言">
      <template>
        <van-radio-group  direction="horizontal" v-model="language">
          <van-radio name="中文">中文</van-radio>
          <van-radio name="簡體">簡體</van-radio>
          <van-radio name="英文">英文</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="uploader" label="封面上傳">
      <template #input>
        <van-uploader v-model="img" />
      </template>
    </van-field>
    <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="`${date}`"
      label="出版日期"
      :placeholder="currentDate"
      @click="popupController(true)"
    />
    <van-popup v-model="showPicker" :show="showPicker" position="bottom">
      <van-datetime-picker
        title="出版日期"
        type="date"
        :min-date="publisherMinDate"
        confirm-button-text="確認"
        cancel-button-text="取消"
        v-model="date"
        @confirm="onConfirm"
        @cancel="popupController(false)"
      />
    </van-popup>
    
    <van-button type="primary" class="sent-btn" size="large">提交書單</van-button>
  </div>
  
</template>

<script lang="ts">
import { ref, reactive, toRefs, watchEffect } from 'vue'

interface Book {
   name?: string,
   author?: string,
   date?: Date,
   publisher?: string,
   language?: string,
   flipped?: boolean,
   img?: Array<string|File>
}

export default {
  data () {
    return {
      test: true
    }
  },
  setup() {
    let book:Book = reactive({
      name: "",
      author: "",
      date: new Date(),
      publisher: "",
      language: "",
      flipped: false,
      img: []
    })

    let publisherRange = reactive({
      publisherMinDate: new Date(1950, 0, 1),
    })

    let showPicker = ref(false),
        currentDate = ref("點擊選擇時間")

    let popupController = (state: boolean) => {
      showPicker.value = state
    }

    let onConfirm = (time: Date) => {
      book.date = time;
      let year = time.getFullYear(),
          month = time.getMonth() + 1,
          date = time.getDate()
      currentDate.value = `${year}/${padLeftFormatted(month)}/${padLeftFormatted(date)}`
      popupController(false)
    }

    let padLeftFormatted = (num: number) => {
      return (num >= 10) ? `${num}` : `0${num}`;
    }

    return {
      ...toRefs(publisherRange),
      ...toRefs(book),
      showPicker,
      currentDate,
      popupController,
      onConfirm
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 80vh;
}
.sent-btn {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>