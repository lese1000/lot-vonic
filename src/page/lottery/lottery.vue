<template>
  <div class="page has-navbar" v-nav="{ title: '天天彩票', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content">
      <list class="list-ios hl-list-borderless">
        <!-- <item v-for="item in lotteryList" class=" item-icon-right" @click.native="$router.forward('/lottery/luckfive')">
          {{item.lotteryTypeName}}
          <span class="item-note">详情</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item> -->
        <item class=" item-icon-right" @click.native="$router.forward('/lottery/luckfive')">
          幸运五分彩
          <span class="item-note">详情</span>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class=" item-icon-right" @click.native="onMoreLottery">
          <span style="color:gray">更多精彩敬请期待~</span>
            <span class="item-note">完善中...</span>
        </item>
      </list>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lotteryList : []
      }
    },
    created() {
      this.$api.post('lotteryType/list', {}, response => {
        console.log(response.data);
        this.lotteryList = response.data;
      })
    },
    methods: {
      back() {
        $router.back('/index/home')
      },
      onMoreLottery(){

      }

    }
  }
</script>
