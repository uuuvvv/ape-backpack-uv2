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
export default [
  {
    name: 'username',
    type: '0',
    value: '',
    rules: [],
    placeholder: '请输入用户名/手机号/邮箱',
    order: 1,
    signOrder: 0,
    nodeType: 1
  },
  {
    name: 'password',
    type: '0',
    value: '',
    rules: [],
    placeholder: '请输入密码',
    order: 2,
    signOrder: 0,
    nodeType: 1
  },
  {
    name: 'checkNum',
    type: '0',
    value: '',
    rules: [],
    placeholder: '请输入验证码',
    order: 3,
    signOrder: 0,
    nodeType: 1
  },
  {
    name: 'checkPass',
    type: '2',
    value: '',
    rules: [],
    placeholder: '请再次确认密码',
    order: 3,
    signOrder: 0,
    nodeType: 1
  },
  {
    name: 'cellphone',
    type: '0',
    value: '',
    rules: [],
    placeholder: '请输入手机号码',
    order: 3,
    signOrder: 0,
    nodeType: 1
  },
  {
    name: 'email',
    type: '0',
    value: '',
    rules: [],
    placeholder: '请输入邮箱账号',
    order: 3,
    signOrder: 0,
    nodeType: 1
  }
];