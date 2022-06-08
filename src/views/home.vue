<template>
  <div class="home-wrapper">
    <titleMenu />
    <searchBox />
    <webClass />
    <urlList />
  </div>
</template>
<script>
import titleMenu from "../components/titleMenu.vue";
import searchBox from "../components/searchBox.vue";
import webClass from "../components/webClass.vue";
import urlList from "../components/urlList";
export default {
  name: "homeC",
  data() {
    return {};
  },
  components: {
    titleMenu,
    searchBox,
    webClass,
    urlList,
  },
};
</script>
<style lang="scss" scoped></style>
