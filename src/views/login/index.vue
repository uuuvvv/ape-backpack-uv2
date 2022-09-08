<template>
  <div class="l-wrapper" id="loginPage">
    <div class="login-content">
      <div class="login-box">
        <div class="l-img"></div>
        <div class="r-con">
          <h1 class="l-title">猿背包</h1>
          <div class="l-form">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
            >
              <el-form-item
                v-for="(item, key) in ruleForm"
                :prop="key"
                :key="key"
              >
                <el-input
                  :type="key"
                  v-model="ruleForm[key]"
                  autocomplete="off"
                  :placeholder="phMsgList[key]"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item>
                <div class="sub-btn">
                <el-button>注册</el-button>
                <el-button @click="submitForm('ruleForm')">提交</el-button></div>
                
              </el-form-item>
              <el-form-item>
                <div class="l-link">
                  <div class="link-name">第三方登录：</div>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loginPage', //登录页面
  data () {
    // 校验用户名
    var validateUserFn = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名/手机号/邮箱'))
      } else {
        callback()
      }
    }
    // 校验密码
    var validatePassFn = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    // 校验验证码
    var validateCheckFn = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入正确的验证码'))
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        checkNum: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名/手机号/邮箱' },
          { validator: validateUserFn, trigger: 'blur' }
        ],
        password: [{ validator: validatePassFn, trigger: 'blur' }],
        checkNum: [{ validator: validateCheckFn, trigger: 'blur' }]
      },
      phMsgList: {
        username: '请输入用户名/手机号/邮箱',
        password: '请输入密码',
        checkNum: '请输入正确的验证码'
      }
    }
  },
  components: {},
  mounted () {},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // 跳转主页
      this.$router.replace('/home')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.l-wrapper {
  @include sm-whbc($w: 100%, $h: 100%);
  .login-content {
    @include sm-whbc($w: 100%, $h: 100%);
    position: relative;
    .login-box {
      @include sm-whbc(1200px, 800px, $sc-ra67);
      @include co-po-trans;
      // @include co-flexcc;
      display: flex;
      border-radius: 15px;
      overflow: hidden;
      .l-img {
        @include sm-whbc(500px, 100%, $sc-ra67);
      }
      .r-con {
        @include sm-whbc($w: 700px, $h: 100%);
        padding: 50px 60px 50px 45px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .l-title {
          @include sm-wh(100%, 60px);
          @include sm-font($a: 28px, $c: $sc-ff);
          line-height: 60px;
          margin-bottom: 30px;
        }
        .el-input {
          height: 50px;
        }
        /deep/.el-input__inner {
          @include sm-font($a: 16px, $c: $sc-ff);
          background: $sc-ra80;
          height: 100%;
          border-radius: 15px;
          // border:1px solid $sc-r13;
          &::placeholder {
            @include sm-font($a: 16px, $c: $sc-bb);
          }
        }
        .el-button {
          @include sm-font($a: 16px, $c: $sc-ff);
          @include sm-whbc(100px, 50px);
          background-image: linear-gradient(to right, $sc-ra13, $sc-ra255);
          flex: 1;
          color: #fff;
          border-style: none;
          margin-right: 30px;
          &:last-child{
            // background-color: rgba(77, 158, 81,.7);
            margin-right: 0px;
            background-image: linear-gradient(to right,  $sc-ra255, $sc-ra77);
          }
          &:hover{
            background: $sc-ra13;
          }
          &:last-child:hover{
            background: $sc-ra77;
          }
        }
        .sub-btn{
          width: 100%;
          @include sm-flexja(right,center);
          padding: 10px;
          box-sizing: border-box;
        }
        .l-link{
          @include sm-font($a: 14px, $c: $sc-bb);
          @include co-flexcc;
        }
      }
    }
  }
}
</style>
