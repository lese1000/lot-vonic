$dialog.confirm({
  theme: 'ios',
  title: '确认投注?',
  okText: '确认',
  cancelText: '取消'

}).then((res) => {
  if(res){
    //清除选择
    this.clearAll();
    this.$api.post('betting/doBetting',param,data => {
      //投注成功，刷新页面
      $dialog.alert({
        theme: 'ios',
        title: data.message,
        okText: '好'
      }).then(() => {
        location.reload();
      })
      console.log(data);
    })


  }
})
