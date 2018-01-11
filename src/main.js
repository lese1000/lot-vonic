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

Vue.use(Vonic.app, {
  routes: routes
})
