<template>
  <div class="page has-navbar" v-nav="{ title: '幸运五分彩', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content">
      <div class="card">
        <div class="card-header"> <span>第 20180111125 期</span><span style="color:#4a90e2">玩法说明</span> </div>
        <div class="card-content">
          <div class="card-content-inner">
            <div style="text-align:center;line-height:30px;height:30px;font-size:30px;color:#ff4600">{{timer}}</div>
          </div>
        </div>

      </div>

      <item>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[0]}" @click="clickBox(0)">0</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[1]}" @click="clickBox(1)">1</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[2]}" @click="clickBox(2)">2</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[3]}" @click="clickBox(3)">3</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[4]}" @click="clickBox(4)">4</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[5]}" @click="clickBox(5)">5</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[6]}" @click="clickBox(6)">6</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[7]}" @click="clickBox(7)">7</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[8]}" @click="clickBox(8)">8</div>
          <div class="circle-box" :class="{'circle-box-selected':selectedBox[9]}" @click="clickBox(9)">9</div>
      </item>
      <item>
          <button class="circle-box-btn button button-small button-royal" @click="selectBig">大</button>
          <button class="circle-box-btn button button-small button-royal" @click="selectSmall">小</button>
          <button class="circle-box-btn button button-small button-royal" @click="selectSingle">单</button>
          <button class="circle-box-btn button button-small button-royal" @click="selectDouble">双</button>
          <button class="circle-box-btn button button-small button-royal" @click="selectAll">全</button>
          <button class="circle-box-btn button button-small button-royal" @click="clearAll">清</button>

      </item>
      <item>
        <div style="font-size:14px;float:left;line-height:35px;margin-right:10px;">
          共 1000 注，共 400000 元
        </div>
        <div class="gw_num" style="width:130px;height:2rem;">
          <em @click="doSub()">-</em>
          <input type="number"  v-model="counter" class="num" style="width:60px;"/>
          <em class="add" @click="doAdd()">+</em>
        </div>
        <div style="font-size:14px;float:left;line-height:35px;margin-left:10px;">
          倍
        </div>
      </item>


      <item>
          <button class=" button button-normal button-assertive" style="float:left;" >选好了</button>
          <button class=" button button-normal button-positive" style="float:right;" @click="oneBetting">一键投注</button>
      </item>
      <item>
          <div style="width:100%;min-height:100px;border:1px solid #a59f9f;overflow:scroll;color:gray">
              <table class="selected-num">
                <tr>
                  <td>号码</td>
                  <td>注数</td>
                  <td>倍率</td>
                  <td>金额</td>
                  <td></td>
                </tr>
                <tr>
                  <td>0,1,2,3</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>
                <tr>
                  <td>0,1,2,3,4,5,6,7,8,9</td>
                  <td>10 注</td>
                  <td>10 倍</td>
                  <td>20000元</td>
                  <td><i class="icon ion-trash-a"></i></td>
                </tr>

              </table>
          </div>
      </item>
      <item>
        <span>总注数：<b style="color:red">1000</b> 注,</span><span style="margin-left:10px;">总金额：<b style="color:red">100000</b> 元</span>
      </item>
      <item>
        <button @click="joinBuySetting" class=" button button-normal button-assertive" style="float:left;">发起合买</button>
        <button class=" button button-normal button-positive" style="float:right;" @click="rightNowBetting">立即投注</button>
      </item>

    </div>
  </div>
</template>
<script>







