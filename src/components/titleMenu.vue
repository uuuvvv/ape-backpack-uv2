<template>
  <div class="tm-wrapper">
    <div class="tm-logo-w ptb10">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <h1 class="tm-logo ml15">猿背包</h1>
    </div>
    <ul class="tm-menu">
      <li class="tm-menu-item ml15 " v-for="(item,index) in menuData" :key="index" :class="item.selected==1?'actived':''">{{item.title}}</li>
    </ul>
    <div class="tm-user ptb10">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
      <div class="ml15">登录 / 注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleMenu",
  data() {
    return {
      menuData:require('../assets/json/title.json')
    };
  },
};
</script>

<style lang="scss" scoped>
.ml15 {
  margin-left: 15px;
}
.ptb10 {
  padding: 10px 0;
}
$c1:rgb(0, 140, 255);
.actived {
  border-bottom: 2px solid $c1;
  color: $c1;
  background: rgba(245, 240, 240,.8);
}
.tm-wrapper {
  width: 80%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  background: rgba(255,255,255,.8);
  border-bottom: 2px solid #ccc;
  margin-bottom: 5px;
  .tm-logo-w {
    height: 40px;
    line-height: 40px;
    font-size: 28px;
    display: flex;
    h1 {
      font-family: "幼圆";
      font-weight: 700;
      color: $c1;
    }
  }
  .tm-menu {
    height: 100%;
    display: flex;
    color: #666;
    .tm-menu-item {
      width: 100px;
      height: 100%;
      line-height: 60px;
      text-align: center;
      font-weight: 700;
    }
    .tm-menu-item:nth-child(1) {
      margin-left: 30px;
    }
  }
  .tm-user {
    position: absolute;
    right: 20px;
    display: flex;
    line-height: 40px;
    color: $c1;
  }
}
</style>
