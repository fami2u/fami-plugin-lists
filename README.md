# fami cordova plugin lists
fami官方开发和维护的cordova插件，包括支付宝支付插件，分享插件，消息推送插件等，如果没有找到您需要的，请提交[ISSUE](https://github.com/fami2u/fami-plugin-lists/issues)给我们。
# 开发计划
- 支付插件
- [x] 支付宝支付插件
- [ ] 微信支付插件
- social插件
- [ ] 微博登录/分享插件
- [ ] 微信登录/分享插件
- 推送插件
- [ ] 极光推送插件
- [ ] 腾讯信鸽推送插件

# 如何使用
对于每一个插件，我们都会集成到`fami2u:cordova-plugin-lists`项目中，使用方式请参照这个例子。

# usage

- 下载插件源代码`git clone git@github.com:fami2u/cordova-plugin-alipay.git`
- 下载`fami-plugin-lists`用于集成插件 `git clone git@github.com:fami2u/fami-plugin-lists.git`
- 以上两个目录平级
- `cd fami-plugin-lists`
- 查看当前安装的插件 `cordova plugin list`
- 删除插件 `cordova plugin remove com.fami2u.plugin.*`
- 安装插件 cordova-plugin-* 使用命令  `cordova plugin add ../$plugin-dir` 
- 重新编译插件 `cordova build android||ios`

> warning:
> 插件每次修改后请先删除插件 -> 然后再次安装 -> 再次编译

# 加入我们
fork 然后提交PR 😊,请注明自己擅长的技术。
# BUGs?
请提交[ISSUE](https://github.com/fami2u/fami-plugin-lists/issues)
# 协议
[MIT](http://opensource.org/licenses/MIT)



