<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '首页' }" v-tabbar-menu-index="0" >
    <div class="page-content " >
      <div style="margin-top:5px;">
        <div id="box">
          <ul id="con1" ref="con1" :class="{anim:animate}">
            <li v-for='item in items' style="color:red;">
              恭喜 {{playNameFormate(item.playerName)}} 已中奖，中奖金额 {{item.winPrize}} 元
            </li>

          </ul>
        </div>
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
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_cash.png"/><br><span>在线取款</span></div>',
         '<div class="entrance default-font-color"><img class="nav-img" src="static/image/home/home_history.png"/><br><span>历史投注</span></div>'


       ],

       cellIndex:0,
       animate:false,
       items:[ ], //消息列表对应的数组,
       timerId : null

      }
    },
    created() {
      this.timerId = setInterval(this.scroll,1000);
      this.getWinPrizeList();
    },
    destroyed() {
     window.clearInterval(this.timerId);
     this.timerId = null;
   },
    methods: {
      scroll(){
        let con1 = this.$refs.con1;
        con1.style.marginTop='-30px';
        this.animate=!this.animate;
        var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        setTimeout(function(){
            that.items.push(that.items[0]);
            that.items.shift();
            con1.style.marginTop='0px';
            that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },500)
      },
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
            $router.forward('/lottery/index');
            break;
          case 2:
            $router.forward('/notice/index');
            break;
          case 3:
            $router.forward('/account/recharge/index');
            break;
          case 4:
            $router.forward('/account/cash/index');
            break;
          case 5:
          $router.forward('/history/index');
            break;
          default:

        }
      },
      menuClicked(menuIndex) {
        console.log(menuIndex)
      },
      getWinPrizeList(){
        this.$api.post('other/getNewestWinPrize', {}, response => {
          this.items = response.data;
        })
      },
      playNameFormate(name){
        if(name.length > 2){
          return name.substr(0,1) + new Array(name.length - 1).join('*') + name.substr(-1);
        }else{
          return  new Array(name.length).join('*') + name.substr(-1);
        }

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


#box{
  width: 100%;
  height: 32px;
  line-height: 30px;
  overflow: hidden;
  padding-left: 15px;
  transition: all 0.5s;
}
.anim{
  transition: all 1s;
}
#con1 li{
  list-style: none;
  line-height: 30px;
  height: 30px;
}

</style>
