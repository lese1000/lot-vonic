<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '系统公告',showBackButton: true, onBackButtonClick: back }" >
    <div class="page-content ">
      <list class=" hl-list-borderless">
        <item class=" item-icon-right" @click.native="$router.forward('/notice/detail')">
          关于充值账号变更通知
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/notice/detail')">
          关于提现注意事项
          <i class="icon ion-ios-arrow-right"></i>
        </item>

      </list>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back() {
      $router.back('/index/home')
    }
  }
}
</script>

<style lang="css">
</style>
