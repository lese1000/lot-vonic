// 配置API接口地址
var baseURL = '/api/v1/'
// 引用axios
// var axios = require('axios') // commonjs格式
import axios from 'axios' // ES6写法
//用于解决 axios Post提交表单数据问题（qs.stringify(params) 类似jquery 的 $(from).serilize()）
import qs from 'qs'
import {checkCookie} from '../utils/cookie-util'
/**
说明：
import list from './list';//ES6格式
//等价于
var list = require('./list'); //commonjs格式:经典的commonjs同步语法
**/



// axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        //弹出加载框
        $loading.show('加载中...')
        //可在此进行权限鉴定
        // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers.Authorization = `token ${store.state.token}`;
        // }

        //设置post方法以表单方式提交
        if (config.method == "POST"){
            config.data = qs.stringify(config.data);
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return config;
    },
    error => {
        //关闭加载框
        $loading.hide()
        return Promise.reject(error);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        //关闭加载框
        $loading.hide()
        return response;
    },
    error => {
        //关闭加载框
        $loading.hide()
        if (error) {
            switch (error.code) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    router.replace({
                        path: '/',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error)
});








// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    // data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: baseURL,
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {

      if(res.data.code == '401'){
        $dialog.alert({
          theme: 'ios',
          title: '登陆信息已过期，请重新登录',
          okText: '好'
        }).then(() => {
          $router.forward('/');
        })

      }else{
        if (failure) {
          failure(res.data)
        } else {

          //window.alert('error: ' + JSON.stringify(res.data))
          /* Confirm 确认框 */
          $dialog.alert({
            theme: 'ios',
            title: res.data.message,
            okText: '好'
          }).then(() => {
            // console.log('alert hide.')
          })
        }
      }
    }
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      // window.alert('api error, HTTP CODE: ' + res.status)
      $dialog.alert({
        theme: 'ios',
        title: 'api error, HTTP CODE: ' + res.status,
        okText: '好'
      }).then(() => {
        // console.log('alert hide.')
      })
    }
  })
}


// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
