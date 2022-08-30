<template>
  <div class="sb-wrapper">
    <el-input
      placeholder="请输入内容"
      v-model="inputVal"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  data() {
    return {
      inputVal: "",
      select:''
    };
  },
};
</script>

<style lang="scss" scoped>
$c1:rgb(0, 140, 255);

.sb-wrapper {
  width: 80%;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  margin-bottom: 5px;
  
.el-select {
  width: 130px;
  .el-input {
    width: 100%;
  }
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
  color: $c1;

}
}
</style>
