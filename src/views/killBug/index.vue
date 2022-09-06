<template>
  <div class="kbp-wrapper">饭锅电饭锅电饭锅
    <svg class="cc-icon" aria-hidden="true">
  <use xlink:href="#ape-icon-icon_baoxue"></use>
</svg>
      <iconSvg :icon_name='`#ape-icon-dingdan`'></iconSvg>
      <icon-svg :icon_name='`#ape-icon-dingdan`'></icon-svg>
  </div>
</template>

<script>
export default {
  name: "killBugPage",//消灭BUG
  data() {
    return {};
  },
  components:{
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.kbp-wrapper {
   width: 80%;
  height: 200px;
  background: red;
  margin: 0 auto;
  font-family: '阿里妈妈数黑体 Bold';
  font-size: 100px;
}
</style>
