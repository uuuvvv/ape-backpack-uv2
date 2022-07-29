<template>
  <div class="home-wrapper">
    <titleMenu />
    <route-view/>
  </div>
</template>
<script>
import titleMenu from "../components/titleMenu.vue";

export default {
  name: "homeC",
  data() {
    return {};
  },
  components: {
    titleMenu,
  },
};
</script>
<style lang="scss" scoped>
</style>
