<template>
  <div class="page has-navbar" v-nav="{ title: '发起合买', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content">

      <div class="card">
        <div class="card-header">合买设置<span>【至少1元，且须能整除到1元】</span></div>
        <div class="card-content">
          <div class="card-content-inner">
              <div class="card-input-outline">
                <div class="card-input" >
                  <em>股份设置</em>
                  <input type="number"  v-model="copiesNum" class="num"/>
                  <em class="right">份</em>
                </div>
                <div class="right-font">每份 <b style="color:red">1000</b> 元</div>
              </div>

              <div class="card-input-outline">
                <button @click="selectScheme" class="button button-positive button-small" style="float:left;">选择方案</button> <span style="color:#7A7979;font-size:18px;margin-left:10px;">{{selectedScheme.name}}</span>
              </div>
          </div>
        </div>

      </div>


      <div class="card" >
        <div class="card-header">认购设置<span>【最低认购5%】</span></div>
        <div class="card-content">
          <div class="card-content-inner">
            <div class="card-input-outline" style="border:0;">
              <div class="card-input" >
                <em>我要认购</em>
                <input type="number"  v-model="copiesNum" class="num"/>
                <em class="right">份</em>
              </div>
              <div class="right-font">￥<b style="color:red">1000</b> 元</div>
            </div>
            <div class="card-input-outline" style="border:0;">
              <von-toggle :text="sureLeast.text" v-model="sureLeast.need" ></von-toggle>
            </div>

            <div class="card-input-outline" v-if="sureLeast.need" style="border:0;">
              <div class="card-input" >
                <em>保底数量</em>
                <input type="number"  v-model="copiesNum" class="num"/>
                <em class="right">份</em>
              </div>
              <div class="right-font">￥<b style="color:red">1000</b> 元</div>
            </div>
          </div>
        </div>
      </div>


      <div   class="padding" style="padding-top:0px;">
        <accordion>
          <accordion-item title="可选设置" content-height="150">
            <von-input type="text" v-model="propaganda.title" placeholder="标题" label="合买标题" ></von-input>
            <von-input type="text" v-model="propaganda.content" placeholder="合买描述" label="合买描述" ></von-input>
            <von-input type="text" v-model="propaganda.users" placeholder="格式是：张三,李四,王五" label="合买对象" ></von-input>
          </accordion-item>
        </accordion>
      </div>
      <div class="padding">
          <button class="button button-assertive button-block">确认发布</button>
      </div>




    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        schemeList://方案列表
        [
          {
            name:'发布即公开',
            val:1
          },
          {
            name:'截止后公开',
            val:2
          },
          {
            name:'完全保密',
            val:3
          }
        ],
        selectedScheme: //选择的方案
        {
          name:'发布即公开',
          val:1
        },
        copiesNum:1, //份数
        sureLeast:
        {
          need:false,
          nums:0,
          text:"是否保底"
        },
        propaganda:
        {
          title:'合买必中！',
          content:'买彩票讲的是缘分和坚持。',
          users: ''
        }


      }
    },
    methods: {
      back() {
        $router.back('/lottery/luckfive')
      },
      selectScheme() {
        $actionSheet.show({
        title: '选择方案',
        cancelText: '取消',
        buttons: {
          // 操作列表选项文字及回调函数
          '发布即公开': () => {
            console.log('action 1 called.')
            this.selectedScheme = this.schemeList[0];
          },

          '截止后公开': () => {
            console.log('action 2 called.')
            this.selectedScheme = this.schemeList[1];
          },
          '完全保密': () => {
            console.log('action 1 called.')
            this.selectedScheme = this.schemeList[2];
          }
        }
        })
      }
    }
  }
</script>

<style>
.card-input-outline{
  width:100%;
  border-bottom:1px dashed #dbdbdb;
  float:left;
  padding-bottom: 5px;
  margin-bottom: 5px;
  line-height: 35px;

}
.card-input-outline > .right-font{
  font-size:12px;
  margin-left:5px;
  height:35px;width:100px;
  float:left;line-height:35px;
  margin-top:1px;
}
.card-input{
  border: 1px solid #dbdbdb;
  width: 170px;
  line-height: 35px;
  overflow: hidden;
  float: left;
  vertical-align:center;
}
.card-input em{
  display: block;
  height: 35px;
  width: 60px;
  float: left;
  color: #7A7979;
  border-right: 1px solid #dbdbdb;
  text-align: center;
}
.card-input em.right{
  width: 30px;
  float: right;
  color: #7A7979;
  border-left: 1px solid #dbdbdb;
  border-right:0;
  text-align: center;
}
.card-input  .num{
  display: block;
  float: left;
  text-align: center;
  width: 75px;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
}

</style>
