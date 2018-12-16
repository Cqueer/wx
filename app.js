App({
  onLaunch() {
    console.log('App.onLaunch()')
  },
  onShow: function () {
  },
  onHide: function () {
  },
  //本应用的全局数据；
  globalData: {
    temperature: {},
    light: {},
    humidity: {},
    state: 1
  }
})