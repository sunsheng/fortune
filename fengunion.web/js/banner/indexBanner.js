// JavaScript Document
//访问官网首页进行展示banner  
/*
 * <ul id="bannerList" class="slides">
    	<li><a target="_blank" ><img src="images/banner.jpg" /></a></li>
    	<li><a target="_blank" ><img src="images/banner2.jpg" /></a></li>
    	${ctx}/banner/showBanner?filePath=${bannerDetail.filepath}
	</ul>
 * */
$(function(){
	//banner轮播图动态加载
	var res = 
	[
		{
			"addedBy": 1,
			"addedByName": "运营01",
			"addedTime": "2017-08-16 17:35:59",
			"createtime": "2017-08-16 17:35:59",
			"filepath": "./images/Qyfjbanner.jpg",
			"id": 129,
			"lastModifiedBy": 1,
			"lastModifiedByName": "运营01",
			"lastModifiedIp": "192.168.1.243",
			"lastModifiedTime": "2017-08-16 17:35:59",
			"name": "交易银行banner",
			"offlineTime": null,
			"onlineTime": "2017-08-16 17:35:59",
			"positionType": 1,
			"profiles": "交易银行",
			"showorder": 1,
			"status": 1,
			"updatetime": "2017-08-16 17:35:59",
			"valid": 1
		},
		{
			"addedBy": 1,
			"addedByName": "运营01",
			"addedTime": "2017-08-16 17:36:40",
			"createtime": "2017-08-16 17:36:40",
			"filepath": "./images/oKOPbanner2.jpg",
			"id": 130,
			"lastModifiedBy": 1,
			"lastModifiedByName": "运营01",
			"lastModifiedIp": "192.168.1.243",
			"lastModifiedTime": "2017-08-16 17:36:40",
			"name": "供应链金融banner",
			"offlineTime": null,
			"onlineTime": "2017-08-16 17:36:40",
			"positionType": 1,
			"profiles": "供应链金融展示图片",
			"showorder": 2,
			"status": 1,
			"updatetime": "2017-08-16 17:36:40",
			"valid": 1
		}
	];
	function success(res) {
		var ulBanner = "";
		for(i=0;i<res.length;i++){
			ulBanner +='<li ><a target="_blank" ><img src="'+res[i].filepath+'" /></a></li>'
		}
		$('ul.slides').html(ulBanner); 
		//启动轮播
		$('.flexslider').flexslider({
			directionNav: true,
			pauseOnAction: false
		});
	}
	$.ajax({
		url : managePath+"/webBanner/getIndexBanner",
		type : "post",
		data : {positionType:1},
		dataType : "jsonp",
		success : success,
		error : function (req, status, err) {
			// layer.msg("出错了");
		}
	});
	success(res);
	getNewsList();
	
})
//融盈资讯动态加载
//获取新闻资讯列表
function getNewsList(){
	/*var dd=s.replace(/<\/?.+?>/g,"");//去掉html的所有标签
		var dds=dd.replace(/ /g,"");//dds为得到后的内容*/
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
				"content": "<div class=\"ace-line gutter-author-159018 lineguid-Oj8KnfGDDJVxy19a locate text-indent\" id=\"magicdomid74\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">北京融盈科技发展有限公司（以下简称：融盈科技）新疆分公司于2017年8月1日正式成立。这是融盈科技继去年9月山西分公司开业之后的第二站布局，也是公司在未来国内产业链科技市场的进一步拓展。该分公司的成立为融盈在西北地区的业务发展注入新的活力，使融盈能<span style=\"font-size:11pt\"><span style=\"font-size:medium\">为新疆客户及合作伙伴提供更及时、更周到、更全面的服务。</span></span></span></span></span></span></div>\r\n\r\n<div id=\"magicdomid3\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"ace-line gutter-author-159018 lineguid-sPWuYHAAH3uS5xs7 locate text-indent\" id=\"magicdomid76\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">作为新产业链科技服务企业，融盈科技的使命是运用供应链数据科技服务助力中小微企业成长。当前北京、山西的公司已在稳健运作，新疆地区作为国家&ldquo;一带一路&rdquo;战略的核心区域之一，具有非常重要的区域性战略地位，此次融盈科技新疆分公司的成立也是本着助力当地中小微企业快速成长为目的，撬动区域经济的活力为己任。</span></span></span></span></div>\r\n\r\n<div id=\"magicdomid5\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\">&nbsp;</div>\r\n\r\n<div class=\"gutter-author-159018 lineguid-mpoSnWjPKOP8A11i locate text-indent\" id=\"magicdomid6\" style=\"-webkit-text-stroke-width:0px; border-left:3px solid transparent; padding:0px 100px; text-align:start\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,&quot;PingFang SC&quot;,Helvetica,Tahoma,Arial,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;\\\\5FAE软雅黑&quot;,SimSun,&quot;\\\\5B8B体&quot;,Heiti,&quot;\\\\9ED1体&quot;,sans-serif\"><span style=\"background-color:#ffffff\">目前，新疆分公司已与新疆天富集团签署战略合作协议，公司业务与天富信息公司供应链金融平台也即将实现互通，届时，天富集团旗下水利水电公司、天富房产、物资公司等子公司将成为首批与我司展开合作的企业，连同乌鲁木齐银行一起开展供应链金融业务，旨在解决天富集团上游中小微供应商企业的融资问题；后续融盈将为兴江地区的上市公司及相关企业提供供应链金融服务，为区域经济做出贡献。融盈科技CEO刘源表示：&ldquo;新疆地区是国家&lsquo;一带一路&rsquo;战略的核心区域之一，我们致力于在国家战略背景下，秉持融盈科技一直以来以客户为中心的理念，为区域经济的发展添砖加瓦，我们有信心将我们的专业服务范围扩大至更多客户需要的地方。&rdquo;</span></span></span></span></div>\r\n",
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
				"title": "北京融盈科技发展有限公司“融e汇“供应链金融服务平台开发上线",
				"updatetime": null,
				"valid": 1
			}
		],
		"total": 1
	};
	
	
	
	var newsStr="";

	var datas = msg.rows;
	var size = datas.length>=4 ? 4 : datas.length;
	for(var i=0;i<size;i++){
		var newsId = datas[i].id;
		window.sessionStorage.setItem(i,newsId);
		var content = datas[i].content.replace(/<\/?.+?>/g,"");
		if(i==0){
			newsStr+='<div class="zxmain_top clearfix">';
			newsStr+='<img class="newimg" src='+managePath+'/webNewsWebCtr/showNewsFile?filePath='+datas[i].cover.replace("融盈","蜂向")+'&newsTitle='+datas[i].title.replace("融盈","蜂向")+'&fileType=cover"/>';
			newsStr+='<div class="zxmain_right">';
			// newsStr+='<a href="newsDetail.html?'+i+'">';
			newsStr+='<h3><span>'+datas[i].title+'</span></h3>';
			newsStr+='<p>'+(content.length<40?content:content.substring(0,40))+'...</p>';
			newsStr+='<em>'+datas[i].releasetime.substring(0,10)+'</em>';
			newsStr+='</a>';
			newsStr+='</div>';
			newsStr+='</div>';
			newsStr+='<div class="zx_main">';
			newsStr+='<ul>';
		}else{
			var title = datas[i].title;
			newsStr+='<li>';
			newsStr+='<a class="clearfix" >';
			newsStr+='<i></i>';
			newsStr+='<p>'+(title.length<40?title:title.substring(0,40))+'</p>';
			newsStr+='<em>'+datas[i].releasetime.substring(0,10)+'</em>';
			newsStr+='</a>';
			newsStr+='</li>';
			}
	}
	newsStr+='</ul>';
	newsStr+='</div>';
	$(".zxmain").html(newsStr);
		
	
}