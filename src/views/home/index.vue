<template>
  <div class="hp-wrapper" id="lineBg">
    <searchBox />
    <webClass />
    <urlList />
  </div>
</template>

<script>
import searchBox from "@/components/inputCom/searchBox.vue";
import webClass from "@/components/cardCom/webClass.vue";
import urlList from "@/components/listCom/index.vue";
export default {
  name: "homePage",//首页内容
  data() {
    return {};
  },
  components:{
    searchBox,
    webClass,
    urlList
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.hp-wrapper {
  background-color: rgba($color: #fff, $alpha: .2);
  height: 100%;
  width: 90%;
}
</style>
