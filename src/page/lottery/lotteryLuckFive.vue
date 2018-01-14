<template>
  <div class="page has-navbar" v-nav="{ title: '幸运五分彩', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content">
      <div class="card">
        <div class="card-header"> <span>第 20180111125 期</span> </div>
        <div class="card-content">
          <div class="card-content-inner">
            <div style="text-align:center;line-height:30px;height:30px;font-size:30px;color:#ff4600">{{timer}}</div>
          </div>
        </div>

      </div>

      <item>
          <div class="circle-box" >1</div>
          <div class="circle-box" >2</div>
          <div class="circle-box" >3</div>
          <div class="circle-box" >4</div>
          <div class="circle-box" >5</div>
          <div class="circle-box" >6</div>
          <div class="circle-box" >7</div>
          <div class="circle-box" >8</div>
          <div class="circle-box" >9</div>
      </item>
      <item>
          <button class="circle-box-btn button button-small button-royal">大</button>
          <button class="circle-box-btn button button-small button-royal">小</button>
          <button class="circle-box-btn button button-small button-royal">单</button>
          <button class="circle-box-btn button button-small button-royal">双</button>
          <button class="circle-box-btn button button-small button-royal">全</button>
          <button class="circle-box-btn button button-small button-royal">清</button>

      </item>
      <item>
        <div style="font-size:14px;float:left;line-height:35px;margin-right:10px;">
          共 1000 注，共 400000 元
        </div>
        <div class="gw_num" style="width:130px;height:2rem;">
          <em @click="doSub()">-</em>
          <input type="number"  v-model="counter" class="num" style="width:60px;"/>
          <em class="add" @click="doAdd()">+</em>
        </div>
        <div style="font-size:14px;float:left;line-height:35px;margin-left:10px;">
          倍
        </div>
      </item>


      <item>
          <button class=" button button-normal button-assertive" style="float:left;">选好了</button>
          <button class=" button button-normal button-positive" style="float:right;">一键投注</button>
      </item>
      <item>
          <div style="width:100%;height:110px;border:1px solid #a59f9f;overflow:scroll;color:gray">
              <table class="selected-num">
                <tr>
                  <td>0,1,2,3</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>

              </table>
          </div>
      </item>
      <item>
        <span>总注数：<b style="color:red">1000</b> 注,</span><span style="margin-left:10px;">总金额：<b style="color:red">100000</b> 元</span>
      </item>
      <item>
        <button @click="joinBuySetting" class=" button button-normal button-assertive" style="float:left;">发起合买</button>
        <button class=" button button-normal button-positive" style="float:right;">立即投注</button>
      </item>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timer:'05:55',
        counter:1
      }
    },
    created() {



    },
    methods: {
      back() {
        $router.back('/lottery/index')
      },
      doAdd() {
        this.counter ++;
      },
      doSub() {
        if(this.counter >=2){
          this.counter --;
        }
      },
      joinBuySetting() {
        $router.forward('/lottery/joinbuysetting');
      }



    }
  }
</script>
<style>
  .circle-box{
    border-radius:1rem;width:2rem;height:2rem;border:2px solid red;
    text-align: center;line-height: 2rem;float: left;margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .circle-box-btn{
      float: left;margin-left: 0.2rem;
      width:3rem;height:2rem;
      font-size: 16px;
      margin-top: 0.2rem;
  }
  table.selected-num{
    width: 100%;
  }
  table.selected-num > tr {
    border-bottom: 1px solid #e7dbdb;
  }
  table.selected-num > tr > td{
    height: 20px;
    padding: 2px 5px;
  }
</style>
