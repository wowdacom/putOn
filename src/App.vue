<template>
  <!-- <HelloWorld  :initValue="1024" /> -->
  <!-- <HelloWorld :initValue="512" /> -->
  <div class="header">
    <div id="nav">
      <router-link to="/">Add Books</router-link> |
      <router-link to="/memo">Memo</router-link>
    </div>
  </div>
  <router-view></router-view>
    <!-- <div slot="for-memo">
      <h1>Here might be a page title</h1>
    </div> -->
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>
<style>
#app {
  
}
.header {
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>