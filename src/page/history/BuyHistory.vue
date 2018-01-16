<template>
  <div class="page has-navbar" v-nav="{title: '历史投注', showBackButton: true}">
    <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick" tabColor="dark"></tabs>
    <div class="page-content ">
      <div class="tab-content">
            <div v-if="tabIndex == 0">
              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
                </div>
                <div class="card-footer">时间：2018/01/08 23:58:55</div>
              </div>
            </div>
            <div v-if="tabIndex == 1">
              <div class="card">
                <div class="card-header">发起合买</div>
                <div class="card-content">
                  <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
                </div>
                <div class="card-footer">卡脚</div>
              </div>
            </div>
            <div v-if="tabIndex == 2">
              <div class="card">
                <div class="card-header">参与合买</div>
                <div class="card-content">
                  <div class="card-content-inner">头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。</div>
                </div>
                <div class="card-footer">卡脚</div>
              </div>
            </div>
      </div>
    </div>


  </div>
</template>
<style lang="scss" scoped>
  .tab-content{
    margin-top: 60px;

  }
</style>
<script>
  export default{
    data(){
      return {
        tabs: [
          "个人投注",
          "发起合买",
          "参与合买"
        ],

        tabIndex: 0
      }
    },

    methods: {
      onTabClick(index) {
        console.log(index)
        this.tabIndex = index
      },

      onCategoryClick(index) {
        this.categoryIndex = index
        console.log('category changed, current tab index is:', index);
      },
      back() {
        $router.back("/index/home");
      }
    }
  }
</script>
