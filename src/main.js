import Vue from 'vue'
import Vonic from 'vonic'
import api from './api/index.js'

// Page Components
import Login from './page/login.vue'
import Reg from './page/reg.vue'
import Home from './page/home.vue'
import Personal from './page/personal/personal.vue'
import About from './page/personal/about.vue'


Vue.prototype.$api = api;


// Routes
const routes = [
  { path: '/', component: Login },
  { path: '/reg', component: Reg },
  { path: '/home', component: Home },
  { path: '/personal/personal', component: Personal },
  { path: '/personal/about', component: About }
]

/* 启动应用前，设置 Vonic.app 的 pushMethod 选项为 replace 可以全局禁用浏览器 history */
/* 即，$router.forward()、$router.back() 不再新增浏览记录 */
Vonic.app.setConfig('pushMethod', 'replace')

Vue.use(Vonic.app, {
  routes: routes
})
