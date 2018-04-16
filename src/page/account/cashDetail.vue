<template>
  <div class="page has-navbar" v-nav="{ title: '在线取款', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content ">
      <div class="card">
        <div class="card-header">温馨提示</div>
        <div class="card-content">
          <div class="card-content-inner">
            1.您今日的提款次数是0次；超过100次后，将会额外收费，详情请联系客服！

            2.修改银行资料24小时之内不能提现！

            3.提款成功后请联系客服查收您的订单信息。

            4.首次输入后银行信息就会自动绑定，如需更改请联系客服。
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">取款信息</div>
        <div class="card-content">
          <div class="card-content-inner">
            <div class="show-tip-div">
              <span class="show-tip-div-left">可用余额:</span><span class="show-tip-div-right"><b style="color:red">{{balanceVal}}</b> 元</span>
            </div>

          </div>
        </div>
      </div>

        <von-input type="text" v-model="cashInfo.fullName" placeholder="收款人姓名" label="收款人姓名"></von-input>
        <von-input type="text" v-model="cashInfo.bank" placeholder="开户银行" label="开户银行"></von-input>
        <von-input type="text" v-model="cashInfo.account" placeholder="银行账号" label="银行账号"></von-input>
        <von-input type="text" v-model="cashInfo.cashVal" placeholder="提现金额" label="提现金额"></von-input>
        <von-input type="password" v-model="cashInfo.payPasswd" placeholder="取款密码" label="取款密码"></von-input>

      <div class="padding">
        <button @click='saveCashRecord' class="button button-block button-positive">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        cashInfo :
        {
          fullName:'',
          bank:'',
          account:'',
          cashVal:'',
          payPasswd:''

        },
        balanceVal : 0
      }
    },
    created() {
      this.$api.post('balance/getBalanceVal', {}, response => {
        this.balanceVal = response.data;
      })
    },
    methods: {

      back() {
        $router.back('/account/cash/index')
      },
      saveCashRecord() {
        $dialog.confirm({
          theme: 'ios',
          title: '确认提交?',
          okText: '确认',
          cancelText: '取消'

        }).then((res) => {
          if(res){
            let param = this.cashInfo;

            this.$api.post('cash/saveCashRecord',param, response => {
              $dialog.alert({
                theme: 'ios',
                title: response.message,
                okText: '好'
              }).then(() => {
                $router.replace('/account/cash/records');
              })
            })
          }
        })
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
