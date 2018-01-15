<template>
  <div class="page has-navbar" v-nav="{ title: '银行转账', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content ">
      <div class="card">
        <div class="card-header">温馨提示</div>
        <div class="card-content">
          <div class="card-content-inner">
            公司入款享1.0%存款优惠,次次存、次次送、无上限！
            请每次入款前登陆会员核对银行账号是否使用！
             温馨提示：为确保财务第一时间为您添加游戏额度,请您尽量不要转账整数(例如：欲如￥5000, 请转￥5000.68)谢谢！
             操作备注：公司入款步骤->点击【公司入款】,点选您所要使用的银行, 复制公司的银行账号来完成转账。
             然后 提交您存款的相关资料,系统将在5分钟之内把您的金额 存到您的会员账号上,感谢您的支持和配合！
             尊敬的会员您好！
             公司入款银行账号请按照此页面显示的账号进行转账入款，若是入款至已过期帐号，公司无法查收，恕不负责!谢谢！
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">存款信息</div>
        <div class="card-content">
          <div class="card-content-inner">
            <div class="show-tip-div">
              <span class="show-tip-div-left">银行:</span><span class="show-tip-div-right">工商银行</span>
            </div>
            <div class="show-tip-div">
              <span class="show-tip-div-left">收款人:</span><span class="show-tip-div-right">张三</span>
            </div>
            <div class="show-tip-div">
              <span class="show-tip-div-left">开户行:</span><span class="show-tip-div-right">南昌市南昌莲塘支行</span>
            </div>
            <div class="show-tip-div">
              <span class="show-tip-div-left">账号:</span><span class="show-tip-div-right">1502006901207575663</span>
            </div>
          </div>
        </div>
      </div>

        <von-input type="text" v-model="rechargeInfo.chargeName" placeholder="存款人姓名" label="存款人姓名"></von-input>
        <von-input type="text" v-model="rechargeInfo.chargeAccount" placeholder="支付账号" label="支付账号"></von-input>
        <von-input type="text" v-model="rechargeInfo.chargeMoney" placeholder="存款金额" label="存款金额"></von-input>
      <div class="padding">
        <button class="button button-block button-positive">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        rechargeInfo :
        {
          chargeName:'',
          chargeAccount:'1502006901207575663',
          chargeMoney:''
        }
      }
    },
    methods: {

      back() {
        $router.back('/recharge/index')
      }
    }
  }
</script>

<style >
  .show-tip-div{
    width:100%;
    float: left;
    border-bottom: 1px dashed #dbdbdb;
    margin-bottom: 5px;
    vertical-align: center;
    font-size: 14px;
    padding: 3px 0px;
  }
  .show-tip-div-left{
    width:20%;float:left;text-align:justify;
  }
  .show-tip-div-right{
    width:80%;float:left;
  }
</style>
