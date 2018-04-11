<template>
  <div class="page has-navbar" v-nav="{title: '合买大厅',showBackButton: true, onBackButtonClick: back }" ref="joinbuy" >

    <div class="page-content ">


        <scroll class="page-content"
                :on-refresh="onRefresh"
                :on-infinite="onInfinite">


                <div class="card" v-for="(item, index) in jionBuyList">
                  <div class="card-header">幸运五分彩{{index+1}}<span style="float:right"></span>第 20180113133 期</div>
                  <div class="card-content">
                    <div class="card-content-inner">
                      <div style="text-align:left;padding-bottom:5px;">
                          <span style="color:red;">合买编号：<span class="positive">201808091211</span></span><span class="lottery-tip bg-blue ">未开奖</span>
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
                          <td style="width:26%;padding-left:5px;">1000元</td>
                          <td>100</td>
                          <td>5</td>
                          <td>50份</td>
                          <td>150%</td>
                        </tr>
                      </table>
                    <!-- </div> -->
                    </div>
                  </div>
                  <div class="card-footer"><button class="button button-positive button-small" style="float:right" @click="toJoinBuyDetail(index)">参与详情</button><button class="button button-assertive button-small" style="float:right" @click="toJoinBuy(index)">立即合买</button><button class="button button-royal button-small" style="float:right" @click="toBettingDetail(index)">投注详情</button></div>
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
        noMoreData : false

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
          this.jionBuyList = data.data;
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
            // this.bottom += data.data.length;

          }else{
              this.noMoreData = true;
          }
          console.log('noMoreData:'+ this.noMoreData);
          done()//告之加载完毕
        })


      },
      toJoinBuy (index){
        $router.forward("/joinbuy/dobuy");
      },
      toJoinBuyDetail (index){
        $router.forward("/joinbuy/detail");
      },
      toBettingDetail (index){
        $router.forward("/joinbuy/bettingDetail");
      },

      back (index) {
        $router.back("/index/home");
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
