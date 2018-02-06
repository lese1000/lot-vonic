import Vue from 'vue'
import Vonic from 'vonic'
import api from './api/index.js'
import util from './utils/index.js'


// 引入静态资源
import '../static/css/sm.css'//import方式
// require('../static/css/sm.css')// require方式
// require('../static/css/style.css')
// import '../static/js/zepto.min.js';

// Page Components
import Login from './page/Login.vue'
import Reg from './page/Reg.vue'



//tabbar
import Index from './page/Index.vue'
import Activity from './page/tabbar/Activity.vue'
import Home from './page/tabbar/Home.vue'
import Personal from './page/tabbar/Personal.vue'

// 个人中心
import About from './page/personal/About.vue'
import ChangePassword from './page/personal/ChangePassword.vue'

// 活动
import ActivityDetail from './page/activity/ActivityDetail.vue'

//通知
import Notice from './page/notice/Notice.vue'
import NoticeDetail from './page/notice/NoticeDetail.vue'

// 充值提现
import Recharge from './page/account/Recharge.vue'
import RechargeDetail from './page/account/RechargeDetail.vue'
import RechargeRecords from './page/account/RechargeRecords.vue'
import Cash from './page/account/Cash.vue'
import CashDetail from './page/account/CashDetail.vue'
import CashRecords from './page/account/CashRecords.vue'

 // 历史投注
 import BuyHistory from './page/history/BuyHistory.vue'


//合买模块
import JoinBuy from './page/joinbuy/Joinbuy.vue'
import DoBuy from './page/joinbuy/DoBuy.vue'
import JoinBuyDetail from './page/joinbuy/JoinBuyDetail.vue'

// 彩票模块
import Lottery from './page/lottery/Lottery.vue'
import LuckFive from './page/lottery/LotteryLuckFive.vue'
import JoinBuySetting from './page/lottery/JoinBuySetting.vue'


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
    ],
    meta:{
      requireAuth:true
    }
  },
  { path: '/', component: Login },
  { path: '/reg', component: Reg },
  // { path: '/home', component: Home },


  //个人中心
  // { path: '/personal/index', component: Personal },
  { path: '/personal/about', component: About },
  { path: '/personal/changepassword', component: ChangePassword ,meta:{requireAuth:true}},

  //活动
  { path: '/activity/detail', component : ActivityDetail},

  //通知
  { path: '/notice/index', component : Notice} ,
  { path: '/notice/detail', component : NoticeDetail},
  //历史投注
  { path: '/history/index',component : BuyHistory},

  // 充值，提现/account/recharge/detail
  { path: '/account/recharge/index', component : Recharge},
  { path: '/account/recharge/detail', component : RechargeDetail},
  { path: '/account/recharge/records', component : RechargeRecords},
  { path: '/account/cash/index', component : Cash},
  { path: '/account/cash/detail', component : CashDetail},
  { path: '/account/cash/records', component : CashRecords},



  //合买
  { path: '/joinbuy/index', component: JoinBuy },
  { path: '/joinbuy/dobuy', component: DoBuy },
  { path: '/joinbuy/detail', component: JoinBuyDetail },

  //彩票
  { path: '/lottery/index', component: Lottery },
  { path: '/lottery/luckfive', component: LuckFive },
  { path: '/lottery/joinbuysetting', component: JoinBuySetting }



]

/* 启动应用前，设置 Vonic.app 的 pushMethod 选项为 replace 可以全局禁用浏览器 history */
/* 即，$router.forward()、$router.back() 不再新增浏览记录 */
// Vonic.app.setConfig('pushMethod', 'replace')


Vue.use(Vonic.app, {
  routes: routes
})
