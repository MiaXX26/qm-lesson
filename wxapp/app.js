//app.js
App({
  onLaunch: function() {
    // console.log('应用启动');
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca926ce6742c1bf8220bfb/ikcamp/video#!method=get',
      success: (response) => {
        Object.assign(this.globalData, response.data)
      }
    })
  },
  // 全局的数据 App.js 是全局的，
  // 用户的登录状态
  globalData: {
  }
})