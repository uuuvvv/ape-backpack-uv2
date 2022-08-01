<template>
  <div class="tm-wrapper">
    <div class="tm-logo-w ptb10">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <h1 class="tm-logo ml15">猿背包</h1>
    </div>
    <div class="menu-wrapper ml15">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item v-for="(item, index) in menuData" :index="`${index}`" :key="index">{{ item.title }}</el-menu-item>
      </el-menu>
    </div>
    <div class="tm-user ptb10" @click="handlerLogin">
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
      menuData: require('@/assets/json/title.json'),//引入标题静态数据
      isLogin: 0, //登录状态 0 未登录; 1 已登录
      activeIndex: '0'//选中的下标
    };
  },
  props:[],
  methods: {
    // 处理选中方法
    handleSelect(key, keyPath) {

      console.log(key, keyPath,this.menuData[key].path);
      this.$router.replace(this.menuData[key].path)
    },
    // 处理登录状态
    handlerLogin() {
      if (this.isLogin === 1) {
        console.log('已登录')
      } else {
        console.log('未登录')
        this.$router.replace('/login')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ml15 {
  margin-left: 15px;
}

.ptb10 {
  padding: 10px 0;
}

$c1: rgb(0, 140, 255);

.actived {
  border-bottom: 2px solid $c1;
  color: $c1;
  background: rgba(245, 240, 240, .8);
}

.tm-wrapper {
  width: 80%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255, .8);
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
