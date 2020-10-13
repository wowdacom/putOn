<template>
  <h1>{{ hello }}</h1>
  <button @click="increment">count is: {{ count }}</button>
  <h1>{{ age }}</h1>
  <button @click="aging">age++</button>
  <div v-if="error">failed to load</div>
  <div v-if="!data">loading...</div>
  <div v-else>hello {{ data.hi }}</div>
  <van-button class="my-btn" type="danger">危險按鈕</van-button>
</template>

<script lang="ts">
import { useCounter } from '../composables/counter';
import { ref, reactive, toRefs } from 'vue'
import useSWRV from 'swrv'

interface Profile {
  name: string;
  age: number;
}

export default {
  name: 'HelloWorld',
  props: {
    initValue: Number
  },
  setup(props: { initValue: number }){
    
    //處理基本宣告 or Event
    let hello = ref("Hello my friend")
    let test: Profile = {
      name: 'Jim',
      age: 31
    }
    const fetcher = (url: string) => fetch(url).then(r => r.json());

    const aging = () => {
        profile.age++
    };

    // 處理 reactive, or ref
    let profile = reactive(test)
    
    const { data, error } = useSWRV('https://shrouded-tor-10654.herokuapp.com/', fetcher)
    
    return { 
      ...useCounter(props.initValue),
      hello,
      ...toRefs(profile),
      aging,
      data,
      error
    }
  }
}
</script>
<style scoped>
/* 好神奇加了scoped就可以用了 */
.my-btn {
  border-radius: 50px;
}
</style>
