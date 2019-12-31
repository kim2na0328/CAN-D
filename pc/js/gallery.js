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
			n=0;
		}
		else if(t <$("#about").offset().top-200){
			n=1;
		}
		else if(t <$("#team").offset().top-200){
			n=2;
		}
		else if(t <$("#contact").offset().top-200){
			n=3;

			if(t == $(document).height()-$(window).height()){
				n=4;
			}
		}
		else {
			n=4;
		}

		$("section").eq(n).find(".title").addClass("active");
		$("section").eq(n).find(".content").addClass("active");
	});
});
