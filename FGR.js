var body = $response.body;
//我们就没有进行请求链接匹配了
var obj = JSON.parse(body);
//修改
 obj = JSON.parse(body);
 obj = JSON.parse($response.body);
obj.data.ITEM_ID = "yubi10006";
body = JSON.stringify(obj);
$done({body});
/*
参数说明
title: 主标题
subtitle: 副标题
body: 消息正文
*/

$notification.post("Storm Sniffer","Network Debug Tool","最后的荣光充值修改成功!!!")

