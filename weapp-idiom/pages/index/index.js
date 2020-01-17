//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function() {
    if (app.globalData.userInfo == null) {
      this.bindLogin();
    }
  },
  onShow: function() {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },
  //开始游戏
  bindBegin: function() {
    var that = this;
    if (this.data.userInfo.sesion >= app.globalData.sesionTotal) {
      wx.navigateTo({
        // 用户通关后显示成功页面
        url: '../success/success'
      });
    } else {
      wx.navigateTo({
        // 进入猜一猜界面
        url: '../guess/guess'
      });
    }
  },
  // 用户登录
  bindLogin: function(e) {
    var that = this;
    // 微信登录
    wx.login({
      success: function(loginRes) {
        if (loginRes.code) {
          // 查看是否授权
          wx.getSetting({
            success: function(res) {
              if (res.authSetting['scope.userInfo']) {
                // scope.userInfo:true
                // 微信获取用户信息
                wx.getUserInfo({
                  success: function(result) {
                    // 执行登录,调用自定义函数welogin
                    that.wxlogin(loginRes.code, result.userInfo.nickname, result.userInfo.avatar)
                  }
                });
              } else {
                wx.showToast({
                  // 显示消息弹窗
                  title: '请授权用户信息',
                  icon: "none"
                });
              }
            }
          });
        }
      }
    });
  },
  // 服务器登录
  wxlogin: function(code, nickname, avatar) {
    var that = this;
    wx.showLoading({
      // 显示loading提示框
      title: '正在登录中',
      mask: true
    });
    wx.request({
      // 向服务器发出请求
      url: 'http://127.0.0.1:5000/api/users/wx_login',
      data: {
        code: code,
        nickname: nickname,
        avatar: avatar,
      },
      method: 'POST',
      header: {
        // 采用该编码形式传递信息
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(response) {
        // 获取信息,第一个data表示response的数据部分，第二个表示数据结构的data，参见python程序
        var userInfo = response.data.data.userInfo;// 用户信息
        var sesionTotal = response.data.data.sesionTotal;// 通过关卡
        var token = response.data.data.token;// token
        // 将token写入缓存
        wx.setStorageSync('token', token);
        // 设置全局变量
        app.globalData.sesionTotal = sesionTotal;
        // 判断用户openid的获取情况
        if (userInfo.userId > 0) {
          app.globalData.userInfo = userInfo;
          that.setData({
            // 将数据返回到视图层
            userInfo: userInfo,
            hasUserInfo: true
          });
        }
      },
      fail: function() {
        console.log("wxlogin fail");
        wx.showToast({
          // 弹出消息框
          title: '登录失败',
          icon: 'none'
        });
      },
      complete: function() {
        // 登录成功，隐藏消息框
        wx.hideLoading();
      }
    });
  },
  // 查看排行榜
  bindRank: function() {
    wx.navigateTo({
      // 保留当前页面
      url: '../rank/rank'
    });
  }
})