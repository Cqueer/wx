// pages/chatter/chatter.js
const app = getApp()

const recorderManager = wx.getRecorderManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ' ',
    recording: true,
    st: null,
    aaa:null
  },
  startRecord() {
    wx.vibrateLong({
    });
    this.setData({ recording: false });
    recorderManager.start({
      duration: 60000,//百度最多支持60s语音
      sampleRate: 16000,
      //encodeBitRate: 48000,
      numberOfChannels: 1,//必须指定录音通道数
      format: 'mp3'
    });
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
  },
  stopRecord() {
    let that = this;
    this.setData({ recording: true });
    recorderManager.stop();//停止录音
    recorderManager.onStop((res) => {
      const { tempFilePath } = res;
      console.log(tempFilePath);
      //uploadfile start
      wx.uploadFile({
        url: 'http://47.94.206.213:3000/baiduAI2/recognition',
        filePath: tempFilePath,
        name: 'file',
        success(res) {
          console.log(res);
          let data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
            if (data.ret == 0) {
            console.log(data.data.data[0])
            that.setData({
              result: data.data.data[0]
            });

            if (data.data.data[0] == '关灯，') {
              console.log('OK');
              
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
            }
            else if (data.data.data[0] == '强光模式，') {
              console.log('OK');
             
              wx.request({
                url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
                header: {
                  "Content-Type": "application/json",
                  "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
                  //"Host": "api.heclouds.com"
                },
                method: "post",
                data: {
                  "st": 2
                },
                success: function (res) {
                  console.log(res.data)
                }
              })
            }
            else if (data.data.data[0] == '开灯，') {
              console.log('OK');
              
              wx.request({
                url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
                header: {
                  "Content-Type": "application/json",
                  "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
                  //"Host": "api.heclouds.com"
                },
                method: "post",
                data: {
                  "st": 3
                },
                success: function (res) {
                  console.log(res.data)
                }
              })
            }
            else if (data.data.data[0] == '弱光模式，') {
              console.log('OK');
              
              wx.request({
                url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
                header: {
                  "Content-Type": "application/json",
                  "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
                  //"Host": "api.heclouds.com"
                },
                method: "post",
                data: {
                  "st": 4
                },
                success: function (res) {
                  console.log(res.data)
                }
              })
            }
            else if (data.data.data[0] == 'KTV模式，') {
              console.log('OK');
              
              wx.request({
                url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
                header: {
                  "Content-Type": "application/json",
                  "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
                  //"Host": "api.heclouds.com"
                },
                method: "post",
                data: {
                  "st": 5
                },
                success: function (res) {
                  console.log(res.data)
                }
              })
            }
            else{
              console.log(data.data.data[0]);
              
            }
            
            if (data.data.data[0] == '渐变模式，') {
              console.log('OK');

              wx.request({
                url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
                header: {
                  "Content-Type": "application/json",
                  "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
                  //"Host": "api.heclouds.com"
                },
                method: "post",
                data: {
                  "st":8
                },
                success: function (res) {
                  console.log(res.data)
                }
              })
            }
              if (data.data.data[0] == '呼吸模式，') {
                console.log('OK');

                wx.request({
                  url: 'http://api.heclouds.com/devices/504382102/datapoints?type=3',
                  header: {
                    "Content-Type": "application/json",
                    "api-key": "iu=bBuQYARztziUBERYE7Jp38kY=",
                    //"Host": "api.heclouds.com"
                  },
                  method: "post",
                  data: {
                    "st": 9
                  },
                  success: function (res) {
                    console.log(res.data)
                  }
                })
              }

          }

          else {
            that.setData({
              result: '我不知道你在说什么'
            });
          }
        },
        fail(err) {
          console.log(err);
        }
      });
    })
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