<template>
  <div class="page has-navbar" v-nav="{title: '历史投注', showBackButton: true}">
    <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick" tabColor="dark"></tabs>
    <div >
      <div class="tab-content">

              <scroll class="scroller-padding"
                      :on-refresh="onRefresh"
                      :on-infinite="onInfinite">

                      <div class="card" v-for="(item,index) in items ">
                        <div class="card-header">【{{index + 1}}】{{item.lotteryTypeName}}<span>第 {{item.lotteryNum}} 期</span></div>
                        <div class="card-content">
                          <div class="card-content-inner">
                            <span style="float:left;">投注内容</span><span v-if="item.orderStatus != 0"  style="color:red"> 【开奖号码：{{item.winNum}}】</span>
                            <!-- <span class="lottery-tip bg-red">已中奖</span> -->
                            <span v-if="item.orderStatus == 0" class="lottery-tip bg-blue">{{statusFormate(item.orderStatus)}}</span>
                            <span v-if="item.orderStatus == 1" class="lottery-tip bg-red">{{statusFormate(item.orderStatus)}}</span>
                            <span v-if="item.orderStatus == 2 || item.orderStatus == 3" class="lottery-tip bg-gray">{{statusFormate(item.orderStatus)}}</span>
                            <div class="betting-content">
                                <table class="selected-num">
                                  <tr>
                                    <td>号码</td>
                                    <td>注数</td>
                                    <td>倍率</td>
                                    <td>金额</td>
                                  </tr>
                                  <tr v-for="subItem in item.orderDetailList">
                                    <td>{{subItem.bettingNum}}</td>
                                    <td>{{subItem.bettingCount}} 注</td>
                                    <td>{{subItem.rate}} 倍</td>
                                    <td>{{subItem.bettingMoney}} 元</td>
                                  </tr>
                                </table>
                            </div>

                          </div>
                        </div>

                        <div class="card-footer">  <span>投注金额：<span>￥{{item.totalBettingMoney}}</span></span> <span class="font-red" >中奖金额：￥{{item.totalWinMoney}} 元</span></div>
                        <div class="card-footer"><span><span  v-if="tabIndex == 1" class="font-blue" @click="toJoinBuyDetail(item.joinBuyId)">参与情况</span> </span><span>投注时间：{{dateFormate(item.createDate)}}</span> </div>
                      </div>
                  <div v-if="noMoreData" slot="infinite" class="text-center">没有更多数据</div>
                </scroll>

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
import {dateFtt} from '../../utils/date-util';

  export default{
    data(){
      return {
        tabs: [
          "个人投注",
          "参与合买"
        ],
        tabIndex: 0,
        items : [],
        noMoreData : false,
        pageNum : 1,
        pageSize : 50
      }
    },
    mounted() {
      let param = {
        pageNum : this.pageNum,
        pageSize : this.pageSize
      }
      this.$api.post('history/personalList',param, response => {
        if(response.data){
          this.items = response.data;
          if(response.data.length < this.pageSize){
            this.noMoreData = true;
          }
          // this.top = 1;
          // this.bottom = response.data.length;
        }else{
          this.noMoreData = true;
        }
      })
    },

    methods: {
      onTabClick(index) {
        //不是当前tab重新初始化
        if(this.tabIndex == index){
          return;
        }else{
          // this.pageNum = 1;
          // this.pageSize = 10;
          // this.noMoreData = false;
          this.top = 0;
          this.bottom = 0;
        }
        this.tabIndex = index
        let reqUrl = 'history/joinBuyList';
        if(index == 0 ){
          reqUrl = 'history/personalList';
        }
        let param = {
          pageNum : this.pageNum,
          pageSize : this.pageSize
        }
        this.$api.post(reqUrl,param, response => {
          if(response.data){
            this.items = response.data;
            if(response.data.length < this.pageSize){
              this.noMoreData = true;
            }
            // this.top = 1;
            // this.bottom = response.data.length;
          }else{
            this.noMoreData = true;
          }
        })
      },
      back() {
        $router.replace("/index/home");
      },
      onRefresh(done) {
        let param = {
          pageNum : 1,
          pageSize : this.pageNum * this.pageSize
        }
        let regUrl = 'history/personalList';
        if(this.tabIndex == 1){
          regUrl = 'history/joinBuyList'
        }
        this.$api.post(regUrl,param, response => {
          if(response.data){
            this.items = response.data;
            if(response.data.length < (this.pageNum * this.pageSize)){
              this.noMoreData = true;
            }
            // this.bottom = response.data.length;
          }else{
            this.noMoreData = true;
          }

          done();
        })
      },
      onInfinite(done) {
        console.log('noMoreData:'+this.noMoreData);

        if(this.noMoreData){
          return;
        }
        this.pageNum ++;
        let param = {
          pageNum : this.pageNum,
          pageSize : this.pageSize
        }
        let regUrl = 'history/personalList';
        if(this.tabIndex == 1){
          regUrl = 'history/joinBuyList'
        }
        this.$api.post(regUrl,param, response => {
          if(response.data){
            response.data.forEach((value,index,arr) => {
              this.items.push(value);
            })
            if(response.data.length < this.pageSize){
              this.noMoreData = true;
            }
            // this.bottom += response.data.length;
          }else{
            this.noMoreData = true;
          }

          done();
        })
      },
      toJoinBuyDetail (joinBuyId){
        $router.forward("/joinbuy/detail2/" + joinBuyId);
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
            return '合买失败';
          default:
            return '未开奖';
        }
      },
      dateFormate(date){
        return dateFtt('yyyy-MM-dd hh:mm:ss',new Date(date))
      }
    }
  }
</script>

<style >
  .betting-content{
    width:100%;
    border:1px solid #a59f9f;
    color:gray;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
  }
.font-red{
  color: red;
}
.font-blue{
  color: #4a90e2;
}
.scroller-padding{
  top: 50px;
}
</style>
