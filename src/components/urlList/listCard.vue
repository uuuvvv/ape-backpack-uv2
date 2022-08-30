<template>
  <div class="ulc-wrapper">
    <div class="ulc-title">
      <span class="title">{{ dataN.classN }}</span>
    </div>
    <div class="ulc-content"></div>
  </div>
</template>

<script>
export default {
  name: "listCard",
  data() {
    return {
      dataN: {
        classN: "node",
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.ulc-wrapper {
  width: 100%;
  .ulc-title {
    width: 100%;
    height: 50px;
    background: blue;
    margin-bottom: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    .title {
      width: 100px;
      font-size: 20px;
      font-weight: 700;
      line-height: 50px;
    }
  }
  .ulc-content {
    width: 100%;
    height: 300px;
    background: blue;
    margin-bottom: 5px;
  }
}
</style>
