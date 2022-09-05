<template>
  <div id="app" class="app-wrapper cc-over-scroll">
    <div class="app-content cc-over-scroll">
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
@import '@/assets/css/common.css';
.app-wrapper {
  @include sm-whbc($w:100vw,$h:100vh,$bc:$sc-33);
  .app-content{
    @include sm-whbc($w:100%,$h:100%);
    @include sm-ptrbl($p:absolute,$t:0,$l:0,$zi:99);
    min-width: 1100px;
  }
  .app-bg{
    @include sm-whbc($w:100%,$h:100%);
    @include sm-ptrbl($p:absolute,$t:0,$l:0);
  }
}
</style>
