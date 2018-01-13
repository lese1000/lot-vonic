<template>
  <div class="page has-navbar" v-nav="{title: '合买大厅',showBackButton: true, onBackButtonClick: back }" ref="joinbuy" >

    <div class="page-content ">


        <scroll class="page-content"
                :on-refresh="onRefresh"
                :on-infinite="onInfinite">


                <div class="card" v-for="(item, index) in items">
                  <div class="card-header">幸运五分彩{{index+1}}<span style="float:right"></span>第 20180113133 期</div>
                  <div class="card-content">
                    <div class="card-content-inner">
                      <div style="text-align:left;padding-bottom:5px;">
                          <span style="color:red;">投注号码：</span><span>0,1,2,3,4,5</span><span style="float:right;color:red;background-color:#e1dcdc;border-radius:5px;padding:0 3px;">未开奖</span>
                      </div>

                      <table class="gridtable" style="margin-top:5px;">
                        <tr>
                          <td style="width:26%">方案金额</td>
                          <td style="width:19%">总额份数</td>
                          <td style="width:19%">剩余份数</td>
                          <td style="width:19%">保底份数</td>
                          <td style="width:17%">方案进度</td>
                        </tr>
                        <tr>
                          <td>1000000元</td>
                          <td>1000000</td>
                          <td>50000</td>
                          <td>500份</td>
                          <td>150%</td>
                        </tr>
                      </table>

                    </div>
                  </div>
                  <div class="card-footer">发起人：李四<button class="button button-assertive button-small" style="float:right" @click="onJoinBuy(index)">参与合买</button></div>
                </div>

          <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
        </scroll>
  </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        items: [],
        infiniteCount: 0,
        jionBuyList:[]

      }
    },

    mounted() {
      for (let i = 1; i <= 10; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 10
    },


    created(){

    },

    methods: {
      onRefresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;

          done()
        }, 1500)
      },

      onInfinite(done) {
        setTimeout(() => {
          if (this.infiniteCount < 2) {
            let start = this.bottom + 1
            for (let i = start; i < start + 10; i++) {
              this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.bottom = this.bottom + 10;

            this.infiniteCount++
          }

          done()
        }, 1500)
      },
      onJoinBuy (){
        $router.forward("/joinbuy/dobuy");
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
</style>
