<template>
  <!-- 原生 -->
  <div class="item item-borderless hl-item">
    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
  </div>

  <!-- 单独使用，起分割作用 -->
  <item></item>


  <!-- 配合list使用； list-ios 苹果风格，左侧缩进-->
  <list class="list-ios hl-list-borderless">
    <item class=" item-icon-right" @click.native="$router.forward('/personal/changepassword')">
      登录密码
      <span class="item-note">修改</span>
      <i class="icon ion-ios-arrow-right"></i>
    </item>
  </list>
  <!--eg2-->
  <list class="list-ios hl-list-borderless">
    <div class="item item-borderless hl-item item-icon-right" >
      <div class="hairline-top"></div>
      <div class="hairline-bottom"></div>

      登录密码
      <span class="item-note">修改</span>
      <i class="icon ion-ios-arrow-right"></i>
    </div>
  </list>




</template>
