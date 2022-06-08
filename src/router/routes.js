const home = () => import('../views/home.vue');
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
];