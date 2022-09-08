<template>
  <div id="app"
       class="app-wrapper cc-over-scroll">
    <div class="app-content cc-over-scroll">
      <views></views>
    </div>
    <div class="app-bg">
      <loginBg />
    </div>
  </div>
</template>
<script>
import views from './views';
import loginBg from './components/bgCom/loginBg.vue';
export default {
  name: 'App',
  components: {
    loginBg, views
  },
  watch: {
  }
}
</script>
<style lang="scss">
html,body{
  @include sm-whbc($w: 100%, $h: 100%);
}
.app-wrapper {
  @include sm-whbc($w: 100%, $h: 100%, $bc: $sc-33);
  box-sizing: border-box;
  .app-content {
    @include sm-whbc($w: 100%, $h: 100%);
    @include sm-ptrbl($p: absolute, $t: 0, $l: 0, $zi: 99);
    min-width: 1100px;
  }
  .app-bg {
    @include sm-whbc($w: 100%, $h: 100%);
    @include sm-ptrbl($p: absolute, $t: 0, $l: 0);
  }
}
</style>
