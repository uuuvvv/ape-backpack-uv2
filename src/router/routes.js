const home = () => import('../views/home.vue');
const loginPage = () => import("../views/loginPage.vue");
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
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
];