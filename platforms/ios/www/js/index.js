document.addEventListener('deviceready', function(e) {
    var alipayBtn = document.getElementById('alipay-btn');
    var weipayBtn = document.getElementById('weipay-btn');
    var weiboShareBtn = document.getElementById('weibo-share-btn');
    var weixinShareBtn = document.getElementById('weixin-share-btn');
    alipayBtn.addEventListener('click', function(e) {
        alipay.pay(
        {
                tradeNo: "145188769195998",
                subject: "测试标题",
                body: "我是测试内容",
                price: 0.02,
                notifyUrl: "http://baidu.com",
                appScheme:'weixin'
            },
            function() {
                alert("success")
            },
            function(errorMsg) {
                alert(errorMsg)
            });
    }, false);
    weipayBtn.addEventListener('click', function(e) {
        weipay.pay(
        {
                tradeNo: "145188769195998",
                subject: "测试标题",
                body: "我是测试内容",
                price: 0.02,
                notifyUrl: "http://baidu.com",
                appScheme:'weixin'
            },
            function() {
                alert("success")
            },
            function(errorMsg) {
                alert(errorMsg)
            });
    }, false);
    weiboShareBtn.addEventListener('click', function(e) {
        weibo.share();
    }, false);
    weixinShareBtn.addEventListener('click', function(e) {
        weixin.share();
    }, false);

}, false);
