// pages/mainpage/mainpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    
  },
  touch:function(){
    this.setData({
      state:!this.data.state
    })
    wx.request({
      url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
      header: {
        "Content-Type": "application/json",
        "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
        //"Host": "api.heclouds.com"
      },
      method: "post",
      data: {
        "st": 6
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  touch2: function () {
    this.setData({
      state: !this.data.state
    })
    wx.request({
      url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
      header: {
        "Content-Type": "application/json",
        "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
        //"Host": "api.heclouds.com"
      },
      method: "post",
      data: {
        "st": 1
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },


  //点击按钮事件
  clickButton:function(e){
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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