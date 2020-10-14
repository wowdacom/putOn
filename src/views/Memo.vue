<template>
  <div class="memo">
    <h4>=目前有的問題或想加的功能=</h4>
    <br>
    <div class="memo-content">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
    <!-- <ul>
      <li v-for="item in list">{{ item }}</li>
      
    </ul> -->
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'


export default {
  setup () {
    let list = reactive([])
    list = ["讀取條碼", "上傳圖片"]

    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
.memo {
  position: relative;
  height: 80vh;
  padding: 20px 50px;
  h4 {
    margin: 0;
    text-align: center;
  }
  .memo-content {
    max-height: 80%;
    overflow: scroll;
  }
}
</style>