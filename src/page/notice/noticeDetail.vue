<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '内容详情',showBackButton: true, onBackButtonClick: back }">
    <div class="page-content text-center">
      <div class="card">
        <div class="card-header">标题：{{acContent.title}}</div>
        <div class="card-content">
          <div class="card-content-inner" style="text-align:left;" v-html="convertToHtml(acContent.content)"></div>
        </div>
        <div class="card-footer"><span></span><span>时间:{{dateFormate(acContent.createDate)}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import {dateFtt} from '../../utils/date-util.js';

export default {
  data() {
    return  {
      acContent : {
        content : ''
      },
    }
  },
  created (){
    this.getNoticeDetail();
  },
  methods:{
    back() {
      let params = this.$route.params;
      if(params.type == 1){
        $router.back('/notice/index')
      }else{
        $router.back('/index/activity')
      }

    },
    getNoticeDetail() {
      let params = this.$route.params;
      this.$api.post('acContent/detail', params, response => {
        this.acContent = response.data;
      })
    },
    dateFormate(date) {
      return dateFtt('yyyy-MM-dd hh:mm:ss',new Date(date));
    },
    convertToHtml(data){
      return data.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }
  }
}
</script>

<style lang="css">
</style>
