<template>
  <div class="page" v-nav="{title: '修改登录密码'}">

    <div class="page-content padding-top">


      <von-input type="password" v-model="oldPassword" placeholder="旧密码" label="旧密码"></von-input>
      <von-input type="password" v-model="newPassword" placeholder="新密码" label="新密码" style="margin-bottom: 5px;"></von-input>

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
        oldPassword: '',
        newPassword: ''

      }
    },
    methods:{
      doChangePassword() {
        console.log('do doChangePassword ....');

      }
    },
    created() {
      
    }

  }
</script>
