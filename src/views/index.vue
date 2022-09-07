<template>
  <div class="home-wrapper">
    <titleMenu v-if="$route.path != '/login'" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>
<script>
import titleMenu from "../components/titleCom/titleMenu.vue";

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
    console.log(this.$router,"12112",this.$route)
  }
};
</script>
<style lang="scss" scoped>
.home-wrapper{
    @include sm-whbc($w: 100%, $h: 100%);
}
</style>
