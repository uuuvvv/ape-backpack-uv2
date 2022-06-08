<template>
  <div class="tm-wrapper">
    <div class="tm-logo-w ptb10">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <h1 class="tm-logo ml15">猿背包</h1>
    </div>
    <ul class="tm-menu">
      <li class="tm-menu-item ml15 actived">主页</li>
      <li class="tm-menu-item ml15">主页</li>
      <li class="tm-menu-item ml15">主页</li>
      <li class="tm-menu-item ml15">主页</li>
      <li class="tm-menu-item ml15">主页</li>
      <li class="tm-menu-item ml15">主页</li>
    </ul>
    <div class="tm-user ptb10">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleMenu",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.ml15{
   margin-left: 15px;
}
.ptb10{
  padding: 10px 0;
}
.actived{
  border-bottom: 2px solid red;
}
.tm-wrapper {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  padding: 0 10px;
  margin: 0 auto;
  position: relative;
  border-bottom: 2px solid #999;
  .tm-logo-w {
    height: 40px;
    line-height: 40px;
    font-size: 28px;
    font-family: "幼圆";
    font-weight: 700;
    display: flex;
  }
  .tm-menu {
    height: 100%;
    display: flex;
    .tm-menu-item {
      width: 100px;
      height: 100%;
      line-height: 60px;
      text-align: center;
    }
    .tm-menu-item:nth-child(1) {
      margin-left: 30px;
    }
  }
  .tm-user {
    position: absolute;
    right: 10px;
  }
}
</style>
