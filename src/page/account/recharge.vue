<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '充值中心',showBackButton: true, onBackButtonClick: back }" >
    <div class="page-content">
      <list class=" hl-list-borderless">
        <item class=" item-icon-right" @click.native="$router.forward('/account/recharge/detail')">
          立即充值
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/account/recharge/records')">
          充值记录
          <i class="icon ion-ios-arrow-right"></i>
        </item>

      </list>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

    back() {
      $router.back('/index/home')
    }
  }
}
</script>

<style lang="css">
</style>
