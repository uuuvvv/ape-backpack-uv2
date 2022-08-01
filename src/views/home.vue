<template>
  <div class="home-wrapper">
    <titleMenu />
    <keep-alive>
      <router-view></router-view>
      </keep-alive>
    
  </div>
</template>
<script>
import titleMenu from "../components/titleMenu.vue";

export default {
  // eslint-disable-next-line
  name: "home",
  data() {
    return {};
  },
  components: {
    titleMenu,
  },
  methods:{
    
  },
  mounted(){
    console.log(this.$router,this.$route)
  }
};
</script>
<style lang="scss" scoped>
</style>
