/**
 * 栗子
 * {
    name: 'username',  字段名 必须配置
    type: '1',展示类型：1：登录 ；2 注册；0 全显示 ；3 全不显示 默认为1 
    value: '', 字段值 
    rules: [], 校验规则配置数组 默认为空数组
    placeholder: '请输入用户名/手机号/邮箱', 展位信息，默认为空
    order: 1, 登录页面展示顺序
    signOrder: 0, 注册页面展示顺序
    nodeType: 1 当前项类型 1 input select checkbox 等
  },
 */
const list = {
  loginList01: [
    {
      name: 'username',
      placeholder: '请输入用户名'
    },
    {
      name: 'password',
      placeholder: '请输入密码'
    },
  ],
  loginList02: [
    {
      name: 'username',
      placeholder: '请输入手机号/邮箱'
    },
    {
      name: 'checkNum',
      placeholder: '请输入验证码'
    }
  ],
  signList: [
    {
      name: 'username',
      placeholder: '请输入用户名'
    },
    {
      name: 'password',
      placeholder: '请输入密码'
    },
    {
      name: 'checkPass',
      placeholder: '请再次确认密码'
    },
    {
      name: 'cellOrEmail',
      placeholder: '请输入手机号码或邮箱账号'
    },
    {
      name: 'checkNum',
      placeholder: '请输入验证码'
    }
  ]
}

export default list
