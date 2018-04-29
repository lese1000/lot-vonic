<template lang="html">
  <div class="page has-navbar" v-nav="{ title: '系统公告',showBackButton: true, onBackButtonClick: back }" >
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
            <list class=" hl-list-borderless">
              <item v-for="(item,index) in items" class=" item-icon-right" @click.native="toNoticeDetial(item.id)">
                {{index + 1}}. {{item.title}}
                <i class="icon ion-ios-arrow-right"></i>
              </item>
            </list>

      <div v-if="noMoreData" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      items : [],
      noMoreData : false,
      pageNum : 1,
      pageSize : 10,
      acType : 1
    }
  },
  mounted (){
    let param = {
      pageNum : this.pageNum,
      pageSize : this.pageSize,
      acType : this.acType
    }
    this.$api.post('acContent/list',param, response => {
      if(response.data){
        this.items = response.data;
        if(response.data.length < this.pageSize){
          this.noMoreData = true;
        }
        this.top = 1;
        this.bottom = response.data.length;
      }else{
        this.noMoreData = true;
      }
    })

  },
  methods:{
    back() {
      $router.back('/index/home')
    },
    toNoticeDetial(id) {
      $router.forward('/notice/detail/1/'+ id);
    },
    onRefresh(done) {
      let param = {
        pageNum : 1,
        pageSize : this.pageNum * this.pageSize,
        acType : this.acType
      }
      this.$api.post('acContent/list',param, response => {
        if(response.data){
          this.items = response.data;
          if(response.data.length < (this.pageNum * this.pageSize)){
            this.noMoreData = true;
          }
          this.bottom = response.data.length;
        }else{
          this.noMoreData = true;
        }

        done();
      })
    },
    onInfinite(done) {
      if(this.noMoreData){
        return;
      }
      this.pageNum ++;
      let param = {
        pageNum : this.pageNum,
        pageSize : this.pageSize,
        acType : this.acType 
      }
      this.$api.post('acContent/list',param, response => {
        if(response.data){
          response.data.forEach((value,index,arr) => {
            this.items.push(value);
          })
          if(response.data.length < this.pageSize){
            this.noMoreData = true;
          }
          this.bottom += response.data.length;
        }else{
          this.noMoreData = true;
        }

        done();
      })
    },


  }
}
</script>

<style lang="css">
</style>
