// JavaScript Document

$(function(){
		$(window).bind("scroll", function () {  
			var sTop = $(window).scrollTop();  
			if (sTop >=500) { 
				$(".list1").addClass("a-list1");
				$(".list2").addClass("a-list2");
				$(".list3").addClass("a-list3");
				$(".dataright ul li").css("display","block");
			}  
			if (sTop >= 1100) {  
				$(".ebankimg1").addClass("a-bounceinL");
				$(".ebankimg6").addClass("a-bounceinR");
				$(".ebankimg2,.ebankimg7").addClass("a-list4");
				$(".ebankimg3").addClass("a-fadeinB");
				$(".ebankimg4,.ebankimg8").addClass("a-fadein1");
				$(".showleft span,.ebankimg5,.showright span").css("opacity","1");
			} 
			if (sTop >= 1700) {  
				$(".systemimg1").addClass("a-bounceinL");
				$(".systemimg5").addClass("a-bounceinR");
				$(".systemimg2").addClass("a-list4");
				$(".systemimg3").addClass("a-fadeinB");
				$(".systemimg4 img").addClass("rota");
				$(".systemright span").css("opacity","1");
			}  
		});  
	})