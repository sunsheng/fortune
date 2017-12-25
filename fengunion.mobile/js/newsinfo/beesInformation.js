$(function(){
	//获取新闻列表
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
	var newsStr="";
	$(".indexList").empty();
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
				"content": "<div class=\"ace-line gutter-author-159018 lineguid-Oj8KnfGDDJVxy19a locate text-indent\" id=\"magicdomid74\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">北京融盈科技有限公司（以下简称：融盈科技）新疆分公司于2017年8月1日正式成立。这是融盈科技继去年9月山西分公司开业之后的第二站布局，也是公司在未来国内产业链科技市场的进一步拓展。该分公司的成立为融盈在西北地区的业务发展注入新的活力，使融盈能<span style=\"font-size:11pt\"><span style=\"font-size:medium\">为新疆客户及合作伙伴提供更及时、更周到、更全面的服务。</span></span></span></span></span></span></div>\r\n\r\n<div id=\"magicdomid3\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"ace-line gutter-author-159018 lineguid-sPWuYHAAH3uS5xs7 locate text-indent\" id=\"magicdomid76\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">作为新产业链科技服务企业，融盈科技的使命是运用供应链数据科技服务助力中小微企业成长。当前北京、山西的公司已在稳健运作，新疆地区作为国家&ldquo;一带一路&rdquo;战略的核心区域之一，具有非常重要的区域性战略地位，此次融盈科技新疆分公司的成立也是本着助力当地中小微企业快速成长为目的，撬动区域经济的活力为己任。</span></span></span></span></div>\r\n\r\n<div id=\"magicdomid5\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"gutter-author-159018 lineguid-mpoSnWjPKOP8A11i locate text-indent\" id=\"magicdomid6\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">目前，新疆分公司已与新疆天富集团签署战略合作协议，公司业务与天富信息公司供应链金融平台也即将实现互通，届时，天富集团旗下水利水电公司、天富房产、物资公司等子公司将成为首批与我司展开合作的企业，连同乌鲁木齐银行一起开展供应链金融业务，旨在解决天富集团上游中小微供应商企业的融资问题；后续融盈将为兴江地区的上市公司及相关企业提供供应链金融服务，为区域经济做出贡献。融盈科技CEO刘源表示：&ldquo;新疆地区是国家&lsquo;一带一路&rsquo;战略的核心区域之一，我们致力于在国家战略背景下，秉持融盈科技一直以来以客户为中心的理念，为区域经济的发展添砖加瓦，我们有信心将我们的专业服务范围扩大至更多客户需要的地方。&rdquo;</span></span></span></span></div>\r\n",
				"cover": "/北京融盈科技有限公司新疆分公司正式成立/cover/Ivoqtimg(3).jpg",
				"createtime": "2017-10-24 16:42:38",
				"id": 136,
				"lastModifiedBy": 207,
				"lastModifiedByName": "融盈运营",
				"lastModifiedIp": "192.168.30.201",
				"lastModifiedTime": "2017-10-24 16:42:38",
				"offlineTime": null,
				"onlineTime": "2017-10-24 16:42:38",
				"releasetime": "2017-08-01 00:00:00",
				"status": 1,
				"title": "北京融盈科技有限公司新疆分公司正式成立",
				"updatetime": null,
				"valid": 1
			}
		],
		"total": 1
	};
	var datas = msg.rows;
	newsStr+='<h3 class="tit"><i class="icon"><img src="images/icon1.jpg" alt=""></i>融盈资讯</h3>';
	for(var i=0,l=datas.length;i<l;i++){
		var newsId = datas[i].id;
		window.sessionStorage.setItem(i,newsId);
		newsStr+='<li class="clearfix">';
			// newsStr+='<a href="informationDetail.html?'+newsId+'">';
				newsStr+='<img alt="" src="'+managePath+'/webNewsWebCtr/showNewsFile?filePath='+datas[i].cover.replace("融盈","蜂向")+'&newsTitle='+datas[i].title.replace("融盈","蜂向")+'&fileType=cover">';
				newsStr+='<div class="indexlistCont">';
					newsStr+='<h3 class="conTit">'+datas[i].title+'</h3>';
					newsStr+='<p style="color:#a8a8a8;margin-top:10px;" class="time">'+(datas[i].releasetime).substring(0,10)+'</p>';
				newsStr+='</div>';
			newsStr+='</a>';
		newsStr+='</li>';
	}
	$(".indexList").append(newsStr);
	$("#pageSize").val(pageSize);
	if(msg.total <= 5 || pageSize >= msg.total){
		$(".more").remove();
	}
	$(".more").remove();
}
