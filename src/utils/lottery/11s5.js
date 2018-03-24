//所选号码按逗号分割
//用于点击选好号码时触发
// ruleId:规则id ，selectedBox：选择号码的box，singlePrice：单注价格
export function getBettingInfo(ruleId,selectedBox,singlePrice){
  switch (ruleId) {
    //前三组选
    case 9:
      let tmpNumItem = '';
      let selectedCount = 0;
      for(let i = 0; i < selectedBox.length; i++){
        if(selectedBox[i]){
          tmpNumItem = tmpNumItem +   i + ',' ;
          selectedCount ++;
        }
      }
      if(tmpNumItem == ''){
        $dialog.alert({
          theme: 'ios',
          title: '请选择投注号码',
          okText: '好'
        });
        return;
      }
      //至少选择3个
      if(selectedCount < 3){
        $dialog.alert({
          theme: 'ios',
          title: '至少选择3位号码',
          okText: '好'
        });
        return;
      }
      let reg = new RegExp(",$");
      if(reg.test(tmpNumItem)){
        console.log(">>>");
        tmpNumItem = tmpNumItem.slice(0,tmpNumItem.length - 1);
      }
      console.log(tmpNumItem);
      let nums = tmpNumItem.split(',').length;
      let tmpBettingCount = ( nums * (nums-1) * (nums-2) ) / 6;
      let tmpCurrentMoney = tmpBettingCount * singlePrice;
      return {selectedNum : tmpNumItem, bettingCount : tmpBettingCount, currentMoney : tmpCurrentMoney};
    default:

  }
}

//点击球时实时计算
export function getBettingInfo2(ruleId,selectedBox,singlePrice){
  switch (ruleId) {
    //前三组选
    case 9:
      let tmpNumItem = '';
      let selectedCount = 0;
      for(let i = 0; i < selectedBox.length; i++){
        if(selectedBox[i]){
          tmpNumItem = tmpNumItem +   i + ',' ;
          selectedCount ++;
        }
      }

      if(selectedCount < 3){
        return {selectedNum : tmpNumItem, bettingCount : 0, currentMoney : 0};
      }else{
        let reg = new RegExp(",$");
        if(reg.test(tmpNumItem)){
          console.log(">>>");
          tmpNumItem = tmpNumItem.slice(0,tmpNumItem.length - 1);
        }
        console.log(tmpNumItem);
        let nums = tmpNumItem.split(',').length;
        let tmpBettingCount = ( nums * (nums-1) * (nums-2) ) / 6;
        let tmpCurrentMoney = tmpBettingCount * singlePrice;
        return {selectedNum : tmpNumItem, bettingCount : tmpBettingCount, currentMoney : tmpCurrentMoney};
      }

    default:

  }
}
