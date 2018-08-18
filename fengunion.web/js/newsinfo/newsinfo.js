$(function(){
	getNewsList();
});
//获取新闻资讯列表
function getNewsList(pageSize){
	/*var dd=s.replace(/<\/?.+?>/g,"");//去掉html的所有标签
	var dds=dd.replace(/ /g,"");//dds为得到后的内容*/
	//传页面显示的条数
	if(typeof(pageSize) == "undefined" || typeof(pageSize) == undefined || pageSize == "" || pageSize == null){
		pageSize = $("#pageSize").val();
	}else{
		var pageSizes = $("#pageSize").val();
		pageSize = parseInt(pageSizes)+parseInt(pageSize);
	}
	$(".new_right").empty();
	var newsStr="";

	var msg =
	{
		"currentPage": 1,
		"data": [],
		"pageSize": 1,
		"rows": [
			{
				"addedBy": 207,
				"addedByName": "融盈运营",
				"addedTime": "2017-10-24 16:42:38",
				"content": "<div class=\"ace-line gutter-author-159018 lineguid-Oj8KnfGDDJVxy19a locate text-indent\" id=\"magicdomid74\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">北京融盈科技发展有限公司（以下简称：融盈科技）经公司团队近四个月努力成功开发的集核心企业、链属企业、合作银行、清算系统等四大模块于一体的供应链金融服务平台于2017年12月26日正式上线。该平台命名为“融e汇”，后续将作为融盈科技专属服务平台。</span></span></span></span></span></div>\r\n\r\n<div id=\"magicdomid3\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"ace-line gutter-author-159018 lineguid-sPWuYHAAH3uS5xs7 locate text-indent\" id=\"magicdomid76\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">作为新产业链科技服务企业，融盈科技的使命是运用供应链数据科技服务助力中小微企业成长。当前北京、山西的公司已在稳健运作，新疆地区作为国家&ldquo;一带一路&rdquo;战略的核心区域之一，具有非常重要的区域性战略地位，此次融盈科技新疆分公司的成立也是本着助力当地中小微企业快速成长为目的，撬动区域经济的活力为己任。</span></span></span></span></div>\r\n\r\n<div id=\"magicdomid5\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"gutter-author-159018 lineguid-mpoSnWjPKOP8A11i locate text-indent\" id=\"magicdomid6\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">目前，新疆分公司已与新疆天富集团签署战略合作协议，公司业务与天富信息公司供应链金融平台也即将实现互通，届时，天富集团旗下水利水电公司、天富房产、物资公司等子公司将成为首批与我司展开合作的企业，连同乌鲁木齐银行一起开展供应链金融业务，旨在解决天富集团上游中小微供应商企业的融资问题；后续融盈将为兴江地区的上市公司及相关企业提供供应链金融服务，为区域经济做出贡献。融盈科技CEO刘源表示：&ldquo;新疆地区是国家&lsquo;一带一路&rsquo;战略的核心区域之一，我们致力于在国家战略背景下，秉持融盈科技一直以来以客户为中心的理念，为区域经济的发展添砖加瓦，我们有信心将我们的专业服务范围扩大至更多客户需要的地方。&rdquo;</span></span></span></span></div>\r\n",
				"cover": "/北京融盈科技发展有限公司新疆分公司正式成立/cover/Ivoqtimg(3).jpg",
				"createtime": "2017-10-24 16:42:38",
				"id": 136,
				"lastModifiedBy": 207,
				"lastModifiedByName": "融盈运营",
				"lastModifiedIp": "192.168.30.201",
				"lastModifiedTime": "2017-10-24 16:42:38",
				"offlineTime": null,
				"onlineTime": "2017-10-24 16:42:38",
				"releasetime": "2017-12-26 00:00:00",
				"status": 1,
				"title": "“融e汇“供应链金融服务平台开发上线",
				"updatetime": null,
				"valid": 1
			},
			{
				"addedBy": 207,
				"addedByName": "融盈运营",
				"addedTime": "2017-10-24 16:42:38",
				"content": "<div class=\"ace-line gutter-author-159018 lineguid-Oj8KnfGDDJVxy19a locate text-indent\" id=\"magicdomid74\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">经过双方充分沟通确定以供应链金融合作作为重点，融盈科技于2018年6月22日与上海银行天津分行正式签署了供应链金融合作协议，后续双方将重点围绕以中建、中铁等央企建筑企业为核心客户共同开展供应链金融业务。</span></span></span></span></span></div>\r\n\r\n<div id=\"magicdomid3\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"ace-line gutter-author-159018 lineguid-sPWuYHAAH3uS5xs7 locate text-indent\" id=\"magicdomid76\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">作为新产业链科技服务企业，融盈科技的使命是运用供应链数据科技服务助力中小微企业成长。当前北京、山西的公司已在稳健运作，新疆地区作为国家&ldquo;一带一路&rdquo;战略的核心区域之一，具有非常重要的区域性战略地位，此次融盈科技新疆分公司的成立也是本着助力当地中小微企业快速成长为目的，撬动区域经济的活力为己任。</span></span></span></span></div>\r\n\r\n<div id=\"magicdomid5\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"gutter-author-159018 lineguid-mpoSnWjPKOP8A11i locate text-indent\" id=\"magicdomid6\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">目前，新疆分公司已与新疆天富集团签署战略合作协议，公司业务与天富信息公司供应链金融平台也即将实现互通，届时，天富集团旗下水利水电公司、天富房产、物资公司等子公司将成为首批与我司展开合作的企业，连同乌鲁木齐银行一起开展供应链金融业务，旨在解决天富集团上游中小微供应商企业的融资问题；后续融盈将为兴江地区的上市公司及相关企业提供供应链金融服务，为区域经济做出贡献。融盈科技CEO刘源表示：&ldquo;新疆地区是国家&lsquo;一带一路&rsquo;战略的核心区域之一，我们致力于在国家战略背景下，秉持融盈科技一直以来以客户为中心的理念，为区域经济的发展添砖加瓦，我们有信心将我们的专业服务范围扩大至更多客户需要的地方。&rdquo;</span></span></span></span></div>\r\n",
				"cover": "/北京融盈科技发展有限公司新疆分公司正式成立/cover/Ivoqtimg(3).jpg",
				"createtime": "2017-10-24 16:42:38",
				"id": 136,
				"lastModifiedBy": 207,
				"lastModifiedByName": "融盈运营",
				"lastModifiedIp": "192.168.30.201",
				"lastModifiedTime": "2017-10-24 16:42:38",
				"offlineTime": null,
				"onlineTime": "2017-10-24 16:42:38",
				"releasetime": "2018-6-22 00:00:00",
				"status": 1,
				"title": "上海银行供应链金融合作协议签署",
				"updatetime": null,
				"valid": 1
			}

		],
		"total": 1
	};
        	var datas = msg.rows;
        	for(var i=0,l=datas.length;i<l;i++){
        		var newsId = datas[i].id;
        		window.sessionStorage.setItem(i,newsId);
        		var content = datas[i].content.replace(/<\/?.+?>/g,"");
        		newsStr+='<div class="news1">';
        			newsStr+='<img class="newimg" src="'+managePath+'/webNewsWebCtr/showNewsFile?filePath='+datas[i].cover.replace("融盈","蜂向")+'&newsTitle='+datas[i].title.replace("融盈","蜂向")+'&fileType=cover"/>';
        			newsStr+='<img class="arr" src="images/new_line.png"/>';
    				newsStr+='<a style="font-size:14px;color:#666;line-height:24px;">';
    					newsStr+='<h1>'+(datas[i].releasetime).substring(0,10)+'</h1>';
						newsStr+='<h3>'+datas[i].title+'</h3>';
						newsStr+='<p>'+content.length<150?content:content.substring(0,150)+'...</p>';
    				newsStr+='</a>';
        		newsStr+='</div>';
        	}
        	$(".new_right").append(newsStr);
        	$("#pageSize").val(pageSize);
        	if(msg.total <= 5 || pageSize >= msg.total){
        		$(".more").remove();
			}
			$(".more").remove();
}
