<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '公告详情',showBackButton: true, onBackButtonClick: back }">
    <div class="page-content text-center">
      <div class="card">
        <div class="card-header">卡头</div>
        <div class="card-content">
          <div class="card-content-inner" style="text-align:left;">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
        </div>
        <div class="card-footer"><span></span><span>时间:</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    back() {
      $router.back('/notice/index')
    }
  }
}
</script>

<style lang="css">
</style>
