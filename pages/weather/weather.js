// pages/weather/weather.js


var bmap = require('../../libs/bmap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'Onk5rVcgouAjLfnxnXhy25cI2ihquD0o'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '\n' + '\n' + '城市：' + weatherData.currentCity + '\n' + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '\n' + '日期：' + weatherData.date + '\n' + '\n' + '温度：' + weatherData.temperature + '\n' + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})