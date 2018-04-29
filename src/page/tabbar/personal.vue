<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '个人中心'}" v-tabbar-menu-index="2">
    <div class="page-content">

      <list class="list-ios hl-list-borderless">
        <!-- <item class=" item-icon-right" @click.native="$router.forward('/personal/changepassword')">
          可用余额:<i style="color:red">￥1234567890</i>
          <span class="item-note">明细</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item> -->
        <item>
          <!-- style="margin:0 auto;width:80%;padding:5px 0;color:white;border-radius:5px;" class="bg-blue" -->
          <div class="button   button-positive" style="width:100%;" @click="toBalanceRecord">
            <div style="text-align:center;">
                余额
            </div>
            <div style="text-align:center;margin-top:-20px;">
              ￥{{balanceVal}}.00 元
            </div>
          </div>

        </item>
        <item class=" item-icon-right" @click.native="$router.forward('/personal/changepassword')">
          登录密码
          <span class="item-note">修改</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/personal/changePayPassword')">
          取款密码<span class="item-note">修改</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/personal/about')">
          在线客服 <span class="item-note">发起聊天</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/personal/about')">
          关于 <span class="item-note">详情</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" >
          邀请链接 <span class="item-note" style="color:#4a90e2;" @click="copyMyInvitorUrl">点击复制</span>

        </item>
      </list>

      <div class="padding">
        <div class="padding">
          <button class="button button-assertive button-block" @click="loginout">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {checkCookie,delCookie,getCookie} from '../../utils/cookie-util'
import {copyToClipboard} from '../../utils/other-util'
  export default {
    data() {
      return {
        balanceVal : 0,
        invitorUrl : ''
      }
    },
    created() {
      this.$api.post('balance/getBalanceVal', {}, response => {
        this.balanceVal = response.data;
      })
      this.$api.post('player/invitorUrl', {}, response => {
        this.invitorUrl = response.data;
      })
    },
    methods: {
      loginout(){
        $dialog.confirm({
          // 设置为ios样式
          theme: 'ios',
          // 标题
          title: '确认退出?',
          // 取消按钮文本
          cancelText: '取消',
          // 确定按钮文本
          okText: '确认'
        }).then((res) => {
          if(res){
            this.$api.post('auth/logout',{},data => {
              $dialog.alert({
                theme: 'ios',
                title: '退出成功',
                okText: '好'
              }).then(() => {
                delCookie('playerId');
                $router.back('/')
              })
              // $toast.show('退出成功', 3000).then(() => {
              //   delCookie('playerId');
              //   $router.back('/')
              // })
            })

          }
        })
      },
      copyMyInvitorUrl() {
        let playerId = getCookie('playerId');
        let curUrl = window.location.href;
        let invitorUrl = curUrl.split('#')[0] + '#/reg?p=' + playerId
        if(copyToClipboard(invitorUrl)){
          $toast.show('邀请链接已复制到剪切板', 3000);
        }else{
          $toast.show('您的浏览器不支持点击复制', 3000);
        }
      },
      toBalanceRecord() {
        $router.forward('/personal/balanceRecord');
      }
    }
  }
</script>
