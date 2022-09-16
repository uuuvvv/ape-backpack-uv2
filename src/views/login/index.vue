<template>
  <div class="login-wrapper"
       id="loginPage">
    <div class="login-content">
      <div class="login-card">
        <div class="l-img">
          <el-carousel height="800px"
                       arrow='never'>
            <el-carousel-item v-for="item in 8"
                              :key="item">
              <img class="car-img"
                   :src="require(`../../assets/imgs/login-swiper/s${item}.jpg`)"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="r-con">
          <h1 class="r-title">猿背包</h1>
          <div class="r-form">
            <el-form>
              <el-form-item v-for="(item, key) in inputList"
                            :prop="item.name"
                            :key="key">
                <div class="form-item-content">
                  <el-input :type="item.name"
                            v-model="item.value"
                            autocomplete="off"
                            :placeholder="item.placeholder"
                            clearable>
                    <template slot="prepend">
                      <iconSvg class="form-input-icon"
                               :icon_name="`#ape-icon-a-xiugai2`" />
                    </template>
                  </el-input>
                  <el-input :type="item.name"
                            v-model="item.value"
                            autocomplete="off"
                            :placeholder="item.placeholder"
                            clearable>
                    <template slot="prepend">
                      <iconSvg class="form-input-icon"
                               :icon_name="`#ape-icon-a-xiugai2`" />
                    </template>
                  </el-input>
                </div>

              </el-form-item>
              <el-form-item>
                <div class="form-note">
                  <el-checkbox v-model="checked"></el-checkbox>
                  <p>
                    同意请勾选，勾选后您将自动同意<span>《哇咔咔，神圣的协议》</span>的有关内容，出现任何问题，由您自己承担。
                  </p>
                </div>
              </el-form-item>
              <el-form-item>
                <div class="form-sub-btn">
                  <el-button @click="signForm">注册</el-button>
                  <el-button @click="submitForm">提交</el-button>
                </div>
              </el-form-item>
              <el-form-item v-if="formType==='1'">
                <div class="form-link">
                  <div class="form-link-name">第三方登录：</div>
                  <ul>
                    <li v-for="item in otherloginList"
                        :key="item.id">
                      <iconSvg class="form-input-icon"
                               :icon_name="`#${item.icon}`" />
                    </li>
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
import otherloginList from '../../assets/json/otherlogin.json'
import loginOrSign from '../../assets/json/loginOrSign.js'
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
      loginOrSign,
      otherloginList,
      rules: {
        username: [
          { required: true, message: '请输入用户名/手机号/邮箱' },
          { validator: validateUserFn, trigger: 'blur' }
        ],
        password: [{ validator: validatePassFn, trigger: 'blur' }],
        checkNum: [{ validator: validateCheckFn, trigger: 'blur' }]
      }
      ,
      checked: false,//是否同意登录协议/注册协议；
      formType: '1',// '1'是登录，‘2’注册，
      inputList: []
    }
  },
  computed: {
  },
  components: {},
  mounted () {
    this.inputList = this.filterInputFn(this.loginOrSign, this.formType)

  },
  methods: {
    filterInputFn (list, formtype) {
      return list.filter(item => item.type === formtype || item.type === '0')
    },
    submitForm () {
      console.log('登录提交', loginOrSign)

      // 跳转主页
      // this.$router.replace('/home')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    signForm () {
      this.formType = '2';
      this.inputList = this.filterInputFn(this.loginOrSign, this.formType)
      // 切换展示选项
      console.log(this.loginOrSign, this.formType, this.inputList);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  @include sm-whbc($w: 100%, $h: 100%);
  color: $sc-ff;
  .login-content {
    @include sm-whbc($w: 100%, $h: 100%);
    position: relative;
    .login-card {
      @include sm-whbc(1200px, 800px, $sc-ra67);
      @include co-po-trans;
      // @include co-flexcc;
      display: flex;
      border-radius: 15px;
      overflow: hidden;
      .l-img {
        @include sm-whbc(500px, 100%, $sc-ra67);

        /deep/.el-carousel__indicators {
          display: flex;
        }
        .car-img {
          width: 100%;
          height: 100%;
        }
      }
      .r-con {
        @include sm-whbc($w: 700px, $h: 100%);
        padding: 50px 60px 50px 45px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .r-title {
          @include sm-wh(100%, 60px);
          @include sm-font($a: 40px, $c: $sc-ff);
          line-height: 60px;
          margin-bottom: 30px;
        }
        .el-input {
          height: 50px;
        }
        /deep/ .el-input__inner {
          @include sm-font($a: 16px, $c: $sc-ff);
          background: $sc-ra80;
          height: 50px!important;
          border-bottom-right-radius: 15px;
          border-top-right-radius: 15px;
          border: 1px solid $sc-r13;
          border-left: none;
          &::placeholder {
            @include sm-font($a: 16px, $c: $sc-bb);
          }
        }
        /deep/ .el-input-group__prepend {
          border: 1px solid $sc-r13;
          border-right: none;
          border-bottom-left-radius: 15px;
          border-top-left-radius: 15px;
          padding: 0;
          background: $sc-ra80;

          .form-input-icon {
            padding: 0 10px;
            font-size: 30px;
          }
        }
        .form-item-content{
          display: flex;
          .el-input{
            flex: 1;
            margin-right: 30px;
            &:last-child{
               margin-right: 0px;
            }
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
          &:last-child {
            // background-color: rgba(77, 158, 81,.7);
            margin-right: 0px;
            background-image: linear-gradient(to right, $sc-ra255, $sc-ra77);
          }
          &:hover {
            background: $sc-ra13;
          }
          &:last-child:hover {
            background: $sc-ra77;
          }
        }
        .form-sub-btn {
          width: 100%;
          @include sm-flexja(right, center);
          padding: 10px;
          box-sizing: border-box;
        }
        .form-note {
          display: flex;
          @include sm-font($a: 14px, $c: $sc-ff);
          line-height: 20px;
          padding: 0 10px;
          .el-checkbox {
            margin-right: 10px;
          }
          p {
            flex: 1;
            span {
              color: $sc-ra13;
            }
          }
        }
        .form-link {
          @include sm-font($a: 14px, $c: $sc-ra13);
          @include co-flexcc;
          ul {
            display: flex;
            font-size: 25px;
            li {
              margin-right: 15px;
              &:last-child {
                margin-right: 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
