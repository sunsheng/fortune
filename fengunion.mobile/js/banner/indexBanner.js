// JavaScript Document
//访问官网首页进行展示banner  
/*
 * <ul id="bannerList" class="slides">
    	<li><a target="_blank" ><img src="images/banner.jpg" /></a></li>
    	<li><a target="_blank" ><img src="images/banner2.jpg" /></a></li>
    	${ctx}/banner/showBanner?filePath=${bannerDetail.filepath}
	</ul>
	<li>
                    <a href="supplyChainFinance.html"><img src="images/banner1.jpg" /></a>
                </li>
                <li>
                    <a href="financialBusiness.html"><img src="images/banner2.jpg" /></a>
                </li>
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
		if(res !=null){
			for(i=0;i<res.length;i++){
				if(i==0){
					ulBanner +='<li ><a target="_blank" href="financialBusiness.html"><img src="'+res[i].filepath+'" /></a></li>'
				}else if(i==1){
					ulBanner +='<li ><a target="_blank" href="supplyChainFinance.html"><img src="'+res[i].filepath+'" /></a></li>'
				}else{
					ulBanner +='<li ><a target="_blank" ><img src="'+res[i].filepath+'" /></a></li>'
					
				}
			}
		}
		else{
				layer.msg("轮播图为空");
		}
		$('ul.slides').html(ulBanner); 
		//启动轮播
		/*banner图*/
		$('.flexslider').flexslider({
				slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
				animationSpeed: 1000,
				direction: "horizontal",
				animation: "slide",
				animationLoop: true,
				pauseOnHover: true,
				directionNav: false
			});
	}
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
		"pageSize": 0,
		"rows": [
		],
		"total": 0
	};
	 var newsStr="";
	
	var datas = msg.rows;
	var size = datas.length>=4 ? 4 : datas.length;
	for(var i=0;i<size;i++){
		var newsId = datas[i].id;
		//window.sessionStorage.setItem(i,newsId);
		var content = datas[i].content.replace(/<\/?.+?>/g,"");
			newsStr+='<li class="clearfix">';
			// newsStr+='<a class="clearfix" href="informationDetail.html?'+newsId+'">';
			newsStr+='<img  src="'+managePath+'/webNewsWebCtr/showNewsFile?filePath='+datas[i].cover.replace("融盈","蜂向")+'&newsTitle='+datas[i].title.replace("融盈","蜂向")+'&fileType=cover"/>';
			newsStr+='<div class="indexlistCont">';
			newsStr+='<h3 class="conTit">'+datas[i].title+'</h3>';
			newsStr+='<p style="color:#a8a8a8;margin-top:10px;">'+datas[i].releasetime.substring(0,10)+'</p>';
			newsStr+='</div>';
			newsStr+='</a>';
			newsStr+='</li>';
	}
	$(".zxmain").html(newsStr);
		
	
}