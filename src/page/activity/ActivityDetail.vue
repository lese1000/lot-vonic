<template lang="html">
  <div class="page has-navbar has-tabbar" v-nav="{ title: '活动详情',showBackButton: true, onBackButtonClick: back }" v-tabbar-menu-index="1">
    <div class="page-content text-center">
      <h2 class="padding">Nothing here.</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back() {
      $router.back('/activity/index')
    }
  }
}
</script>

<style lang="css">
</style>
