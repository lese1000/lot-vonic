<template>
  <div class="page has-navbar" v-nav="{ title: '参与合买', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content padding" >

      <list class="hl-list-borderless" style="margin-top:5px;">

        <item>
          可购买数量：<b style="color:red">{{remainingPieceNum}}</b> 份 <span @click="refreshData" style="color:#4a90e2;margin-left:2px;">点击刷新</span>
        </item>
        <item>
          每份价格：<b style="color:red">{{singlePieceMoney}}</b> 元
        </item>
        <item>
          <div style="font-size:14px;float:left;line-height:35px;margin-right:10px;">
            购买数:
          </div>

          <div class="gw_num">
            <em   @click="doSub()">-</em>
            <input id="buyNum" type="number" v-model="buyPieceNum" class="num"/>
            <em class="add" @click="doAdd()">+</em>
          </div>

          <button @click="restBuyPieceNum" class="button button-small button-positive" style="margin-left:5px;margin-top:4px">重置</button>
          <button @click="maxBuyPieceNum" class="button button-small button-positive" style="margin-left:5px;margin-top:4px">最大</button>
        </item>
        <item>
          总金额：<span style="color:red">{{totalBettingMoney}}</span> 元
        </item>
      </list>
      <button @click='doJoinBuy2' class="button button-assertive button-block">确认购买</button>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        buyPieceNum : 1,
        remainingPieceNum : 0,
        singlePieceMoney : 1,
        joinBuyId : 0
      }
    },
    created () {
      this.joinBuyId = this.$route.params.joinBuyId;
      let param = this.$route.params;
      this.$api.post('joinBuy/getJoinBuyInfo',param,data => {
          if(data.data){
            this.remainingPieceNum = data.data.remainingPieceNum;
            this.singlePieceMoney = data.data.singlePieceMoney;
          }
      })

    },
    methods: {
      back() {
        $router.back('/joinbuy/index')
      },
      doAdd() {
        if(this.buyPieceNum < this.remainingPieceNum){
          this.buyPieceNum ++;
        }else{
          $toast.show('最大可购买数量为:' + this.remainingPieceNum + '份', 3000);
        }

      },
      doSub() {
        if(this.buyPieceNum >= 2){
          this.buyPieceNum --;
        }
      },
      restBuyPieceNum() {
        this.buyPieceNum = 1;
      },
      maxBuyPieceNum() {
        this.buyPieceNum = this.remainingPieceNum;
      },
      doJoinBuy2() {
        let param = {
          buyPieceNum : this.buyPieceNum,
          joinBuyId : this.joinBuyId
        }
        this.$api.post('joinBuy/doJoinBuy2',param,data => {
          $dialog.alert({
            theme: 'ios',
            title: data.message,
            okText: '好'
          }).then(() => {
            this.back();
          })
        })
      },
      refreshData() {
        this.joinBuyId = this.$route.params.joinBuyId;
        let param = this.$route.params;
        this.$api.post('joinBuy/getJoinBuyInfo',param,data => {
            if(data.data){
              this.remainingPieceNum = data.data.remainingPieceNum;
              this.singlePieceMoney = data.data.singlePieceMoney;
            }
        })
      }
    },
    computed : {
      totalBettingMoney (){
        return this.buyPieceNum * this.singlePieceMoney;
      }
    },
    watch : {
      buyPieceNum (newBuyPieceNum, oldBuyPieceNum){
        let intReg = /^[1-9]\d*$/;
        if(!intReg.test(this.buyPieceNum)){
          this.totalPieceNum = oldTotalPieceNum;
          $toast.show('请填写正确数值，须为整数', 3000);
          return;
        }else if( this.buyPieceNum > this.remainingPieceNum){
          this.buyPieceNum = this.remainingPieceNum
          $toast.show('最大可购买数量为:' + this.remainingPieceNum + '份', 3000);
        }
      }
    }
  }
</script>



<style lang="css">

.gw_num{border: 1px solid #dbdbdb;width: 150px;line-height: 35px;overflow: hidden;float: left;vertical-align:center}
.gw_num em{display: block;height: 35px;width: 30px;float: left;color: #7A7979;border-right: 1px solid #dbdbdb;text-align: center;cursor: pointer;}
.gw_num .num{display: block;float: left;text-align: center;width: 80px;font-style: normal;font-size: 14px;line-height: 24px;border: 0;}
.gw_num em.add{float: right;border-right: 0;border-left: 1px solid #dbdbdb;}
</style>
