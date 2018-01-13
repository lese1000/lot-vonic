<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '首页' }" v-tabbar-menu-index="0" >
    <div class="page-content " >
      <div style="margin-top:5px;">
        <swiper ref="swiper"
          direction="horizontal"
          width="100%"
          height="170"
          pager-color="#ea5a49"
          pager-bg-color="#e5e4e3"
          hide-pager="false"
          >
          <swiper-item>
              <img src="static/image/w1.jpg" style="width:100%"  @click="onSwiperItemClick()"/>
          </swiper-item>

          <swiper-item>
            <img src="static/image/w2.jpg" style="width:100%"/>
          </swiper-item>

          <swiper-item>
            <img src="static/image/w3.jpg" style="width:100%"/>
          </swiper-item>
        </swiper>
      </div>

      <div class="nav-item">
        <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
      </div>





    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        entrances: [
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_buy.png"/><br><span>合买大厅</span></div>',
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_lottery.png"/><br><span>天天彩票</span></div>',
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_notice.png"/><br><span>系统公告</span></div>',
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_recharge.png"/><br><span>充值中心</span></div>',
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_cash.png"/><br><span>我要提现</span></div>',
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_history.png"/><br><span>历史投注</span></div>'


       ],

       cellIndex:0
      }
    },
    methods: {
      back() {
        $router.back('/')
      },
      onSwiperItemClick() {

      },
      onCellClick(index) {
        this.cellIndex = index;
        console.log('cellIndex:'+this.cellIndex);
        switch (index) {
          case 0:
            $router.forward('/joinbuy/index');
            break;
          case 1:

            break;
          case 2:

            break;
          case 3:

            break;
          case 4:

            break;
          case 5:

            break;
          default:

        }
      },
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    }
  }
</script>

<style >
.default-font-color{
  color: #444
}

.nav-img{
  width: 50px;
  height: 50px;
}
.entrance {
  height: 120px;
  padding: 25px 0;

  .icon {
    font-size: 30px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    margin-bottom: 6px;
  }

  span {
    font-size: 14px;
    line-height: 14px;
  }

}

.tabbar{
  height: 50px;
}


</style>
