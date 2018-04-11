<template>
  <div class="page has-navbar" v-nav="{title: '投注详情',showBackButton: true, onBackButtonClick: back }"  >
    <div class="page-content padding" >
            <div class="card" >
              <div class="card-header">幸运五分彩<span style="float:right"></span>第 20180113133 期</div>
              <div class="card-content">
                <div class="card-content-inner">
                  <div style="text-align:left;padding-bottom:5px;">
                      <span style="color:red;">合买编号：<span class="positive">201808091211</span></span><span class="lottery-tip bg-blue ">未开奖</span>
                  </div>
                  <div style="width:100%;border:1px solid #a59f9f;overflow:scroll;color:gray;">
                      <table class="selected-num">
                        <tr>
                          <td>号码</td>
                          <td>注数</td>
                          <td>倍率</td>
                          <td>金额</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>0,1,2,3</td>
                          <td>10 注</td>
                          <td>10 倍</td>
                          <td>20000元</td>
                        </tr>
                      </table>
                  </div>
                </div>
              </div>
              <div class="card-footer"><span></span><button class="button button-assertive button-small" style="float:right" @click="toJoinBuy(index)">立即合买</button></div>
            </div>

    </div>
  </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {


      }
    },

    mounted (){

    },


    created (){

    },
    destroyed (){

   },

    methods: {

      back (index) {
          $router.back('/joinbuy/index');
      },
      toJoinBuy (index){
        $router.forward("/joinbuy/dobuy");
      }
    }

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
