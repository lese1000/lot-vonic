<template>
  <div class="page" v-nav="{title: '注册'}">

    <div class="page-content padding-top">


      <von-input type="text" v-model="playerName" placeholder="用户名" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <div class="padding">
        <button class="button button-dark button-block" @click="doReg">注册</button>
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
      doReg() {
        let  curUrl = window.location.href;
        let parentId = 0;
        if(curUrl.indexOf('?') != -1){
          let tmpParam = curUrl.split('?')[1];
          parentId = tmpParam.split('=')[1];
        }
        let param = {
          playerName:this.playerName,
          password:this.password,
          p : parentId
        }
        this.$api.post('auth/reg',param,data => {
          $dialog.alert({
            theme: 'ios',
            title: '注册成功，请登陆',
            okText: '好'
          }).then(() => {
            $router.forward('/')
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
