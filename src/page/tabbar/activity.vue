<template lang="html">
  <div class="page has-navbar has-tabbar" v-nav="{ title: '最新活动'}" v-tabbar-menu-index="1">
    <div class="page-content text-center">
      <list class=" hl-list-borderless">
        <item class=" item-icon-right" @click.native="$router.forward('/activity/detail')">
          充值满1000送10
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/activity/detail')">
          充值满10000送100
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/activity/detail')">
          充值满10000送100
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/activity/detail')">
          充值满10000送100
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </list>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
