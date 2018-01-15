<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '在线取款',showBackButton: true, onBackButtonClick: back }" >
    <div class="page-content">
      <list class=" hl-list-borderless">
        <item class=" item-icon-right" @click.native="$router.forward('/account/cash/detail')">
          立即取款
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/account/cash/records')">
          取款记录
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
