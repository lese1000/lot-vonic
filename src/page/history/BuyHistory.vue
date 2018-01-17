<template>
  <div class="page has-navbar" v-nav="{title: '历史投注', showBackButton: true}">
    <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick" tabColor="dark"></tabs>
    <div class="page-content ">
      <div class="tab-content">
            <div v-if="tabIndex == 0">
              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">
                    <span style="float:left;">投注内容</span><span class="lottery-tip ">未开奖</span>
                    <div class="betting-content">
                        <table class="selected-num">
                          <tr>
                            <td>号码</td>
                            <td>注数</td>
                            <td>倍率</td>
                            <td>金额</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                        </table>
                    </div>

                  </div>
                </div>
                <div class="card-footer">  <span>总金额：<span>￥10000</span></span><span >中奖金额：￥0.00</span></div>
                <div class="card-footer">  <span>2018/01/08 23:58:55</span></div>
              </div>
              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">
                    <span style="float:left;">投注内容</span><span class="lottery-tip bg-gray">未中奖</span>
                    <div class="betting-content">
                        <table class="selected-num">
                          <tr>
                            <td>号码</td>
                            <td>注数</td>
                            <td>倍率</td>
                            <td>金额</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                        </table>
                    </div>

                  </div>
                </div>
                <div class="card-footer">  <span>总金额：<span>￥10000</span></span><span >中奖金额：￥0.00</span></div>
                <div class="card-footer">  <span>2018/01/08 23:58:55</span></div>
              </div>

              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">
                    <span style="float:left;">投注内容</span><span class="lottery-tip bg-red">已中奖</span>
                    <div class="betting-content">
                        <table class="selected-num">
                          <tr>
                            <td>号码</td>
                            <td>注数</td>
                            <td>倍率</td>
                            <td>金额</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                        </table>
                    </div>

                  </div>
                </div>
                <div class="card-footer">  <span>总金额：<span>￥10000</span></span><span class="font-red" >中奖金额：￥24432.00</span></div>
                <div class="card-footer">  <span>2018/01/08 23:58:55</span></div>
              </div>

            </div>
            <div v-if="tabIndex == 1">
              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">
                    <span style="float:left;">投注内容</span><span class="lottery-tip bg-red">已中奖</span>
                    <div class="betting-content">
                        <table class="selected-num">
                          <tr>
                            <td>号码</td>
                            <td>注数</td>
                            <td>倍率</td>
                            <td>金额</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                        </table>
                    </div>

                  </div>
                </div>
                <div class="card-footer">  <span>总金额：<span>￥10000</span></span><span class="font-red" >中奖金额：￥24432.00</span></div>
                <div class="card-footer">  <span>2018/01/08 23:58:55</span> <span class="font-blue">参与情况</span> </div>
              </div>
            </div>
            <div v-if="tabIndex == 2">
              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">
                    <span style="float:left;">投注内容</span><span class="lottery-tip ">未开奖</span>
                    <div class="betting-content">
                        <table class="selected-num">
                          <tr>
                            <td>号码</td>
                            <td>注数</td>
                            <td>倍率</td>
                            <td>金额</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                        </table>
                    </div>

                  </div>
                </div>
                <div class="card-footer">  <span>总金额：<span>￥10000</span></span><span >中奖金额：￥0.00</span></div>
                <div class="card-footer">  <span>2018/01/08 23:58:55</span></div>
              </div>
              <div class="card">
                <div class="card-header">幸运五分彩<span>第 20180108118 期</span></div>
                <div class="card-content">
                  <div class="card-content-inner">
                    <span style="float:left;">投注内容</span><span class="lottery-tip bg-red">已中奖</span>
                    <div class="betting-content">
                        <table class="selected-num">
                          <tr>
                            <td>号码</td>
                            <td>注数</td>
                            <td>倍率</td>
                            <td>金额</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                          <tr>
                            <td>0,1,2,3</td>
                            <td>10 注</td>
                            <td>10 倍</td>
                            <td>20000元</td>
                          </tr>
                        </table>
                    </div>

                  </div>
                </div>
                <div class="card-footer">  <span>总金额：<span>￥10000</span></span><span class="font-red" >中奖金额：￥24432.00</span></div>
                <div class="card-footer">  <span>2018/01/08 23:58:55</span> <span class="font-blue">参与情况</span> </div>
              </div>
            </div>
      </div>
    </div>


  </div>
</template>
<style lang="scss" scoped>
  .tab-content{
    margin-top: 60px;

  }
</style>
<script>
  export default{
    data(){
      return {
        tabs: [
          "个人投注",
          "发起合买",
          "参与合买"
        ],

        tabIndex: 0
      }
    },

    methods: {
      onTabClick(index) {
        console.log(index)
        this.tabIndex = index
      },

      onCategoryClick(index) {
        this.categoryIndex = index
        console.log('category changed, current tab index is:', index);
      },
      back() {
        $router.back("/index/home");
      }
    }
  }
</script>

<style >
  .betting-content{
    width:100%;
    border:1px solid #a59f9f;
    color:gray;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
  }
.font-red{
  color: red;
}
.font-blue{
  color: #4a90e2;
}
</style>
