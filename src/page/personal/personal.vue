<template>
  <div class="page has-navbar" v-nav="{ title: '个人中心'}">
    <div class="page-content">

      <list class="list-ios hl-list-borderless">
        <item class=" item-icon-right" @click.native="$router.forward('/basic/button')">
          登录密码
          <span class="item-note">修改</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/mdButton')">
          支付密码<span class="item-note">修改</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/input')">
          在线客服 <span class="item-note">发起聊天</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/basic/search')">
          关于 <span class="item-note">详情</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </list>

      <div class="padding">
        <div class="padding">
          <button class="button button-assertive button-block" @click="doLogin">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back('/')
      }
    }
  }
</script>
