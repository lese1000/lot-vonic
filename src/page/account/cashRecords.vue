<template lang="html">
  <div class="page has-navbar " v-nav="{ title: '取款记录',showBackButton: true, onBackButtonClick: back }" >
    <div class="page-content text-center">
      <h2 class="padding">Nothing here.</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back() {
      $router.back('/account/cash/index')
    }
  }
}
</script>

<style lang="css">
</style>
