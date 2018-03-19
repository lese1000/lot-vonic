<template>
  <div class="page" v-nav="{title: '注册'}">

    <div class="page-content padding-top">


      <von-input type="text" v-model="playerName" placeholder="用户名" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <div class="padding">
        <button class="button button-dark button-block" @click="doLogin">确认</button>
      </div>

    </div>
  </div>
</template>
<script>
  import {getCookie} from '../utils/cookie-util'
  export default{
    data() {
      return {
        playerName: '',
        password: ''

      }
    },
    methods:{
      doLogin() {
        console.log('do reg p:'+getCookie('p'));
        let param = {
          playerName:this.playerName,
          password:this.password,
          p : getCookie('p')
        }
        this.$api.post('auth/reg',param,data => {
          $dialog.alert({
            theme: 'ios',
            title: '注册成功',
            okText: '好'
          }).then(() => {
            $router.forward('/index/home')
          })
        })

      }
    },
    created() {
      // this.$api.get('topics', null, r => {
      //   console.log(r.data);
      // })
      console.log('>>> p:'+getCookie('p'));

    }

  }
</script>
