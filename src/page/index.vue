<template>
  <div class="page"  v-tabbar="{'menus': menus, menuColor: '#a1a1a1', activeMenuColor: '#444', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {

       menus: [
         {
           iconOn: 'ion-ios-home',
           iconOff: 'ion-ios-home-outline',
           text: '首页',
           path: '/index/home'
         },
         {
           iconOn: 'ion-ios-pricetags',
           iconOff: 'ion-ios-pricetags-outline',
           text: '最新活动',
           path: '/index/activity'
         },

         {
           iconOn: 'ion-ios-person',
           iconOff: 'ion-ios-person-outline',
           text: '我的',
           path: '/index/personal'
         }
       ]
      }
    },
    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },
    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
