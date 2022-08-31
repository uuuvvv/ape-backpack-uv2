<template>
  <div id="app">
    <div class="app-content">
    <router-view></router-view>
    </div>
    <div class="app-bg">
      <loginBg />
    </div>
  </div>
</template>
<script>
import loginBg from './components/loginBg/loginBg.vue'
export default {
  name: 'App',
  components: {
    loginBg
  },
  watch: {
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  background-color: rgb(11, 12, 12);
  min-width: 1100px;
  .app-content{
    position: relative;
    z-index: 999;
  }
}
</style>
