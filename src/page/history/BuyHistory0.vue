<template>
  <div class="page has-navbar" v-nav="{title: '历史投注', showBackButton: true}">
    <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick" tabColor="dark"></tabs>
    <div >
      <div class="tab-content">
            <div v-if="tabIndex == 0">
              <scroll class=" scroller-padding"
                      :on-refresh="onRefresh0"
                      :on-infinite="onInfinite0">

                      <div class="card" v-for="(item,index) in items0 ">
                        <div class="card-header"> 【{{index + 1}}】{{item.lotteryTypeName}} <span>第 {{item.lotteryNum}} 期</span></div>
                        <div class="card-content">
                          <div class="card-content-inner">
                            <span style="float:left;">投注内容</span>
                            <!-- <span class="lottery-tip ">未开奖</span> -->
                            <span v-if="item.orderStatus == 0" class="lottery-tip bg-blue">{{statusFormate(item.orderStatus)}}</span>
                            <span v-if="item.orderStatus == 1" class="lottery-tip bg-red">{{statusFormate(item.orderStatus)}}</span>
                            <span v-if="item.orderStatus == 2" class="lottery-tip bg-gray">{{statusFormate(item.orderStatus)}}</span>
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
                        <div class="card-footer">  <span>投注金额：<span>￥{{item.totalBettingMoney}}</span></span><span >中奖金额：￥{{item.totalWinMoney}} 元</span></div>
                        <div class="card-footer"> <span></span> <span>{{dateFormate(item.createDate)}}</span></div>
                      </div>
                  <div v-if="noMoreData0" slot="infinite" class="text-center">没有更多数据</div>
                </scroll>
            </div>

            <div v-if="tabIndex == 1">
              <scroll class="scroller-padding"
                      :on-refresh="onRefresh1"
                      :on-infinite="onInfinite1">

                      <div class="card" v-for="(item,index) in items1 ">
                        <div class="card-header">【{{index + 1}}】{{item.lotteryTypeName}}<span>第 {{item.lotteryNum}} 期</span></div>
                        <div class="card-content">
                          <div class="card-content-inner">
                            <span style="float:left;">投注内容</span>
                            <!-- <span class="lottery-tip bg-red">已中奖</span> -->
                            <span v-if="item.orderStatus == 0" class="lottery-tip bg-blue">{{statusFormate(item.orderStatus)}}</span>
                            <span v-if="item.orderStatus == 1" class="lottery-tip bg-red">{{statusFormate(item.orderStatus)}}</span>
                            <span v-if="item.orderStatus == 2" class="lottery-tip bg-gray">{{statusFormate(item.orderStatus)}}</span>
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
                        <div class="card-footer">  <span>投注金额：<span>￥{{item.totalBettingMoney}}</span></span><span class="font-red" >中奖金额：￥{{item.totalWinMoney}} 元</span></div>
                        <div class="card-footer"> <span>{{dateFormate(item.createDate)}}</span> <span class="font-blue" @click="toJoinBuyDetail(item.joinBuyId)">参与情况</span> </div>
                      </div>
                  <div v-if="noMoreData1" slot="infinite" class="text-center">没有更多数据</div>
                </scroll>
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
import {dateFtt} from '../../utils/date-util';

  export default{
    data(){
      return {
        tabs: [
          "个人投注",
          "参与合买"
        ],
        tabIndex: 0,
        isFirstInit : true,
        items0 : [],
        items1 : [],
        noMoreData0 : false,
        noMoreData1: false,
        pageNum0 : 1,
        pageSize0 : 10,
        pageNum1 : 1,
        pageSize1 : 10
      }
    },
    mounted() {
      let param = {
        pageNum : this.pageNum0,
        pageSize : this.pageSize0
      }
      this.$api.post('history/personalList',param, response => {
        if(response.data){
          this.items0 = response.data;
          if(response.data.length < this.pageSize0){
            this.noMoreData0 = true;
          }
          this.top = 1;
          this.bottom = response.data.length;
        }else{
          this.noMoreData0 = true;
        }
      })
    },

    methods: {
      onTabClick(index) {
        this.tabIndex = index
        if(index == 1 ){
          this.isFirstInit = false;
          let param = {
            pageNum : this.pageNum1,
            pageSize : this.pageSize1
          }
          this.$api.post('history/joinBuyList',param, response => {
            if(response.data){
              this.items1 = response.data;
              if(response.data.length < this.pageSize1){
                this.noMoreData1 = true;
              }
              this.top = 1;
              this.bottom = response.data.length;
            }else{
              this.noMoreData1 = true;
            }
          })
        }
      },
      back() {
        $router.replace("/index/home");
      },
      onRefresh0(done) {
        let param = {
          pageNum : 1,
          pageSize : this.pageNum0 * this.pageSize0
        }
        this.$api.post('history/personalList',param, response => {
          if(response.data){
            this.items0 = response.data;
            if(response.data.length < (this.pageNum0 * this.pageSize0)){
              this.noMoreData0 = true;
            }
            this.bottom = response.data.length;
          }else{
            this.noMoreData0 = true;
          }

          done();
        })
      },
      onInfinite0(done) {
        if(this.noMoreData0){
          return;
        }
        this.pageNum0 ++;
        let param = {
          pageNum : this.pageNum0,
          pageSize : this.pageSize0
        }
        this.$api.post('history/personalList',param, response => {
          if(response.data){
            response.data.forEach((value,index,arr) => {
              this.items0.push(value);
            })
            if(response.data.length < this.pageSize0){
              this.noMoreData0 = true;
            }
             this.bottom += response.data.length;
          }else{
            this.noMoreData0 = true;
          }

          done();
        })
      },
      onRefresh1(done) {
        let param = {
          pageNum : 1,
          pageSize : this.pageNum1 * this.pageSize1
        }
        this.$api.post('history/joinBuyList',param, response => {
          if(response.data){
            this.items1 = response.data;
            if(response.data.length < (this.pageNum1 * this.pageSize1)){
              this.noMoreData1 = true;
            }
            this.bottom = response.data.length;
          }else{
            this.noMoreData1 = true;
          }

          done();
        })
      },
      onInfinite1(done) {
        if(this.noMoreData1){
          return;
        }
        this.pageNum1 ++;
        let param = {
          pageNum : this.pageNum1,
          pageSize : this.pageSize1
        }
        this.$api.post('history/joinBuyList',param, response => {
          if(response.data){
            response.data.forEach((value,index,arr) => {
              this.items1.push(value);
            })
            if(response.data.length < this.pageSize1){
              this.noMoreData1 = true;
            }
            this.bottom += response.data.length;
          }else{
            this.noMoreData1 = true;
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
            return '';
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
