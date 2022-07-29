const home = () => import('../views/home.vue');
const loginPage = () => import("../views/loginPage.vue");
const homePage = () => import("@/views/homePage.vue");

export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "homeC",
    component: home,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/home",
        name: "homePage",
        component: homePage,
        meta: {
          title: "首页",
        }
      }, {
        path: "/home/2",
        name: "homePage",
        component: homePage,
        meta: {
          title: "首页",
        }
      }, {
        path: "/home/3",
        name: "homePage",
        component: homePage,
        meta: {
          title: "首页",
        }
      }, {
        path: "/home/4",
        name: "homePage",
        component: homePage,
        meta: {
          title: "首页",
        }
      }, {
        path: "/home/5",
        name: "homePage",
        component: homePage,
        meta: {
          title: "首页",
        }
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
];