//index.js
//获取应用实例
const app = getApp()

Page({
  // 初始化数据
  data: {
    sesion: 1,
    image: "",
    answer: "",

    word1: "",
    word2: "",
    word3: "",
    word4: "",

    candidates: [],
    candiCopys: [],

    candiIndex1: 0,
    candiIndex2: 0,
    candiIndex3: 0,
    candiIndex4: 0
  },
  onLoad: function(option) {
    var that = this;
    // 显示加载弹窗
    wx.showLoading({
      title: '题目加载中',
      mask: true
    });
    var nowSesion = Number(app.globalData.userInfo.sesion) + 1; // 跳转用户最高关数的下一关
    this.initData(nowSesion); // 调用初始化方法
  },
  // 初始化数据
  initData: function(param) {
    var that = this;
    if (param > app.globalData.sesionTotal) { // 已经通关
      wx.hideLoading();
      // 保存当前页面，跳转成功页面
      wx.navigateTo({
        url: '../success/success',
      });
    } else {
      that.setData({
        sesion: param // 设置关卡
      });
      // 请求关卡数据
      wx.request({
        url: "http://127.0.0.1:5000/api/exams",
        data: {
          'sesion': param
        },
        header: {
          "Content-type": "application/x-www-form-urlencoded",
          // token用于验证，授权访问资源
          "Authorization": "Bearer " + wx.getStorageSync('token')
        },
        method: 'POST',
        success: function(res) {
          // success
          var code = res.data.code;
          if (code != 1) {
            // 失败弹窗
            wx.showToast({
              title: '数据初始化失败',
              icon: 'none'
            });
            // 成功，题目加载数据
          } else {
            var image = res.data.data.image;
            var answer = res.data.data.answer;
            var candidates = res.data.data.candidates;
            that.setData({
              image: image,
              answer: answer,
              candidates: candidates,
              candiCopys: candidates,
              word1: "",
              word2: "",
              word3: "",
              word4: ""
            });
          }
        },
        fail: function() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });
        },
        complete: function() {
          wx.hideLoading();
        }
      });
    }
  },
  // 检查结果
  bindNext: function() {
    var that = this;
    // 拼接字符串
    var mAnswer = this.data.word1 + this.data.word2 + this.data.word3 + this.data.word4;
    // 判断答案是否正确
    if (mAnswer == this.data.answer) {
      wx.vibrateShort({}); // 震动效果
      // 正确
      wx.showToast({
        title: '这就是国际巨星呐',
        mask: true
      });
      // 上传用户关卡
      wx.request({
        url: 'http://127.0.0.1:5000/api/exams/update_sesion',
        data: {
          'userId': app.globalData.userInfo.userId, // 传递用户id
          'sesion': that.data.sesion // 传递关卡
        },
        header: {
          "Content-type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + wx.getStorageSync('token'),
        },
        method: 'POST',
        success: function(res) {
          if (res.data.code == 1) {
            // 下一关卡
            setTimeout(function() {
              app.globalData.userInfo.sesion = app.globalData.userInfo.sesion + 1;
              that.initData(Number(that.data.sesion) + 1);
            }, 200);
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            });
          }
        },
        fail: function() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });
        }
      });
    } else {
      // 错误
      wx.vibrateLong({}); // 震动效果
      wx.showToast({
        title: '这么简单都不会',
        icon: 'none'
      });
    }
  },
  //删字
  bindClear: function(event) {
    var that = this;
    var pos = event.currentTarget.dataset.pos; // 获取当前点击的data-pos属性的值
    if (pos == 1) {
      var candidates = "candidates[" + this.data.candiIndex1 + "]";
      that.setData({
        word1: "", // 清空第一个字
        [candidates]: this.data.candiCopys[this.data.candiIndex1] // 还原第一个字
      });
    } else if (pos == 2) {
      var candidates = "candidates[" + this.data.candiIndex2 + "]";
      that.setData({
        word2: "", // 清空第二个字
        [candidates]: this.data.candiCopys[this.data.candiIndex2] // 还原第二个字
      });
    } else if (pos == 3) {
      var candidates = "candidates[" + this.data.candiIndex3 + "]";
      that.setData({
        word3: "", // 清空第三个字
        [candidates]: this.data.candiCopys[this.data.candiIndex3] // 还原第三个字
      });
    } else if (pos == 4) {
      var candidates = "candidates[" + this.data.candiIndex4 + "]";
      that.setData({
        word4: "", // 清空第四个字
        [candidates]: this.data.candiCopys[this.data.candiIndex4] // 还原第四个字
      });
    }
  },
  //填字
  bindFill: function(event) {
    var that = this;
    var loc = event.currentTarget.dataset.loc; // 获取属性中data-loc的值,也就是汉字的下标
    var candidates = "candidates[" + loc + "]";
    // 依次填写汉字
    if (this.data.word1 == "") {
      this.setData({
        word1: this.data.candidates[loc],
        [candidates]: "",
        candiIndex1: loc
      });
    } else if (this.data.word2 == "") {
      this.setData({
        word2: this.data.candidates[loc],
        [candidates]: "",
        candiIndex2: loc
      });
    } else if (this.data.word3 == "") {
      this.setData({
        word3: this.data.candidates[loc],
        [candidates]: "",
        candiIndex3: loc
      });
    } else if (this.data.word4 == "") {
      this.setData({
        word4: this.data.candidates[loc],
        [candidates]: "",
        candiIndex4: loc
      });
    }
    // 填写完成，自动下一个
    if (this.data.word1 != "" && this.data.word2 != "" && this.data.word3 != "" && this.data.word4 != "") {
      this.bindNext();
    }
  },
  // 分享回调
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '[@你]这课设太难了，实在写不出来，求给个高分吧！',
      path: '/pages/index/index?sesion=' + this.data.sesion,
      success: function(res) {
        // 转发成功
        wx.showToast({
          title: '分享成功',
          icon: 'success'
        });
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享失败',
          icon: 'none'
        });
      }
    }
  }
});