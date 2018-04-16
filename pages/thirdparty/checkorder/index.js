// pages/thirdparty/order/index.js
Page({

  data: {
    orderList: [],
    showResult: false
  },

  onOrderNoInput: function(e){
    const input = e.detail.value;
    if (input === "666666") {
      const demo = [
        { id: 1, orderno: '121211666666', createon: '2018-01-03' },
        { id: 2, orderno: '121211666666', createon: '2018-01-03' },
        { id: 3, orderno: '121211666666', createon: '2018-01-03' }
      ];
      this.setData({
        orderList: demo,
        showResult: true
      });
    }
    else if (input === "333333"){

    }
    else {
      this.setData({
        orderList: [],
        showResult: false
      });
    }
  },

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