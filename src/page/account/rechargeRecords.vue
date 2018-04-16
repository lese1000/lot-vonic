<template lang="html">
  <div class="page has-navbar " v-nav="{ title: '充值记录',showBackButton: true, onBackButtonClick: back }" >
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div class="card" v-for="(item,index) in items">
        <div class="card-header">【{{index +1}}】充值记录 </div>
        <div class="card-content">
          <div class="card-content-inner" style="color: #5f646e;">
              <div class="show-tip-div">
                <span class="show-tip-div-left">存款姓名:</span><span class="show-tip-div-right">{{item.fullName}}</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">支付账号:</span><span class="show-tip-div-right">{{item.payAccount}}</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">存款金额:</span><span class="show-tip-div-right"><b style="color:red">{{item.rechargeVal}}</b> 元</span>
              </div>
              <div class="show-tip-div">
                <span class="show-tip-div-left">充值状态:</span><span class="show-tip-div-right" style="color:red;">{{statusFormate(item.status)}}</span>
              </div>
          </div>
        </div>
        <div class="card-footer"><span></span><span>充值时间: {{dateFormate(item.createDate)}}</span></div>
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
    this.$api.post('recharge/listRechargeRecord',param, response => {
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
      $router.back('/account/recharge/index')
    },
    onRefresh(done) {
      let param = {
        pageNum : 1,
        pageSize : this.pageNum * this.pageSize
      }
      this.$api.post('recharge/listRechargeRecord',param, response => {
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
      this.$api.post('recharge/listRechargeRecord',param, response => {
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
          return '充值成功';
        case 3:
          return '充值失败';
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
