<template>
  <div id="app">  
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  watch: {
  }
}
</script>

<style lang="scss">
$c1:rgb(0, 140, 255);
#app {
  width: 100%;
  height: 100vh;
  background-color: rgb(11, 12, 12);
  min-width: 1100px;
}
</style>
