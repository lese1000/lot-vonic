<template>
  <div class="page" v-nav="{title: '登录'}">

    <div class="page-content padding-top">


      <von-input type="text" v-model="username" placeholder="用户名" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <div class="padding">
        <button class="button button-dark button-block" @click="doLogin">确认</button>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        username: '',
        password: ''

      }
    },
    methods:{
      doLogin() {
        console.log('do login ....');
        $router.forward('/index/home')
      }
    },
    created() {
      this.$api.get('topics', null, r => {
        console.log(r.data);
      })
    }

  }
</script>
