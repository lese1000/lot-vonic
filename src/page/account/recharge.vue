<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '充值中心',showBackButton: true, onBackButtonClick: back }" >
    <div class="page-content">
      <list class=" hl-list-borderless">
        <item class=" item-icon-right" @click.native="$router.forward('/account/recharge/detail')">
          立即充值
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-right" @click.native="$router.forward('/account/recharge/records')">
          充值记录
          <i class="icon ion-ios-arrow-right"></i>
        </item>

      </list>
      <div class="card" >
        <div class="card-header" >最新充值用户一览</div>
        <div class="card-content">
          <div class="card-content-inner" style="color:red;text-align:center; ">
            <ul>
              <li v-for="item in rechargeList">用户 {{playNameFormate(item.playerName)}} 充值了 {{item.rechargeVal}} 元 </li>
            </ul>
          </div>
        </div>
        <div class="card-footer">
          <span></span>
          <button class="button button-positive button-small"  @click="getNewestRechargeList()">刷新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rechargeList : []
    }
  },
  created(){
    this.getNewestRechargeList();
  },
  methods: {
    back() {
      $router.back('/index/home')
    },
    playNameFormate(name){
      if(name.length > 2){
        return name.substr(0,1) + new Array(name.length - 1).join('*') + name.substr(-1);
      }else{
        return  new Array(name.length).join('*') + name.substr(-1);
      }
    },
    getNewestRechargeList() {
      this.$api.post('other/getNewestRechargeList', {}, response => {
        this.rechargeList = response.data;
      })
    }
  }
}
</script>

<style lang="css">
</style>
