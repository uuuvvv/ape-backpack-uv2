<template>
  <div class="login-wrapper"
       id="loginPage">
    <div class="login-content">
      <div class="login-card">
        <div class="l-img">
          <!-- 右边轮播 -->
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
              <!-- 登录方式 -->
              <el-form-item v-if="formType==='1'">
                <div class=" form-item-content form-item-select">
                  <el-select v-model="loginType"
                           placeholder="请选择">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                 
                </el-select>
                </div>
                

              </el-form-item>
              <!-- 表单数据 -->
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
                </div>

              </el-form-item>
              <!-- 协议 -->
              <el-form-item>
                <div class="form-note">
                  <el-checkbox v-model="checked"></el-checkbox>
                  <p>
                    同意请勾选，勾选后您将自动同意<span>《哇咔咔，神圣的协议》</span>的有关内容，出现任何问题，由您自己承担。
                  </p>
                </div>
              </el-form-item>
              <!-- 按钮 -->
              <el-form-item>
                <div class="form-sub-btn">
                  <el-button @click="signFormFn">{{formType==='1'?'前往注册':'返回登录'}}</el-button>
                  <el-button @click="submitFormFn">提交</el-button>
                </div>
              </el-form-item>
              <!-- 第三方登录方式 -->
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
import list from '../../assets/json/loginOrSign.js'
export default {
  name: 'loginPage', //登录页面
  data () {
    return {

      otherloginList,
      checked: false,//是否同意登录协议/注册协议；
      formType: '1',// '1'是登录，‘2’注册，默认登录
      inputList: [],
      options: [{
        value: '1',
        label: '账号密码登录'
      }, {
        value: '2',
        label: '手机邮箱验证登录'
      },],
      loginType: '1'
    }
  },
  computed: {
  },
  watch: {
    formType (val) {
      this.inputList = this.selectListFn(val,this.loginType);
      console.log(this.inputList)
    },
    loginType(val){
      this.inputList = this.selectListFn(this.formType,val);
      console.log(this.inputList)
    }
  },
  components: {},
  mounted () {
    console.log(list)
    // 初始化显示数据
    this.inputList = this.selectListFn(this.formType,this.loginType)
  },
  methods: {
    // 根据类型选择显示字段数据
    selectListFn (type,selType) {
      return type === '1' ? selType==='1'?list.loginList01:list.loginList02 : list.signList
    },
    // 提交方法 
    submitFormFn () {
      console.log('登录提交', list.loginList)

      // 跳转主页
      this.$router.replace('/homePage')
    },
    // 页面重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 切换登录、注册
    signFormFn () {
      this.formType = this.formType === '1' ? '2' : '1';
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

        /deep/ .el-carousel__indicators {
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
        /deep/ .el-input__inner {
          @include sm-font($a: 16px, $c: $sc-ff);
          background: $sc-ra80;
          width: 100%;
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
            font-size: 20px;
          }
        }
        .form-item-select {
          .el-select {
            width: 100%;
          }
          /deep/ .el-input__inner{
            border-radius: 15px;
            border: 1px solid $sc-r13;
          }
        }
        .form-item-content {
          display: flex;
          .el-input {
            flex: 1;
            margin-right: 30px;
            &:last-child {
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
