// 主页
// 登录页
const loginPage = () => import('@/views/login/index.vue')
// 主页内容
const homePage = () => import('@/views/home/index.vue')
// 网络书签
const webTagsPage = () => import('@/views/webTag/index.vue')
// 八股
const eightPartPage = () => import('@/views/faceviews/index.vue')
// 消灭bug
const killBugPage = () => import('@/views/killBug/index.vue')
// 挑花猿
const peachPage = () => import('@/views/userInfo/index.vue')

export default [
  {
    //重定向首页
    path: '/',
    redirect: '/homePage'
  },
  // 主页面
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/webTagsPage',
    name: 'webTagsPage',
    component: webTagsPage,
    meta: {
      title: '网络书签'
    }
  },
  {
    path: '/eightPartPage',
    name: 'eightPartPage',
    component: eightPartPage,
    meta: {
      title: '猿八股'
    }
  },
  {
    path: '/killBugPage',
    name: 'killBugPage',
    component: killBugPage,
    meta: {
      title: '消灭BUG'
    }
  },
  {
    path: '/peachPage',
    name: 'peachPage',
    component: peachPage,
    meta: {
      title: '桃花源'
    }
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: {
      title: '登录'
    }
  }
]
