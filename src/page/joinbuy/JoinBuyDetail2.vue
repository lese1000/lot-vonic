<template>
  <div class="page has-navbar" v-nav="{title: '参与详情',showBackButton: true, onBackButtonClick: back }">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <item v-for="(item, index) in joinBuyDetailList" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
        <b>{{index + 1}}.</b> {{playNameFormate(item.playerName)}}，购买了 <b>{{item.buyCount}}</b> 份，共计 <b>{{item.buyMoney}}</b> 元，{{dateFormate(item.createDate)}}。
      </item>

      <div v-if="noMoreData" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
  </div>
</template>
<script>
import {dateFtt} from '../../utils/date-util.js';
  export default {
    data () {
      return {
        joinBuyDetailList: [],
        infiniteCount: 0,
        pageNum : 1,
        pageSize : 10,
        noMoreData : false
      }
    },
    created() {
      console.log(dateFtt('hh:mm:ss',new Date()));
    },

    mounted() {
      let param = this.$route.params;
      param.pageNum = this.pageNum;
      param.pageSize = this.pageSize;
      this.$api.post('joinBuy/listJoinBuyDetail',param,data => {
        console.log(data.data);

        if(data.data){
          this.joinBuyDetailList = data.data;
          if(data.data.length < this.pageSize){
            this.noMoreData = true;
          }
          this.bottom = data.data.length;
        }else{
            this.noMoreData = true;
        }
      })
      console.log(this.noMoreData);
      this.top = 1

    },

    methods: {
      back (index) {
          $router.replace('/history/index');
      },
      onRefresh(done) {
        let param = this.$route.params;
        param.pageNum = 1;
        param.pageSize = this.pageNum * this.pageSize;
        this.$api.post('joinBuy/listJoinBuyDetail',param,data => {
          if(data.data){
            this.joinBuyDetailList = data.data;
            if(data.data.length < (this.pageNum * this.pageSize)){
              this.noMoreData = true;
            }
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
        let param = this.$route.params;
        param.pageNum = this.pageNum;
        param.pageSize = this.pageSize;
        this.$api.post('joinBuy/listJoinBuyDetail',param,data => {

          if(data.data){
            if(data.data.length < this.pageSize){
              this.noMoreData = true;
            }
            data.data.forEach((value,index,arr) => {
              this.joinBuyDetailList.push(value);
            })
            this.bottom += data.data.length;
          }else{
              this.noMoreData = true;
          }

          done();
        })
      },

      onItemClick(index) {
        console.log(index)
      },
      dateFormate(date) {
        return dateFtt('hh:mm:ss',new Date(date));
      },
      playNameFormate(name){
        return new Array(name.length).join('*') + name.substr(-1);
      }
    }
  }
</script>
