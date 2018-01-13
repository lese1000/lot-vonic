<template>
  <div class="page has-navbar" v-nav="{ title: '参与合买', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content padding" >

      <list class="hl-list-borderless" style="margin-top:5px;">
        <item class=" item-icon-right">
          可购买数量：<b style="color:red">100000</b> 份
        </item>
        <item>
          每份价格：100 元
        </item>
        <item class="item-icon-right" >
            <div style="font-size:14px;float:left;line-height:35px;margin-right:10px;">
              购买数:
            </div>

            <div class="gw_num">
              <em   @click="doSub()">-</em>
              <input id="buyNum" type="number" min="10" value="1" class="num"/>
              <em  @click="doAdd()">+</em>
            </div>
        </item>
        <item>
          总金额：<span style="color:red">10000</span> 元
        </item>
      </list>
      <button class="button button-assertive button-block">确认购买</button>

    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back('/joinbuy/index')
      },
      doAdd() {
        var n=$("#buyNum").val();
        console.log(n);
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $("#buyNum").val(num);
      },
      doSub() {
        var n=$("#buyNum").val();
        var num=parseInt(n)-1;
        if(num==0){ return}
        $("#buyNum").val(num);
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
