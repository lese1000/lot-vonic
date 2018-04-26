<template>
  <div class="page has-navbar" v-nav="{title: '合买大厅',showBackButton: true, onBackButtonClick: back }" ref="joinbuy" >

    <div class="page-content ">


        <scroll class="page-content"
                :on-refresh="onRefresh"
                :on-infinite="onInfinite">


                <div class="card" v-for="(item, index) in jionBuyList">
                  <div class="card-header">【{{index + 1}}】{{item.lotteryTypeName}}<span style="float:right"></span>第 {{item.lotteryNum}} 期</div>
                  <div class="card-content">
                    <div class="card-content-inner">
                      <div style="text-align:left;padding-bottom:5px;">
                          <span style="color:red;">合买编号：<span class="positive">{{item.orderNum}}</span></span>
                          <span v-if="item.orderStatus == 0" class="lottery-tip bg-blue">{{statusFormate(item.orderStatus)}}</span>
                          <span v-if="item.orderStatus == 1" class="lottery-tip bg-red">{{statusFormate(item.orderStatus)}}</span>
                          <span v-if="item.orderStatus == 2" class="lottery-tip bg-gray">{{statusFormate(item.orderStatus)}}</span>

                      </div>


                    <!-- <div style="width:100%;height:50px;border:0px solid #a59f9f;overflow:scroll;color:gray;margin-top:5px;"> -->
                      <table class="gridtable" style="margin-top:5px;">
                        <tr>
                          <td style="width:26%;padding-left:5px;">方案金额</td>
                          <td style="width:19%">总额份数</td>
                          <td style="width:19%">剩余份数</td>
                          <td style="width:19%">保底份数</td>
                          <td style="width:17%">方案进度</td>
                        </tr>
                        <tr>
                          <td style="width:26%;padding-left:5px;">{{item.totalBettingMoney}} 元</td>
                          <td>{{item.totalPieceNum}} 份</td>
                          <td>{{item.remainingPieceNum}} 份</td>
                          <td>{{item.leastNum}} 份</td>
                          <td>{{item.progress}}</td>
                        </tr>
                      </table>
                    <!-- </div> -->
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="button button-positive button-small"  @click="toJoinBuyDetail(item.joinBuyId)">参与详情</button>
                    <button v-if="item.orderStatus == 0" class="button button-assertive button-small"  @click="toJoinBuy(item.joinBuyId)">立即合买</button>
                    <button class="button button-positive button-small"  @click="toBettingDetail(item.joinBuyId)">投注内容</button></div>
                </div>

          <div v-if="noMoreData" slot="infinite" class="text-center">没有更多数据</div>
        </scroll>
  </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        jionBuyList:[],
        pageNum:1,
        pageSize:10,
        noMoreData : false,
        joinBuyId : 0

      }
    },

    mounted() {
      let param = {
        pageNum : this.pageNum,
        pageSize :this.pageSize
      }
      this.$api.post('joinBuy/list',param,data => {
        if(data.data ){
          data.data.forEach((item,index,arr) => {
            this.jionBuyList.push(item);
          });
          if(data.data.length < this.pageSize){
            this.noMoreData = true;
          }
          this.bottom = data.data.length;

        }else{
            this.noMoreData = true;
        }
        console.log('noMoreData:'+ this.noMoreData);
      })

    },


    created(){

    },

    methods: {
      onRefresh(done) {
        let param = {
          pageNum : 1,
          pageSize : this.pageNum * this.pageSize
        }
        this.$api.post('joinBuy/list',param,data => {
          if(data.data){
            this.jionBuyList = data.data;
            if(data.data.length < (this.pageNum * this.pageSize)){
              this.noMoreData = true;
            }
            this.top = 1;
            this.bottom = data.data.length;
          }else{
            this.noMoreData = true;
          }

          done()
        })



      },

      onInfinite(done) {
        if(this.noMoreData){
          return;
        }
        this.pageNum ++ ;
        console.log('pageNum:'+this.pageNum);
        let param = {
          pageNum : this.pageNum,
          pageSize :this.pageSize
        }
        this.$api.post('joinBuy/list',param,data => {
          if(data.data ){
            data.data.forEach((item,index,arr) => {
              this.jionBuyList.push(item);
            });
            if(data.data.length < this.pageSize){
              this.noMoreData = true;
            }
             this.bottom += data.data.length;

          }else{
              this.noMoreData = true;
          }
          done()//告之加载完毕
        })


      },
      toJoinBuy (joinBuyId){
        $router.forward("/joinbuy/dobuy/" + joinBuyId);
      },
      toJoinBuyDetail (joinBuyId){
        $router.forward("/joinbuy/detail/" + joinBuyId);
      },
      toBettingDetail (joinBuyId){
        $router.forward("/joinbuy/bettingDetail/" + joinBuyId);
      },

      back (index) {
        $router.back("/index/home");
      },
      statusFormate(status){
        switch (status) {
          case 0://未开奖
            return '未开奖';
          case 1://已中奖
            return '已中奖';
          case 2://未中奖
            return '未中奖';
          case 3:
            return '';
          default:
            return '未开奖';
        }
      }

    },
    destroyed() {

   },

  }
</script>

<style>
table.gridtable {
  /* border: 1px solid #e6e3e3; */
  width: 100%;
	font-family: verdana,arial,sans-serif;
  text-align: left;
}
table.gridtable td {
	padding: 1px;
  /* width: 25% */

}
.td-w30{
  width:30%;
}
.divi-line{
content: '';
height: 1px;
width: 100%;
background-color: #e1e1e1;
display: block;
transform-origin: 50% 100%;
}

.lottery-tip{
  float:right;
  color: white;
  background-color: #4a90e2;
  border-radius:5px;
  padding:0 3px;
}

/* 中奖奖颜色 */
.bg-red{
  background-color: red;
}
/* 未中奖颜色 */
.bg-gray{
  background-color:#e1dcdc;
}
/* 默认未开奖颜色 */
.bg-blue{
  background-color: #4a90e2;
}
</style>