import Vue from 'vue'
  export default {
    data() {
      return {
        timer:'00:00',
        counter:1,
        selectedBox : [false,false,false,false,false,false,false,false,false,false],
        box1:false,
        box: [0,1,2,3,4,5,6,7,8,9],
        timerId:null
      }
    },
    created() {
      let now = new Date();
      let endTime = now.setTime(now.getTime() + (5*60*1000));
      this.startCounter(endTime);

    },
    methods: {
      startCounter(endTime){
        var now = new Date();
        var leftTime = new Date(endTime);
        if(leftTime < now) return;//设置的时间小于现在时间退出
        this.timerId = setInterval(()=>this.leftTimer(leftTime), 1000);
      },
      checkTime(i) { //将0-9的数字前面加上0，例1变为01
       if (i < 10) {
         i = "0" + i;
       }
        return i;
      },
      leftTimer(endTime) {
       var leftTime = (new Date(endTime)) - new Date(); //计算剩余的毫秒数
       var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
       var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
       var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
       var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
       days = this.checkTime(days);
       hours = this.checkTime(hours);
       minutes = this.checkTime(minutes);
       seconds = this.checkTime(seconds);
       if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0){
         // document.getElementById("timer").innerHTML = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
         this.timer = minutes + ":" + seconds;
       }
       if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
         window.clearInterval(this.timerId);
         this.timerId = null;
       }
     },

      back() {
        $router.back('/lottery/index')
      },
      doAdd() {
        this.counter ++;
      },
      doSub() {
        if(this.counter >=2){
          this.counter --;
        }
      },
      joinBuySetting() {
        $router.forward('/lottery/joinbuysetting');
      },
      clickBox(index) {
        this.box1 = true;
        console.log(index);
        if(this.selectedBox[index]){
          // this.selectedBox[index] = false;
          Vue.set(this.selectedBox,index,false);
        }else{
          // this.selectedBox[index] = true;
          Vue.set(this.selectedBox,index,true);
        }
        console.log(this.selectedBox[index]);
      },
      selectBig() {
        this.clearAll();
        Vue.set(this.selectedBox,5,true);
        Vue.set(this.selectedBox,6,true);
        Vue.set(this.selectedBox,7,true);
        Vue.set(this.selectedBox,8,true);
        Vue.set(this.selectedBox,9,true);
      },
      selectSmall() {
        this.clearAll();
        Vue.set(this.selectedBox,0,true);
        Vue.set(this.selectedBox,1,true);
        Vue.set(this.selectedBox,2,true);
        Vue.set(this.selectedBox,3,true);
        Vue.set(this.selectedBox,4,true);
      },
      selectSingle() {
        this.clearAll();
        Vue.set(this.selectedBox,1,true);
        Vue.set(this.selectedBox,3,true);
        Vue.set(this.selectedBox,5,true);
        Vue.set(this.selectedBox,7,true);
        Vue.set(this.selectedBox,9,true);
      },
      selectDouble() {
        this.clearAll();
        Vue.set(this.selectedBox,0,true);
        Vue.set(this.selectedBox,2,true);
        Vue.set(this.selectedBox,4,true);
        Vue.set(this.selectedBox,6,true);
        Vue.set(this.selectedBox,8,true);
      },
      selectAll() {
        for(var j = 0; j < 10;  j++){
          Vue.set(this.selectedBox,j,true);
        }
      },
      clearAll() {
        for(let i = 0 ; i < 10; i++){
          Vue.set(this.selectedBox,i,false);
        }

      },
      oneBetting() {
        $dialog.confirm({
          theme: 'ios',
          title: '确认投注?',
          okText: '确认',
          cancelText: '取消'

        }).then((res) => {
          console.log('confirm result: ', res)
        })
      },
      rightNowBetting() {
        $dialog.confirm({
          theme: 'ios',
          title: '确认投注?',
          okText: '确认',
          cancelText: '取消'

        }).then((res) => {
          console.log('confirm result: ', res)
        })
      }



    }
  }
</script>
<style>
  .circle-box{
    border-radius:1rem;width:2rem;height:2rem;;
    text-align: center;line-height: 2rem;float: left;margin-left: 0.2rem;
    margin-top: 0.2rem;font-size: 1.3rem;
    background-color: #4a90e2;
    color: white;
  }
  .circle-box-selected{
    background-color: #ff4600;
    color: white;
  }
  .circle-box-btn{
      float: left;margin-left: 0.2rem;
      width:3rem;height:2rem;
      font-size: 16px;
      margin-top: 0.2rem;
  }
  table.selected-num{
    text-align: center;
    width: 100%;
  }
  table.selected-num > tr {
    border-bottom: 1px solid #e7dbdb;
  }
  table.selected-num > tr > td{
    height: 20px;
    padding: 2px 5px;
  }
</style>
