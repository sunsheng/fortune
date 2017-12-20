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
			"filepath": "/resources/website/banner/交易银行banner/Qyfjbanner.jpg",
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
			"filepath": "/resources/website/banner/供应链金融banner/oKOPbanner2.jpg",
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
					ulBanner +='<li ><a target="_blank" href="financialBusiness.html"><img src="'+managePath+"/webBanner/showBanner?filePath="+res[i].filepath+'" /></a></li>'
				}else if(i==1){
					ulBanner +='<li ><a target="_blank" href="supplyChainFinance.html"><img src="'+managePath+"/webBanner/showBanner?filePath="+res[i].filepath+'" /></a></li>'
				}else{
					ulBanner +='<li ><a target="_blank" ><img src="'+managePath+"/webBanner/showBanner?filePath="+res[i].filepath+'" /></a></li>'
					
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
//蜂向资讯动态加载
//获取新闻资讯列表
function getNewsList(){
	/*var dd=s.replace(/<\/?.+?>/g,"");//去掉html的所有标签
		var dds=dd.replace(/ /g,"");//dds为得到后的内容*/
	var msg = {"currentPage":1,"data":[],"pageSize":4,"rows":[{"addedBy":207,"addedByName":"蜂向运营","addedTime":"2017-10-24 17:34:23","content":"<p><span style=\"font-size:10px\"><strong>十九大供给侧结构性改革指示，在传统企业与科技公司之间开启了一次智能革命与新经济升级的指引性契机。</strong></span></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/Ycny1.jpg\" style=\"height:399px; width:600px\" /></p>\r\n\r\n<p><span style=\"font-size:10px\">为响应我党智慧供应链体系指导思想，推动供给侧结构性改革，提升企业经济竞争力。10月18日，在十九大顺利召开之际，北京蜂向科技有限公司协同新疆天富集团有限责任公司、乌鲁木齐银行签订了新三方战略合作协议。</span></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/tsBx2.jpg\" style=\"height:402px; width:600px\" /></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"color:#7f8c8d\">蜂向科技副总裁李鹏（左）、新疆天富董事长刘伟（中）与乌鲁木齐银行行长李明利（右）共同签署新战略合作协议</span></p>\r\n\r\n<p><span style=\"font-size:10px\">此次合作是三方基于共同业务需求的进一步合作，目的为加强【新疆天富供应链金融服务平台】的供应链金融业务进展进行持续性创新。</span></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/AyVT3.jpg\" style=\"height:389px; width:600px\" /></p>\r\n\r\n<p><span style=\"font-size:10px\">乌鲁木齐银行行长李明利表示，三方在合作中均获得了难得的发展机遇，此次合作目的之一是解决供应链融资的问题，而更重要的是通过合作在新领域进行功能化创新，使天富集团与乌鲁木齐银行能够更便捷地为老百姓提供服务。最后，祝福新疆天富集团、乌鲁木齐银行、蜂向科技合作项目中的各位领导与员工在事业、工作、生活中蒸蒸日上，在合作中取得更大的收获。</span></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/eLxy4.jpg\" style=\"height:399px; width:600px\" /></p>\r\n\r\n<p><span style=\"font-size:10px\">天富集团董事长刘伟表示此次合作项目中乌鲁木齐银行具备灵活机动的业务优势，天富与乌行均从中获得了很大的收益，蜂向科技通过技术支持为双方的项目合作引入了新的供应链金融理念，听过这一理念的人很多，但并不是所有人都真正有机会触及这一概念，只有通过实战才能真切地感受到什么是供应链金融。天富集团在局部业务中作过一些尝试，并为多家优质合作供应商推介了平台金融产品，实现产业链共赢。此次在十九大顺利召开之际三方签约拉开了新的合作篇章，按总书记的讲话内容这是&ldquo;中国特色的社会主义新起点&rdquo;的开始。今天的签约对三方来说也是个新起点，我们用实际行动喜迎十九大的顺利召开，这是创新、协调、绿色、开放的合作共赢，预祝我们的合作能够芝麻开花节节高，从起点实现大跨越。</span></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/AOQM5.jpg\" /></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"color:#7f8c8d\">三方合作项目签约人员合影留念</span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n","cover":"/新疆天富与乌鲁木齐银行共同深化新经济改革之道/cover/mHyd签约.jpg","createtime":"2017-10-24 17:34:23","id":139,"lastModifiedBy":207,"lastModifiedByName":"蜂向运营","lastModifiedIp":"192.168.30.201","lastModifiedTime":"2017-10-24 17:34:23","offlineTime":null,"onlineTime":"2017-10-24 17:34:23","releasetime":"2017-10-18 00:00:00","status":1,"title":"新疆天富与乌鲁木齐银行共同深化新经济改革之道","updatetime":"2017-10-24 17:35:39","valid":1},{"addedBy":207,"addedByName":"蜂向运营","addedTime":"2017-10-11 14:33:04","content":"<p>2017年10月10日，北京蜂向科技有限公司荣获权威机构北京软件和信息服务业协会授予的软件企业认证称号与软件产品认证称号，标志着蜂向科技已正式步入国家&ldquo;双软企业&rdquo;行列，企业研发创新工作再上新台阶。</p>\r\n\r\n<p>对传统企业来说，这是距离未来最近的时代，也是工业运营成本最难把控的时代，众多产业巨头坐拥海量业务场景却难挽业绩下滑的颓势。中国制造2025亟待运用商业升级来优化经营、提升效率、减少能耗、控制风险。在蜂向科技自成立之初，我们就践行用创新型专利技术与工业大数据来优化中国产业链，这使得我们更重视对软件著作权（技术专利）的战略维护。蜂向科技被授予&ldquo;软件企业认证&rdquo;称号，是国家对蜂向研发实力和软件产品实力的充分认可，是蜂向科技全体员工奋力拼搏所积累出的结果，同时也是公司众多技术专利带来的成就导向。</p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/MVXF软件产品证书.jpg\" /></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/jpbI软件企业证书.jpg\" /></p>\r\n\r\n<p>知识产权是蜂向发展的&ldquo;无形资产&rdquo;，公司最新知识产权数据显示，截至2017年10月11日，蜂向科技已获得授权的各类知识产权共计25项，其中拥有软件著作权21项，质量管理资质认证2项，商标权2项。这些创新工作和研发实力使供应链平台前沿技术在传统产业与金融领域落地生根，并优化了整体产业链运营架构，在部分供应链细分市场占得了发展先机，获得了电力、商超、医药、农业等行业核心企业的高度认可和大力支持。</p>\r\n\r\n<p><strong>关于&ldquo;双软认证&rdquo;颁布机构&mdash;&mdash;北京软件和信息服务业协会</strong><br />\r\n北京软件和信息服务业协会（原北京软件行业协会）简称北京软协，成立于1986年10月21日，是经北京市社会团体管理办公室批准注册，业务主管单位为北京市经济和信息化委员会，有着近三十年悠久历史影响和广泛会员基础的软件产业社团组织。北京软协以北京市软件和信息服务业企业和企业家为主体，为2000多家在京软件信息服务企业提供价值服务。</p>\r\n","cover":"/蜂向科技荣获“双软认证”/cover/oChy软件企业证书.jpg","createtime":"2017-10-11 14:33:04","id":135,"lastModifiedBy":207,"lastModifiedByName":"蜂向运营","lastModifiedIp":"192.168.30.201","lastModifiedTime":"2017-10-11 14:33:04","offlineTime":null,"onlineTime":"2017-10-11 14:33:04","releasetime":"2017-10-11 00:00:00","status":1,"title":"蜂向科技荣获“双软认证”","updatetime":"2017-10-11 14:35:48","valid":1},{"addedBy":207,"addedByName":"蜂向运营","addedTime":"2017-09-30 16:29:01","content":"<p><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,\"><span style=\"background-color:#ffffff\">2017年9月30日，由北京蜂向科技有限公司与山西漳泽电力股份有限公司合资成立的</span></span></span></span><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,\"><span style=\"background-color:#ffffff\"><span style=\"font-size:medium\">山西漳泽云电信息科技有限公司（以下简称：漳泽云电）成功实现了在漳泽云电供应链金融平台线上操作塔山电厂和候马电厂的业务落地，这是漳泽云电供应链金融平台上线以来，斩获的又一里程碑式的进展，同时也刷新了漳泽云电单日商票保贴业务最大额&mdash;&mdash;3200万元。这一进展开启了漳电南北分、子公司业务的同时落地，也为云电业务的全面发展打下了坚实的基础。</span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:center\"><span style=\"font-size:14.6667px\"><span style=\"color:#333333\"><span style=\"font-family:-apple-system,BlinkMacSystemFont,\"><span style=\"background-color:#ffffff\"><span style=\"font-size:medium\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/saje微信图片_20170930144843.jpg\" style=\"height:338px; width:600px\" /></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/hFDk微信图片_20170930144835.jpg\" /></p>\r\n","cover":"/漳泽云电塔山电厂与候马电厂大额商票保贴业务成功落地/cover/JNLz微信图片_20170930144835.jpg","createtime":"2017-09-30 16:29:01","id":133,"lastModifiedBy":207,"lastModifiedByName":"蜂向运营","lastModifiedIp":"192.168.30.201","lastModifiedTime":"2017-09-30 16:29:01","offlineTime":null,"onlineTime":"2017-09-30 16:29:01","releasetime":"2017-09-30 00:00:00","status":1,"title":"合资公司漳泽云电大额商票保贴业务成功落地","updatetime":"2017-10-25 21:06:23","valid":1},{"addedBy":207,"addedByName":"蜂向运营","addedTime":"2017-09-30 19:15:40","content":"<p>9月29日，由北京蜂向科技有限公司与特变电工股份有限公司合作搭建的特变电工供应链金融平台（scf.tbea.com）正式部署上线。并在29日当天核心企业成功与供应商（骏瑞众研）在平台开出第一笔应付账款的电子商票，供应商也在当天成功签收电子商票，并申请贴现。次日下午18点30分，两家供应商的贴现款同时到账，这标志着蜂向科技与合作银行昆仑银行的半线上电票贴现业务成功对接，真正做到供应商T+1天融资到账，解决了供应商融资难、融资贵的问题，进而提升整条供应链在行业中的竞争力。</p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/ckTD特变电工首页927.jpg\" style=\"height:407px; width:600px\" /></p>\r\n\r\n<p>特变电工供应链金融服务平台是为中小企业与金融机构建立快捷高效的绿色融资通道，创新性的建立了纯数据信用的新型数据融资服务，将企业的数据转化为资产，优化企业资金结构，提升供应链竞争力。让供应商与特变电工核心企业紧密合作，共同发展，致力于缓解供应商伙伴一直面临的融资难、融资贵问题，全面提升供应链整体竞争力的专属服务平台。</p>\r\n\r\n<p style=\"text-align:center\"><img alt=\"\" src=\"http://www.fengunion.com:80/fengunion.wms/resources/website/newsinfo/content/fEkP微信图片_20170930181754.png\" style=\"height:215px; width:600px\" /></p>\r\n","cover":"/特变电工供应链金融平台成功上线/cover/HGgU特变电工首页927.jpg","createtime":"2017-09-30 19:15:40","id":134,"lastModifiedBy":207,"lastModifiedByName":"蜂向运营","lastModifiedIp":"192.168.30.201","lastModifiedTime":"2017-09-30 19:15:40","offlineTime":null,"onlineTime":"2017-09-30 19:15:40","releasetime":"2017-09-30 00:00:00","status":1,"title":"特变电工供应链协同平台成功上线","updatetime":"2017-10-25 21:07:36","valid":1}],"total":25};
	var newsStr="";
	
	var datas = msg.rows;
	var size = datas.length>=4 ? 4 : datas.length;
	for(var i=0;i<size;i++){
		var newsId = datas[i].id;
		//window.sessionStorage.setItem(i,newsId);
		var content = datas[i].content.replace(/<\/?.+?>/g,"");
			newsStr+='<li class="clearfix">';
			// newsStr+='<a class="clearfix" href="informationDetail.html?'+newsId+'">';
			newsStr+='<img  src="'+managePath+'/webNewsWebCtr/showNewsFile?filePath='+datas[i].cover+'&newsTitle='+datas[i].title+'&fileType=cover"/>';
			newsStr+='<div class="indexlistCont">';
			newsStr+='<h3 class="conTit">'+datas[i].title+'</h3>';
			newsStr+='<p style="color:#a8a8a8;margin-top:10px;">'+datas[i].releasetime.substring(0,10)+'</p>';
			newsStr+='</div>';
			newsStr+='</a>';
			newsStr+='</li>';
	}
	$(".zxmain").html(newsStr);
		
	
}