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
.l-wrapper {
   @include sm-whbc($w:100%,$h:100%);
  .login-content {
    @include sm-whbc($w:100%,$h:100%);
   position: relative;
    .login-box {
      @include sm-whbc(900px,500px,$sc-ff);
      @include co-flexcc;
      @include co-po-trans;
      .l-con {
        @include sm-whbc($w:30%,$h:80%,$bc:$sc-66);
        border-radius: 5px;
      }
      .r-con {
        @include sm-whbc($w:60%,$h:100%);
        border-radius: 5px;
        .l-title {
          @include sm-wh(100%,60px);
          @include sm-font($a:28px,$c:$sc-r13);
          text-align: center;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
