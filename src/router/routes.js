const home = () => import("@/views/home.vue");

const loginPage = () => import("@/views/loginPage.vue");
const homePage = () => import("@/views/homePage.vue");
const webTagsPage = () => import("@/views/webTagsPage.vue");
const eightPartPage = () => import("@/views/eightPartPage.vue");
const killBugPage = () => import("@/views/killBugPage.vue");
const peachPage = () => import("@/views/peachPage.vue");

export default [
  {
    //重定向首页
    path: "/",
    redirect: "/home/homePage",
  },
  // 主页面
  {
    path: "/home",
    name: "home",
    component: home,
    meta: {
      title: "首页",
    },
    redirect: "/home/homePage",
    children: [
      {
        path: "/home/homePage",
        name: "homePage",
        component: homePage,
      },
      {
        path: "/home/webTagsPage",
        name: "webTagsPage",
        component: webTagsPage,
      },
      {
        path: "/home/eightPartPage",
        name: "eightPartPage",
        component: eightPartPage,
      },
      {
        path: "/home/killBugPage",
        name: "killBugPage",
        component: killBugPage,
      },
      {
        path: "/home/peachPage",
        name: "peachPage",
        component: peachPage,
      },
    ],
  },
  // 登录
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
];
