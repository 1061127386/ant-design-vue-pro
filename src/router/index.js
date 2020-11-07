import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/404.vue";

// 引入加载动画库和样式
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// import RenderRouterView from "../components/RenderRouterView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    // 三种加载方式  直接加载 函数加载 懒加载
    // component: RenderRouterView,
    // component: {render: h => h("router-view")},
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/User/Login.vue"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../views/User/Register.vue"
          ),
      },
    ],
  },
  ///////////////////////////////////////////////////////
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      // dashboard  仪表盘
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "analysis" */ "../views/Dashboard/Analysis"
              ),
          },
        ],
      },
    ],
  },
  ///////////////////////////////////////////////////////
  {
    // 表单
    path: "/form",
    name: "form",
    component: { render: (h) => h("router-view") },
    children: [
      {
        // 基础表单
        path: "/form/basic-form",
        name: "basicform",
        component: () =>
          import(
            /* webpackChunkName: "basicform" */ "../views/Forms/BasicForm.vue"
          ),
      },
      {
        // 分布表单
        path: "/form/step-form",
        name: "stepform",
        component: () =>
          import(/* webpackChunkName: "stepform" */ "../views/Forms/StepForm"),
        children: [
          {
            path: "/form/step-form",
            redirect: "/form/step-form/info",
          },
          {
            // 信息页
            path: "/form/step-form/info",
            name: "info",
            component: () =>
              import(
                /* webpackChunkName: "info" */ "../views/Forms/StepForm/Step1.vue"
              ),
          },
          {
            // 确认页
            path: "/form/step-form/confirm",
            name: "confirm",
            component: () =>
              import(
                /* webpackChunkName: "confirm" */ "../views/Forms/StepForm/Step2.vue"
              ),
          },
          {
            // 结果页
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(
                /* webpackChunkName: "result" */ "../views/Forms/StepForm/Step3.vue"
              ),
          },
        ],
      },
    ],
  },
  ///////////////////////////////////////////////////////
  {
    path: "*",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 路径一样 不触发进度条
  if (to.path !== from.path) {
    // 跳转路由前 开启动画
    NProgress.start();
  }

  next();
});

router.afterEach(() => {
  // 路由跳转完毕 关闭动画
  NProgress.done();
});

export default router;
