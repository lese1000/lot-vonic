<template>
  <div class="page" v-nav="{title: '设置登录密码',showBackButton: true, onBackButtonClick: back }">

    <div class="page-content padding-top">


      <von-input type="password" v-model="passwd1" placeholder="旧密码" label="旧密码"></von-input>
      <von-input type="password" v-model="passwd2" placeholder="新密码" label="新密码" style="margin-bottom: 5px;"></von-input>

      <div class="padding">
        <button class="button button-dark button-block" @click="doChangePassword">确认</button>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        passwd1: '',
        passwd2: ''

      }
    },
    methods:{
      back(){
        this.$router.replace('/index/personal')
      },
      doChangePassword() {
        $dialog.confirm({
          theme: 'ios',
          title: '确认修改?',
          okText: '确认',
          cancelText: '取消'

        }).then((res) => {
          if(res){
            let param = {
              passwd1 : this.passwd1,
              passwd2 : this.passwd2
            }
            this.$api.post('player/updateLoginPasswd',param,data => {
              //投注成功，刷新页面
              $dialog.alert({
                theme: 'ios',
                title: data.message,
                okText: '好'
              }).then(() => {
                this.back();
              })
            })


          }
        })


      }
    },
    created() {

    }

  }
</script>
