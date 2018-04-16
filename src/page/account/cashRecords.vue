<template lang="html">
  <div class="page has-navbar " v-nav="{ title: '提现记录',showBackButton: true, onBackButtonClick: back }" >
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div class="card" v-for="(item,index) in items">
        <div class="card-header">提现记录 [{{index +1}}]</div>
        <div class="card-content">
          <div class="card-content-inner" style="color: #5f646e;">
              <div class="show-tip-div">
                <span class="show-tip-div-left">收款人:</span><span class="show-tip-div-right">{{item.fullName}}</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">开户银行:</span><span class="show-tip-div-right">{{item.bank}}</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">银行账号:</span><span class="show-tip-div-right">{{item.account}}</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">提现金额:</span><span class="show-tip-div-right" ><b style="color:red;">{{item.cashVal}}</b> 元</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">提现状态:</span><span class="show-tip-div-right" style="color:red;">{{statusFormate(item.status)}}</span>
              </div>
          </div>
        </div>
        <div class="card-footer"><span></span><span>提现时间: {{dateFormate(item.createDate)}}</span></div>
      </div>

      <div v-if="noMoreData" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
  </div>
</template>

<script>
import {dateFtt} from '../../utils/date-util';
export default {
  data (){
    return {
      items : [],
      noMoreData : false,
      pageNum : 1,
      pageSize : 10
    }
  },
  mounted (){
    let param = {
      pageNum : this.pageNum,
      pageSize : this.pageSize
    }
    this.$api.post('cash/listCashRecord',param, response => {
      if(response.data){
        this.items = response.data;
        if(response.data.length < this.pageSize){
          this.noMoreData = true;
        }
        this.top = 1;
        this.bottom = response.data.length;
      }else{
        this.noMoreData = true;
      }
    })

  },
  methods:{
    back() {
      $router.back('/account/cash/index')
    },
    onRefresh(done) {
      let param = {
        pageNum : 1,
        pageSize : this.pageNum * this.pageSize
      }
      this.$api.post('cash/listCashRecord',param, response => {
        if(response.data){
          this.items = response.data;
          if(response.data.length < (this.pageNum * this.pageSize)){
            this.noMoreData = true;
          }
          this.bottom = response.data.length;
        }else{
          this.noMoreData = true;
        }

        done();
      })
    },
    onInfinite(done) {
      if(this.noMoreData){
        return;
      }
      this.pageNum ++;
      let param = {
        pageNum : this.pageNum,
        pageSize : this.pageSize
      }
      this.$api.post('cash/listCashRecord',param, response => {
        if(response.data){
          response.data.forEach((value,index,arr) => {
            this.items.push(value);
          })
          if(response.data.length < this.pageSize){
            this.noMoreData = true;
          }
          this.bottom += response.data.length;
        }else{
          this.noMoreData = true;
        }

        done();
      })
    },
    statusFormate(status) {
      switch (status) {
        case 1:
          return '审核中';
        case 2:
          return '提现成功';
        case 3:
          return '提现失败';
        default:
          return '审核中';
      }
    },
    dateFormate(date){
      return dateFtt('yyyy-MM-dd hh:mm:ss',new Date(date))
    }

  }
}
</script>

<style lang="css">
</style>
