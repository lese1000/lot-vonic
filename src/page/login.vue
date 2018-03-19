<template>
  <div class="page" v-nav="{title: '登录'}">

    <div class="page-content padding-top">


      <von-input type="text" v-model="playerName" placeholder="用户名" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <div class="padding">
        <button class="button button-dark button-block" @click="doLogin">确定</button>
        <!-- <button class="button button-dark button-block" @click="doReg">注册</button> -->
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        playerName: '',
        password: ''

      }
    },
    methods:{
      doLogin() {
        console.log('do login ....'+this.playerName);
        let param = {
          playerName:this.playerName,
          password:this.password
        }
        this.$api.post('auth/login',param,data => {


            $dialog.alert({
              theme: 'ios',
              title: '登陆成功',
              okText: '好'
            }).then(() => {
              $router.forward('/index/home')
            })

        })

      },
      doReg (){
        $router.forward('/reg')
      }
    },
    created() {
      // this.$api.get('topics', null, r => {
      //   console.log(r.data);
      // })
      /* 显示一个文字提示，3秒后关闭 */
    // $toast.show('这是一个提示', 3000).then(() => {
    //   console.log('toast hide')
    // })
    }

  }
</script>
