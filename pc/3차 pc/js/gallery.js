$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("static");
		$(".mobile").addClass("active");
	});
	$(".close").click(function(){
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
	});

	var n=0;
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();
		// fixed menu
		if(t > 80){
			$(".fixed_menu_zone").addClass("show");
		}
		else{
			$(".fixed_menu_zone").removeClass("show");
		}

		// section
		if(t <$("#service").offset().top){
			n=0;
		}
		else if(t <$("#portfolio").offset().top-200){
			n=1;
		}
		else if(t <$("#about").offset().top-200){
			n=2;
		}
		else if(t <$("#team").offset().top-200){
			n=3;
		}
		else if(t <$("#contact").offset().top-200){
			n=4;

			if(t == $(document).height()-$(window).height()){
				n=5;
			}
		}
		else {
			n=5;
		}

		$("section").eq(n-1).find(".title").addClass("active");
		$("section").eq(n-1).find(".content").addClass("active");
		$(".menu_zone li").removeClass("active");
		$(".menu_zone li").eq(n).addClass("active");
		$("#fixed_GNB li").removeClass("active");
		$("#fixed_GNB li").eq(n).addClass("active");
	});
	$(window).trigger("scroll");

	var post=0;

	$(".menu_zone li, #fixed_GNB li, .mobile li").click(function(e){
		if($("html").is(":animated")) return;

		e.preventDefault();
		n=$(this).index();
		
		if(n == 0){
			pos=0;
		}
		else{
			pos=$("section").eq(n-1).offset().top;
		}

		$("html").animate({scrollTop:pos}, 500);
	});
});