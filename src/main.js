import Vue from 'vue'
import Vonic from 'vonic'
import api from './api/index.js'
import util from './utils/index.js'

// 引入静态资源
// import '../static/css/sm.css'//import方式
require('../static/css/sm.css')// require方式
// require('../static/css/style.css')

// Page Components
import Login from './page/login.vue'
import Reg from './page/reg.vue'



//tabbar
import Index from './page/index.vue'
import Activity from './page/tabbar/activity.vue'
import Home from './page/tabbar/home.vue'
import Personal from './page/tabbar/personal.vue'

// 个人中心
import About from './page/personal/about.vue'


//合买模块
import JoinBuy from './page/joinbuy/joinbuy.vue'
import JoinBuyDetail from './page/joinbuy/detail.vue'

Vue.prototype.$api = api;
Vue.prototype.$util = util;


// Routes
const routes = [
  {
    path: '/index',
    component: Index,
    children: [
      { path: 'home', component: Home },
      { path: 'activity', component: Activity },
      { path: 'personal', component: Personal }
    ]
  },
  { path: '/', component: Login },
  { path: '/reg', component: Reg },
  // { path: '/home', component: Home },



  // { path: '/personal/index', component: Personal },
  { path: '/personal/about', component: About },



  { path: '/joinbuy/index', component: JoinBuy },
  { path: '/joinbuy/detail', component: JoinBuyDetail }

]

/* 启动应用前，设置 Vonic.app 的 pushMethod 选项为 replace 可以全局禁用浏览器 history */
/* 即，$router.forward()、$router.back() 不再新增浏览记录 */
// Vonic.app.setConfig('pushMethod', 'replace')

Vue.use(Vonic.app, {
  routes: routes
})
