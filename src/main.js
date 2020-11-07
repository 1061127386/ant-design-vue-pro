import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全部组件库
import { Button, Layout, Icon, Drawer, RadioGroud,Radio } from "ant-design-vue";
// import Button from "ant-design-vue/lib/button";

// 使用插件按需引入组件所对应的的样式
// 引入组件库的样式
// import "ant-design-vue/dist/antd.css"
// import "ant-design-vue/dist/antd.less";
// import "ant-design-vue/lib/button/style"


Vue.config.productionTip = false

// 使用注册组件库
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
