<template>
  <div class="l-wrapper" id="loginPage">
    <div class="login-content">
      <div class="login-box">
        <div class="l-con"></div>
        <div class="r-con">
          <div class="l-title">用 户 登 录</div>
          <div class="l-form">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="checkPass">
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button>注册</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="l-link">
            <div class="link-name">第三方登录：</div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginPage", //登录页面
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  components: {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // 跳转主页
      this.$router.replace('/home');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
$lc1: rgb(13, 172, 235);
.l-wrapper {
  .login-content {
    @include sm-whbc($w:100vw,$h:100vh);
    min-width: 1000px;
    .login-box {
      @include sm-whbc(50%,100%,#fff);
      // width: 50%;
      // height: 100vh;
      // background-color: $sc-ff;
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // z-index: 999;
      // transform: translate(-50%, -50%);
      // border-radius: 10px;
      // box-sizing: border-box;
      // display: flex;
      // justify-content: space-around;
      // align-items: center;
      // padding: 20px;
      .l-con {
        height: 80%;
        width: 30%;
        background: #666;
        border-radius: 5px;
      }
      .r-con {
        height: 100%;
        width: 60%;
        border-radius: 5px;
        .l-title {
          font-size: 28px;
          color: $lc1;
          width: 100%;
          height: 60px;
          text-align: center;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
