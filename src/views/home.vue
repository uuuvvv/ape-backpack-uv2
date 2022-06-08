<template>
  <div class="home-wrapper">
    <titleMenu/>
    <searchBox/>
    <webClass/>
  </div>
</template>
<script>
import titleMenu from '../components/titleMenu.vue'
import searchBox from '../components/searchBox.vue'
import webClass from '../components/webClass.vue'
export default {
  name: 'homeC',
  data() {
    return {}
  },
  components: {
    titleMenu,
    searchBox,
    webClass
  }
}
</script>
<style lang="scss" scoped>
</style>